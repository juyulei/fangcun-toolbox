import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getEvents } from "./selectors/eventSelectors";
import { resolveEventStatus } from "./selectors/statusResolver";
import { formatLogTime } from "./selectors/timeSelectors";
const eventSource = (domain: string, subjectType: string) => `${domain} / ${subjectType}`;

export function LogsPage() {
  const events = getEvents();
  return <section className="console-content logs-page">
    <header className="console-heading"><div><p>System workspace</p><h1>Logs</h1><span className="console-heading-description">跨系统事件流和运行记录。</span></div><span>只读 · 最近系统事件</span></header>
    <Card className="console-panel gap-0 py-0"><header><div><p>Event Stream</p><h2>近期日志</h2></div><span className="image-count">{events.length} entries</span></header>{events.length ? <div className="logs-table" role="table">
      <div className="logs-head" role="row"><span>时间</span><span>级别</span><span>来源</span><span>事件</span></div>
      {events.map((event) => <div className="logs-row" role="row" key={event.id}><time>{formatLogTime(event.occurredAt)}</time><Badge variant="outline" className={`console-status ${resolveEventStatus(event.severity).tone}`}><i />{resolveEventStatus(event.severity).label}</Badge><code>{eventSource(event.domain, event.subjectType)}</code><span>{event.type} · {event.message}</span></div>)}
    </div> : <div className="catalog-empty"><b>暂无系统事件</b><span>当前没有可显示的事件。新的运行、任务与质量变化会显示在这里。</span></div>}</Card>
  </section>;
}
