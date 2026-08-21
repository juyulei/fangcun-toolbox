export type Tone = "success" | "warning" | "neutral";

export const overview = {
  environment: "生产环境",
  release: "rel_2026_08_21_01",
  model: "fangcun-assistant@2026.08.3",
  updatedAt: "今天 15:24",
  releaseUpdatedAt: "10:06",
  quality: "128 / 128 passed",
  latency: "P95 1.84s",
  issues: "2 open",
  runtime: "4 / 4 healthy",
};

type NavigationItem = {
  section: "WORKSPACE" | "ASSETS" | "ASSURANCE" | "SYSTEM";
  label: string;
  route?: "overview" | "tasks" | "tools" | "models" | "datasets" | "quality" | "runtime" | "logs" | "settings";
};

export const navigation: NavigationItem[] = [
  { section: "WORKSPACE", label: "Overview", route: "overview" },
  { section: "WORKSPACE", label: "Tasks", route: "tasks" },
  { section: "ASSETS", label: "Tools", route: "tools" },
  { section: "ASSETS", label: "Models", route: "models" },
  { section: "ASSETS", label: "Datasets", route: "datasets" },
  { section: "ASSURANCE", label: "Quality", route: "quality" },
  { section: "SYSTEM", label: "Runtime", route: "runtime" },
  { section: "SYSTEM", label: "Logs", route: "logs" },
  { section: "SYSTEM", label: "Settings", route: "settings" },
] as const;

export const activities: Array<{ time: string; title: string; state: string; tone: Tone }> = [
  { time: "10:06", title: "版本 rel_2026_08_21_01 已完成生产验证", state: "已验证", tone: "success" },
  { time: "09:47", title: "Pages Deployment 已同步至当前生产版本", state: "健康", tone: "success" },
  { time: "09:31", title: "质量运行 qrun_2026_08_21_003 通过", state: "通过", tone: "success" },
  { time: "昨日 17:28", title: "版本 rel_2026_08_14_03 已回滚", state: "已回滚", tone: "warning" },
];

export const legacyRuntimeSummary = [
  ["Production Site", "app.fangcun.example"],
  ["Production API", "Mac mini production primary"],
  ["Pages Deployment", "rel_2026_08_21_01"],
] as const;

export const imageJobs = [
  { id: "job_0821_1042", file: "product-glass-01.png", size: "2048 × 2048", model: "Fangcun Cutout v1.2", status: "已完成", duration: "1.82s", time: "今天 10:42", tone: "success" as Tone, format: "PNG · 透明背景", runtime: "Mac mini production primary" },
  { id: "job_0821_1028", file: "portrait-studio-04.jpg", size: "3024 × 4032", model: "Fangcun Cutout v1.2", status: "已完成", duration: "2.16s", time: "今天 10:28", tone: "success" as Tone, format: "PNG · 透明背景", runtime: "Mac mini production primary" },
  { id: "job_0821_1014", file: "catalog-shoe-02.webp", size: "1600 × 1600", model: "Fangcun Cutout v1.2", status: "已完成", duration: "1.47s", time: "今天 10:14", tone: "success" as Tone, format: "PNG · 透明背景", runtime: "Mac mini production primary" },
  { id: "job_0821_0957", file: "leaf-cluster-07.jpg", size: "2400 × 1800", model: "Fangcun Cutout v1.2", status: "需关注", duration: "3.91s", time: "今天 09:57", tone: "warning" as Tone, format: "PNG · 透明背景", runtime: "R7000P fallback" },
] as const;

export const runtimeDevices = [
  { name: "Mac mini production primary", role: "Primary runtime", hardware: "Apple Silicon · 32 GB", status: "Healthy", detail: "verified 今天 15:24", tone: "success" as Tone },
  { name: "R7000P fallback", role: "Fallback runtime", hardware: "RTX GPU · 16 GB", status: "Standby", detail: "verified 今天 15:08", tone: "neutral" as Tone },
] as const;

export const runtimeServices = [
  { name: "Production API", endpoint: "api.fangcun.example", version: "2026.08.3", status: "Healthy", tone: "success" as Tone },
  { name: "Tunnel", endpoint: "production edge", version: "stable", status: "Healthy", tone: "success" as Tone },
  { name: "Pages Deployment", endpoint: "app.fangcun.example", version: "rel_2026_08_21_01", status: "Healthy", tone: "success" as Tone },
] as const;

export const consoleLogs = [
  { time: "15:24:18", level: "INFO", source: "runtime.health", message: "Mac mini production primary verification completed", tone: "success" as Tone },
  { time: "15:18:04", level: "INFO", source: "release.verify", message: "rel_2026_08_21_01 remains verified", tone: "success" as Tone },
  { time: "14:51:32", level: "WARN", source: "quality.staging", message: "Candidate performance warning remains under review", tone: "warning" as Tone },
  { time: "14:36:11", level: "INFO", source: "task.pipeline", message: "Image processing queue returned to zero", tone: "success" as Tone },
] as const;

export const consoleSettings = [
  ["Console version", "v0.1", "Read-only internal workspace"],
  ["Default environment", "Production", "Current verified release is shown in the status bar"],
  ["Data source", "Local mock data", "No remote connection is configured"],
  ["Sync cadence", "Manual snapshot", "Last refreshed today 15:24"],
] as const;
