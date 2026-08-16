const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;
const REQUEST_TIMEOUT_MS = 330_000;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export type CutoutMetrics = Record<string, unknown>;

export class CutoutError extends Error {
  constructor(
    message: string,
    public readonly code = "cutout_error",
    public readonly status?: number,
    public readonly requestId?: string,
  ) {
    super(message);
    this.name = "CutoutError";
  }
}

function apiBase() {
  const value = import.meta.env.VITE_CUTOUT_API_BASE?.trim();
  if (!value) throw new CutoutError("智能抠图服务尚未配置，请稍后再试。", "not_configured");
  return value.replace(/\/+$/, "");
}

function parseMetrics(value: string | null): CutoutMetrics | undefined {
  if (!value) return undefined;
  try { return JSON.parse(value) as CutoutMetrics; } catch { return undefined; }
}

export async function cutout(file: File): Promise<{ blob: Blob; metrics?: CutoutMetrics; requestId?: string; status: number }> {
  if (!ALLOWED_TYPES.has(file.type)) throw new CutoutError("不支持此图片格式，请选择 JPG、PNG 或 WebP。", "unsupported_type");
  if (file.size > MAX_UPLOAD_BYTES) throw new CutoutError("图片不能超过 25 MB，请压缩后重试。", "file_too_large");

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const form = new FormData();
  form.append("file", file, file.name);
  const started = performance.now();
  try {
    let response: Response;
    try {
      response = await fetch(`${apiBase()}/v1/cutout`, { method: "POST", body: form, signal: controller.signal });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") throw new CutoutError("处理时间较长，本次未完成，请重试。", "timeout");
      throw new CutoutError("智能抠图服务暂时无法连接，请稍后重试。", "network");
    }
    const requestId = response.headers.get("X-Fangcun-Request-Id") ?? undefined;
    if (!response.ok) {
      let detail = "智能抠图服务处理失败，请稍后重试。";
      if (response.status === 413) detail = "图片不能超过 25 MB，请压缩后重试。";
      else if (response.status === 415) detail = "不支持此图片格式，请选择 JPG、PNG 或 WebP。";
      throw new CutoutError(detail, `http_${response.status}`, response.status, requestId);
    }
    let blob: Blob;
    try {
      blob = await response.blob();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new CutoutError("处理时间较长，本次未完成，请重试。", "timeout", response.status, requestId);
      }
      throw new CutoutError("智能抠图结果下载中断，请稍后重试。", "network", response.status, requestId);
    }
    if (!blob.type.startsWith("image/") || blob.size === 0) throw new CutoutError("服务返回了无效图片，请重试。", "invalid_response", response.status, requestId);
    const metrics = parseMetrics(response.headers.get("X-Fangcun-Metrics"));
    console.info("[cutout] result", { inputBytes: file.size, outputBytes: blob.size, requestMs: Math.round(performance.now() - started), status: response.status, requestId, metrics });
    return { blob, metrics, requestId, status: response.status };
  } finally {
    window.clearTimeout(timeout);
  }
}

export const cutoutLimits = { maxUploadBytes: MAX_UPLOAD_BYTES, requestTimeoutMs: REQUEST_TIMEOUT_MS };
