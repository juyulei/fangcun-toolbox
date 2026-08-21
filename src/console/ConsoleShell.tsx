import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Activity, Boxes, Database, LayoutDashboard, ListTodo, ScrollText, Settings, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { navigation } from "./mockData";
import { errorResult, loadingResult, type QueryResult } from "./queryResult";
import { querySystemSummary, type ConsoleSystemSummary } from "./selectors/systemSelectors";
import { formatListTime } from "./selectors/timeSelectors";

export type ConsoleRoute = "overview" | "tasks" | "tools" | "models" | "datasets" | "quality" | "runtime" | "logs" | "settings";

const routePath = (route: ConsoleRoute) => `${import.meta.env.BASE_URL}${route}`;
const navigationGroups = ["WORKSPACE", "ASSETS", "ASSURANCE", "SYSTEM"] as const;
const navigationIcons: Record<ConsoleRoute, LucideIcon> = {
  overview: LayoutDashboard,
  tasks: ListTodo,
  tools: Wrench,
  models: Boxes,
  datasets: Database,
  quality: ShieldCheck,
  runtime: Activity,
  logs: ScrollText,
  settings: Settings,
};

export function ConsoleShell({ children, route }: { children: ReactNode; route: ConsoleRoute }) {
  const isPreview = import.meta.env.VITE_FC_ENVIRONMENT === "preview";
  const previewCommit = import.meta.env.VITE_FC_BUILD_COMMIT ?? "—";
  const previewBuiltAt = import.meta.env.VITE_FC_BUILD_TIME ? new Date(import.meta.env.VITE_FC_BUILD_TIME).toLocaleString("zh-CN", { hour: "2-digit", minute: "2-digit" }) : "—";
  return <SidebarProvider className="console-app" style={{ "--sidebar-width": "240px" } as CSSProperties}>
    <Sidebar collapsible="none" className="console-sidebar">
      <SidebarHeader><div className="console-brand"><span>方</span><div><b>Fangcun</b><small>CONSOLE</small></div></div></SidebarHeader>
      <SidebarContent>
        {navigationGroups.map((group) => <SidebarGroup key={group} aria-label={group}>
          <SidebarGroupLabel>{group}</SidebarGroupLabel>
          <SidebarGroupContent><SidebarMenu>
            {navigation.filter((item) => item.section === group).map((item) => <SidebarMenuItem key={item.label}>
              {item.route
                ? <SidebarMenuButton asChild isActive={route === item.route}>{(() => { const Icon = navigationIcons[item.route]; return <a href={routePath(item.route)} aria-current={route === item.route ? "page" : undefined}><Icon aria-hidden="true" /><span>{item.label}</span></a>; })()}</SidebarMenuButton>
                : <SidebarMenuButton disabled>{item.label}</SidebarMenuButton>}
            </SidebarMenuItem>)}
          </SidebarMenu></SidebarGroupContent>
        </SidebarGroup>)}
      </SidebarContent>
      <SidebarFooter><div className="console-sidebar-foot"><Badge variant="outline" className="console-status"><i />本地数据源</Badge><small>Console v0.1 · 只读</small></div></SidebarFooter>
    </Sidebar>
    <SidebarInset className="console-main">
      <ConsoleTopbar isPreview={isPreview} previewCommit={previewCommit} previewBuiltAt={previewBuiltAt} />
      {children}
    </SidebarInset>
  </SidebarProvider>;
}

function ConsoleTopbar({ isPreview, previewCommit, previewBuiltAt }: { isPreview: boolean; previewCommit: string; previewBuiltAt: string }) {
  const [result, setResult] = useState<QueryResult<ConsoleSystemSummary>>(() => loadingResult());

  useEffect(() => {
    let active = true;
    void querySystemSummary()
      .then((nextResult) => { if (active) setResult(nextResult); })
      .catch((cause: unknown) => {
        if (active) setResult(errorResult({ code: "system_summary_query_failed", message: "读取系统摘要失败。", cause }));
      });
    return () => { active = false; };
  }, []);

  const dataState = result.status === "stale" ? "数据已过期" : result.status === "offline" ? "数据源不可用" : result.status === "error" ? "部分数据读取失败" : undefined;
  const summary = result.data;

  return <header className="console-topbar"><div className="console-topbar-context"><Badge variant="outline" className="console-status neutral"><i />{isPreview ? "Preview" : "生产环境"}</Badge><span className="dot-sep">·</span><code>{summary?.currentRelease ?? "—"}</code></div><div className="console-sync">
    {result.status === "loading" ? <span className="console-topbar-updated">正在读取系统状态</span> : <span className="console-topbar-updated">更新于 {formatListTime(result.fetchedAt)}</span>}
    {summary ? <><Badge variant="outline" className={`console-status ${summary.status.tone}`}><i />{summary.status.label}</Badge><span className="system-reason">{summary.reason}</span></> : <><Badge variant="outline" className="console-status neutral"><i />数据不可用</Badge><span className="system-reason">{result.error?.message ?? "系统摘要尚未就绪"}</span></>}
    {dataState && <span className="system-reason console-data-state">{dataState}</span>}
    {isPreview && <span className="console-preview-environment"><b>Preview Environment</b><code>{previewCommit}</code><time>{previewBuiltAt}</time></span>}
  </div></header>;
}
