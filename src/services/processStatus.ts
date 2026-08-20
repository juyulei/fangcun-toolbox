export type CutoutProcessStage = "reading" | "optimizing" | "analyzing" | "refining" | "encoding" | "complete" | "error";

export const CUTOUT_PROCESS_STAGES: ReadonlyArray<{ key: Exclude<CutoutProcessStage, "complete" | "error">; label: string }> = [
  { key: "reading", label: "图片读取中" },
  { key: "optimizing", label: "智能优化图片" },
  { key: "analyzing", label: "AI 分析主体" },
  { key: "refining", label: "边缘精修" },
  { key: "encoding", label: "生成透明图片" },
];

const STAGE_COPY: Record<CutoutProcessStage, { label: string; detail: string }> = {
  reading: { label: "图片读取中", detail: "正在读取图片信息，准备提交处理。" },
  optimizing: { label: "智能优化图片", detail: "正在保留比例与透明通道，优化上传体积。" },
  analyzing: { label: "AI 分析主体", detail: "AI 正在识别主体区域，请保持页面打开。" },
  refining: { label: "边缘精修", detail: "服务已完成主体分析，正在接收精修后的透明图。" },
  encoding: { label: "生成透明图片", detail: "正在验证并生成可下载的透明 PNG。" },
  complete: { label: "完成", detail: "透明背景图片已生成。" },
  error: { label: "处理未完成", detail: "本次图片没有被修改，可检查后重试。" },
};

export function processStageCopy(stage: CutoutProcessStage) {
  return STAGE_COPY[stage];
}

export function processFailureDetail(code?: string) {
  if (code === "timeout") return "处理时间较长，本次未完成。原图未被修改，请稍后重试。";
  if (code === "network") return "暂时无法连接抠图服务。原图未被修改，请检查网络后重试。";
  if (code === "file_too_large" || code === "http_413") return "图片超过 50 MB 上传限制。可先使用智能优化后重试。";
  return "本次图片没有被修改，可检查后重试。";
}
