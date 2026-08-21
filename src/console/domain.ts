/**
 * Console domain layer.
 *
 * These entities describe the operational model shared by every Fangcun tool.
 * They deliberately contain no rendering, transport, persistence, or API logic.
 */

export type EntityId = string;
export type IsoTimestamp = string;

export type HealthStatus = "healthy" | "degraded" | "unhealthy" | "unknown" | "offline";
export type TaskStatus = "queued" | "running" | "succeeded" | "failed" | "cancelled";
export type TaskAttemptStatus = "running" | "succeeded" | "failed" | "cancelled";
export type EventSeverity = "debug" | "info" | "warning" | "error" | "critical";

export interface Tool {
  id: EntityId;
  slug: string;
  name: string;
  category: string;
  version: string;
  status: "active" | "preview" | "deprecated" | "disabled";
  executionMode: "browser" | "runtime" | "hybrid";
  capabilities: string[];
  createdAt: IsoTimestamp;
  updatedAt: IsoTimestamp;
}

export interface Task {
  id: EntityId;
  toolId: EntityId;
  status: TaskStatus;
  submittedAt: IsoTimestamp;
  startedAt?: IsoTimestamp;
  completedAt?: IsoTimestamp;
  runtimeNodeId?: EntityId;
  modelRevisionId?: EntityId;
  latestAttemptId?: EntityId;
  inputSummary: string;
  outputSummary?: string;
  metricSummary: Record<string, number | string>;
}

export interface TaskArtifact {
  id: EntityId;
  taskId: EntityId;
  role: "input" | "output" | "intermediate" | "report";
  kind: "image" | "document" | "archive" | "data" | "other";
  name: string;
  mediaType: string;
  bytes: number;
  reference: string;
  metadata: Record<string, number | string | boolean>;
  createdAt: IsoTimestamp;
}

export interface TaskAttempt {
  id: EntityId;
  taskId: EntityId;
  number: number;
  status: TaskAttemptStatus;
  runtimeNodeId?: EntityId;
  serviceInstanceId?: EntityId;
  modelRevisionId?: EntityId;
  startedAt: IsoTimestamp;
  completedAt?: IsoTimestamp;
  durationMs?: number;
  failureCode?: string;
  failureMessage?: string;
  metrics: Record<string, number | string>;
}

export interface RuntimeNode {
  id: EntityId;
  name: string;
  environment: "production" | "staging" | "development" | "local";
  role: "primary" | "fallback" | "worker" | "development";
  hardware: string;
  software: string;
  capabilities: string[];
  health: HealthStatus;
  lastVerifiedAt?: IsoTimestamp;
}

export interface ServiceInstance {
  id: EntityId;
  type: "api" | "worker" | "tunnel" | "deployment" | "scheduler" | "other";
  name: string;
  runtimeNodeId?: EntityId;
  endpoint?: string;
  version: string;
  health: HealthStatus;
  dependencyIds: EntityId[];
  lastVerifiedAt?: IsoTimestamp;
}

export interface ModelRevision {
  id: EntityId;
  modelId: string;
  revision: string;
  source: string;
  supportedToolIds: EntityId[];
  supportedRuntimeNodeIds: EntityId[];
  qualityBaseline?: string;
  performanceProfile?: string;
  status: "active" | "candidate" | "retired" | "unknown";
}

export interface Dataset {
  id: EntityId;
  name: string;
  version: string;
  sampleCount: number;
  purpose: string;
  status: "active" | "candidate" | "archived" | "unknown";
  updatedAt: IsoTimestamp;
}

export interface QualityRun {
  id: EntityId;
  datasetId: EntityId;
  toolId?: EntityId;
  modelRevisionId?: EntityId;
  status: "passed" | "failed" | "warning" | "pending" | "unknown";
  totalCases: number;
  passedCases: number;
  metrics: Record<string, number | string>;
  baseline: string;
  completedAt?: IsoTimestamp;
}

export interface Event {
  id: EntityId;
  occurredAt: IsoTimestamp;
  severity: EventSeverity;
  domain: "task" | "runtime" | "service" | "model" | "quality" | "release" | "system";
  type: string;
  subjectType: "tool" | "task" | "task_attempt" | "runtime_node" | "service_instance" | "model_revision" | "release";
  subjectId: EntityId;
  toolId?: EntityId;
  taskId?: EntityId;
  taskAttemptId?: EntityId;
  runtimeNodeId?: EntityId;
  serviceInstanceId?: EntityId;
  correlationId?: string;
  message: string;
  metadata: Record<string, number | string | boolean>;
}

export interface ConsoleDomainFixture {
  tools: Tool[];
  tasks: Task[];
  taskArtifacts: TaskArtifact[];
  taskAttempts: TaskAttempt[];
  runtimeNodes: RuntimeNode[];
  serviceInstances: ServiceInstance[];
  modelRevisions: ModelRevision[];
  datasets: Dataset[];
  qualityRuns: QualityRun[];
  events: Event[];
}
