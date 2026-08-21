import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { resolveToolStatus } from "./selectors/statusResolver";
import { getTools } from "./selectors/toolSelectors";
import { formatListTime } from "./selectors/timeSelectors";

export function ToolsPage() {
  const tools = getTools();
  return <section className="console-content">
    <header className="console-heading"><div><p>Workspace catalog</p><h1>Tools</h1><span className="catalog-intro">方寸可用工具、执行模式与能力范围。</span></div><span>只读 · {tools.length} 个工具</span></header>
    <Card className="console-panel gap-0 py-0"><header><div><p>Tool Catalog</p><h2>方寸工具</h2></div><span className="image-count">{tools.filter((tool) => tool.status === "active").length} 个可用</span></header>{tools.length ? <div className="catalog-table catalog-tools" role="table"><div className="catalog-head" role="row"><span>工具</span><span>状态</span><span>版本</span><span>更新</span><span>能力</span></div>{tools.map((tool) => <div className="catalog-row" role="row" key={tool.id}><div><b>{tool.name}</b><small>{tool.category} · {tool.executionMode}</small></div><Badge variant="outline" className={`console-status ${resolveToolStatus(tool.status).tone}`}><i />{resolveToolStatus(tool.status).label}</Badge><code>v{tool.version}</code><time>{formatListTime(tool.updatedAt)}</time><span>{tool.capabilities.join(" · ")}</span></div>)}</div> : <div className="catalog-empty"><b>暂无工具数据</b><span>当前尚未登记可用工具。已纳入 Console 的工具会显示在这里。</span></div>}</Card>
  </section>;
}
