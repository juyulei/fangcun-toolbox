import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getDatasets } from "./selectors/qualitySelectors";
import { resolveDatasetStatus } from "./selectors/statusResolver";
import { formatListTime } from "./selectors/timeSelectors";

export function DatasetsPage() {
  const datasets = getDatasets();
  return <section className="console-content">
    <header className="console-heading"><div><p>Workspace catalog</p><h1>Datasets</h1><span className="catalog-intro">质量验证与跨工具检查使用的数据资产。</span></div><span>只读 · {datasets.length} 个数据集</span></header>
    <Card className="console-panel gap-0 py-0"><header><div><p>Dataset Catalog</p><h2>数据集</h2></div><span className="image-count">{datasets.reduce((total, dataset) => total + dataset.sampleCount, 0)} 个样本</span></header>{datasets.length ? <div className="catalog-table catalog-datasets" role="table"><div className="catalog-head" role="row"><span>数据集</span><span>状态</span><span>版本</span><span>样本</span><span>用途 / 更新</span></div>{datasets.map((dataset) => <div className="catalog-row" role="row" key={dataset.id}><div><b>{dataset.name}</b><small>{dataset.purpose}</small></div><Badge variant="outline" className={`console-status ${resolveDatasetStatus(dataset.status).tone}`}><i />{resolveDatasetStatus(dataset.status).label}</Badge><code>{dataset.version}</code><span>{dataset.sampleCount}</span><span>{dataset.purpose} · {formatListTime(dataset.updatedAt)}</span></div>)}</div> : <div className="catalog-empty"><b>暂无数据集</b><span>当前没有可展示的数据集。数据集登记后会在这里显示。</span></div>}</Card>
  </section>;
}
