import type { Event, QualityRun, Task } from "../domain";
import { emptyResult, errorResult, loadingResult, mapQueryResult, offlineResult, staleResult, successResult, type QueryResult } from "../queryResult";
import { queryEvents } from "./eventSelectors";
import { getQualityRuns, getQualitySummaryFor, queryQualityRuns } from "./qualitySelectors";
import { getRuntimeHealth, getRuntimeHealthFor, queryRuntimePageData, type RuntimeHealthSummary } from "./runtimeSelectors";
import { resolveQualityStatus, resolveSystemStatus, resolveTaskStatus, type StatusPresentation } from "./statusResolver";
import { getTaskSummaryFor, getTasks, queryTasks } from "./taskSelectors";
import type { RuntimeSnapshot } from "../repositories/runtimeRepository";

export type SystemAttention = {
  status: StatusPresentation;
  count: number;
  summary: string;
  message: string;
  detail: string;
};

export type OverviewData = {
  taskSummary: ReturnType<typeof getTaskSummaryFor>;
  qualitySummary: ReturnType<typeof getQualitySummaryFor>;
  runtime: RuntimeSnapshot;
  runtimeHealth: RuntimeHealthSummary;
  recentEvents: Event[];
  systemAttention: SystemAttention;
};

export type ConsoleSystemSummary = {
  status: StatusPresentation;
  reason: string;
  currentRelease?: string;
};

const queryError = (results: QueryResult<unknown>[]) => results.find((result) => result.error)?.error ?? { code: "overview_data_unavailable", message: "系统摘要数据暂时不可用。" };
const latestFetch = (results: QueryResult<unknown>[]) => results.reduce<string | undefined>((latest, result) => !latest || (result.fetchedAt && result.fetchedAt > latest) ? result.fetchedAt : latest, undefined);
const hasState = (results: QueryResult<unknown>[], status: QueryResult<unknown>["status"]) => results.some((result) => result.status === status);

/**
 * Aggregates all read-only Overview inputs. Data-transport state stays separate
 * from the business attention derived from task, runtime, and quality entities.
 */
export async function queryOverviewData(): Promise<QueryResult<OverviewData>> {
  const [tasksResult, runtimeResult, eventsResult, qualityResult] = await Promise.all([
    queryTasks(),
    queryRuntimePageData(),
    queryEvents(),
    queryQualityRuns(),
  ]);
  const results: QueryResult<unknown>[] = [tasksResult, runtimeResult, eventsResult, qualityResult];
  const fetchedAt = latestFetch(results);
  const hasData = results.some((result) => result.data !== undefined);
  const runtime = runtimeResult.data ?? { nodes: [], services: [], models: [] };
  const data = hasData ? {
    taskSummary: getTaskSummaryFor(tasksResult.data ?? []),
    qualitySummary: getQualitySummaryFor(qualityResult.data ?? []),
    runtime,
    runtimeHealth: getRuntimeHealthFor(runtime.nodes, runtime.services),
    recentEvents: (eventsResult.data ?? []).slice(0, 4),
    systemAttention: getSystemAttentionFor({
      runtime: getRuntimeHealthFor(runtime.nodes, runtime.services),
      tasks: tasksResult.data ?? [],
      qualityRuns: qualityResult.data ?? [],
    }),
  } : undefined;
  const error = queryError(results);

  if (hasState(results, "offline")) return offlineResult(error, data, fetchedAt);
  if (hasState(results, "error")) return errorResult(error, data, fetchedAt);
  if (hasState(results, "stale")) return data ? staleResult(data, fetchedAt ?? new Date().toISOString(), queryError(results)) : errorResult(error);
  if (hasState(results, "loading")) return loadingResult();
  if (!data || (data.runtime.nodes.length === 0 && data.runtime.services.length === 0 && data.taskSummary.total === 0 && data.recentEvents.length === 0 && data.qualitySummary.totalRuns === 0)) return emptyResult(data, fetchedAt);
  return successResult(data, fetchedAt);
}

/** QueryResult summary shared by ConsoleShell and any future top-level status surface. */
export async function querySystemSummary(): Promise<QueryResult<ConsoleSystemSummary>> {
  return mapQueryResult(await queryOverviewData(), (data) => ({
    status: data.systemAttention.status,
    reason: data.systemAttention.summary,
    currentRelease: data.runtime.services.find((service) => service.type === "deployment")?.version,
  }));
}

export function getSystemAttentionFor({ runtime, tasks, qualityRuns }: { runtime: RuntimeHealthSummary; tasks: Task[]; qualityRuns: QualityRun[] }): SystemAttention {
  const failedTasks = tasks.filter((task) => task.status === "failed");
  const failedQualityRuns = qualityRuns.filter((run) => run.status === "failed");
  const unverifiedRuntimeCount = runtime.unknown;
  const signals = [
    runtime.presentation,
    ...failedTasks.map((task) => resolveTaskStatus(task.status)),
    ...failedQualityRuns.map((run) => resolveQualityStatus(run.status)),
  ].filter((status) => status.severity !== "healthy");
  const status = resolveSystemStatus(signals);

  if (status.severity === "error" || status.severity === "critical") {
    return { status, count: signals.length, summary: "存在运行、任务或质量异常", message: "存在需要优先处理的系统异常。", detail: "请检查 Runtime、失败任务和失败的质量运行。" };
  }
  if (status.severity === "warning") {
    return { status, count: signals.length, summary: "存在待跟踪运行警告", message: "运行环境存在需要跟踪的警告。", detail: "当前没有被判定为严重错误的业务信号。" };
  }
  if (status.severity === "unknown") {
    return { status, count: signals.length, summary: `${unverifiedRuntimeCount} 个节点待验证`, message: "部分运行状态尚未确认。", detail: "请等待下一次运行验证完成后再确认系统健康度。" };
  }
  return { status, count: 0, summary: "所有已知业务信号正常", message: "当前未发现需要人工介入的运行问题。", detail: "所有已知运行、任务和质量信号均正常。" };
}

export function getSystemAttention(): SystemAttention {
  const runtime = getRuntimeHealth();
  return getSystemAttentionFor({ runtime, tasks: getTasks(), qualityRuns: getQualityRuns() });
}
