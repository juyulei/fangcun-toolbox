import type { Dataset, EventSeverity, HealthStatus, ModelRevision, QualityRun, TaskStatus, Tool } from "../domain";

export type StatusSeverity = "healthy" | "unknown" | "warning" | "error" | "critical";
export type StatusTone = "success" | "danger" | "warning" | "neutral" | "info";

export type StatusPresentation = {
  severity: StatusSeverity;
  tone: StatusTone;
  label: string;
};

const severityRank: Record<StatusSeverity, number> = {
  healthy: 0,
  unknown: 1,
  warning: 2,
  error: 3,
  critical: 4,
};

const presentation = (severity: StatusSeverity, tone: StatusTone, label: string): StatusPresentation => ({ severity, tone, label });

export function resolveRuntimeStatus(status: HealthStatus): StatusPresentation {
  const statuses: Record<HealthStatus, StatusPresentation> = {
    healthy: presentation("healthy", "success", "正常"),
    degraded: presentation("warning", "warning", "性能下降"),
    unhealthy: presentation("error", "danger", "不可用"),
    offline: presentation("error", "danger", "离线"),
    unknown: presentation("unknown", "neutral", "待验证"),
  };
  return statuses[status];
}

export function resolveTaskStatus(status: TaskStatus): StatusPresentation {
  const statuses: Record<TaskStatus, StatusPresentation> = {
    queued: presentation("unknown", "info", "排队中"),
    running: presentation("unknown", "info", "处理中"),
    succeeded: presentation("healthy", "success", "已完成"),
    failed: presentation("error", "danger", "失败"),
    cancelled: presentation("unknown", "neutral", "已取消"),
  };
  return statuses[status];
}

export function resolveEventStatus(severity: EventSeverity): StatusPresentation {
  const statuses: Record<EventSeverity, StatusPresentation> = {
    critical: presentation("critical", "danger", "严重"),
    error: presentation("error", "danger", "错误"),
    warning: presentation("warning", "warning", "警告"),
    info: presentation("healthy", "info", "信息"),
    debug: presentation("unknown", "neutral", "调试"),
  };
  return statuses[severity];
}

export function resolveQualityStatus(status: QualityRun["status"]): StatusPresentation {
  const statuses: Record<QualityRun["status"], StatusPresentation> = {
    passed: presentation("healthy", "success", "通过"),
    failed: presentation("error", "danger", "失败"),
    warning: presentation("warning", "warning", "警告"),
    pending: presentation("unknown", "info", "待验证"),
    unknown: presentation("unknown", "neutral", "待验证"),
  };
  return statuses[status];
}

export function resolveToolStatus(status: Tool["status"]): StatusPresentation {
  const statuses: Record<Tool["status"], StatusPresentation> = {
    active: presentation("healthy", "success", "可用"),
    preview: presentation("warning", "warning", "预览"),
    deprecated: presentation("warning", "warning", "已弃用"),
    disabled: presentation("unknown", "neutral", "已停用"),
  };
  return statuses[status];
}

export function resolveDatasetStatus(status: Dataset["status"]): StatusPresentation {
  const statuses: Record<Dataset["status"], StatusPresentation> = {
    active: presentation("healthy", "success", "可用"),
    candidate: presentation("warning", "warning", "候选"),
    archived: presentation("unknown", "neutral", "已归档"),
    unknown: presentation("unknown", "neutral", "待验证"),
  };
  return statuses[status];
}

export function resolveModelStatus(status: ModelRevision["status"]): StatusPresentation {
  const statuses: Record<ModelRevision["status"], StatusPresentation> = {
    active: presentation("healthy", "success", "已部署"),
    candidate: presentation("warning", "warning", "候选"),
    retired: presentation("unknown", "neutral", "已退役"),
    unknown: presentation("unknown", "neutral", "待验证"),
  };
  return statuses[status];
}

export function resolveSystemStatus(statuses: StatusPresentation[]): StatusPresentation {
  const mostSevere = statuses.reduce<StatusPresentation>(
    (current, candidate) => severityRank[candidate.severity] > severityRank[current.severity] ? candidate : current,
    presentation("healthy", "success", "Healthy"),
  );

  const labels: Record<StatusSeverity, string> = {
    healthy: "正常",
    unknown: "待验证",
    warning: "警告",
    error: "错误",
    critical: "严重",
  };
  const tones: Record<StatusSeverity, StatusTone> = {
    healthy: "success",
    unknown: "neutral",
    warning: "warning",
    error: "danger",
    critical: "danger",
  };

  return presentation(mostSevere.severity, tones[mostSevere.severity], labels[mostSevere.severity]);
}
