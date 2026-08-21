import type { ModelRevision, RuntimeNode, ServiceInstance } from "../domain";
import { mapQueryResult, type QueryResult } from "../queryResult";
import { runtimeRepository, type RuntimeSnapshot } from "../repositories/runtimeRepository";
import { resolveRuntimeStatus, resolveSystemStatus } from "./statusResolver";

/** Async QueryResult selectors for future page data-state integration. */
export async function queryRuntimeNodes(): Promise<QueryResult<RuntimeNode[]>> {
  return mapQueryResult(await runtimeRepository.queryNodes(), (nodes) => [...nodes].sort((left, right) => left.name.localeCompare(right.name)));
}

export async function queryServiceInstances(): Promise<QueryResult<ServiceInstance[]>> {
  return mapQueryResult(await runtimeRepository.queryServiceInstances(), (services) => [...services].sort((left, right) => left.name.localeCompare(right.name)));
}

export async function queryModelRevisions(): Promise<QueryResult<ModelRevision[]>> {
  return mapQueryResult(await runtimeRepository.queryModelRevisions(), (models) => [...models].sort((left, right) => left.modelId.localeCompare(right.modelId)));
}

/**
 * QueryResult boundary consumed by RuntimePage.
 *
 * It applies only deterministic presentation ordering; transport, loading, and
 * connectivity states remain owned by the data source and repository layers.
 */
export async function queryRuntimePageData(): Promise<QueryResult<RuntimeSnapshot>> {
  return mapQueryResult(await runtimeRepository.querySnapshot(), (snapshot) => ({
    nodes: [...snapshot.nodes].sort((left, right) => left.name.localeCompare(right.name)),
    services: [...snapshot.services].sort((left, right) => left.name.localeCompare(right.name)),
    models: [...snapshot.models].sort((left, right) => left.modelId.localeCompare(right.modelId)),
  }));
}

export type RuntimeHealthSummary = {
  status: ReturnType<typeof resolveSystemStatus>["severity"];
  presentation: ReturnType<typeof resolveSystemStatus>;
  totalNodes: number;
  healthyNodes: number;
  totalServices: number;
  healthyServices: number;
  degraded: number;
  unhealthy: number;
  unknown: number;
};

export function getRuntimeHealthFor(nodes: RuntimeNode[], services: ServiceInstance[]): RuntimeHealthSummary {
  const entities = [...nodes, ...services];
  const unhealthy = entities.filter((entity) => entity.health === "unhealthy" || entity.health === "offline").length;
  const degraded = entities.filter((entity) => entity.health === "degraded").length;
  const unknown = entities.filter((entity) => entity.health === "unknown").length;
  const presentation = resolveSystemStatus(entities.map((entity) => resolveRuntimeStatus(entity.health)));

  return {
    status: presentation.severity,
    presentation,
    totalNodes: nodes.length,
    healthyNodes: nodes.filter((node) => node.health === "healthy").length,
    totalServices: services.length,
    healthyServices: services.filter((service) => service.health === "healthy").length,
    degraded,
    unhealthy,
    unknown,
  };
}

export function getRuntimeNodes(): RuntimeNode[] {
  return runtimeRepository.listNodes().sort((left, right) => left.name.localeCompare(right.name));
}

export function getServiceInstances(): ServiceInstance[] {
  return runtimeRepository.listServiceInstances().sort((left, right) => left.name.localeCompare(right.name));
}

export function getModelRevisions(): ModelRevision[] {
  return runtimeRepository.listModelRevisions().sort((left, right) => left.modelId.localeCompare(right.modelId));
}

export function getRuntimeHealth() {
  const nodes = getRuntimeNodes();
  const services = getServiceInstances();
  return getRuntimeHealthFor(nodes, services);
}
