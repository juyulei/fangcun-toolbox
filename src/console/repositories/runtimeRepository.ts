import type { ModelRevision, RuntimeNode, ServiceInstance } from "../domain";
import { fixtureDataSource } from "../dataSources/fixtureDataSource";
import { emptyResult, errorResult, loadingResult, offlineResult, staleResult, successResult, type QueryError, type QueryResult } from "../queryResult";

export type RuntimeSnapshot = {
  nodes: RuntimeNode[];
  services: ServiceInstance[];
  models: ModelRevision[];
};

const firstError = (results: QueryResult<unknown>[]): QueryError | undefined => results.find((result) => result.error)?.error;
const latestFetch = (results: QueryResult<unknown>[]) => results.reduce<string | undefined>((latest, result) => !latest || (result.fetchedAt && result.fetchedAt > latest) ? result.fetchedAt : latest, undefined);

/** Data-source boundary for operational runtime entities. */
export interface RuntimeRepository {
  /** Async production-read contracts. */
  queryNodes(): Promise<QueryResult<RuntimeNode[]>>;
  queryServiceInstances(): Promise<QueryResult<ServiceInstance[]>>;
  queryModelRevisions(): Promise<QueryResult<ModelRevision[]>>;
  querySnapshot(): Promise<QueryResult<RuntimeSnapshot>>;
  /** @deprecated Compatibility reads for pages not yet migrated to QueryResult. */
  listNodes(): RuntimeNode[];
  findNodeById(nodeId: string): RuntimeNode | undefined;
  listServiceInstances(): ServiceInstance[];
  listModelRevisions(): ModelRevision[];
  findModelRevisionById(modelRevisionId: string): ModelRevision | undefined;
}

export const runtimeRepository: RuntimeRepository = {
  queryNodes: () => fixtureDataSource.readRuntimeNodes(),
  queryServiceInstances: () => fixtureDataSource.readServiceInstances(),
  queryModelRevisions: () => fixtureDataSource.readModelRevisions(),
  async querySnapshot() {
    const [nodesResult, servicesResult, modelsResult] = await Promise.all([
      fixtureDataSource.readRuntimeNodes(),
      fixtureDataSource.readServiceInstances(),
      fixtureDataSource.readModelRevisions(),
    ]);
    const results: QueryResult<unknown>[] = [nodesResult, servicesResult, modelsResult];
    const fetchedAt = latestFetch(results);
    const hasData = results.some((result) => result.data !== undefined);
    const snapshot = hasData
      ? { nodes: nodesResult.data ?? [], services: servicesResult.data ?? [], models: modelsResult.data ?? [] }
      : undefined;
    const error = firstError(results) ?? { code: "runtime_data_unavailable", message: "运行环境数据暂时不可用。" };

    if (results.some((result) => result.status === "offline")) return offlineResult(error, snapshot, fetchedAt);
    if (results.some((result) => result.status === "error")) return errorResult(error, snapshot, fetchedAt);
    if (results.some((result) => result.status === "stale")) return snapshot ? staleResult(snapshot, fetchedAt ?? new Date().toISOString(), firstError(results)) : errorResult(error);
    if (results.some((result) => result.status === "loading")) return loadingResult();
    if (!snapshot || (snapshot.nodes.length === 0 && snapshot.services.length === 0)) return emptyResult(snapshot, fetchedAt);
    return successResult(snapshot, fetchedAt);
  },
  listNodes: () => fixtureDataSource.snapshotRuntimeNodes(),
  findNodeById: (nodeId) => fixtureDataSource.snapshotRuntimeNodes().find((node) => node.id === nodeId),
  listServiceInstances: () => fixtureDataSource.snapshotServiceInstances(),
  listModelRevisions: () => fixtureDataSource.snapshotModelRevisions(),
  findModelRevisionById: (modelRevisionId) => fixtureDataSource.snapshotModelRevisions().find((model) => model.id === modelRevisionId),
};
