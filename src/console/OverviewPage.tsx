import { useEffect, useState } from "react";
import { Activity, Clock3, ListChecks, Server, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { errorResult, loadingResult, type QueryResult } from "./queryResult";
import { resolveEventStatus, resolveRuntimeStatus } from "./selectors/statusResolver";
import { queryOverviewData, type OverviewData } from "./selectors/systemSelectors";
import { formatListTime } from "./selectors/timeSelectors";

export function OverviewPage() {
  const [result, setResult] = useState<QueryResult<OverviewData>>(() => loadingResult());

  useEffect(() => {
    let active = true;
    void queryOverviewData()
      .then((nextResult) => { if (active) setResult(nextResult); })
      .catch((cause: unknown) => {
        if (active) setResult(errorResult({ code: "overview_query_failed", message: "读取系统概览失败。", cause }));
      });
    return () => { active = false; };
  }, []);

  if (result.status === "loading") return <OverviewLoadingState />;
  if (!result.data && result.status === "empty") return <OverviewMessageState title="暂无系统概览数据" detail="当前数据源尚未提供任务、运行环境、质量或活动记录。" />;
  if (!result.data) return <OverviewMessageState title={result.status === "offline" ? "系统数据源不可用" : "读取系统概览失败"} detail={result.error?.message ?? "暂时无法读取系统状态。"} />;

  const { taskSummary, qualitySummary, runtime, runtimeHealth, recentEvents, systemAttention } = result.data;
  const { nodes, services, models } = runtime;
  const activeModel = models.find((model) => model.status === "active");
  const deployment = services.find((service) => service.type === "deployment");

  return <section className="console-content overview-page">
    <header className="console-heading"><div><p>Production workspace</p><h1>Overview</h1><span className="console-heading-description">系统运行、处理摘要和需要关注的信号。</span></div><span>数据更新于 {formatListTime(result.fetchedAt)}</span></header>
    {result.status === "stale" && <OverviewDataNotice label="数据已过期" detail="正在展示最近一次成功读取的系统数据；业务 Attention 未将此视为运行故障。" />}
    {result.status === "offline" && <OverviewDataNotice label="数据源不可用" detail="正在展示最近一次可用的系统数据；节点离线状态仍以 Runtime 健康检查结果为准。" />}
    {result.status === "error" && <OverviewDataNotice label="部分数据读取失败" detail={result.error?.message ?? "正在展示可用的系统数据；读取失败未被映射为业务异常。"} />}
    <section className="overview-control-grid" aria-label="系统控制中心">
      <Card className="console-panel overview-control-center gap-0 py-0"><header><div><p><Activity aria-hidden="true" /> System Status</p><h2>生产运行状态</h2></div><Badge variant="outline" className={`console-status ${runtimeHealth.presentation.tone}`}><i />{runtimeHealth.presentation.label}</Badge></header><div className="overview-status-primary"><div><span>当前系统状态</span><strong>{runtimeHealth.presentation.label}</strong><small>{runtimeHealth.healthyNodes + runtimeHealth.healthyServices} / {runtimeHealth.totalNodes + runtimeHealth.totalServices} 个运行实体正常</small></div><div className="overview-status-marker" aria-hidden="true"><Activity /></div></div><dl className="overview-control-facts">
        <div><dt>Current release</dt><dd><code>{deployment?.version ?? "—"}</code><Badge variant="outline" className={`console-status ${resolveRuntimeStatus(deployment?.health ?? "unknown").tone}`}><i />{resolveRuntimeStatus(deployment?.health ?? "unknown").label}</Badge></dd></div>
        <div><dt>Quality gate</dt><dd>{qualitySummary.passedCases} / {qualitySummary.totalCases} 通过<span>{qualitySummary.latestRun?.baseline ?? "暂无质量基准"}</span></dd></div>
        <div><dt>Runtime</dt><dd>节点 {nodes.length} · 服务 {services.length}<span>{runtimeHealth.degraded ? `${runtimeHealth.degraded} 个性能下降` : "运行状态已汇总"}</span></dd></div>
        <div><dt>Model revision</dt><dd><code>{activeModel ? `${activeModel.modelId}@${activeModel.revision}` : "—"}</code><span>{activeModel?.qualityBaseline ?? "未部署可用模型"}</span></dd></div>
      </dl></Card>
      <Card className="console-panel overview-attention-panel gap-0 py-0"><header><div><p><ShieldAlert aria-hidden="true" /> Attention</p><h2>需要关注</h2></div><Badge variant="outline" className={`console-status ${systemAttention.status.tone}`}><i />{systemAttention.status.label}</Badge></header><div className="overview-attention-body"><strong>{systemAttention.count}</strong><div><p>{systemAttention.message}</p><span>{systemAttention.detail}</span></div></div></Card>
    </section>
    <section className="overview-summary-grid" aria-label="系统摘要">
      <Card className="console-panel overview-summary-panel gap-0 py-0"><header><div><p><ListChecks aria-hidden="true" /> Task Summary</p><h2>任务处理</h2></div><span className="image-count">最近 24 小时</span></header><div className="overview-summary-metrics">
        <article><p>处理任务</p><strong>{taskSummary.total}</strong><span>最近 24 小时</span></article>
        <article><p>成功率</p><strong>{taskSummary.successRate === null ? "—" : `${Math.round(taskSummary.successRate * 100)}%`}</strong><span>{taskSummary.succeeded} 个任务已完成</span></article>
        <article><p>平均耗时</p><strong>{taskSummary.averageDurationMs === null ? "—" : `${(taskSummary.averageDurationMs / 1000).toFixed(2)}s`}</strong><span>按已记录执行计算</span></article>
      </div></Card>
      <Card className="console-panel overview-summary-panel gap-0 py-0"><header><div><p><Server aria-hidden="true" /> Runtime Summary</p><h2>运行环境</h2></div><Badge variant="outline" className={`console-status ${runtimeHealth.presentation.tone}`}><i />{runtimeHealth.presentation.label}</Badge></header><div className="overview-runtime-summary"><div><span>主运行节点</span><strong>{nodes.find((node) => node.role === "primary")?.name ?? "未发现主节点"}</strong></div><div><span>服务实例</span><strong>{runtimeHealth.healthyServices} / {runtimeHealth.totalServices} 正常</strong></div><div><span>模型</span><strong>{activeModel ? `${activeModel.modelId} v${activeModel.revision}` : "未部署可用模型"}</strong></div></div></Card>
    </section>
    <Card className="console-panel overview-activity-panel gap-0 py-0"><header><div><p><Clock3 aria-hidden="true" /> Recent Activity</p><h2>最近活动</h2></div><span className="image-count">{recentEvents.length} 条记录</span></header><ol className="console-activity">{recentEvents.map((event) => <li key={event.id}><time>{formatListTime(event.occurredAt)}</time><div><b>{event.type} · {event.message}</b><Badge variant="outline" className={`console-status ${resolveEventStatus(event.severity).tone}`}><i />{resolveEventStatus(event.severity).label}</Badge></div></li>)}</ol></Card>
  </section>;
}

function OverviewLoadingState() {
  return <section className="console-content" aria-busy="true">
    <header className="console-heading"><div><p>Production workspace</p><h1>Overview</h1></div><span>正在读取系统摘要</span></header>
    <Card className="console-panel overview-system-status gap-0 py-0"><header><div><p>System Status</p><h2>生产运行状态</h2></div></header><dl><div><Skeleton className="h-3 w-24" /><Skeleton className="mt-3 h-4 w-36" /></div><div><Skeleton className="h-3 w-24" /><Skeleton className="mt-3 h-4 w-36" /></div></dl></Card>
    <Card className="console-panel overview-processing gap-0 py-0"><header><div><p>Processing Summary</p><h2>今日任务处理</h2></div></header><div>{Array.from({ length: 4 }, (_, index) => <article key={index}><Skeleton className="h-3 w-16" /><Skeleton className="mt-3 h-5 w-10" /></article>)}</div></Card>
  </section>;
}

function OverviewMessageState({ title, detail }: { title: string; detail: string }) {
  return <section className="console-content">
    <header className="console-heading"><div><p>Production workspace</p><h1>Overview</h1></div><span>数据状态不可用</span></header>
    <Card className="console-panel gap-0 py-0"><div className="catalog-empty"><b>{title}</b><span>{detail}</span></div></Card>
  </section>;
}

function OverviewDataNotice({ label, detail }: { label: string; detail: string }) {
  return <Card className="console-panel overview-attention gap-0 py-0"><header><div><p>Data Status</p><h2>{label}</h2></div><Badge variant="outline" className="console-status neutral"><i />数据读取</Badge></header><div><p>{detail}</p></div></Card>;
}
