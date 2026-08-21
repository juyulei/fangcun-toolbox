import type { Tool } from "../domain";
import { fixtureDataSource } from "../dataSources/fixtureDataSource";
import type { QueryResult } from "../queryResult";

/** Fixture-backed catalog boundary for Fangcun tools. */
export interface ToolRepository {
  /** Async production-read contract. */
  queryList(): Promise<QueryResult<Tool[]>>;
  /** @deprecated Compatibility read for pages not yet migrated to QueryResult. */
  list(): Tool[];
}

export const toolRepository: ToolRepository = {
  queryList: () => fixtureDataSource.readTools(),
  list: () => fixtureDataSource.snapshotTools(),
};
