export const MAX_UPLOAD_FILE_BYTES = 50 * 1024 * 1024;
export const BACKEND_UPLOAD_BYTES = 50 * 1024 * 1024;
// Preserve the existing Smart Upload target; the API independently enforces
// the upgraded 50 MiB file limit.
export const SAFE_UPLOAD_TARGET_BYTES = 20 * 1024 * 1024;
export const DIMENSION_CANDIDATE_PX = 4096;

type UploadFormat = "image/jpeg" | "image/png" | "image/webp";
export type SmartUploadReason = "none" | "dimensions" | "size" | "both";

export type ImageStats = {
  size: number;
  width: number;
  height: number;
  format: string;
};

export type SmartUploadResult = {
  file: File;
  optimized: boolean;
  original: ImageStats;
  processed: ImageStats;
  reason: SmartUploadReason;
  preprocessingMs: number;
};

export type SmartUploadStage = "reading" | "optimizing";

function isSupportedFormat(file: File): file is File & { type: UploadFormat } {
  return file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/webp";
}

export function classifySmartUpload(size: number, width: number, height: number, _format: string): SmartUploadReason {
  const dimensions = Math.max(width, height) > DIMENSION_CANDIDATE_PX;
  const sizeCandidate = size >= SAFE_UPLOAD_TARGET_BYTES;
  if (dimensions && sizeCandidate) return "both";
  if (dimensions) return "dimensions";
  if (sizeCandidate) return "size";
  return "none";
}

function stats(file: File, width: number, height: number): ImageStats {
  return { size: file.size, width, height, format: file.type || "unknown" };
}

function outputName(file: File, type: string) {
  const extension = type === "image/jpeg" ? "jpg" : type.split("/")[1] ?? "bin";
  return `${file.name.replace(/\.[^.]+$/, "")}.${extension}`;
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("图片优化失败")), type, quality);
  });
}

async function encodeCandidate(file: File, width: number, height: number): Promise<File> {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  try {
    // Preserve alpha for PNG/WebP; JPEG is intentionally RGB-only.
    const context = canvas.getContext("2d", { alpha: file.type !== "image/jpeg" });
    if (!context) throw new Error("浏览器无法创建图片优化画布");
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    if (file.type === "image/jpeg") {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
    }
    context.drawImage(bitmap, 0, 0, width, height);
    const outputType = file.type === "image/jpeg" ? "image/jpeg" : file.type;
    const quality = outputType === "image/jpeg" ? 0.94 : undefined;
    const blob = await canvasToBlob(canvas, outputType, quality);
    return new File([blob], outputName(file, outputType), { type: outputType, lastModified: file.lastModified });
  } finally {
    bitmap.close();
    canvas.width = 1;
    canvas.height = 1;
  }
}

export async function prepareSmartUpload(file: File, onStage?: (stage: SmartUploadStage) => void): Promise<SmartUploadResult> {
  if (!isSupportedFormat(file)) throw new Error("不支持此图片格式，请选择 JPG、PNG 或 WebP。");
  if (file.size > MAX_UPLOAD_FILE_BYTES) throw new Error("图片超过 50 MB 产品上限，无法处理。");
  const started = performance.now();
  onStage?.("reading");
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const width = bitmap.width;
  const height = bitmap.height;
  bitmap.close();
  const original = stats(file, width, height);
  const reason = classifySmartUpload(file.size, width, height, file.type);
  if (reason === "none") {
    return { file, optimized: false, original, processed: original, reason, preprocessingMs: Math.round(performance.now() - started) };
  }

  onStage?.("optimizing");

  // WebP may contain alpha and browser re-encoding semantics vary. Keep it
  // untouched when it already fits; do not trade uncertain edge quality for bytes.
  if (file.type === "image/webp") {
    if (file.size <= BACKEND_UPLOAD_BYTES) {
      return { file, optimized: false, original, processed: original, reason, preprocessingMs: Math.round(performance.now() - started) };
    }
    throw new Error("此 WebP 图片无法在不冒险损失透明边缘的情况下优化到 50 MB 上传限制以内。");
  }

  const ratio = Math.min(1, DIMENSION_CANDIDATE_PX / Math.max(width, height));
  // Floor the non-dominant edge so a later max_2048 round-trip does not
  // introduce a one-pixel aspect-ratio drift (important for regression parity).
  const outputWidth = width >= height ? DIMENSION_CANDIDATE_PX : Math.max(1, Math.floor(width * ratio));
  const outputHeight = height >= width ? DIMENSION_CANDIDATE_PX : Math.max(1, Math.floor(height * ratio));
  const processed = await encodeCandidate(file, outputWidth, outputHeight);
  if (processed.size > BACKEND_UPLOAD_BYTES) {
    if (file.size <= BACKEND_UPLOAD_BYTES) {
      return {
        file,
        optimized: false,
        original,
        processed: original,
        reason,
        preprocessingMs: Math.round(performance.now() - started),
      };
    }
    throw new Error("图片优化后仍超过当前服务 50 MB 上传限制，请选择更小的图片。");
  }
  const processedStats = stats(processed, outputWidth, outputHeight);
  return {
    file: processed,
    optimized: true,
    original,
    processed: processedStats,
    reason,
    preprocessingMs: Math.round(performance.now() - started),
  };
}
