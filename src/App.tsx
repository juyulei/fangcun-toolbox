"use client";

import { Component, useCallback, useEffect, useMemo, useRef, useState, type ErrorInfo, type ReactNode } from "react";
import JSZip from "jszip";
import { ThinkingOrb } from "thinking-orbs";

class OrbBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("Animated brand orb unavailable", error, info.componentStack);
  }

  render() {
    return this.state.failed ? <span className="brand-orb-fallback" /> : this.props.children;
  }
}

function BrandOrb() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <span className="brand-orb" aria-hidden="true">
      <span className="brand-orb-fallback" />
      {mounted && (
        <OrbBoundary>
          <ThinkingOrb state="solving" size={64} theme="dark" speed={0.82} />
        </OrbBoundary>
      )}
    </span>
  );
}

type Direction = "vertical" | "horizontal";
type OutputFormat = "png" | "jpeg" | "webp";
type ToolGlyph = "split" | "pdf" | "compress" | "remove-bg" | "rename" | "search" | "upload";

function ToolIcon({ type }: { type: ToolGlyph }) {
  if (type === "split" || type === "pdf" || type === "compress" || type === "remove-bg" || type === "rename") {
    return <img className="tool-asset-icon" src={`/fangcun-toolbox/tool-${type}.svg`} alt="" aria-hidden="true" />;
  }
  return <span className={`tool-glyph glyph-${type}`} aria-hidden="true"><i /><i /><em /></span>;
}

type ImageItem = {
  id: string;
  file: File;
  thumbnailUrl: string;
  width: number;
  height: number;
};

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/bmp"];

type OutputDirectoryHandle = {
  name: string;
  getFileHandle: (name: string, options: { create: true }) => Promise<{
    createWritable: () => Promise<{
      write: (data: Blob) => Promise<void>;
      close: () => Promise<void>;
    }>;
  }>;
};

type OutputDirectoryPicker = (options: {
  mode: "readwrite";
  id: string;
  startIn: "downloads";
}) => Promise<OutputDirectoryHandle>;

function getOutputDirectoryPicker() {
  return (window as unknown as { showDirectoryPicker?: OutputDirectoryPicker }).showDirectoryPicker;
}

const OUTPUT_FOLDER_TIP = "请选择普通子文件夹；不要选择磁盘根目录或系统目录。也可以直接下载一个 ZIP。";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function baseName(name: string) {
  return name.replace(/\.[^.]+$/, "");
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("图片导出失败"))), type, quality);
  });
}

async function restoreLightForeground(original: File, removed: Blob) {
  const [sourceBitmap, maskBitmap] = await Promise.all([
    createImageBitmap(original, { imageOrientation: "from-image" }),
    createImageBitmap(removed),
  ]);
  try {
    const width = sourceBitmap.width;
    const height = sourceBitmap.height;
    const sourceCanvas = document.createElement("canvas");
    const maskCanvas = document.createElement("canvas");
    sourceCanvas.width = maskCanvas.width = width;
    sourceCanvas.height = maskCanvas.height = height;
    const sourceContext = sourceCanvas.getContext("2d", { willReadFrequently: true });
    const maskContext = maskCanvas.getContext("2d", { willReadFrequently: true });
    if (!sourceContext || !maskContext) return { blob: removed, enhanced: false };
    sourceContext.drawImage(sourceBitmap, 0, 0);
    maskContext.drawImage(maskBitmap, 0, 0, width, height);
    const sourcePixels = sourceContext.getImageData(0, 0, width, height);
    const maskPixels = maskContext.getImageData(0, 0, width, height);
    const coverageStep = Math.max(1, Math.floor(Math.sqrt((width * height) / 120000)));
    let maskVisibleSamples = 0;
    let maskSamples = 0;
    for (let y = 0; y < height; y += coverageStep) {
      for (let x = 0; x < width; x += coverageStep) {
        if (maskPixels.data[(y * width + x) * 4 + 3] >= 20) maskVisibleSamples += 1;
        maskSamples += 1;
      }
    }
    const maskCoverage = maskSamples ? maskVisibleSamples / maskSamples : 0;
    const bins = new Map<string, { count: number; r: number; g: number; b: number }>();
    const brightNeutralEdge: Array<{ r: number; g: number; b: number; lightness: number }> = [];
    let sampleCount = 0;
    const step = Math.max(1, Math.floor((width + height) / 1200));
    const sample = (x: number, y: number) => {
      const offset = (y * width + x) * 4;
      const r = sourcePixels.data[offset];
      const g = sourcePixels.data[offset + 1];
      const b = sourcePixels.data[offset + 2];
      const lightness = r * 0.299 + g * 0.587 + b * 0.114;
      const chroma = Math.max(r, g, b) - Math.min(r, g, b);
      if (lightness >= 182 && chroma <= 42) brightNeutralEdge.push({ r, g, b, lightness });
      const key = `${r >> 4}-${g >> 4}-${b >> 4}`;
      const current = bins.get(key) ?? { count: 0, r: 0, g: 0, b: 0 };
      current.count += 1;
      current.r += r;
      current.g += g;
      current.b += b;
      bins.set(key, current);
      sampleCount += 1;
    };
    for (let x = 0; x < width; x += step) { sample(x, 0); sample(x, height - 1); }
    for (let y = step; y < height - step; y += step) { sample(0, y); sample(width - 1, y); }
    const dominant = [...bins.values()].sort((a, b) => b.count - a.count)[0];
    const dominantIsReliable = Boolean(dominant && dominant.count / sampleCount >= 0.58);
    const paperEdgeIsReliable = brightNeutralEdge.length / sampleCount >= 0.2;
    if (!dominantIsReliable && !paperEdgeIsReliable) return { blob: removed, enhanced: false, coverage: maskCoverage };
    let background: { r: number; g: number; b: number };
    if (dominantIsReliable && dominant) {
      background = {
        r: dominant.r / dominant.count,
        g: dominant.g / dominant.count,
        b: dominant.b / dominant.count,
      };
    } else {
      // Photos of drawings often contain shadows, tape or a desk along the edge,
      // so there is no single dominant RGB bin. The brighter neutral edge pixels
      // still provide a stable estimate of the paper colour.
      brightNeutralEdge.sort((a, b) => b.lightness - a.lightness);
      const paperSamples = brightNeutralEdge.slice(0, Math.max(12, Math.ceil(brightNeutralEdge.length * 0.58)));
      background = paperSamples.reduce((total, pixel) => ({
        r: total.r + pixel.r / paperSamples.length,
        g: total.g + pixel.g / paperSamples.length,
        b: total.b + pixel.b / paperSamples.length,
      }), { r: 0, g: 0, b: 0 });
    }
    const brightness = background.r * 0.299 + background.g * 0.587 + background.b * 0.114;
    const chroma = Math.max(background.r, background.g, background.b) - Math.min(background.r, background.g, background.b);
    if (brightness < 182 || chroma > 42) return { blob: removed, enhanced: false, coverage: maskCoverage };
    const smoothstep = (value: number) => {
      const t = Math.min(1, Math.max(0, (value - 14) / 40));
      return t * t * (3 - 2 * t);
    };
    let enclosedSketchArea: { data: Uint8Array; width: number; height: number } | null = null;
    if (maskCoverage < 0.02 && paperEdgeIsReliable) {
      // A segmentation model often sees pencil drawings as empty paper. Build a
      // small contour map, close short gaps in the strokes, then preserve the
      // enclosed light areas as part of the drawing instead of punching holes
      // through highlights on the face, neck and plinth.
      const gridScale = Math.min(1, 360 / Math.max(width, height));
      const gridWidth = Math.max(32, Math.round(width * gridScale));
      const gridHeight = Math.max(32, Math.round(height * gridScale));
      let barrier = new Uint8Array(gridWidth * gridHeight);
      for (let gy = 0; gy < gridHeight; gy += 1) {
        const sourceY = Math.min(height - 1, Math.floor(((gy + 0.5) / gridHeight) * height));
        for (let gx = 0; gx < gridWidth; gx += 1) {
          const sourceX = Math.min(width - 1, Math.floor(((gx + 0.5) / gridWidth) * width));
          const offset = (sourceY * width + sourceX) * 4;
          const dr = sourcePixels.data[offset] - background.r;
          const dg = sourcePixels.data[offset + 1] - background.g;
          const db = sourcePixels.data[offset + 2] - background.b;
          if (dr * dr + dg * dg + db * db >= 625) barrier[gy * gridWidth + gx] = 1;
        }
      }
      for (let pass = 0; pass < 2; pass += 1) {
        const dilated = barrier.slice();
        for (let gy = 1; gy < gridHeight - 1; gy += 1) {
          for (let gx = 1; gx < gridWidth - 1; gx += 1) {
            const index = gy * gridWidth + gx;
            if (!barrier[index]) continue;
            dilated[index - 1] = dilated[index + 1] = 1;
            dilated[index - gridWidth] = dilated[index + gridWidth] = 1;
          }
        }
        barrier = dilated;
      }
      const outside = new Uint8Array(gridWidth * gridHeight);
      const queue = new Int32Array(gridWidth * gridHeight);
      let queueStart = 0;
      let queueEnd = 0;
      const enqueueOutside = (index: number) => {
        if (barrier[index] || outside[index]) return;
        outside[index] = 1;
        queue[queueEnd++] = index;
      };
      for (let gx = 0; gx < gridWidth; gx += 1) {
        enqueueOutside(gx);
        enqueueOutside((gridHeight - 1) * gridWidth + gx);
      }
      for (let gy = 1; gy < gridHeight - 1; gy += 1) {
        enqueueOutside(gy * gridWidth);
        enqueueOutside(gy * gridWidth + gridWidth - 1);
      }
      while (queueStart < queueEnd) {
        const index = queue[queueStart++];
        const x = index % gridWidth;
        if (x > 0) enqueueOutside(index - 1);
        if (x < gridWidth - 1) enqueueOutside(index + 1);
        if (index >= gridWidth) enqueueOutside(index - gridWidth);
        if (index < gridWidth * (gridHeight - 1)) enqueueOutside(index + gridWidth);
      }
      const enclosed = new Uint8Array(gridWidth * gridHeight);
      const visited = new Uint8Array(gridWidth * gridHeight);
      const minimumArea = Math.max(20, Math.round(gridWidth * gridHeight * 0.0012));
      for (let start = 0; start < enclosed.length; start += 1) {
        if (outside[start] || barrier[start] || visited[start]) continue;
        const component: number[] = [];
        queueStart = 0;
        queueEnd = 0;
        visited[start] = 1;
        queue[queueEnd++] = start;
        while (queueStart < queueEnd) {
          const index = queue[queueStart++];
          component.push(index);
          const x = index % gridWidth;
          const visit = (next: number) => {
            if (outside[next] || barrier[next] || visited[next]) return;
            visited[next] = 1;
            queue[queueEnd++] = next;
          };
          if (x > 0) visit(index - 1);
          if (x < gridWidth - 1) visit(index + 1);
          if (index >= gridWidth) visit(index - gridWidth);
          if (index < gridWidth * (gridHeight - 1)) visit(index + gridWidth);
        }
        if (component.length >= minimumArea) component.forEach((index) => { enclosed[index] = 1; });
      }
      enclosedSketchArea = { data: enclosed, width: gridWidth, height: gridHeight };
      await yieldToBrowser(0);
    }
    const isCleanWhiteBackdrop = dominantIsReliable && brightness >= 238 && chroma <= 18;
    let modelSupport: { data: Uint8Array; width: number; height: number } | null = null;
    if (maskCoverage >= 0.02 && !isCleanWhiteBackdrop) {
      const supportScale = Math.min(1, 360 / Math.max(width, height));
      const supportWidth = Math.max(32, Math.round(width * supportScale));
      const supportHeight = Math.max(32, Math.round(height * supportScale));
      let support = new Uint8Array(supportWidth * supportHeight);
      for (let sy = 0; sy < supportHeight; sy += 1) {
        const sourceY = Math.min(height - 1, Math.floor(((sy + 0.5) / supportHeight) * height));
        for (let sx = 0; sx < supportWidth; sx += 1) {
          const sourceX = Math.min(width - 1, Math.floor(((sx + 0.5) / supportWidth) * width));
          if (maskPixels.data[(sourceY * width + sourceX) * 4 + 3] >= 10) support[sy * supportWidth + sx] = 1;
        }
      }
      // Keep colour restoration close to the model's confident foreground.
      // A two-cell halo is enough for anti-aliased hair and pale edges without
      // reviving a large grey wall or studio backdrop.
      for (let pass = 0; pass < 2; pass += 1) {
        const expanded = support.slice();
        for (let sy = 1; sy < supportHeight - 1; sy += 1) {
          for (let sx = 1; sx < supportWidth - 1; sx += 1) {
            const index = sy * supportWidth + sx;
            if (!support[index]) continue;
            expanded[index - 1] = expanded[index + 1] = 1;
            expanded[index - supportWidth] = expanded[index + supportWidth] = 1;
          }
        }
        support = expanded;
      }
      modelSupport = { data: support, width: supportWidth, height: supportHeight };
    }
    const rowsPerChunk = Math.max(8, Math.floor(50000 / width));
    let visiblePixels = 0;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const offset = (y * width + x) * 4;
        const dr = sourcePixels.data[offset] - background.r;
        const dg = sourcePixels.data[offset + 1] - background.g;
        const db = sourcePixels.data[offset + 2] - background.b;
        const distanceSquared = dr * dr + dg * dg + db * db;
        const colorAlpha = distanceSquared <= 196 ? 0 : distanceSquared >= 2916 ? 1 : smoothstep(Math.sqrt(distanceSquared));
        const modelAlpha = maskPixels.data[offset + 3] / 255;
        let protectedColorAlpha = colorAlpha;
        if (modelSupport) {
          const supportX = Math.min(modelSupport.width - 1, Math.floor((x / width) * modelSupport.width));
          const supportY = Math.min(modelSupport.height - 1, Math.floor((y / height) * modelSupport.height));
          if (!modelSupport.data[supportY * modelSupport.width + supportX]) protectedColorAlpha = 0;
          else protectedColorAlpha *= Math.min(1, modelAlpha * 2.4 + 0.18);
        }
        let combinedAlpha = Math.max(modelAlpha, protectedColorAlpha);
        if (enclosedSketchArea) {
          const gridX = Math.min(enclosedSketchArea.width - 1, Math.floor((x / width) * enclosedSketchArea.width));
          const gridY = Math.min(enclosedSketchArea.height - 1, Math.floor((y / height) * enclosedSketchArea.height));
          if (enclosedSketchArea.data[gridY * enclosedSketchArea.width + gridX]) combinedAlpha = Math.max(combinedAlpha, 0.96);
        }
        sourcePixels.data[offset + 3] = Math.round(combinedAlpha * 255);
        if (combinedAlpha >= 0.08) visiblePixels += 1;
      }
      if (y > 0 && y % rowsPerChunk === 0) await yieldToBrowser(0);
    }
    sourceContext.putImageData(sourcePixels, 0, 0);
    return {
      blob: await canvasToBlob(sourceCanvas, "image/png", 1),
      enhanced: true,
      coverage: visiblePixels / (width * height),
    };
  } finally {
    sourceBitmap.close();
    maskBitmap.close();
  }
}

function loadImage(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("图片读取失败"));
    image.src = url;
  });
}

function yieldToBrowser(delay = 0) {
  if (delay > 0) return new Promise<void>((resolve) => window.setTimeout(resolve, delay));
  const scheduler = (window as unknown as { scheduler?: { yield?: () => Promise<void> } }).scheduler;
  if (scheduler?.yield) return scheduler.yield();
  return new Promise<void>((resolve) => window.setTimeout(resolve, 0));
}

async function inspectAndThumbnail(file: File): Promise<ImageItem> {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const width = bitmap.width;
  const height = bitmap.height;
  const scale = Math.min(1, 160 / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) {
    bitmap.close();
    throw new Error("浏览器无法创建预览");
  }
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const thumbnail = await canvasToBlob(canvas, "image/jpeg", 0.68);
  canvas.width = 1;
  canvas.height = 1;
  return {
    id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`,
    file,
    thumbnailUrl: URL.createObjectURL(thumbnail),
    width,
    height,
  };
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  return url;
}

type PdfItem = {
  id: string;
  file: File;
  pages: number | null;
};

type PdfJsModule = typeof import("pdfjs-dist");
let pdfJsPromise: Promise<PdfJsModule> | null = null;

function getPdfJs() {
  if (!pdfJsPromise) {
    pdfJsPromise = Promise.all([
      import("pdfjs-dist"),
      import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
    ]).then(([pdfjs, worker]) => {
      pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
      return pdfjs;
    });
  }
  return pdfJsPromise;
}

function parsePageRange(value: string, pageCount: number) {
  const input = value.trim().replace(/，/g, ",");
  if (!input || input === "全部") return Array.from({ length: pageCount }, (_, index) => index + 1);
  const pages = new Set<number>();
  for (const token of input.split(",")) {
    const part = token.trim();
    if (!part) continue;
    const match = part.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
    if (!match) throw new Error(`页码格式不正确：“${part}”`);
    const start = Number(match[1]);
    const end = Number(match[2] ?? match[1]);
    if (start < 1 || end < start || end > pageCount) throw new Error(`页码超出范围：“${part}”`);
    for (let page = start; page <= end; page += 1) pages.add(page);
  }
  if (!pages.size) throw new Error("请填写有效页码，例如 1-5,8。");
  return [...pages].sort((a, b) => a - b);
}

function PdfToImages({ directorySupported }: { directorySupported: boolean }) {
  const [files, setFiles] = useState<PdfItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [format, setFormat] = useState<OutputFormat>("png");
  const [quality, setQuality] = useState(92);
  const [scale, setScale] = useState(2);
  const [pageRange, setPageRange] = useState("全部");
  const [dragging, setDragging] = useState(false);
  const [importing, _setImporting] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [previewBusy, setPreviewBusy] = useState(false);
  const [previewStage, setPreviewStage] = useState("准备预览");
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const selected = files.find((item) => item.id === selectedId) ?? files[0] ?? null;
  const totalPages = files.reduce((sum, item) => sum + (item.pages ?? 0), 0);
  const pendingPageCounts = files.filter((item) => item.pages === null).length;

  useEffect(() => {
    void getPdfJs();
  }, []);

  const addPdfFiles = useCallback((incoming: File[]) => {
    const known = new Set(files.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`));
    const valid = incoming.filter((file) => {
      if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) return false;
      const key = `${file.name}:${file.size}:${file.lastModified}`;
      if (known.has(key)) return false;
      known.add(key);
      return true;
    });
    if (!valid.length) {
      setMessage("没有发现新的 PDF 文件，或文件已经在列表中。");
      return;
    }
    const ready = valid.map((file) => ({ id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`, file, pages: null }));
    setFiles((current) => [...current, ...ready]);
    setSelectedId((current) => current ?? ready[0]?.id ?? null);
    setMessage(`已立即加入 ${ready.length} 个 PDF，页数将在后台识别。`);
  }, [files]);

  useEffect(() => {
    if (!selected || !canvasRef.current) return;
    let cancelled = false;
    let documentProxy: unknown = null;
    setPreviewBusy(true);
    setPreviewStage("正在载入 PDF 引擎");
    void (async () => {
      try {
        const pdfjs = await getPdfJs();
        if (!cancelled) setPreviewStage("正在读取页面结构");
        const task = pdfjs.getDocument({ data: new Uint8Array(await selected.file.arrayBuffer()) });
        const pdf = await task.promise;
        documentProxy = pdf;
        if (!cancelled) {
          setFiles((current) => current.map((item) => item.id === selected.id ? { ...item, pages: pdf.numPages } : item));
        }
        if (!cancelled) setPreviewStage("正在绘制首页预览");
        const page = await pdf.getPage(1);
        const original = page.getViewport({ scale: 1 });
        const previewScale = Math.min(1.35, 620 / original.width, 390 / original.height);
        const viewport = page.getViewport({ scale: previewScale });
        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        await page.render({ canvas, viewport }).promise;
        page.cleanup();
        if (!cancelled) setMessage(`已识别 ${pdf.numPages} 页，可直接开始转换。`);
      } catch {
        if (!cancelled) setMessage("PDF 首页预览失败，但仍可尝试导出。");
      } finally {
        if (documentProxy) await (documentProxy as { destroy: () => Promise<void> }).destroy();
        if (!cancelled) setPreviewBusy(false);
      }
    })();
    return () => { cancelled = true; };
  }, [selected]);

  const processPdfs = async (downloadAsZip = false) => {
    if (!files.length || importing || processing) return;
    const directoryPicker = getOutputDirectoryPicker();
    let outputDirectory: OutputDirectoryHandle | null = null;
    if (directoryPicker && !downloadAsZip) {
      try {
        outputDirectory = await directoryPicker({ mode: "readwrite", id: "fangcun-pdf-output-v2", startIn: "downloads" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          setMessage("已取消选择输出文件夹。");
          return;
        }
        setMessage(OUTPUT_FOLDER_TIP);
        return;
      }
    }

    setProcessing(true);
    setProgress(0);
    const pdfjs = await getPdfJs();
    const zip = outputDirectory ? null : new JSZip();
    const outputFolder = zip?.folder("pdf-images") ?? null;
    const extension = format === "jpeg" ? "jpg" : format;
    let completedPages = 0;

    try {
      for (let fileIndex = 0; fileIndex < files.length; fileIndex += 1) {
        const item = files[fileIndex];
        let documentProxy: unknown = null;
        try {
          const task = pdfjs.getDocument({ data: new Uint8Array(await item.file.arrayBuffer()) });
          const pdf = await task.promise;
          documentProxy = pdf;
          setFiles((current) => current.map((entry) => entry.id === item.id ? { ...entry, pages: pdf.numPages } : entry));
          const pages = parsePageRange(pageRange, pdf.numPages);
          const digits = Math.max(3, String(pdf.numPages).length);
          for (let pageIndex = 0; pageIndex < pages.length; pageIndex += 1) {
            const pageNumber = pages[pageIndex];
            const page = await pdf.getPage(pageNumber);
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement("canvas");
            canvas.width = Math.ceil(viewport.width);
            canvas.height = Math.ceil(viewport.height);
            if (format === "jpeg") {
              const context = canvas.getContext("2d", { alpha: false });
              if (!context) throw new Error("浏览器无法创建画布");
              context.fillStyle = "#ffffff";
              context.fillRect(0, 0, canvas.width, canvas.height);
            }
            await page.render({ canvas, viewport }).promise;
            const blob = await canvasToBlob(canvas, `image/${format}`, quality / 100);
            const filename = `${baseName(item.file.name)}_${String(pageNumber).padStart(digits, "0")}.${extension}`;
            if (outputDirectory) {
              const fileHandle = await outputDirectory.getFileHandle(filename, { create: true });
              const writable = await fileHandle.createWritable();
              await writable.write(blob);
              await writable.close();
            } else {
              outputFolder?.file(filename, blob);
            }
            canvas.width = 1;
            canvas.height = 1;
            page.cleanup();
            completedPages += 1;
            const fileProgress = (fileIndex + (pageIndex + 1) / pages.length) / files.length;
            setProgress(Math.round(fileProgress * (outputDirectory ? 100 : 86)));
            setMessage(`正在转换：第 ${fileIndex + 1}/${files.length} 个 PDF · 第 ${pageIndex + 1}/${pages.length} 页`);
            await yieldToBrowser();
          }
        } finally {
          if (documentProxy) await (documentProxy as { destroy: () => Promise<void> }).destroy();
        }
      }

      if (zip) {
        const archive = await zip.generateAsync(
          { type: "blob", compression: "STORE", streamFiles: true },
          (meta) => setProgress(86 + Math.round(meta.percent * 0.14)),
        );
        zip.remove("pdf-images");
        const url = downloadBlob(archive, `pdf-images-${new Date().toISOString().slice(0, 10)}.zip`);
        await yieldToBrowser(900);
        URL.revokeObjectURL(url);
      }
      setProgress(100);
      setMessage(outputDirectory
        ? `转换完成：${completedPages} 张图片已保存到“${outputDirectory.name}”文件夹。`
        : `转换完成：${completedPages} 张图片已打包为一个 ZIP。`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "PDF 转换失败，请重试。");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <section className="hero pdf-hero">
        <div>
          <p className="eyebrow">PDF 转图片 · 本地批处理</p>
          <h1>把 PDF 每一页，<em>变成清晰图片。</em></h1>
          <p className="hero-copy">批量转换 PDF 页面，可选择页码、清晰度和图片格式。</p>
        </div>
        <div className="hero-stat"><strong>{totalPages || (pendingPageCounts ? "…" : "—")}</strong><span>{pendingPageCounts ? "后台识别中" : "当前 PDF"}<br />总页数</span></div>
      </section>

      <section className="workspace pdf-workspace">
        <div className="workbench">
          <div
            className={`dropzone pdf-dropzone ${dragging ? "is-dragging" : ""}`}
            onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }}
            onDrop={(event) => { event.preventDefault(); setDragging(false); void addPdfFiles(Array.from(event.dataTransfer.files)); }}
          >
            <input ref={inputRef} type="file" multiple accept="application/pdf" disabled={importing || processing} onChange={(event) => { void addPdfFiles(Array.from(event.target.files ?? [])); event.target.value = ""; }} />
            {!files.length ? (
              <button className="dropzone-empty pdf-empty" type="button" disabled={importing} onClick={() => inputRef.current?.click()}>
                <span className={`drop-icon pdf-icon ${importing ? "is-loading" : ""}`} aria-hidden="true"><img className="tool-asset-icon" src="/fangcun-toolbox/tool-pdf.svg" alt="" /></span>
                <strong>{importing ? "正在读取 PDF…" : "拖入 PDF 文件"}</strong>
                <span>或点击选择一个或多个 PDF 文件</span>
                <small className="local-processing-note"><i /> 仅在本机处理 · 文件不会上传</small>
              </button>
            ) : (
              <div className="pdf-preview-area">
                <div className="preview-toolbar"><div><span className="status-dot" /><strong>{selected?.file.name}</strong><span>{selected?.pages ? `${selected.pages} 页` : "正在识别页数…"}</span></div><button type="button" disabled={importing || processing} onClick={() => inputRef.current?.click()}>＋ 添加 PDF</button></div>
                <div className="pdf-canvas-stage"><div className={`pdf-sheet ${previewBusy ? "is-loading" : ""}`}><canvas ref={canvasRef} aria-label={`${selected?.file.name ?? "PDF"} 首页预览`} />{previewBusy && <span className="pdf-loading"><i aria-hidden="true" /><b>{previewStage}</b><small>文件已加入列表，可以先调整右侧设置</small></span>}</div></div>
                <p className="preview-hint">显示所选 PDF 的第 1 页预览 · 导出时逐页保持完整画面</p>
              </div>
            )}
          </div>

          {files.length > 0 && (
            <div className="queue-panel">
              <div className="queue-head"><div><strong>PDF 列表</strong><span>{files.length} 个文件 · {pendingPageCounts ? `${pendingPageCounts} 个正在后台识别` : `共 ${totalPages} 页`}</span></div><button type="button" disabled={processing} onClick={() => { setFiles([]); setSelectedId(null); setMessage(""); }}>清空全部</button></div>
              <div className="pdf-file-list">
                {files.map((item, index) => (
                  <button type="button" className={`pdf-file-card ${selected?.id === item.id ? "selected" : ""}`} key={item.id} onClick={() => setSelectedId(item.id)}>
                    <span className="pdf-badge">PDF</span><span className="pdf-file-info"><b>{item.file.name}</b><small>{item.pages ? `${item.pages} 页` : "识别中…"} · {formatBytes(item.file.size)}</small></span><span className="thumb-index">{String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="settings-card pdf-settings">
          <div className="settings-title"><span>01</span><div><b>页面与清晰度</b><small>PAGE SETTINGS</small></div></div>
          <fieldset><legend>页面范围</legend><input className="text-input" value={pageRange} onChange={(event) => setPageRange(event.target.value)} placeholder="全部，或 1-5,8" /><p className="field-help">输入“全部”，或使用 1-5,8 这样的格式。</p></fieldset>
          <fieldset><legend>渲染清晰度</legend><div className="format-grid quality-grid">{[1, 2, 3].map((value) => <button type="button" key={value} className={scale === value ? "active" : ""} onClick={() => setScale(value)}>{value}×<small>{value * 72} DPI</small></button>)}</div><p className="field-help">推荐 2×；线稿、印刷或放大查看可选 3×。</p></fieldset>
          <div className="divider" />
          <div className="settings-title compact"><span>02</span><div><b>输出设置</b><small>EXPORT SETTINGS</small></div></div>
          <fieldset><legend>图片格式</legend><div className="format-grid">{(["png", "jpeg", "webp"] as OutputFormat[]).map((item) => <button type="button" key={item} className={format === item ? "active" : ""} onClick={() => setFormat(item)}>{item === "jpeg" ? "JPG" : item.toUpperCase()}</button>)}</div></fieldset>
          {format !== "png" && <fieldset><div className="label-row"><legend>输出质量</legend><output>{quality}%</output></div><input className="range" type="range" min="50" max="100" value={quality} onChange={(event) => setQuality(Number(event.target.value))} style={{ "--range-value": `${(quality - 50) * 2}%` } as React.CSSProperties} /></fieldset>}
          <div className="export-block">
            <div className="export-summary"><span>预计输出</span><strong>{totalPages ? `${totalPages}${pendingPageCounts ? "+" : ""}` : "—"}<small> 张图片</small></strong></div>
            <p className="batch-note"><b>{directorySupported ? "直接保存到一个文件夹" : "兼容输出模式"}</b>{directorySupported ? OUTPUT_FOLDER_TIP : "当前浏览器将把所有图片打包为一个 ZIP。"}</p>
            {processing && <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>}
            <div className="export-actions"><button className="export-button" type="button" disabled={!files.length || importing || processing} onClick={() => void processPdfs()}><span>{processing ? `正在转换 ${progress}%` : directorySupported ? "选择输出文件夹并转换" : "转换并下载一个 ZIP"}</span><b aria-hidden="true">↘</b></button>{directorySupported && <button className="zip-fallback-button" type="button" disabled={!files.length || importing || processing} onClick={() => void processPdfs(true)}>下载一个 ZIP</button>}</div>
            {message && <p className="message" role="status">{message}</p>}
          </div>
        </aside>
      </section>
    </>
  );
}

type CompressFormat = "smart" | "same" | "webp" | "jpeg";
type CompressStatus = "queued" | "processing" | "done" | "error";

type CompressedItem = {
  id: string;
  file: File;
  originalUrl: string;
  status: CompressStatus;
  width?: number;
  height?: number;
  outputWidth?: number;
  outputHeight?: number;
  outputName?: string;
  result?: Blob;
  resultUrl?: string;
  error?: string;
};

function compressionOutputType(file: File, format: CompressFormat) {
  if (format === "jpeg") return "image/jpeg";
  if (format === "webp") return "image/webp";
  if (format === "same" && ["image/jpeg", "image/png", "image/webp"].includes(file.type)) return file.type;
  return file.type === "image/jpeg" ? "image/jpeg" : "image/webp";
}

async function compressImage(
  file: File,
  format: CompressFormat,
  quality: number,
  maxDimension: number,
) {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const sourceWidth = bitmap.width;
  const sourceHeight = bitmap.height;
  const ratio = maxDimension > 0 ? Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight)) : 1;
  const width = Math.max(1, Math.round(sourceWidth * ratio));
  const height = Math.max(1, Math.round(sourceHeight * ratio));
  const outputType = compressionOutputType(file, format);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: outputType !== "image/jpeg" });
  if (!context) {
    bitmap.close();
    throw new Error("浏览器无法创建压缩画布");
  }
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  if (outputType === "image/jpeg") {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
  }
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const encoded = await canvasToBlob(canvas, outputType, quality / 100);
  canvas.width = 1;
  canvas.height = 1;

  const resized = width !== sourceWidth || height !== sourceHeight;
  const keepOriginal = !resized && encoded.size >= file.size;
  const result: Blob = keepOriginal ? file : encoded;
  const extension = keepOriginal
    ? (file.name.match(/\.([^.]+)$/)?.[1] ?? "jpg")
    : outputType === "image/jpeg" ? "jpg" : outputType.split("/")[1];
  return {
    result,
    outputName: `${baseName(file.name)}（压缩）.${extension}`,
    width: sourceWidth,
    height: sourceHeight,
    outputWidth: width,
    outputHeight: height,
  };
}

function ImageCompressor({ directorySupported }: { directorySupported: boolean }) {
  const [items, setItems] = useState<CompressedItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [format, setFormat] = useState<CompressFormat>("smart");
  const [quality, setQuality] = useState(82);
  const [maxDimension, setMaxDimension] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<CompressedItem[]>([]);
  const selected = items.find((item) => item.id === selectedId) ?? items[0] ?? null;
  const completed = items.filter((item) => item.status === "done" && item.result);
  const totalOriginal = completed.reduce((sum, item) => sum + item.file.size, 0);
  const totalResult = completed.reduce((sum, item) => sum + (item.result?.size ?? 0), 0);
  const savedBytes = Math.max(0, totalOriginal - totalResult);
  const savedPercent = totalOriginal ? Math.round((savedBytes / totalOriginal) * 100) : 0;

  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => itemsRef.current.forEach((item) => {
    URL.revokeObjectURL(item.originalUrl);
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
  }), []);

  const processEntries = async (entries: CompressedItem[]) => {
    if (!entries.length) return;
    setProcessing(true);
    setProgress(0);
    setMessage("");
    let failures = 0;
    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      setItems((current) => current.map((item) => item.id === entry.id ? { ...item, status: "processing", error: undefined } : item));
      try {
        const output = await compressImage(entry.file, format, quality, maxDimension);
        const resultUrl = URL.createObjectURL(output.result);
        setItems((current) => current.map((item) => {
          if (item.id !== entry.id) return item;
          if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
          return { ...item, ...output, resultUrl, status: "done" };
        }));
      } catch (error) {
        failures += 1;
        setItems((current) => current.map((item) => item.id === entry.id ? { ...item, status: "error", error: error instanceof Error ? error.message : "压缩失败" } : item));
      }
      setProgress(Math.round(((index + 1) / entries.length) * 100));
      await yieldToBrowser();
    }
    setProcessing(false);
    setMessage(failures ? `${entries.length - failures} 张已完成，${failures} 张无法压缩。` : `${entries.length} 张图片压缩完成。`);
  };

  const addFiles = async (incoming: File[]) => {
    if (processing) return;
    const known = new Set(items.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`));
    const valid = incoming.filter((file) => {
      if (!["image/jpeg", "image/png", "image/webp", "image/bmp"].includes(file.type)) return false;
      const key = `${file.name}:${file.size}:${file.lastModified}`;
      if (known.has(key)) return false;
      known.add(key);
      return true;
    });
    if (!valid.length) {
      setMessage("没有发现新的可压缩图片，请选择 JPG、PNG、WebP 或 BMP。");
      return;
    }
    const ready = valid.map((file) => ({ id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`, file, originalUrl: URL.createObjectURL(file), status: "queued" as const }));
    setItems((current) => [...current, ...ready]);
    setSelectedId((current) => current ?? ready[0]?.id ?? null);
    await processEntries(ready);
  };

  const recompressAll = async () => {
    if (!items.length || processing) return;
    const ready = items.map((item) => ({ ...item, status: "queued" as const }));
    setItems(ready);
    await processEntries(ready);
  };

  const removeItem = (id: string) => {
    setItems((current) => {
      const target = current.find((item) => item.id === id);
      if (target) URL.revokeObjectURL(target.originalUrl);
      if (target?.resultUrl) URL.revokeObjectURL(target.resultUrl);
      const next = current.filter((item) => item.id !== id);
      if (selectedId === id) setSelectedId(next[0]?.id ?? null);
      return next;
    });
  };

  const clearAll = () => {
    items.forEach((item) => {
      URL.revokeObjectURL(item.originalUrl);
      if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
    });
    setItems([]);
    setSelectedId(null);
    setMessage("");
    setProgress(0);
  };

  const saveOne = (item: CompressedItem) => {
    if (!item.result || !item.outputName) return;
    const url = downloadBlob(item.result, item.outputName);
    window.setTimeout(() => URL.revokeObjectURL(url), 900);
  };

  const saveAll = async (downloadAsZip = false) => {
    if (!completed.length || saving) return;
    const directoryPicker = getOutputDirectoryPicker();
    let outputDirectory: OutputDirectoryHandle | null = null;
    if (directoryPicker && !downloadAsZip) {
      try {
        outputDirectory = await directoryPicker({ mode: "readwrite", id: "fangcun-compress-output-v2", startIn: "downloads" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setMessage(OUTPUT_FOLDER_TIP);
        return;
      }
    }
    setSaving(true);
    try {
      if (outputDirectory) {
        for (const item of completed) {
          const handle = await outputDirectory.getFileHandle(item.outputName!, { create: true });
          const writable = await handle.createWritable();
          await writable.write(item.result!);
          await writable.close();
        }
        setMessage(`已将 ${completed.length} 张图片保存到“${outputDirectory.name}”文件夹。`);
      } else {
        const zip = new JSZip();
        const folder = zip.folder("compressed-images");
        completed.forEach((item) => folder?.file(item.outputName!, item.result!));
        const archive = await zip.generateAsync({ type: "blob", compression: "STORE", streamFiles: true });
        const url = downloadBlob(archive, `compressed-images-${new Date().toISOString().slice(0, 10)}.zip`);
        window.setTimeout(() => URL.revokeObjectURL(url), 900);
        setMessage(`已将 ${completed.length} 张图片打包为一个 ZIP。`);
      }
    } catch {
      setMessage("保存时遇到问题，请重新选择输出位置。");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <section className="hero compressor-hero">
        <div>
          <p className="eyebrow">图片压缩 · 本地批处理</p>
          <h1>体积轻下来，<em>画质稳稳留住。</em></h1>
          <p className="hero-copy">批量减小图片体积，可控制画质、尺寸和输出格式。</p>
        </div>
        <div className="hero-stat compression-stat"><strong>{completed.length ? `${savedPercent}%` : "0%"}</strong><span>本批图片<br />节省空间</span></div>
      </section>

      <section className="workspace compressor-workspace">
        <div className="workbench">
          <div
            className={`compress-dropzone ${dragging ? "is-dragging" : ""} ${items.length ? "has-files" : ""}`}
            onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }}
            onDrop={(event) => { event.preventDefault(); setDragging(false); void addFiles(Array.from(event.dataTransfer.files)); }}
          >
            <input ref={inputRef} type="file" multiple accept="image/jpeg,image/png,image/webp,image/bmp" disabled={processing} onChange={(event) => { void addFiles(Array.from(event.target.files ?? [])); event.target.value = ""; }} />
            {!items.length ? (
              <button type="button" className="compress-empty" onClick={() => inputRef.current?.click()}>
                <span className="drop-icon" aria-hidden="true"><ToolIcon type="compress" /></span>
                <strong>把图片放进压缩舱</strong>
                <span>支持 JPG、PNG、WebP、BMP · 可一次选择多张</span>
                <small className="local-processing-note"><i /> 仅在本机处理 · 图片不会上传</small>
              </button>
            ) : (
              <div className="compress-board">
                <div className="compress-board-head"><div><span className="status-dot" /><strong>{processing ? `正在优化 ${progress}%` : "本批次压缩完成"}</strong><span>{items.length} 张图片</span></div><button type="button" disabled={processing} onClick={() => inputRef.current?.click()}>＋ 继续添加</button></div>
                <div className="compression-overview">
                  <div><small>压缩前</small><strong>{formatBytes(totalOriginal || items.reduce((sum, item) => sum + item.file.size, 0))}</strong></div>
                  <span className="compression-flow"><i style={{ width: `${processing ? progress : 100}%` }} /></span>
                  <div><small>压缩后</small><strong>{completed.length ? formatBytes(totalResult) : "计算中"}</strong></div>
                  <div className="saved-pill"><small>已节省</small><b>{completed.length ? formatBytes(savedBytes) : "—"}</b></div>
                </div>
                {selected && (
                  <div className="compare-stage">
                    <figure><div><img src={selected.originalUrl} alt={`${selected.file.name} 原图`} /></div><figcaption><b>原图</b><span>{formatBytes(selected.file.size)}</span></figcaption></figure>
                    <div className="compare-divider"><span>→</span></div>
                    <figure className="after"><div>{selected.resultUrl ? <><img src={selected.resultUrl} alt={`${selected.file.name} 压缩结果`} /></> : <span className="mini-loader" />}</div><figcaption><b>优化后</b><span>{selected.result ? formatBytes(selected.result.size) : "处理中…"}</span></figcaption></figure>
                  </div>
                )}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="queue-panel compression-queue">
              <div className="queue-head"><div><strong>压缩结果</strong><span>{completed.length}/{items.length} 已完成</span></div><button type="button" disabled={processing} onClick={clearAll}>清空全部</button></div>
              <div className="compression-list">
                {items.map((item, index) => {
                  const savingPercent = item.result ? Math.max(0, Math.round((1 - item.result.size / item.file.size) * 100)) : 0;
                  return <button type="button" className={`compression-row ${selected?.id === item.id ? "selected" : ""}`} key={item.id} onClick={() => setSelectedId(item.id)}>
                    <span className="thumb-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className={`compression-status ${item.status}`} aria-hidden="true">{item.status === "done" ? "✓" : item.status === "error" ? "!" : "↻"}</span>
                    <span className="compression-file"><b>{item.file.name}</b><small>{formatBytes(item.file.size)} {item.result ? `→ ${formatBytes(item.result.size)}` : "· 等待处理"}</small></span>
                    <span className="saving-value">{item.status === "done" ? `-${savingPercent}%` : item.status === "error" ? "失败" : "处理中"}</span>
                    {item.status === "done" && <span className="row-download" role="button" tabIndex={0} onClick={(event) => { event.stopPropagation(); saveOne(item); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.stopPropagation(); saveOne(item); } }}>下载</span>}
                    <span className="remove-button" role="button" tabIndex={0} aria-label={`移除 ${item.file.name}`} onClick={(event) => { event.stopPropagation(); removeItem(item.id); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.stopPropagation(); removeItem(item.id); } }}>×</span>
                  </button>;
                })}
              </div>
            </div>
          )}
        </div>

        <aside className="settings-card compressor-settings">
          <div className="settings-title"><span>01</span><div><b>压缩策略</b><small>COMPRESSION</small></div></div>
          <fieldset><legend>画质预设</legend><div className="preset-grid">{[{ label: "更小", value: 70 }, { label: "均衡", value: 82 }, { label: "高清", value: 90 }].map((preset) => <button type="button" key={preset.value} className={quality === preset.value ? "active" : ""} onClick={() => setQuality(preset.value)}><b>{preset.label}</b><small>{preset.value}%</small></button>)}</div></fieldset>
          <fieldset><div className="label-row"><legend>精细质量</legend><output>{quality}%</output></div><input className="range" type="range" min="50" max="95" value={quality} onChange={(event) => setQuality(Number(event.target.value))} style={{ "--range-value": `${((quality - 50) / 45) * 100}%` } as React.CSSProperties} /></fieldset>
          <div className="divider" />
          <div className="settings-title compact"><span>02</span><div><b>输出设置</b><small>EXPORT SETTINGS</small></div></div>
          <fieldset><legend>输出格式</legend><div className="compress-format-grid">{([{ id: "smart", label: "自动选择", note: "优先更小体积" }, { id: "same", label: "保持格式", note: "不改变扩展名" }, { id: "webp", label: "WebP", note: "体积更小" }, { id: "jpeg", label: "JPG", note: "兼容更好" }] as Array<{ id: CompressFormat; label: string; note: string }>).map((option) => <button type="button" key={option.id} className={format === option.id ? "active" : ""} onClick={() => setFormat(option.id)}><b>{option.label}</b><small>{option.note}</small></button>)}</div></fieldset>
          <fieldset><legend>最长边限制</legend><select className="select-input" value={maxDimension} onChange={(event) => setMaxDimension(Number(event.target.value))}><option value={0}>保持原始尺寸</option><option value={2560}>最大 2560 px</option><option value={1920}>最大 1920 px</option><option value={1280}>最大 1280 px</option></select><p className="field-help">缩小超大图片通常能获得最明显的体积下降。</p></fieldset>
          <button type="button" className="recompress-button" disabled={!items.length || processing} onClick={() => void recompressAll()}>按当前设置重新压缩 <span>↻</span></button>
          <div className="export-block">
            <div className="export-summary"><span>本批次节省</span><strong>{completed.length ? `${savedPercent}%` : "—"}<small> · {formatBytes(savedBytes)}</small></strong></div>
            <p className="batch-note"><b>{directorySupported ? "直接保存到一个文件夹" : "兼容下载模式"}</b>{directorySupported ? OUTPUT_FOLDER_TIP : "当前浏览器会把结果打包成一个 ZIP。"}</p>
            <div className="export-actions"><button className="export-button" type="button" disabled={!completed.length || processing || saving} onClick={() => void saveAll()}><span>{saving ? "正在保存…" : directorySupported ? `保存全部 ${completed.length} 张` : `下载全部 ${completed.length} 张`}</span><b aria-hidden="true">↘</b></button>{directorySupported && <button className="zip-fallback-button" type="button" disabled={!completed.length || processing || saving} onClick={() => void saveAll(true)}>下载一个 ZIP</button>}</div>
            {message && <p className="message" role="status">{message}</p>}
          </div>
        </aside>
      </section>
    </>
  );
}

type RemoveBgStatus = "queued" | "loading" | "processing" | "done" | "error";
type RemoveBgModel = "isnet_fp16" | "isnet_quint8";

type RemoveBgProgress = (key: string, current: number, total: number) => void;
type RemoveBgWorkerJob = {
  resolve: (result: Blob) => void;
  reject: (error: Error) => void;
  progress: RemoveBgProgress;
};

let removeBgWorker: Worker | null = null;
let removeBgWorkerJobId = 0;
const removeBgWorkerJobs = new Map<number, RemoveBgWorkerJob>();

function getRemoveBgWorker() {
  if (removeBgWorker) return removeBgWorker;
  const worker = new Worker(new URL("./remove-bg.worker.ts", import.meta.url), { type: "module" });
  worker.onmessage = (event: MessageEvent<{
    id: number;
    type: "progress" | "result" | "error";
    key?: string;
    current?: number;
    total?: number;
    result?: Blob;
    error?: string;
  }>) => {
    const job = removeBgWorkerJobs.get(event.data.id);
    if (!job) return;
    if (event.data.type === "progress") {
      job.progress(event.data.key ?? "", event.data.current ?? 0, event.data.total ?? 0);
      return;
    }
    removeBgWorkerJobs.delete(event.data.id);
    if (event.data.type === "result" && event.data.result) job.resolve(event.data.result);
    else job.reject(new Error(event.data.error ?? "主体识别失败"));
  };
  worker.onerror = () => {
    removeBgWorkerJobs.forEach((job) => job.reject(new Error("本地抠图线程意外停止，请重试")));
    removeBgWorkerJobs.clear();
    worker.terminate();
    removeBgWorker = null;
  };
  removeBgWorker = worker;
  return worker;
}

function removeBackgroundOffMainThread(file: File, model: RemoveBgModel, progress: RemoveBgProgress) {
  return new Promise<Blob>((resolve, reject) => {
    const id = ++removeBgWorkerJobId;
    removeBgWorkerJobs.set(id, { resolve, reject, progress });
    getRemoveBgWorker().postMessage({ id, file, model });
  });
}

type RemoveBgItem = {
  id: string;
  file: File;
  originalUrl: string;
  status: RemoveBgStatus;
  result?: Blob;
  resultUrl?: string;
  outputName?: string;
  error?: string;
};

function BackgroundRemover({ directorySupported }: { directorySupported: boolean }) {
  const [items, setItems] = useState<RemoveBgItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [model, setModel] = useState<RemoveBgModel>("isnet_fp16");
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("等待图片");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<RemoveBgItem[]>([]);
  const selected = items.find((item) => item.id === selectedId) ?? items[0] ?? null;
  const completed = items.filter((item) => item.status === "done" && item.result);

  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => itemsRef.current.forEach((item) => {
    URL.revokeObjectURL(item.originalUrl);
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
  }), []);

  const processEntries = async (entries: RemoveBgItem[], selectedModel = model) => {
    if (!entries.length) return;
    setProcessing(true);
    setProgress(0);
    setMessage("");
    let failures = 0;

    try {
      for (let index = 0; index < entries.length; index += 1) {
        const entry = entries[index];
        const firstRun = index === 0;
        setItems((current) => current.map((item) => item.id === entry.id ? { ...item, status: firstRun ? "loading" : "processing", error: undefined } : item));
        setPhase(firstRun ? "正在准备本地处理组件" : `正在识别主体 ${index + 1}/${entries.length}`);
        try {
          const resultFromWorker = await removeBackgroundOffMainThread(entry.file, selectedModel, (key, current, total) => {
              if (!total) return;
              const itemProgress = Math.min(1, current / total);
              setProgress(Math.round(((index + itemProgress) / entries.length) * 100));
              if (key.startsWith("fetch:")) setPhase(`首次加载精细模型 ${Math.round(itemProgress * 100)}%`);
              else if (key === "stage:model") setPhase("正在初始化精细模型");
              else if (key === "stage:preprocess") setPhase(`正在预处理图片 ${index + 1}/${entries.length}`);
              else if (key === "compute:decode") setPhase(`正在读取图片 ${index + 1}/${entries.length}`);
              else if (key === "compute:inference") setPhase(`正在分析主体边缘 ${index + 1}/${entries.length}`);
              else if (key === "compute:mask") setPhase(`正在融合边缘遮罩 ${index + 1}/${entries.length}`);
              else if (key === "compute:encode") setPhase(`正在生成透明 PNG ${index + 1}/${entries.length}`);
          });
          let result: Blob = resultFromWorker;
          setPhase(`正在保护浅色主体 ${index + 1}/${entries.length}`);
          await yieldToBrowser(0);
          const restored = await restoreLightForeground(entry.file, result);
          result = restored.blob;
          if ((restored.coverage ?? 0) < 0.0015) {
            throw new Error("未识别到有效主体，请改用清晰原图或素描保护模式重试");
          }
          if (restored.enhanced) setPhase("已自动保护素描与浅色主体");
          const resultUrl = URL.createObjectURL(result);
          setItems((current) => current.map((item) => {
            if (item.id !== entry.id) return item;
            if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
            return { ...item, result, resultUrl, outputName: `${baseName(item.file.name)}（抠图）.png`, status: "done" };
          }));
        } catch (error) {
          failures += 1;
          setItems((current) => current.map((item) => item.id === entry.id ? {
            ...item,
            status: "error",
            error: error instanceof Error ? error.message : "主体识别失败",
          } : item));
        }
        setProgress(Math.round(((index + 1) / entries.length) * 100));
        await yieldToBrowser(entries.length > 1 ? 80 : 30);
      }
      setPhase("处理完成");
      setMessage(failures ? `${entries.length - failures} 张已完成，${failures} 张处理失败，可单独重试。` : `${entries.length} 张图片已完成抠图，透明背景已保留。`);
    } catch {
      setPhase("模型加载失败");
      setMessage("本地处理组件加载失败，请检查网络后重试。首次使用完成后会自动缓存。");
    } finally {
      setProcessing(false);
    }
  };

  const addFiles = async (incoming: File[]) => {
    if (processing) return;
    const known = new Set(items.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`));
    const valid = incoming.filter((file) => {
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) return false;
      const key = `${file.name}:${file.size}:${file.lastModified}`;
      if (known.has(key)) return false;
      known.add(key);
      return true;
    });
    if (!valid.length) {
      setMessage("没有发现新的可处理图片，请选择 JPG、PNG 或 WebP 文件。");
      return;
    }
    const ready = valid.map((file) => ({
      id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`,
      file,
      originalUrl: URL.createObjectURL(file),
      status: "queued" as const,
    }));
    setItems((current) => [...current, ...ready]);
    setSelectedId((current) => current ?? ready[0]?.id ?? null);
    await processEntries(ready);
  };

  const reprocess = async (targetItems = items) => {
    if (!targetItems.length || processing) return;
    const ready = targetItems.map((item) => ({ ...item, status: "queued" as const }));
    setItems((current) => current.map((item) => ready.find((entry) => entry.id === item.id) ?? item));
    await processEntries(ready);
  };

  const removeItem = (id: string) => {
    setItems((current) => {
      const target = current.find((item) => item.id === id);
      if (target) URL.revokeObjectURL(target.originalUrl);
      if (target?.resultUrl) URL.revokeObjectURL(target.resultUrl);
      const next = current.filter((item) => item.id !== id);
      if (selectedId === id) setSelectedId(next[0]?.id ?? null);
      return next;
    });
  };

  const clearAll = () => {
    items.forEach((item) => {
      URL.revokeObjectURL(item.originalUrl);
      if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
    });
    setItems([]);
    setSelectedId(null);
    setMessage("");
    setProgress(0);
    setPhase("等待图片");
  };

  const saveOne = (item: RemoveBgItem) => {
    if (!item.result || !item.outputName) return;
    const url = downloadBlob(item.result, item.outputName);
    window.setTimeout(() => URL.revokeObjectURL(url), 900);
  };

  const saveAll = async (downloadAsZip = false) => {
    if (!completed.length || saving) return;
    const directoryPicker = getOutputDirectoryPicker();
    let outputDirectory: OutputDirectoryHandle | null = null;
    if (directoryPicker && !downloadAsZip) {
      try {
        outputDirectory = await directoryPicker({ mode: "readwrite", id: "fangcun-remove-bg-output-v1", startIn: "downloads" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setMessage(OUTPUT_FOLDER_TIP);
        return;
      }
    }
    setSaving(true);
    try {
      if (outputDirectory) {
        for (const item of completed) {
          const handle = await outputDirectory.getFileHandle(item.outputName!, { create: true });
          const writable = await handle.createWritable();
          await writable.write(item.result!);
          await writable.close();
        }
        setMessage(`已将 ${completed.length} 张透明 PNG 保存到“${outputDirectory.name}”文件夹。`);
      } else {
        const zip = new JSZip();
        const folder = zip.folder("removed-backgrounds");
        completed.forEach((item) => folder?.file(item.outputName!, item.result!));
        const archive = await zip.generateAsync({ type: "blob", compression: "STORE", streamFiles: true });
        const url = downloadBlob(archive, `removed-backgrounds-${new Date().toISOString().slice(0, 10)}.zip`);
        window.setTimeout(() => URL.revokeObjectURL(url), 900);
        setMessage(`已将 ${completed.length} 张透明 PNG 打包为一个 ZIP。`);
      }
    } catch {
      setMessage("保存时遇到问题，请重新选择输出位置。");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <section className="hero remove-bg-hero">
        <div>
          <p className="eyebrow">图片抠图 · 本地批处理</p>
          <h1>主体留下，<em>背景干净退场。</em></h1>
          <p className="hero-copy">批量识别人像与商品主体，导出透明背景 PNG。</p>
        </div>
        <div className="hero-stat remove-bg-stat"><strong>PNG</strong><span>透明背景<br />本地导出</span></div>
      </section>

      <section className="workspace remove-bg-workspace">
        <div className="workbench">
          <div
            className={`remove-bg-dropzone ${dragging ? "is-dragging" : ""} ${items.length ? "has-files" : ""}`}
            onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }}
            onDrop={(event) => { event.preventDefault(); setDragging(false); void addFiles(Array.from(event.dataTransfer.files)); }}
          >
            <input ref={inputRef} type="file" multiple accept="image/jpeg,image/png,image/webp" disabled={processing} onChange={(event) => { void addFiles(Array.from(event.target.files ?? [])); event.target.value = ""; }} />
            {!items.length ? (
              <button type="button" className="remove-bg-empty" onClick={() => inputRef.current?.click()}>
                <span className="remove-bg-upload-icon" aria-hidden="true"><ToolIcon type="remove-bg" /></span>
                <strong>拖入需要抠图的图片</strong>
                <span>拖放到这里，或点击选择 JPG、PNG、WebP</span>
                <small className="local-processing-note"><i /> 仅在本机处理 · 图片不会上传</small>
              </button>
            ) : (
              <div className="remove-bg-board">
                <div className="remove-bg-board-head">
                  <div><span className={`status-dot ${processing ? "is-working" : ""}`} /><strong>{processing ? phase : "预览结果"}</strong><span>{completed.length}/{items.length} 已完成</span></div>
                  <button type="button" disabled={processing} onClick={() => inputRef.current?.click()}>＋ 添加图片</button>
                </div>
                {processing && <div className="remove-bg-progress"><i style={{ width: `${progress}%` }} /><span>{progress}%</span></div>}
                {selected && (
                  <div className="remove-bg-compare">
                    <figure>
                      <div><img src={selected.originalUrl} alt={`${selected.file.name} 原图`} /></div>
                      <figcaption><b>原图</b><span>{formatBytes(selected.file.size)}</span></figcaption>
                    </figure>
                    <span className="remove-bg-arrow" aria-hidden="true">→</span>
                    <figure className="transparent-result">
                      <div>{selected.resultUrl ? <><img src={selected.resultUrl} alt={`${selected.file.name} 透明背景结果`} /></> : selected.status === "error" ? <button type="button" onClick={() => void reprocess([selected])}>处理失败，点击重试</button> : <span className="ai-processing"><i /><b>{selected.status === "loading" ? phase : "正在识别主体"}</b><small>复杂边缘需要一点时间</small></span>}</div>
                      <figcaption><b>透明背景</b><span>{selected.result ? formatBytes(selected.result.size) : "PNG"}</span></figcaption>
                    </figure>
                  </div>
                )}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="queue-panel remove-bg-queue">
              <div className="queue-head"><div><strong>处理队列</strong><span>{items.length} 张图片</span></div><button type="button" disabled={processing} onClick={clearAll}>清空全部</button></div>
              <div className="remove-bg-list">
                {items.map((item, index) => (
                  <button type="button" className={`remove-bg-row ${selected?.id === item.id ? "selected" : ""}`} key={item.id} onClick={() => setSelectedId(item.id)}>
                    <span className={`remove-bg-status ${item.status}`}>{item.status === "done" ? "✓" : item.status === "error" ? "!" : item.status === "queued" ? String(index + 1).padStart(2, "0") : "↻"}</span>
                    <img src={item.resultUrl ?? item.originalUrl} alt="" />
                    <span className="remove-bg-file"><b>{item.file.name}</b><small>{item.status === "done" ? `透明 PNG · ${formatBytes(item.result!.size)}` : item.status === "error" ? (item.error || "处理失败，可重试") : item.status === "queued" ? "等待处理" : "正在识别主体"}</small></span>
                    {item.status === "done" && <span className="row-download" role="button" tabIndex={0} onClick={(event) => { event.stopPropagation(); saveOne(item); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.stopPropagation(); saveOne(item); } }}>下载</span>}
                    {item.status === "error" && <span className="row-download retry" role="button" tabIndex={0} onClick={(event) => { event.stopPropagation(); void reprocess([item]); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.stopPropagation(); void reprocess([item]); } }}>重试</span>}
                    <span className="remove-row-button" role="button" tabIndex={0} aria-label={`移除 ${item.file.name}`} onClick={(event) => { event.stopPropagation(); removeItem(item.id); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.stopPropagation(); removeItem(item.id); } }}>×</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="settings-card remove-bg-settings">
          <div className="settings-title"><span>01</span><div><b>抠图质量</b><small>CUTOUT SETTINGS</small></div></div>
          <fieldset>
            <legend>处理模式</legend>
            <div className="remove-model-grid">
              <button type="button" className={model === "isnet_fp16" ? "active" : ""} disabled={processing} onClick={() => setModel("isnet_fp16")}><b>精细模式</b><small>发丝与商品边缘</small></button>
              <button type="button" className={model === "isnet_quint8" ? "active" : ""} disabled={processing} onClick={() => setModel("isnet_quint8")}><b>快速模式</b><small>模型更小，处理更快</small></button>
            </div>
            <p className="field-help">首次使用需加载本地处理组件，完成后浏览器会自动缓存。</p>
          </fieldset>
          <button type="button" className="reprocess-button" disabled={!items.length || processing} onClick={() => void reprocess()}>按当前精度重新处理 <span>↻</span></button>

          <div className="divider" />
          <div className="settings-title compact"><span>02</span><div><b>输出设置</b><small>EXPORT SETTINGS</small></div></div>
          <div className="remove-bg-tips">
            <span>自动保色已开启</span>
            <p>AI 遮罩会与边缘色差融合，优先保护浅色、半透明和细小主体。</p>
          </div>

          <div className="export-block">
            <div className="export-summary"><span>可导出</span><strong>{completed.length}<small> 张透明 PNG</small></strong></div>
            <p className="batch-note"><b>{directorySupported ? "直接保存到一个文件夹" : "兼容下载模式"}</b>{directorySupported ? OUTPUT_FOLDER_TIP : "当前浏览器会把结果打包成一个 ZIP。"}</p>
            {processing && <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>}
            <div className="export-actions"><button className="export-button" type="button" disabled={!completed.length || processing || saving} onClick={() => void saveAll()}><span>{saving ? "正在保存…" : directorySupported ? `保存全部 ${completed.length} 张` : `下载全部 ${completed.length} 张`}</span><b aria-hidden="true">↘</b></button>{directorySupported && <button className="zip-fallback-button" type="button" disabled={!completed.length || processing || saving} onClick={() => void saveAll(true)}>下载一个 ZIP</button>}</div>
            {message && <p className="message" role="status">{message}</p>}
          </div>
        </aside>
      </section>
    </>
  );
}

type RenameWritable = { write: (data: Blob) => Promise<void>; close: () => Promise<void> };
type RenameFileHandle = {
  kind: "file";
  name: string;
  getFile: () => Promise<File>;
  createWritable: () => Promise<RenameWritable>;
};
type RenameDirectoryHandle = {
  kind: "directory";
  name: string;
  entries: () => AsyncIterableIterator<[string, RenameFileHandle | RenameDirectoryHandle]>;
  getFileHandle: (name: string, options?: { create?: boolean }) => Promise<RenameFileHandle>;
  removeEntry: (name: string) => Promise<void>;
  requestPermission?: (options: { mode: "readwrite" }) => Promise<"granted" | "denied" | "prompt">;
};
type RenameRecord = {
  id: string;
  name: string;
  path: string;
  directory: string;
  extension: string;
  stem: string;
  file: File;
  parent?: RenameDirectoryHandle;
};
type RenamePreview = {
  record: RenameRecord;
  nextName: string;
  nextPath: string;
  labels: Array<{ record: RenameRecord; nextName: string }>;
  conflict?: string;
};
type RawRenamePair = { parent: RenameDirectoryHandle; sourceName: string; targetName: string };

const RENAME_IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "gif", "bmp", "tif", "tiff", "avif", "heic"]);
const RENAME_TAG_OPTIONS = ["txt", "json", "xml", "yaml", "yml"];
const renameCollator = new Intl.Collator("zh-CN", { numeric: true, sensitivity: "base" });

function splitFileName(name: string) {
  const dot = name.lastIndexOf(".");
  return dot > 0 ? { stem: name.slice(0, dot), extension: name.slice(dot + 1).toLowerCase() } : { stem: name, extension: "" };
}

function renamePath(directory: string, name: string) {
  return directory ? `${directory}/${name}` : name;
}

async function scanRenameDirectory(root: RenameDirectoryHandle) {
  const records: RenameRecord[] = [];
  const visit = async (directory: RenameDirectoryHandle, relative = "") => {
    for await (const [name, entry] of directory.entries()) {
      if (entry.kind === "directory") {
        await visit(entry, renamePath(relative, name));
      } else {
        const file = await entry.getFile();
        const parsed = splitFileName(name);
        records.push({
          id: `${renamePath(relative, name)}-${file.size}-${file.lastModified}`,
          name,
          path: renamePath(relative, name),
          directory: relative,
          extension: parsed.extension,
          stem: parsed.stem,
          file,
          parent: directory,
        });
      }
    }
  };
  await visit(root);
  return records;
}

function recordsFromFolderFiles(files: File[]) {
  return files.map((file) => {
    const rawPath = (file as File & { webkitRelativePath?: string }).webkitRelativePath || file.name;
    const pieces = rawPath.split("/").filter(Boolean);
    const relativePieces = pieces.length > 1 ? pieces.slice(1) : pieces;
    const name = relativePieces.at(-1) ?? file.name;
    const directory = relativePieces.slice(0, -1).join("/");
    const parsed = splitFileName(name);
    return {
      id: `${rawPath}-${file.size}-${file.lastModified}`,
      name,
      path: renamePath(directory, name),
      directory,
      extension: parsed.extension,
      stem: parsed.stem,
      file,
    } satisfies RenameRecord;
  });
}

async function writeRenameFile(parent: RenameDirectoryHandle, name: string, file: Blob) {
  const handle = await parent.getFileHandle(name, { create: true });
  const writable = await handle.createWritable();
  await writable.write(file);
  await writable.close();
}

async function safeRenamePairs(pairs: RawRenamePair[]) {
  const effective = pairs.filter((pair) => pair.sourceName.toLocaleLowerCase() !== pair.targetName.toLocaleLowerCase());
  if (!effective.length) return;
  const staged: Array<RawRenamePair & { temporaryName: string; source: File }> = [];
  const finalized: Array<RawRenamePair & { temporaryName: string; source: File }> = [];
  try {
    for (const pair of effective) {
      const sourceHandle = await pair.parent.getFileHandle(pair.sourceName);
      const source = await sourceHandle.getFile();
      const extension = splitFileName(pair.sourceName).extension;
      const temporaryName = `.fangcun-${crypto.randomUUID()}${extension ? `.${extension}` : ""}`;
      await writeRenameFile(pair.parent, temporaryName, source);
      staged.push({ ...pair, temporaryName, source });
    }
    for (const item of staged) await item.parent.removeEntry(item.sourceName);
    for (const item of staged) {
      const temporary = await item.parent.getFileHandle(item.temporaryName);
      await writeRenameFile(item.parent, item.targetName, await temporary.getFile());
      finalized.push(item);
      await item.parent.removeEntry(item.temporaryName);
    }
  } catch (error) {
    for (const item of finalized) {
      try { await item.parent.removeEntry(item.targetName); } catch { /* target was not created */ }
    }
    for (const item of staged) {
      try {
        await writeRenameFile(item.parent, item.sourceName, item.source);
        try { await item.parent.removeEntry(item.temporaryName); } catch { /* temp was already removed */ }
      } catch { /* preserve the first actionable error */ }
    }
    throw error;
  }
}

function ImageRenamer({ directorySupported: _directorySupported }: { directorySupported: boolean }) {
  const [records, setRecords] = useState<RenameRecord[]>([]);
  const [rootHandle, setRootHandle] = useState<RenameDirectoryHandle | null>(null);
  const [rootName, setRootName] = useState("");
  const [recursive, setRecursive] = useState(false);
  const [globalNumbering, setGlobalNumbering] = useState(true);
  const [sourceOrder, setSourceOrder] = useState<"asc" | "desc">("asc");
  const [numberOrder, setNumberOrder] = useState<"asc" | "desc">("asc");
  const [autoStart, setAutoStart] = useState(true);
  const [startNumber, setStartNumber] = useState(1);
  const [padding, setPadding] = useState(3);
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [syncLabels, setSyncLabels] = useState(true);
  const [tagTypes, setTagTypes] = useState(["txt", "json"]);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [undoPlan, setUndoPlan] = useState<RawRenamePair[]>([]);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const loadHandle = useCallback(async (handle: RenameDirectoryHandle) => {
    setLoading(true);
    setMessage("正在读取文件名，不读取图片内容…");
    try {
      const next = await scanRenameDirectory(handle);
      setRecords(next);
      setRootHandle(handle);
      setRootName(handle.name);
      setUndoPlan([]);
      const imageCount = next.filter((record) => RENAME_IMAGE_EXTENSIONS.has(record.extension)).length;
      setMessage(imageCount ? `已读取 ${imageCount} 张图片，设置变化会自动刷新预览。` : "这个文件夹中没有发现支持的图片。 ");
    } catch {
      setMessage("无法读取这个文件夹，请重新授权后再试。");
    } finally {
      setLoading(false);
    }
  }, []);

  const chooseFolder = async () => {
    const picker = (window as unknown as { showDirectoryPicker?: (options: { mode: "readwrite"; id: string }) => Promise<RenameDirectoryHandle> }).showDirectoryPicker;
    if (!picker) {
      folderInputRef.current?.click();
      return;
    }
    try {
      await loadHandle(await picker({ mode: "readwrite", id: "fangcun-image-renamer-v1" }));
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) setMessage("没有获得文件夹访问权限，请重新选择。");
    }
  };

  const importFolderFiles = (files: File[]) => {
    const next = recordsFromFolderFiles(files);
    setRecords(next);
    setRootHandle(null);
    const firstPath = (files[0] as File & { webkitRelativePath?: string } | undefined)?.webkitRelativePath ?? "";
    setRootName(firstPath.split("/")[0] || "所选图片");
    setUndoPlan([]);
    setMessage("当前使用兼容模式：会下载重命名后的 ZIP，不会修改原文件。");
  };

  const preview = useMemo(() => {
    const visible = records.filter((record) => RENAME_IMAGE_EXTENSIONS.has(record.extension) && (recursive || !record.directory));
    const direction = sourceOrder === "asc" ? 1 : -1;
    const sorted = [...visible].sort((a, b) => direction * renameCollator.compare(a.path, b.path));
    const allByPath = new Map(records.map((record) => [record.path.toLocaleLowerCase(), record]));
    const sourcePaths = new Set(sorted.map((record) => record.path.toLocaleLowerCase()));
    const folderCounts = new Map<string, number>();
    sorted.forEach((record) => folderCounts.set(record.directory, (folderCounts.get(record.directory) ?? 0) + 1));
    const folderIndexes = new Map<string, number>();
    const targets = new Map<string, number>();

    const result = sorted.map((record, globalIndex) => {
      const groupIndex = folderIndexes.get(record.directory) ?? 0;
      folderIndexes.set(record.directory, groupIndex + 1);
      const index = globalNumbering ? globalIndex : groupIndex;
      const count = globalNumbering ? sorted.length : (folderCounts.get(record.directory) ?? 0);
      const base = autoStart ? (numberOrder === "asc" ? 1 + index : count - index) : (numberOrder === "asc" ? startNumber + index : startNumber - index);
      const displayNumber = padding ? String(Math.max(0, base)).padStart(padding, "0") : String(base);
      const nextStem = `${prefix}${displayNumber}${suffix}`;
      const nextName = `${nextStem}.${record.extension}`;
      const nextPath = renamePath(record.directory, nextName);
      const labels = syncLabels ? tagTypes.flatMap((extension) => {
        const label = allByPath.get(renamePath(record.directory, `${record.stem}.${extension}`).toLocaleLowerCase());
        return label ? [{ record: label, nextName: `${nextStem}.${extension}` }] : [];
      }) : [];
      let conflict: string | undefined;
      if (base < 0) conflict = "编号不能小于 0";
      if (!nextStem || /[\\/:*?"<>|]/.test(nextStem) || /[. ]$/.test(nextStem)) conflict = "文件名包含不可用字符";
      const targetKey = nextPath.toLocaleLowerCase();
      targets.set(targetKey, (targets.get(targetKey) ?? 0) + 1);
      const occupied = allByPath.get(targetKey);
      if (occupied && !sourcePaths.has(targetKey) && occupied.path.toLocaleLowerCase() !== record.path.toLocaleLowerCase()) conflict = "目标名称已存在";
      return { record, nextName, nextPath, labels, conflict } satisfies RenamePreview;
    });

    result.forEach((item) => {
      if ((targets.get(item.nextPath.toLocaleLowerCase()) ?? 0) > 1) item.conflict = "新名称重复";
    });
    const labelSources = new Set(result.flatMap((item) => item.labels.map((label) => label.record.path.toLocaleLowerCase())));
    const labelTargets = new Map<string, number>();
    result.forEach((item) => item.labels.forEach((label) => {
      const path = renamePath(label.record.directory, label.nextName).toLocaleLowerCase();
      labelTargets.set(path, (labelTargets.get(path) ?? 0) + 1);
    }));
    result.forEach((item) => item.labels.forEach((label) => {
      const path = renamePath(label.record.directory, label.nextName).toLocaleLowerCase();
      const occupied = allByPath.get(path);
      if ((labelTargets.get(path) ?? 0) > 1) item.conflict = "关联标签新名称重复";
      else if (occupied && !labelSources.has(path) && occupied.path.toLocaleLowerCase() !== label.record.path.toLocaleLowerCase()) item.conflict = "关联标签目标已存在";
    }));
    return result;
  }, [records, recursive, globalNumbering, sourceOrder, numberOrder, autoStart, startNumber, padding, prefix, suffix, syncLabels, tagTypes]);

  const conflicts = preview.filter((item) => item.conflict);
  const labelCount = preview.reduce((sum, item) => sum + item.labels.length, 0);

  const buildPairs = () => {
    const pairs: RawRenamePair[] = [];
    const seen = new Set<string>();
    preview.forEach((item) => {
      if (item.record.parent) pairs.push({ parent: item.record.parent, sourceName: item.record.name, targetName: item.nextName });
      item.labels.forEach((label) => {
        if (!label.record.parent || seen.has(label.record.path.toLocaleLowerCase())) return;
        seen.add(label.record.path.toLocaleLowerCase());
        pairs.push({ parent: label.record.parent, sourceName: label.record.name, targetName: label.nextName });
      });
    });
    return pairs;
  };

  const downloadRenamedZip = async () => {
    if (!preview.length || conflicts.length || processing) return;
    setProcessing(true);
    setMessage("正在整理重命名后的文件…");
    try {
      const zip = new JSZip();
      const folder = zip.folder(rootName || "renamed-images");
      preview.forEach((item) => {
        folder?.file(renamePath(item.record.directory, item.nextName), item.record.file);
        item.labels.forEach((label) => folder?.file(renamePath(label.record.directory, label.nextName), label.record.file));
      });
      const archive = await zip.generateAsync({ type: "blob", compression: "STORE", streamFiles: true });
      const url = downloadBlob(archive, `${rootName || "images"}-renamed.zip`);
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setMessage(`已打包 ${preview.length} 张图片${labelCount ? `和 ${labelCount} 个关联标签` : ""}。`);
    } catch {
      setMessage("打包失败，请减少单次文件数量后重试。");
    } finally {
      setProcessing(false);
    }
  };

  const executeRename = async () => {
    if (!rootHandle || !preview.length || conflicts.length || processing) return;
    if (!window.confirm(`将直接修改“${rootName}”中的 ${preview.length + labelCount} 个文件名。已经检查预览并确认继续吗？`)) return;
    if (rootHandle.requestPermission && await rootHandle.requestPermission({ mode: "readwrite" }) !== "granted") {
      setMessage("需要文件夹修改权限才能直接重命名；也可以先下载重命名后的 ZIP。");
      return;
    }
    const pairs = buildPairs();
    setProcessing(true);
    setMessage("正在安全重命名，请不要关闭页面…");
    try {
      await safeRenamePairs(pairs);
      setUndoPlan(pairs.map((pair) => ({ ...pair, sourceName: pair.targetName, targetName: pair.sourceName })));
      setRecords(await scanRenameDirectory(rootHandle));
      setMessage(`已完成 ${preview.length} 张图片${labelCount ? `及 ${labelCount} 个关联标签` : ""}的重命名。`);
    } catch {
      setMessage("重命名没有完成，已尽力恢复原文件名。请检查文件夹后重试。");
    } finally {
      setProcessing(false);
    }
  };

  const undoRename = async () => {
    if (!rootHandle || !undoPlan.length || processing) return;
    setProcessing(true);
    setMessage("正在撤销上一次重命名…");
    try {
      await safeRenamePairs(undoPlan);
      setUndoPlan([]);
      setRecords(await scanRenameDirectory(rootHandle));
      setMessage("已恢复上一次操作前的文件名。");
    } catch {
      setMessage("无法安全撤销：部分文件可能已被移动或原名称被占用。");
    } finally {
      setProcessing(false);
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const item = event.dataTransfer.items[0] as DataTransferItem & { getAsFileSystemHandle?: () => Promise<RenameFileHandle | RenameDirectoryHandle | null> };
    const handle = await item?.getAsFileSystemHandle?.();
    if (handle?.kind === "directory") {
      await loadHandle(handle);
      return;
    }
    const files = Array.from(event.dataTransfer.files);
    if (files.length) importFolderFiles(files);
    else setMessage("请拖入一个图片文件夹，或点击选择文件夹。");
  };

  return (
    <>
      <section className="hero rename-hero">
        <div><p className="eyebrow">批量重命名 · 本地处理</p><h1>整批图片，<em>一键排好名字。</em></h1><p className="hero-copy">选择图片文件夹，预览并统一编号、前后缀与关联标签。</p></div>
        <div className="hero-stat"><strong>001</strong><span>编号预览<br />确认后执行</span></div>
      </section>

      <section className="workspace rename-workspace">
        <div className="workbench">
          <input ref={folderInputRef} className="folder-input" type="file" multiple {...({ webkitdirectory: "", directory: "" } as Record<string, string>)} onChange={(event) => { importFolderFiles(Array.from(event.target.files ?? [])); event.target.value = ""; }} />
          <div className={`rename-dropzone ${dragging ? "is-dragging" : ""} ${records.length ? "has-files" : ""}`} onDragEnter={(event) => { event.preventDefault(); setDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }} onDrop={(event) => void handleDrop(event)}>
            {!records.length ? <button type="button" className="rename-empty" disabled={loading} onClick={() => void chooseFolder()}><span className={`rename-upload-icon ${loading ? "is-loading" : ""}`}><ToolIcon type="rename" /></span><strong>{loading ? "正在读取文件名…" : "选择需要重命名的文件夹"}</strong><span>也可以直接把文件夹拖到这里</span><small className="local-processing-note"><i /> 只读取文件名 · 图片不会上传</small></button> : <div className="rename-board">
              <div className="rename-board-head"><div><span className="status-dot" /><strong>{rootName}</strong><span>{preview.length} 张图片 · {records.length} 个文件</span></div><button type="button" disabled={processing} onClick={() => void chooseFolder()}>更换文件夹</button></div>
              {conflicts.length > 0 && <div className="rename-conflict-banner"><b>发现 {conflicts.length} 个冲突</b><span>调整编号或名称格式后才能执行。</span></div>}
              <div className="rename-table-head"><span>原文件名</span><span /><span>新文件名</span><span>状态</span></div>
              <div className="rename-list">
                {preview.slice(0, 300).map((item, index) => <div className={`rename-row ${item.conflict ? "has-conflict" : ""}`} key={item.record.id}><span className="rename-index">{String(index + 1).padStart(2, "0")}</span><span className="rename-name"><b>{item.record.name}</b><small>{item.record.directory || "当前文件夹"}</small></span><span className="rename-arrow">→</span><span className="rename-name next"><b>{item.nextName}</b><small>{item.labels.length ? `同步 ${item.labels.length} 个标签` : "仅图片"}</small></span><span className="rename-status">{item.conflict ? "!" : "✓"}</span></div>)}
              </div>
              {preview.length > 300 && <p className="rename-overflow">为保持流畅，预览前 300 项；执行时仍会处理全部 {preview.length} 张图片。</p>}
            </div>}
          </div>
        </div>

        <aside className="settings-card rename-settings">
          <div className="settings-title"><span>01</span><div><b>编号规则</b><small>NUMBERING</small></div></div>
          <fieldset><legend>处理范围</legend><div className="segmented"><button type="button" className={!recursive ? "active" : ""} onClick={() => setRecursive(false)}>仅当前文件夹</button><button type="button" className={recursive ? "active" : ""} onClick={() => setRecursive(true)}>包含子文件夹</button></div></fieldset>
          {recursive && <fieldset><legend>子文件夹编号</legend><div className="segmented"><button type="button" className={globalNumbering ? "active" : ""} onClick={() => setGlobalNumbering(true)}>全局连续</button><button type="button" className={!globalNumbering ? "active" : ""} onClick={() => setGlobalNumbering(false)}>每夹重排</button></div></fieldset>}
          <div className="rename-inline-fields"><fieldset><legend>源文件排序</legend><select className="select-input" value={sourceOrder} onChange={(event) => setSourceOrder(event.target.value as "asc" | "desc")}><option value="asc">名称升序</option><option value="desc">名称降序</option></select></fieldset><fieldset><legend>新编号方向</legend><select className="select-input" value={numberOrder} onChange={(event) => setNumberOrder(event.target.value as "asc" | "desc")}><option value="asc">数字递增</option><option value="desc">数字递减</option></select></fieldset></div>
          <fieldset><div className="rename-switch-row"><label><input type="checkbox" checked={autoStart} onChange={(event) => setAutoStart(event.target.checked)} /><span>自动起始编号</span></label>{!autoStart && <input className="rename-number-input" type="number" min="0" value={startNumber} onChange={(event) => setStartNumber(Number(event.target.value))} />}</div><p className="field-help">递增默认从 1 开始，递减默认从本批图片数量开始。</p></fieldset>
          <fieldset><legend>编号样式</legend><select className="select-input" value={padding} onChange={(event) => setPadding(Number(event.target.value))}><option value="0">不补零（1）</option><option value="2">2 位（01）</option><option value="3">3 位（001）</option><option value="4">4 位（0001）</option><option value="5">5 位（00001）</option></select></fieldset>
          <div className="divider" />
          <div className="settings-title compact"><span>02</span><div><b>名称格式</b><small>NAME FORMAT</small></div></div>
          <div className="rename-inline-fields"><fieldset><legend>前缀 <span>选填</span></legend><input className="text-input" value={prefix} onChange={(event) => setPrefix(event.target.value)} placeholder="商品_" /></fieldset><fieldset><legend>后缀 <span>选填</span></legend><input className="text-input" value={suffix} onChange={(event) => setSuffix(event.target.value)} placeholder="_正面" /></fieldset></div>
          <fieldset><label className="rename-check"><input type="checkbox" checked={syncLabels} onChange={(event) => setSyncLabels(event.target.checked)} /><span><b>同步关联标签</b><small>同目录、同基础文件名的标签一起改名</small></span></label>{syncLabels && <div className="tag-type-grid">{RENAME_TAG_OPTIONS.map((tag) => <label key={tag}><input type="checkbox" checked={tagTypes.includes(tag)} onChange={() => setTagTypes((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag])} /><span>.{tag}</span></label>)}</div>}</fieldset>
          <div className="export-block">
            <div className="export-summary"><span>预计处理</span><strong>{preview.length}<small> 张图片{labelCount ? ` + ${labelCount} 标签` : ""}</small></strong></div>
            <p className={`batch-note ${conflicts.length ? "is-error" : ""}`}><b>{conflicts.length ? "存在名称冲突" : rootHandle ? "直接修改所选文件夹" : "兼容下载模式"}</b>{conflicts.length ? "请先处理预览中的红色项目。" : rootHandle ? "采用临时文件两阶段改名，避免名称交换时覆盖。" : "原文件不会改变，将下载重命名后的 ZIP。"}</p>
            <div className="export-actions"><button className="export-button" type="button" disabled={!preview.length || !!conflicts.length || processing} onClick={() => void (rootHandle ? executeRename() : downloadRenamedZip())}><span>{processing ? "正在处理…" : rootHandle ? `执行重命名 ${preview.length} 张` : `下载重命名 ZIP`}</span><b aria-hidden="true">↘</b></button>{rootHandle && <button className="zip-fallback-button" type="button" disabled={!preview.length || !!conflicts.length || processing} onClick={() => void downloadRenamedZip()}>先下载一个备份 ZIP</button>}{undoPlan.length > 0 && <button className="rename-undo-button" type="button" disabled={processing} onClick={() => void undoRename()}>撤销上一次重命名</button>}</div>
            {message && <p className="message" role="status">{message}</p>}
          </div>
        </aside>
      </section>
    </>
  );
}

type ToolId = "split" | "pdf" | "compress" | "remove-bg" | "rename";
const TOOL_CATALOG: Array<{ id: ToolId; name: string; subtitle: string; shortcut: string }> = [
  { id: "split", name: "图片切分", subtitle: "一张图片快速拆成两张", shortcut: "1" },
  { id: "pdf", name: "PDF 转图片", subtitle: "PDF 页面批量导出为图片", shortcut: "2" },
  { id: "compress", name: "图片压缩", subtitle: "减小体积，保留清晰画质", shortcut: "3" },
  { id: "remove-bg", name: "智能抠图", subtitle: "移除背景，导出透明 PNG", shortcut: "4" },
  { id: "rename", name: "批量重命名", subtitle: "顺序编号，同步关联标签", shortcut: "5" },
];

const SIDEBAR_ICON_SOURCE: Record<ToolId, string> = {
  split: "/fangcun-toolbox/tool-split.svg",
  pdf: "/fangcun-toolbox/tool-pdf.svg",
  compress: "/fangcun-toolbox/tool-compress.svg",
  "remove-bg": "/fangcun-toolbox/tool-remove-bg.svg",
  rename: "/fangcun-toolbox/tool-rename.svg",
};

export default function Home() {
  const [activeTool, setActiveTool] = useState<ToolId>("split");
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [toolSearch, setToolSearch] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [direction, setDirection] = useState<Direction>("vertical");
  const [splitPercent, setSplitPercent] = useState(50);
  const [gutter, setGutter] = useState(0);
  const [format, setFormat] = useState<OutputFormat>("png");
  const [quality, setQuality] = useState(92);
  const [prefix, setPrefix] = useState("");
  const [dragging, setDragging] = useState(false);
  const [importing, setImporting] = useState(false);
  const [importProgress, setImportProgress] = useState({ current: 0, total: 0 });
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [directorySupported, setDirectorySupported] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imagesRef = useRef<ImageItem[]>([]);
  const sideNavRef = useRef<HTMLElement>(null);

  const trackSidebarPointer = useCallback((event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const items = event.currentTarget.querySelectorAll<HTMLElement>(".side-tool, .all-tools-button");
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const dx = Math.max(rect.left - event.clientX, 0, event.clientX - rect.right);
      const dy = Math.max(rect.top - event.clientY, 0, event.clientY - rect.bottom);
      const distance = Math.hypot(dx, dy);
      const inside = dx === 0 && dy === 0;
      const proximity = Math.max(0, 1 - distance / 92);
      const opacity = Math.pow(proximity, 1.65) * (inside ? 1 : 0.72);
      item.style.setProperty("--edge-x", `${localX}px`);
      item.style.setProperty("--edge-y", `${localY}px`);
      item.style.setProperty("--edge-opacity", opacity.toFixed(3));
    });
  }, []);

  const resetSidebarPointer = useCallback(() => {
    const activeElement = document.activeElement;
    if (sidebarCollapsed && activeElement instanceof HTMLElement && sideNavRef.current?.contains(activeElement)) {
      activeElement.blur();
    }
    sideNavRef.current?.querySelectorAll<HTMLElement>(".side-tool, .all-tools-button").forEach((item) => {
      item.style.setProperty("--edge-opacity", "0");
    });
  }, [sidebarCollapsed]);

  const chooseTool = useCallback((tool: ToolId) => {
    if (tool === activeTool) {
      setLauncherOpen(false);
      setToolSearch("");
      return;
    }
    setActiveTool(tool);
    window.scrollTo(0, 0);
    setLauncherOpen(false);
    setToolSearch("");
    window.localStorage.setItem("kaihe:last-tool", tool);
    window.history.replaceState(null, "", `#${tool}`);
  }, [activeTool]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const stored = window.localStorage.getItem("kaihe:last-tool");
    const initial = hash === "pdf" || hash === "split" || hash === "compress" || hash === "remove-bg" || hash === "rename" ? hash : stored;
    if (initial === "pdf" || initial === "split" || initial === "compress" || initial === "remove-bg" || initial === "rename") setActiveTool(initial);

    const handleKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setLauncherOpen((open) => !open);
      } else if (event.key === "Escape") {
        setLauncherOpen(false);
      } else if (event.altKey && (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5")) {
        event.preventDefault();
        chooseTool(event.key === "1" ? "split" : event.key === "2" ? "pdf" : event.key === "3" ? "compress" : event.key === "4" ? "remove-bg" : "rename");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [chooseTool]);

  useEffect(() => {
    const uploadSelector = ".dropzone-empty, .compress-empty, .remove-bg-empty, .rename-empty";
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const trackUploadMotion = (event: PointerEvent) => {
      if (event.pointerType === "touch" || !(event.target instanceof Element)) return;
      const zone = event.target.closest<HTMLElement>(uploadSelector);
      if (!zone) return;

      const rect = zone.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const xRatio = clamp((localX - rect.width / 2) / (rect.width / 2), -1, 1);
      const yRatio = clamp((localY - rect.height / 2) / (rect.height / 2), -1, 1);
      zone.style.setProperty("--drop-shift-x", `${(xRatio * 6).toFixed(2)}px`);
      zone.style.setProperty("--drop-shift-y", `${(yRatio * 4 - 2).toFixed(2)}px`);
      zone.style.setProperty("--drop-rotate", `${(xRatio * 1.2).toFixed(2)}deg`);
    };

    const resetUploadMotion = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const zone = event.target.closest<HTMLElement>(uploadSelector);
      if (!zone || (event.relatedTarget instanceof Node && zone.contains(event.relatedTarget))) return;
      zone.style.setProperty("--drop-shift-x", "0px");
      zone.style.setProperty("--drop-shift-y", "-2px");
      zone.style.setProperty("--drop-rotate", "0deg");
    };

    document.addEventListener("pointermove", trackUploadMotion, { passive: true });
    document.addEventListener("pointerout", resetUploadMotion, { passive: true });
    return () => {
      document.removeEventListener("pointermove", trackUploadMotion);
      document.removeEventListener("pointerout", resetUploadMotion);
    };
  }, []);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    setDirectorySupported("showDirectoryPicker" in window);
  }, []);

  useEffect(() => {
    return () => imagesRef.current.forEach((item) => URL.revokeObjectURL(item.thumbnailUrl));
  }, []);

  const selected = images.find((image) => image.id === selectedId) ?? images[0] ?? null;
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!selected) {
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(selected.file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [selected]);

  const totalSize = useMemo(() => images.reduce((sum, image) => sum + image.file.size, 0), [images]);

  const addFiles = useCallback(async (incoming: File[]) => {
    const known = new Set(imagesRef.current.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`));
    let duplicates = 0;
    const valid = incoming.filter((file) => {
      if (!ACCEPTED_TYPES.includes(file.type)) return false;
      const key = `${file.name}:${file.size}:${file.lastModified}`;
      if (known.has(key)) {
        duplicates += 1;
        return false;
      }
      known.add(key);
      return true;
    });
    if (!valid.length) {
      setMessage(duplicates ? `这 ${duplicates} 张图片已经在列表中，没有重复添加。` : "没有发现支持的图片，请选择 JPG、PNG、WebP、GIF 或 BMP 文件。");
      return;
    }

    setImporting(true);
    setImportProgress({ current: 0, total: valid.length });
    setMessage("");
    const ready: ImageItem[] = [];
    let failed = 0;

    for (let index = 0; index < valid.length; index += 1) {
      try {
        ready.push(await inspectAndThumbnail(valid[index]));
      } catch {
        failed += 1;
      }
      setImportProgress({ current: index + 1, total: valid.length });
      await yieldToBrowser();
    }

    setImages((current) => [...current, ...ready]);
    setSelectedId((current) => current ?? ready[0]?.id ?? null);
    setMessage(failed ? `${failed} 张图片无法读取，已跳过。` : duplicates ? `已跳过 ${duplicates} 张重复图片。` : valid.length >= 20 ? `已用低内存模式准备 ${ready.length} 张图片。` : "");
    setImporting(false);
  }, []);

  const removeImage = (id: string) => {
    setImages((current) => {
      const target = current.find((item) => item.id === id);
      if (target) URL.revokeObjectURL(target.thumbnailUrl);
      const next = current.filter((item) => item.id !== id);
      if (selectedId === id) setSelectedId(next[0]?.id ?? null);
      return next;
    });
  };

  const clearAll = () => {
    images.forEach((item) => URL.revokeObjectURL(item.thumbnailUrl));
    setImages([]);
    setSelectedId(null);
    setMessage("");
  };

  const processAll = async (downloadAsZip = false) => {
    if (!images.length || processing) return;

    const directoryPicker = getOutputDirectoryPicker();
    let outputDirectory: OutputDirectoryHandle | null = null;

    if (directoryPicker && !downloadAsZip) {
      try {
        outputDirectory = await directoryPicker({ mode: "readwrite", id: "fangcun-split-output-v2", startIn: "downloads" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          setMessage("已取消选择输出文件夹。");
          return;
        }
        setMessage(OUTPUT_FOLDER_TIP);
        return;
      }
    }

    setProcessing(true);
    setProgress(0);
    setMessage("");

    try {
      const mime = `image/${format}`;
      const extension = format === "jpeg" ? "jpg" : format;
      const cleanPrefix = prefix.trim().replace(/[\\/:*?"<>|]/g, "-");
      const zip = outputDirectory ? null : new JSZip();
      const outputFolder = zip?.folder("split-images") ?? null;
      let processed = 0;

      for (const item of images) {
        const sourceUrl = URL.createObjectURL(item.file);
        let image: HTMLImageElement | null = null;
        try {
          image = await loadImage(sourceUrl);
          const splitAt = direction === "vertical"
            ? Math.round(image.naturalWidth * (splitPercent / 100))
            : Math.round(image.naturalHeight * (splitPercent / 100));
          const maxGutter = direction === "vertical" ? image.naturalWidth - 2 : image.naturalHeight - 2;
          const safeGutter = Math.min(gutter, maxGutter);
          const before = Math.floor(safeGutter / 2);
          const after = Math.ceil(safeGutter / 2);

          const parts = direction === "vertical"
            ? [
                { label: "（1）", sx: 0, sy: 0, sw: Math.max(1, splitAt - before), sh: image.naturalHeight },
                { label: "（2）", sx: Math.min(image.naturalWidth - 1, splitAt + after), sy: 0, sw: Math.max(1, image.naturalWidth - splitAt - after), sh: image.naturalHeight },
              ]
            : [
                { label: "（1）", sx: 0, sy: 0, sw: image.naturalWidth, sh: Math.max(1, splitAt - before) },
                { label: "（2）", sx: 0, sy: Math.min(image.naturalHeight - 1, splitAt + after), sw: image.naturalWidth, sh: Math.max(1, image.naturalHeight - splitAt - after) },
              ];

          for (const part of parts) {
            const canvas = document.createElement("canvas");
            canvas.width = part.sw;
            canvas.height = part.sh;
            const context = canvas.getContext("2d", { alpha: format !== "jpeg" });
            if (!context) throw new Error("浏览器无法创建画布");
            if (format === "jpeg") {
              context.fillStyle = "#ffffff";
              context.fillRect(0, 0, canvas.width, canvas.height);
            }
            context.drawImage(image, part.sx, part.sy, part.sw, part.sh, 0, 0, part.sw, part.sh);
            const blob = await canvasToBlob(canvas, mime, quality / 100);
            const filename = `${cleanPrefix}${baseName(item.file.name)}${part.label}.${extension}`;

            if (outputDirectory) {
              const fileHandle = await outputDirectory.getFileHandle(filename, { create: true });
              const writable = await fileHandle.createWritable();
              await writable.write(blob);
              await writable.close();
            } else {
              outputFolder?.file(filename, blob);
            }

            canvas.width = 1;
            canvas.height = 1;
          }
        } finally {
          if (image) image.src = "";
          URL.revokeObjectURL(sourceUrl);
        }

        processed += 1;
        setProgress(Math.round((processed / images.length) * (outputDirectory ? 100 : 85)));
        setMessage(`正在处理并保存：${processed} / ${images.length} 张`);
        await yieldToBrowser();
      }

      if (zip) {
        const archive = await zip.generateAsync(
          { type: "blob", compression: "STORE", streamFiles: true },
          (meta) => setProgress(85 + Math.round(meta.percent * 0.15)),
        );
        zip.remove("split-images");
        const downloadUrl = downloadBlob(archive, `split-images-${new Date().toISOString().slice(0, 10)}.zip`);
        await yieldToBrowser(900);
        URL.revokeObjectURL(downloadUrl);
      }

      setProgress(100);
      setMessage(outputDirectory
        ? `已完成：${images.length * 2} 个文件已全部保存到“${outputDirectory.name}”文件夹。`
        : `已完成 ${images.length} 张图片，共生成 ${images.length * 2} 个文件，已打包为一个 ZIP。`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "处理时遇到问题，请重试。");
    } finally {
      setProcessing(false);
    }
  };

  const splitStyle = direction === "vertical"
    ? { left: `${splitPercent}%`, top: 0, width: `${Math.max(gutter, 2)}px`, height: "100%", transform: "translateX(-50%)" }
    : { top: `${splitPercent}%`, left: 0, height: `${Math.max(gutter, 2)}px`, width: "100%", transform: "translateY(-50%)" };

  const currentTool = TOOL_CATALOG.find((tool) => tool.id === activeTool) ?? TOOL_CATALOG[0];
  const filteredTools = TOOL_CATALOG.filter((tool) => {
    const query = toolSearch.trim().toLowerCase();
    return !query || tool.name.toLowerCase().includes(query) || tool.subtitle.toLowerCase().includes(query);
  });

  const toggleSidebar = () => setSidebarCollapsed((collapsed) => !collapsed);

  return (
    <main className={`app-shell toolbox-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <aside ref={sideNavRef} className="side-nav" aria-label="工具导航" onPointerMove={trackSidebarPointer} onPointerLeave={resetSidebarPointer}>
        <span className="sidebar-ambient" aria-hidden="true"><i /><i /><i /><i /></span>
        <div className="side-nav-head">
          <button className="side-brand" type="button" aria-label={sidebarCollapsed ? "固定展开工具栏" : "收起工具栏"} aria-expanded={!sidebarCollapsed} onClick={toggleSidebar}>
            <BrandOrb />
            <span className="side-brand-copy"><b>方寸</b><small>LOCAL UTILITY</small></span>
          </button>
        </div>
        <p className="side-label">工作工具</p>
        <nav className="side-tools">
          {TOOL_CATALOG.map((tool) => (
            <button
              type="button"
              key={tool.id}
              className={`side-tool ${activeTool === tool.id ? "active" : ""}`}
              aria-label={tool.name}
              aria-current={activeTool === tool.id ? "page" : undefined}
              onClick={(event) => {
                if (event.detail > 0) event.currentTarget.blur();
                chooseTool(tool.id);
              }}
              title={sidebarCollapsed ? tool.name : undefined}
            >
              <span className="side-tool-icon"><img src={SIDEBAR_ICON_SOURCE[tool.id]} alt="" /></span>
              <span className="side-tool-copy"><b>{tool.name}</b><small>{tool.subtitle}</small></span>
              <kbd>⌥{tool.shortcut}</kbd>
            </button>
          ))}
        </nav>
        <div className="side-nav-footer">
          <button className="all-tools-button" type="button" onClick={() => setLauncherOpen(true)} title={sidebarCollapsed ? "搜索工具" : undefined}>
            <span className="side-tool-icon"><ToolIcon type="search" /></span>
            <span className="side-tool-copy"><b>搜索工具</b><small>快速前往任意工具</small></span>
            <kbd>⌘K</kbd>
          </button>
          <p className="coming-soon"><span /> 更多工具持续加入</p>
        </div>
      </aside>

      <div className="toolbox-main">
      <header className="topbar toolbox-topbar">
        <div className="current-tool"><span><ToolIcon type={currentTool.id} /></span><b>{currentTool.name}</b></div>
        <div className="top-actions">
          <button className="command-trigger" type="button" onClick={() => setLauncherOpen(true)}><ToolIcon type="search" /> 搜索工具 <kbd>Ctrl K</kbd></button>
          <div className="privacy-note"><span aria-hidden="true">●</span> 仅在本机处理 · 不上传</div>
        </div>
      </header>

      {launcherOpen && (
        <div className="tool-launcher-overlay" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setLauncherOpen(false); }}>
          <section className="tool-launcher" role="dialog" aria-modal="true" aria-label="搜索并切换工具">
            <div className="launcher-search"><span aria-hidden="true">⌕</span><input autoFocus value={toolSearch} onChange={(event) => setToolSearch(event.target.value)} placeholder="搜索工具，例如：PDF" /><kbd>ESC</kbd></div>
            <div className="launcher-heading"><span>可用工具</span><small>{filteredTools.length} 个</small></div>
            <div className="launcher-grid">
              {filteredTools.map((tool) => (
                <button type="button" key={tool.id} className={`launcher-card ${activeTool === tool.id ? "active" : ""}`} onClick={() => chooseTool(tool.id)}>
                  <span className="launcher-icon"><ToolIcon type={tool.id} /></span><span><b>{tool.name}</b><small>{tool.subtitle}</small></span><kbd>⌥{tool.shortcut}</kbd>
                </button>
              ))}
              {!filteredTools.length && <p className="launcher-empty">暂时没有匹配的工具</p>}
            </div>
            <div className="launcher-coming"><span aria-hidden="true">＋</span><div><b>更多工具</b><small>新增工具会显示在侧栏与搜索面板中。</small></div></div>
          </section>
        </div>
      )}

      <div className="tool-view">

      {activeTool === "split" ? <>
      <section className="hero" id="top">
        <div>
          <p className="eyebrow">图片切分 · 本地批处理</p>
          <h1>把跨页图片，<em>利落地分开。</em></h1>
          <p className="hero-copy">批量导入扫描图，设置切分方向、位置和书缝宽度后统一导出。</p>
        </div>
        <div className="hero-stat" aria-label="工具特点">
          <strong>2×</strong>
          <span>每张输入<br />两张输出</span>
        </div>
      </section>

      <section className="workspace" aria-label="图片切分工作区">
        <div className="workbench">
          <div
            className={`dropzone ${dragging ? "is-dragging" : ""} ${images.length ? "has-files" : ""}`}
            onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              if (!importing && !processing) void addFiles(Array.from(event.dataTransfer.files));
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              disabled={importing || processing}
              accept="image/jpeg,image/png,image/webp,image/gif,image/bmp"
              onChange={(event) => {
                void addFiles(Array.from(event.target.files ?? []));
                event.target.value = "";
              }}
              aria-label="选择图片"
            />

            {!images.length ? (
              <button className="dropzone-empty" type="button" disabled={importing} onClick={() => fileInputRef.current?.click()}>
                <span className={`drop-icon ${importing ? "is-loading" : ""}`} aria-hidden="true">{importing ? "…" : <ToolIcon type="split" />}</span>
                <strong>{importing ? `正在准备预览 ${importProgress.current}/${importProgress.total}` : "拖入需要切分的图片"}</strong>
                <span>{importing ? "逐张读取以节省内存，请稍候" : "或点击选择多张图片 / JPG、PNG、WebP、GIF、BMP"}</span>
                <small className="local-processing-note"><i /> 仅在本机处理 · 图片不会上传</small>
              </button>
            ) : (
              <div className="preview-area">
                <div className="preview-toolbar">
                  <div>
                    <span className="status-dot" />
                    <strong>{selected?.file.name}</strong>
                    <span>{selected?.width} × {selected?.height} px</span>
                  </div>
                  <button type="button" disabled={importing || processing} onClick={() => fileInputRef.current?.click()}>{importing ? `${importProgress.current}/${importProgress.total}` : "＋ 添加图片"}</button>
                </div>
                <div className="canvas-stage">
                  {selected && previewUrl && (
                    <div className="image-frame">
                      <img src={previewUrl} alt={`${selected.file.name} 切分预览`} />
                      <div
                        className={`split-guide ${gutter ? "with-gutter" : ""}`}
                        style={splitStyle}
                        aria-hidden="true"
                      />
                      <span className={`part-label first ${direction}`}>{direction === "vertical" ? "左页" : "上页"}</span>
                      <span className={`part-label second ${direction}`}>{direction === "vertical" ? "右页" : "下页"}</span>
                    </div>
                  )}
                </div>
                <p className="preview-hint">预览线会随右侧设置实时移动 · 导出时保留原始分辨率</p>
              </div>
            )}
          </div>

          {images.length > 0 && (
            <div className="queue-panel">
              <div className="queue-head">
                <div><strong>待处理</strong><span>{images.length} 张 · {formatBytes(totalSize)}{importing ? ` · 正在加入 ${importProgress.current}/${importProgress.total}` : ""}</span></div>
                <button type="button" disabled={importing || processing} onClick={clearAll}>清空全部</button>
              </div>
              <div className="thumb-list">
                {images.map((item, index) => (
                  <button
                    type="button"
                    className={`thumb-card ${selected?.id === item.id ? "selected" : ""}`}
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    aria-label={`预览 ${item.file.name}`}
                  >
                    <span className="thumb-index">{String(index + 1).padStart(2, "0")}</span>
                    <img src={item.thumbnailUrl} alt="" loading="lazy" decoding="async" />
                    <span className="thumb-info"><b>{item.file.name}</b><small>{item.width} × {item.height}</small></span>
                    <span
                      className="remove-button"
                      role="button"
                      tabIndex={0}
                      onClick={(event) => { event.stopPropagation(); removeImage(item.id); }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          event.stopPropagation();
                          removeImage(item.id);
                        }
                      }}
                      aria-label={`移除 ${item.file.name}`}
                    >×</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="settings-card">
          <div className="settings-title"><span>01</span><div><b>切分设置</b><small>SPLIT SETTINGS</small></div></div>

          <fieldset>
            <legend>切分方向</legend>
            <div className="segmented">
              <button type="button" className={direction === "vertical" ? "active" : ""} onClick={() => setDirection("vertical")}>
                <span className="direction-icon vertical-icon" aria-hidden="true" />左右切分
              </button>
              <button type="button" className={direction === "horizontal" ? "active" : ""} onClick={() => setDirection("horizontal")}>
                <span className="direction-icon horizontal-icon" aria-hidden="true" />上下切分
              </button>
            </div>
          </fieldset>

          <fieldset>
            <div className="label-row"><legend>切线位置</legend><output>{splitPercent}%</output></div>
            <input
              className="range"
              type="range"
              min="20"
              max="80"
              value={splitPercent}
              onChange={(event) => setSplitPercent(Number(event.target.value))}
              style={{ "--range-value": `${((splitPercent - 20) / 60) * 100}%` } as React.CSSProperties}
              aria-label="切线位置百分比"
            />
            <div className="range-labels"><span>20%</span><button type="button" onClick={() => setSplitPercent(50)}>居中</button><span>80%</span></div>
          </fieldset>

          <fieldset>
            <div className="label-row"><legend>裁除中缝</legend><span className="unit-input"><input type="number" min="0" max="500" value={gutter} onChange={(event) => setGutter(Math.max(0, Math.min(500, Number(event.target.value))))} aria-label="裁除中缝像素" /> px</span></div>
            <p className="field-help">从切线两侧平均裁掉指定宽度，适合去除装订阴影。</p>
          </fieldset>

          <div className="divider" />
          <div className="settings-title compact"><span>02</span><div><b>输出设置</b><small>EXPORT SETTINGS</small></div></div>

          <fieldset>
            <legend>图片格式</legend>
            <div className="format-grid">
              {(["png", "jpeg", "webp"] as OutputFormat[]).map((item) => (
                <button type="button" key={item} className={format === item ? "active" : ""} onClick={() => setFormat(item)}>
                  {item === "jpeg" ? "JPG" : item.toUpperCase()}
                </button>
              ))}
            </div>
          </fieldset>

          {format !== "png" && (
            <fieldset>
              <div className="label-row"><legend>输出质量</legend><output>{quality}%</output></div>
              <input className="range" type="range" min="50" max="100" value={quality} onChange={(event) => setQuality(Number(event.target.value))} style={{ "--range-value": `${(quality - 50) * 2}%` } as React.CSSProperties} aria-label="输出质量" />
            </fieldset>
          )}

          <fieldset>
            <legend>文件名前缀 <span>选填</span></legend>
            <input className="text-input" type="text" value={prefix} onChange={(event) => setPrefix(event.target.value)} placeholder="例如：素描基础_" maxLength={40} />
            <p className="field-help">输出示例：{prefix || ""}原文件名（1） / 原文件名（2）.{format === "jpeg" ? "jpg" : format}</p>
          </fieldset>

          <div className="export-block">
            <div className="export-summary"><span>预计输出</span><strong>{images.length * 2}<small> 个文件</small></strong></div>
            <p className="batch-note"><b>{directorySupported ? "直接保存到一个文件夹" : "兼容输出模式"}</b>{directorySupported ? OUTPUT_FOLDER_TIP : "当前浏览器不支持选择文件夹，将把全部图片打包为一个 ZIP。"}</p>
            {processing && <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>}
            <div className="export-actions"><button className="export-button" type="button" disabled={!images.length || importing || processing} onClick={() => void processAll()}><span>{processing ? `正在处理 ${progress}%` : directorySupported ? "选择输出文件夹并开始" : "切分并下载一个 ZIP"}</span><b aria-hidden="true">↘</b></button>{directorySupported && <button className="zip-fallback-button" type="button" disabled={!images.length || importing || processing} onClick={() => void processAll(true)}>下载一个 ZIP</button>}</div>
            {message && <p className="message" role="status">{message}</p>}
          </div>
        </aside>
      </section>
      </> : activeTool === "pdf" ? <PdfToImages directorySupported={directorySupported} /> : activeTool === "compress" ? <ImageCompressor directorySupported={directorySupported} /> : activeTool === "remove-bg" ? <BackgroundRemover directorySupported={directorySupported} /> : <ImageRenamer directorySupported={directorySupported} />}
      </div>

      <footer><span>方寸 LOCAL UTILITY</span><p>为扫描、排版与归档而生的本地工具箱。</p><span>100% LOCAL</span></footer>
      </div>
    </main>
  );
}
