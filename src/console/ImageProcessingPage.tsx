import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Task } from "./domain";
import { emptyResult, errorResult, loadingResult, type QueryResult } from "./queryResult";
import { resolveTaskStatus } from "./selectors/statusResolver";
import { getTaskSummaryFor, queryTaskDetail, queryTaskList, type TaskDetail } from "./selectors/taskSelectors";
import { queryTools } from "./selectors/toolSelectors";
import { formatDetailTime, formatListTime } from "./selectors/timeSelectors";

const imageUrl = `${import.meta.env.BASE_URL}og.png`;

const artifactDimensions = (artifact?: { metadata: Record<string, number | string | boolean> }) => {
  const width = artifact?.metadata.width;
  const height = artifact?.metadata.height;
  return typeof width === "number" && typeof height === "number" ? `${width} × ${height}` : "—";
};
const taskDuration = (durationMs?: number | null) => durationMs === undefined || durationMs === null ? "—" : `${(durationMs / 1000).toFixed(2)}s`;
const artifactTypeLabel: Record<string, string> = { image: "图片", document: "文档", archive: "归档", data: "数据", other: "文件" };
const artifactMarker: Record<string, string> = { image: "IMG", document: "DOC", archive: "ZIP", data: "DATA", other: "FILE" };
const unavailableDataStatus = new Set(["error", "offline"]);
const dataStateDetail = (status: QueryResult<unknown>["status"], fallback: string) => status === "offline" ? "数据源不可用" : status === "stale" ? "数据已过期" : status === "error" ? fallback : "";
const artifactSummary = (artifact?: { kind: string; mediaType: string; metadata: Record<string, number | string | boolean> }) => {
  if (!artifact) return "无输入 Artifact";
  if (artifact.kind === "image") return artifactDimensions(artifact);
  const pages = artifact.metadata.pages;
  return typeof pages === "number" ? `${artifact.mediaType} · ${pages} 页` : artifact.mediaType;
};

export function ImageProcessingPage() {
  const [listResult, setListResult] = useState<QueryResult<Task[]>>(() => loadingResult());
  const [detailResult, setDetailResult] = useState<QueryResult<TaskDetail>>(() => loadingResult());
  const [toolsResult, setToolsResult] = useState<QueryResult<{ id: string; name: string }[]>>(() => loadingResult());
  const [selectedTaskId, setSelectedTaskId] = useState<string>();

  useEffect(() => {
    let active = true;
    void queryTaskList()
      .then((nextResult) => { if (active) setListResult(nextResult); })
      .catch((cause: unknown) => { if (active) setListResult(errorResult({ code: "task_list_query_failed", message: "读取任务列表失败。", cause })); });
    void queryTools()
      .then((nextResult) => { if (active) setToolsResult(nextResult); })
      .catch((cause: unknown) => { if (active) setToolsResult(errorResult({ code: "tool_lookup_failed", message: "读取工具目录失败。", cause })); });
    return () => { active = false; };
  }, []);

  const activeTaskId = selectedTaskId ?? listResult.data?.[0]?.id;
  useEffect(() => {
    let active = true;
    if (!activeTaskId) {
      setDetailResult(emptyResult());
      return () => { active = false; };
    }
    setDetailResult(loadingResult());
    void queryTaskDetail(activeTaskId)
      .then((nextResult) => { if (active) setDetailResult(nextResult); })
      .catch((cause: unknown) => { if (active) setDetailResult(errorResult({ code: "task_detail_query_failed", message: "读取任务详情失败。", cause })); });
    return () => { active = false; };
  }, [activeTaskId]);

  if (listResult.status === "loading") return <TasksLoadingState />;
  if (listResult.status === "empty") return <TasksMessageState title="暂无任务记录" detail="当前数据源尚未提供可展示的任务。" />;
  if (!listResult.data) return <TasksMessageState title={listResult.status === "offline" ? "任务数据源不可用" : "读取任务列表失败"} detail={listResult.error?.message ?? "暂时无法读取任务记录。"} />;

  const tasks = listResult.data;
  const summary = getTaskSummaryFor(tasks);
  const toolsById = new Map((toolsResult.data ?? []).map((tool) => [tool.id, tool.name]));
  const selected = detailResult.data;
  const listDataState = listResult.status === "stale" ? "任务数据已过期，正在展示最近一次成功读取的记录。" : listResult.status === "offline" ? "任务数据源不可用，正在展示最近一次可用的记录。" : listResult.status === "error" ? listResult.error?.message ?? "部分任务数据读取失败，正在展示可用记录。" : undefined;

  return <section className="console-content image-page">
    <header className="console-heading"><div><p>Task workspace</p><h1>Tasks</h1><span className="console-heading-description">跨工具任务、执行状态和产物摘要。</span></div><span>数据更新于 {formatListTime(listResult.fetchedAt)}</span></header>
    {listDataState && <TasksDataNotice detail={listDataState} />}
    <section className="tasks-summary" aria-label="今日处理概况">
      <article><p>今日任务量</p><strong>{summary.total}</strong><span>最近 24 小时</span></article>
      <article><p>成功率</p><strong>{summary.successRate === null ? "—" : `${Math.round(summary.successRate * 100)}%`}</strong><span>{summary.succeeded} 个任务已完成</span></article>
      <article><p>平均耗时</p><strong>{taskDuration(summary.averageDurationMs)}</strong><span>按已记录执行计算</span></article>
      <article><p>当前队列</p><strong>{summary.queued}</strong><span><Badge variant="outline" className="console-status"><i />{summary.running ? "正在处理" : "无需等待"}</Badge></span></article>
    </section>
    <section className="image-workspace">
      <Card className="console-panel image-list gap-0 py-0"><header><div><p>Task Records</p><h2>最近任务</h2></div><span className="image-count">{tasks.length} 条记录</span></header><div className="job-table" role="table">
        <div className="job-head" role="row"><span>输入</span><span>工具 / 模型</span><span>状态</span><span>耗时</span><span>时间</span></div>
        {tasks.map((task, index) => <TaskListRow key={task.id} task={task} detail={selected?.task.id === task.id ? selected : undefined} toolName={toolsById.get(task.toolId)} selected={activeTaskId === task.id || (!activeTaskId && index === 0)} onSelect={() => setSelectedTaskId(task.id)} />)}
      </div></Card>
      <TaskDetailPanel result={detailResult} toolsById={toolsById} />
    </section>
  </section>;
}

function TaskListRow({ task, detail, toolName, selected, onSelect }: { task: Task; detail?: TaskDetail; toolName?: string; selected: boolean; onSelect: () => void }) {
  const inputArtifact = detail?.inputArtifact;
  return <button type="button" className={`job-row ${selected ? "selected" : ""}`} aria-pressed={selected} onClick={onSelect}>{inputArtifact?.kind === "image" ? <img src={imageUrl} alt="" /> : <span className="job-artifact-marker" aria-hidden="true">{artifactMarker[inputArtifact?.kind ?? "other"]}</span>}<div><b>{inputArtifact?.name ?? task.inputSummary}</b><small>{artifactSummary(inputArtifact)}</small></div><code>{detail?.modelRevision ? `${detail.modelRevision.modelId} v${detail.modelRevision.revision}` : toolName ?? task.toolId}</code><Badge variant="outline" className={`console-status ${resolveTaskStatus(task.status).tone}`}><i />{resolveTaskStatus(task.status).label}</Badge><time>{taskDuration(detail?.latestAttempt?.durationMs ?? (typeof task.metricSummary.durationMs === "number" ? task.metricSummary.durationMs : undefined))}</time><time>{formatListTime(task.submittedAt)}</time></button>;
}

function TaskDetailPanel({ result, toolsById }: { result: QueryResult<TaskDetail>; toolsById: Map<string, string> }) {
  if (result.status === "loading") return <Card className="console-panel job-detail gap-0 py-0" role="complementary"><header><div><p>任务详情</p><h2>正在读取</h2></div></header><div className="preview-frame"><Skeleton className="h-36 w-full" /></div><dl><div><dt>Task</dt><dd><Skeleton className="h-3 w-40" /></dd></div><div><dt>Execution</dt><dd><Skeleton className="h-3 w-32" /></dd></div></dl></Card>;
  if (result.status === "empty") return <TaskDetailMessage title="任务记录不存在" detail="该任务可能已不在当前数据源中。" />;
  if (!result.data) return <TaskDetailMessage title={result.status === "offline" ? "任务详情数据源不可用" : "读取任务详情失败"} detail={result.error?.message ?? "暂时无法读取所选任务详情。"} />;

  const selected = result.data;
  const artifactUnavailable = unavailableDataStatus.has(selected.artifactState.status) && !selected.inputArtifact;
  const runtimeReference = selected.latestAttempt?.runtimeNodeId ?? selected.task.runtimeNodeId;
  const runtimeUnavailable = Boolean(runtimeReference) && !selected.runtimeNode;
  const modelReference = selected.latestAttempt?.modelRevisionId ?? selected.task.modelRevisionId;
  const detailDataState = result.status === "stale" ? "任务详情数据已过期" : result.status === "offline" ? "任务详情数据源不可用" : result.status === "error" ? result.error?.message ?? "任务详情部分读取失败" : undefined;
  const modelDetail = selected.modelRevision?.performanceProfile ?? (dataStateDetail(selected.modelState.status, "未找到关联模型") || "未找到关联模型");

  return <Card className="console-panel job-detail gap-0 py-0" role="complementary"><header><div><p>任务详情</p><h2>{selected.task.id}</h2></div><Badge variant="outline" className={`console-status ${resolveTaskStatus(selected.task.status).tone}`}><i />{resolveTaskStatus(selected.task.status).label}</Badge></header>{detailDataState && <div className="catalog-empty"><b>数据状态</b><span>{detailDataState}</span></div>}<div className="preview-frame">{selected.inputArtifact?.kind === "image" ? <img src={imageUrl} alt={`${selected.inputArtifact.name} 输入预览`} /> : <div className="artifact-preview-placeholder"><b>{artifactUnavailable ? "—" : artifactMarker[selected.inputArtifact?.kind ?? "other"]}</b><small>{artifactUnavailable ? "输入 Artifact 不可用" : selected.inputArtifact ? artifactTypeLabel[selected.inputArtifact.kind] : "无输入 Artifact"}</small></div>}<span>{selected.inputArtifact?.kind === "image" ? "输入预览" : "输入摘要"}</span></div><dl><div><dt>Task</dt><dd>{selected.task.id}<small>创建于 {formatDetailTime(selected.task.submittedAt)}</small></dd></div><div><dt>Tool</dt><dd>{toolsById.get(selected.task.toolId) ?? selected.task.toolId}<small>{resolveTaskStatus(selected.task.status).label}</small></dd></div><div><dt>Execution</dt><dd>{selected.runtimeNode?.name ?? (runtimeUnavailable ? "Runtime 信息不可用" : "本地浏览器")}<small>{selected.latestAttempt ? `attempt ${selected.latestAttempt.number} · ${resolveTaskStatus(selected.latestAttempt.status).label} · ${taskDuration(selected.latestAttempt.durationMs)}` : "无执行记录"}{runtimeUnavailable && ` · ${dataStateDetail(selected.runtimeState.status, "Runtime 读取失败") || "未找到关联 Runtime"}`}</small></dd></div><div><dt>Artifacts</dt><dd>{artifactUnavailable ? "输入 Artifact 不可用" : selected.inputArtifact?.name ?? "无输入 Artifact"}<small>输出：{selected.outputArtifact?.name ?? selected.task.outputSummary ?? "无输出 Artifact"}{selected.artifactState.status === "stale" ? " · 数据已过期" : ""}</small></dd></div>{modelReference && <div><dt>Model</dt><dd>{selected.modelRevision ? `${selected.modelRevision.modelId} v${selected.modelRevision.revision}` : "模型信息不可用"}<small>{modelDetail}</small></dd></div>}</dl></Card>;
}

function TasksLoadingState() {
  return <section className="console-content image-page" aria-busy="true"><header className="console-heading"><div><p>Task workspace</p><h1>Tasks</h1></div><span>正在读取任务记录</span></header><section className="tasks-summary">{Array.from({ length: 4 }, (_, index) => <article key={index}><Skeleton className="h-3 w-16" /><Skeleton className="mt-3 h-5 w-10" /></article>)}</section><section className="image-workspace"><Card className="console-panel image-list gap-0 py-0"><header><div><p>Task Records</p><h2>最近任务</h2></div></header><div className="catalog-empty"><Skeleton className="h-3 w-full" /><Skeleton className="mt-4 h-3 w-4/5" /></div></Card><TaskDetailPanel result={loadingResult()} toolsById={new Map()} /></section></section>;
}

function TasksMessageState({ title, detail }: { title: string; detail: string }) {
  return <section className="console-content image-page"><header className="console-heading"><div><p>Task workspace</p><h1>Tasks</h1></div><span>数据状态不可用</span></header><Card className="console-panel gap-0 py-0"><div className="catalog-empty"><b>{title}</b><span>{detail}</span></div></Card></section>;
}

function TaskDetailMessage({ title, detail }: { title: string; detail: string }) {
  return <Card className="console-panel job-detail gap-0 py-0" role="complementary"><header><div><p>任务详情</p><h2>{title}</h2></div></header><div className="catalog-empty"><b>{title}</b><span>{detail}</span></div></Card>;
}

function TasksDataNotice({ detail }: { detail: string }) {
  return <Card className="console-panel overview-attention gap-0 py-0"><header><div><p>Data Status</p><h2>任务数据状态</h2></div><Badge variant="outline" className="console-status neutral"><i />数据读取</Badge></header><div><p>{detail}</p></div></Card>;
}
