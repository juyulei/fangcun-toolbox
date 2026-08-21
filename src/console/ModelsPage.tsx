import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getModelRevisions } from "./selectors/runtimeSelectors";
import { resolveModelStatus } from "./selectors/statusResolver";
import { getTools } from "./selectors/toolSelectors";

export function ModelsPage() {
  const toolsById = new Map(getTools().map((tool) => [tool.id, tool.name]));
  const models = getModelRevisions();
  return <section className="console-content">
    <header className="console-heading"><div><p>Workspace catalog</p><h1>Models</h1><span className="catalog-intro">模型版本、关联工具与部署摘要。</span></div><span>只读 · {models.length} 个模型</span></header>
    <Card className="console-panel gap-0 py-0"><header><div><p>Model Revisions</p><h2>模型版本</h2></div><span className="image-count">{models.filter((model) => model.status === "active").length} 个已部署</span></header>{models.length ? <div className="catalog-table catalog-models" role="table"><div className="catalog-head" role="row"><span>模型</span><span>状态</span><span>关联工具</span><span>部署</span><span>性能档案</span></div>{models.map((model) => <div className="catalog-row" role="row" key={model.id}><div><b>{model.modelId}</b><small><code>v{model.revision}</code> · {model.source}</small></div><Badge variant="outline" className={`console-status ${resolveModelStatus(model.status).tone}`}><i />{resolveModelStatus(model.status).label}</Badge><span>{model.supportedToolIds.map((toolId) => toolsById.get(toolId) ?? toolId).join(" · ") || "未关联工具"}</span><span>{model.supportedRuntimeNodeIds.length ? `${model.supportedRuntimeNodeIds.length} 个节点` : "未部署"}</span><span>{model.performanceProfile ?? "无性能档案"}</span></div>)}</div> : <div className="catalog-empty"><b>暂无模型数据</b><span>当前没有可展示的模型版本。已部署或已登记的模型会显示在这里。</span></div>}</Card>
  </section>;
}
