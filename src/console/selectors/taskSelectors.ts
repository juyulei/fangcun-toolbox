import type { ModelRevision, RuntimeNode, Task, TaskArtifact, TaskAttempt } from "../domain";
import { mapQueryResult, type QueryResult } from "../queryResult";
import { taskRepository } from "../repositories/taskRepository";
import { runtimeRepository } from "../repositories/runtimeRepository";

export type TaskDetail = {
  task: Task;
  inputArtifact?: TaskArtifact;
  outputArtifact?: TaskArtifact;
  latestAttempt?: TaskAttempt;
  runtimeNode?: RuntimeNode;
  modelRevision?: ModelRevision;
  artifactState: DetailDataState;
  runtimeState: DetailDataState;
  modelState: DetailDataState;
};

export type DetailDataState = Pick<QueryResult<unknown>, "status" | "error" | "fetchedAt" | "freshness">;

const toDetailDataState = (result: QueryResult<unknown>): DetailDataState => ({
  status: result.status,
  error: result.error,
  fetchedAt: result.fetchedAt,
  freshness: result.freshness,
});

/** Async QueryResult selectors for future page data-state integration. */
export async function queryTaskList(): Promise<QueryResult<Task[]>> {
  return mapQueryResult(await taskRepository.queryList(), (tasks) => [...tasks].sort((left, right) => right.submittedAt.localeCompare(left.submittedAt)));
}

/** @deprecated Use queryTaskList for page-level task reads. */
export async function queryTasks(): Promise<QueryResult<Task[]>> {
  return queryTaskList();
}

export async function queryTaskArtifacts(): Promise<QueryResult<TaskArtifact[]>> {
  return taskRepository.queryArtifacts();
}

export async function queryTaskAttempts(): Promise<QueryResult<TaskAttempt[]>> {
  return taskRepository.queryAttempts();
}

/**
 * Composes a selected task and its read-only relations without treating an
 * unavailable Artifact, Runtime, or Model lookup as a missing Task.
 */
export async function queryTaskDetail(taskId: string): Promise<QueryResult<TaskDetail>> {
  const [taskResult, artifactsResult, attemptsResult, nodesResult, modelsResult] = await Promise.all([
    taskRepository.queryById(taskId),
    taskRepository.queryArtifactsByTaskId(taskId),
    taskRepository.queryAttemptsByTaskId(taskId),
    runtimeRepository.queryNodes(),
    runtimeRepository.queryModelRevisions(),
  ]);

  return mapQueryResult(taskResult, (task) => {
    const artifacts = artifactsResult.data ?? [];
    const attempts = attemptsResult.data ?? [];
    const latestAttempt = task.latestAttemptId
      ? attempts.find((attempt) => attempt.id === task.latestAttemptId)
      : [...attempts].sort((left, right) => right.number - left.number)[0];
    const runtimeNodeId = latestAttempt?.runtimeNodeId ?? task.runtimeNodeId;
    const modelRevisionId = latestAttempt?.modelRevisionId ?? task.modelRevisionId;

    return {
      task,
      inputArtifact: artifacts.find((artifact) => artifact.role === "input"),
      outputArtifact: artifacts.find((artifact) => artifact.role === "output"),
      latestAttempt,
      runtimeNode: runtimeNodeId ? nodesResult.data?.find((node) => node.id === runtimeNodeId) : undefined,
      modelRevision: modelRevisionId ? modelsResult.data?.find((model) => model.id === modelRevisionId) : undefined,
      artifactState: toDetailDataState(artifactsResult),
      runtimeState: toDetailDataState(nodesResult),
      modelState: toDetailDataState(modelsResult),
    };
  });
}

export function getTasks(): Task[] {
  return taskRepository.list().sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));
}

export function getTaskById(taskId: string): Task | undefined {
  return taskRepository.findById(taskId);
}

export function getRecentTasks(limit = 10): Task[] {
  return getTasks().slice(0, Math.max(0, limit));
}

export function getTaskDetailById(taskId: string): TaskDetail | undefined {
  const task = taskRepository.findById(taskId);
  if (!task) return undefined;

  const artifacts = taskRepository.listArtifactsByTaskId(task.id);
  const attempts = taskRepository.listAttemptsByTaskId(task.id);
  const latestAttempt = task.latestAttemptId
    ? attempts.find((attempt) => attempt.id === task.latestAttemptId)
    : [...attempts].sort((left, right) => right.number - left.number)[0];
  const runtimeNodeId = latestAttempt?.runtimeNodeId ?? task.runtimeNodeId;
  const modelRevisionId = latestAttempt?.modelRevisionId ?? task.modelRevisionId;

  return {
    task,
    inputArtifact: artifacts.find((artifact) => artifact.role === "input"),
    outputArtifact: artifacts.find((artifact) => artifact.role === "output"),
    latestAttempt,
    runtimeNode: runtimeNodeId ? runtimeRepository.findNodeById(runtimeNodeId) : undefined,
    modelRevision: modelRevisionId ? runtimeRepository.findModelRevisionById(modelRevisionId) : undefined,
    artifactState: { status: "success", freshness: "fresh" },
    runtimeState: { status: "success", freshness: "fresh" },
    modelState: { status: "success", freshness: "fresh" },
  };
}

export function getTaskSummary() {
  return getTaskSummaryFor(getTasks());
}

export function getTaskSummaryFor(tasks: Task[]) {
  const completedTasks = tasks.filter((task) => task.status === "succeeded" || task.status === "failed" || task.status === "cancelled");
  const succeeded = tasks.filter((task) => task.status === "succeeded").length;
  const durations = tasks.map((task) => task.metricSummary.durationMs).filter((duration): duration is number => typeof duration === "number");

  return {
    total: tasks.length,
    queued: tasks.filter((task) => task.status === "queued").length,
    running: tasks.filter((task) => task.status === "running").length,
    succeeded,
    failed: tasks.filter((task) => task.status === "failed").length,
    cancelled: tasks.filter((task) => task.status === "cancelled").length,
    successRate: completedTasks.length === 0 ? null : succeeded / completedTasks.length,
    averageDurationMs: durations.length === 0 ? null : durations.reduce((total, duration) => total + duration, 0) / durations.length,
  };
}
