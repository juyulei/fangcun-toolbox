import type { Dataset, QualityRun } from "../domain";
import { fixtureDataSource } from "../dataSources/fixtureDataSource";
import type { QueryResult } from "../queryResult";

/** Fixture-backed boundary for dataset and quality assets. */
export interface QualityRepository {
  /** Async production-read contracts. */
  queryDatasets(): Promise<QueryResult<Dataset[]>>;
  queryQualityRuns(): Promise<QueryResult<QualityRun[]>>;
  /** @deprecated Compatibility reads for pages not yet migrated to QueryResult. */
  listDatasets(): Dataset[];
  listQualityRuns(): QualityRun[];
}

export const qualityRepository: QualityRepository = {
  queryDatasets: () => fixtureDataSource.readDatasets(),
  queryQualityRuns: () => fixtureDataSource.readQualityRuns(),
  listDatasets: () => fixtureDataSource.snapshotDatasets(),
  listQualityRuns: () => fixtureDataSource.snapshotQualityRuns(),
};
