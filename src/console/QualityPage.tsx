import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getDatasets, getQualityRuns, getQualitySummary } from "./selectors/qualitySelectors";
import { resolveQualityStatus } from "./selectors/statusResolver";
import { formatListTime } from "./selectors/timeSelectors";

export function QualityPage() {
  const summary = getQualitySummary();
  const runs = getQualityRuns();
  const datasetsById = new Map(getDatasets().map((dataset) => [dataset.id, dataset.name]));
  return <section className="console-content">
    <header className="console-heading"><div><p>Workspace catalog</p><h1>Quality</h1><span className="catalog-intro">质量运行、通过率和可追溯的验证基准。</span></div><span>只读 · {summary.totalRuns} 次运行</span></header>
    <Card className="console-panel overview-processing gap-0 py-0"><header><div><p>Quality Summary</p><h2>质量概览</h2></div><span className="image-count">最近完成运行</span></header><div><article><p>测试运行</p><strong>{summary.totalRuns}</strong><span>已记录质量运行</span></article><article><p>成功率</p><strong>{summary.passRate === null ? "—" : `${Math.round(summary.passRate * 100)}%`}</strong><span>{summary.passedCases} / {summary.totalCases} 个用例</span></article><article><p>测试状态</p><strong>{summary.latestRun ? resolveQualityStatus(summary.latestRun.status).label : "—"}</strong><span>{formatListTime(summary.latestRun?.completedAt)}</span></article><article><p>基准信息</p><strong>{summary.latestRun ? "已关联" : "—"}</strong><span>{summary.latestRun?.baseline ?? "暂无基准"}</span></article></div></Card>
    <Card className="console-panel gap-0 py-0"><header><div><p>Quality Runs</p><h2>测试记录</h2></div><span className="image-count">{runs.length} 条记录</span></header>{runs.length ? <div className="catalog-table catalog-quality" role="table"><div className="catalog-head" role="row"><span>运行</span><span>状态</span><span>数据集</span><span>结果</span><span>基准 / 完成时间</span></div>{runs.map((run) => <div className="catalog-row" role="row" key={run.id}><div><b>{run.id}</b><small>{run.toolId ?? "跨工具"}</small></div><Badge variant="outline" className={`console-status ${resolveQualityStatus(run.status).tone}`}><i />{resolveQualityStatus(run.status).label}</Badge><span>{datasetsById.get(run.datasetId) ?? run.datasetId}</span><span>{run.passedCases} / {run.totalCases} 通过</span><span>{run.baseline} · {formatListTime(run.completedAt)}</span></div>)}</div> : <div className="catalog-empty"><b>暂无质量运行</b><span>当前没有验证记录。完成质量验证后，结果会显示在这里。</span></div>}</Card>
  </section>;
}
