import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { errorResult, loadingResult, type QueryResult } from "./queryResult";
import { getRuntimeHealthFor, queryRuntimePageData } from "./selectors/runtimeSelectors";
import type { RuntimeSnapshot } from "./repositories/runtimeRepository";
import { resolveRuntimeStatus } from "./selectors/statusResolver";
import { formatListTime } from "./selectors/timeSelectors";

export function RuntimePage() {
  const [result, setResult] = useState<QueryResult<RuntimeSnapshot>>(() => loadingResult());

  useEffect(() => {
    let active = true;
    void queryRuntimePageData()
      .then((nextResult) => { if (active) setResult(nextResult); })
      .catch((cause: unknown) => {
        if (active) setResult(errorResult({ code: "runtime_query_failed", message: "读取运行环境数据失败。", cause }));
      });
    return () => { active = false; };
  }, []);

  if (result.status === "loading") return <RuntimeLoadingState />;
  if (!result.data && result.status === "empty") return <RuntimeMessageState title="暂无 Runtime 数据" detail="当前数据源尚未提供节点或服务实例。" />;
  if (!result.data) return <RuntimeMessageState title={result.status === "offline" ? "Runtime 数据源不可用" : "读取 Runtime 数据失败"} detail={result.error?.message ?? "暂时无法读取运行环境状态。"} />;

  const { nodes, services, models } = result.data;
  const health = getRuntimeHealthFor(nodes, services);
  const primaryRuntime = nodes.find((node) => node.role === "primary") ?? nodes[0];
  const activeModel = models.find((model) => model.status === "active");

  return <section className="console-content runtime-page">
    <header className="console-heading"><div><p>System workspace</p><h1>Runtime</h1><span className="console-heading-description">节点、服务与模型运行状态。</span></div><span>最近验证于 {formatListTime(primaryRuntime?.lastVerifiedAt)}</span></header>
    {result.status === "stale" && <RuntimeDataNotice label="数据已过期" detail="正在展示最近一次成功读取的 Runtime 数据。" />}
    {result.status === "offline" && <RuntimeDataNotice label="数据源不可用" detail="正在展示最近一次可用的 Runtime 数据；节点离线状态仍以各节点健康检查结果为准。" />}
    {result.status === "error" && <RuntimeDataNotice label="部分数据读取失败" detail={result.error?.message ?? "正在展示可用的 Runtime 数据。"} />}
    <Card className="console-panel runtime-summary gap-0 py-0"><header><div><p>Runtime Status</p><h2>生产运行环境</h2></div><Badge variant="outline" className={`console-status ${health.presentation.tone}`}><i />{health.presentation.label} · {health.healthyNodes + health.healthyServices} / {health.totalNodes + health.totalServices} 正常</Badge></header><div><span>Primary runtime</span><strong>{primaryRuntime?.name ?? "未发现运行节点"}</strong><small>{activeModel ? `当前生产任务由主节点处理 · 模型 ${activeModel.modelId} v${activeModel.revision}` : "当前生产任务由主节点处理 · 未部署可用模型"}</small></div></Card>
    <section className="runtime-grid">
      <Card className="console-panel gap-0 py-0"><header><div><p>Devices</p><h2>设备实例</h2></div><span className="image-count">{nodes.length} nodes</span></header><div className="runtime-list">{nodes.map((node, index) => <div key={node.id}><div><b>{node.name}</b><span>{node.role} · {node.hardware}</span></div><Badge variant="outline" className={`console-status ${resolveRuntimeStatus(node.health).tone}`}><i />{resolveRuntimeStatus(node.health).label}</Badge><small>{node.lastVerifiedAt ? `验证于 ${formatListTime(node.lastVerifiedAt)}` : "等待验证"}</small>{index < nodes.length - 1 && <Separator />}</div>)}</div></Card>
      <Card className="console-panel gap-0 py-0"><header><div><p>Services</p><h2>服务实例</h2></div><span className="image-count">{services.length} services</span></header><div className="runtime-list">{services.map((service, index) => <div key={service.id}><div><b>{service.name}</b><span>{service.endpoint ?? service.type} · <code>{service.version}</code></span></div><Badge variant="outline" className={`console-status ${resolveRuntimeStatus(service.health).tone}`}><i />{resolveRuntimeStatus(service.health).label}</Badge>{index < services.length - 1 && <Separator />}</div>)}</div></Card>
    </section>
  </section>;
}

function RuntimeLoadingState() {
  return <section className="console-content runtime-page" aria-busy="true">
    <header className="console-heading"><div><p>System workspace</p><h1>Runtime</h1></div><span>正在读取运行环境</span></header>
    <Card className="console-panel runtime-summary gap-0 py-0"><header><div><p>Runtime Status</p><h2>生产运行环境</h2></div></header><div><Skeleton className="h-3 w-28" /><Skeleton className="h-4 w-56" /><Skeleton className="h-3 w-72" /></div></Card>
    <section className="runtime-grid"><RuntimeListSkeleton title="设备实例" /><RuntimeListSkeleton title="服务实例" /></section>
  </section>;
}

function RuntimeListSkeleton({ title }: { title: string }) {
  return <Card className="console-panel gap-0 py-0"><header><div><p>Runtime</p><h2>{title}</h2></div></header><div className="runtime-list"><div><div><Skeleton className="h-3 w-32" /><Skeleton className="mt-2 h-3 w-44" /></div><Skeleton className="h-5 w-16" /></div></div></Card>;
}

function RuntimeMessageState({ title, detail }: { title: string; detail: string }) {
  return <section className="console-content runtime-page">
    <header className="console-heading"><div><p>System workspace</p><h1>Runtime</h1></div><span>数据状态不可用</span></header>
    <Card className="console-panel gap-0 py-0"><div className="catalog-empty"><b>{title}</b><span>{detail}</span></div></Card>
  </section>;
}

function RuntimeDataNotice({ label, detail }: { label: string; detail: string }) {
  return <Card className="console-panel overview-attention gap-0 py-0"><header><div><p>Data Status</p><h2>{label}</h2></div><Badge variant="outline" className="console-status neutral"><i />数据读取</Badge></header><div><p>{detail}</p></div></Card>;
}
