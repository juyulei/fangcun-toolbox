import type { Dataset, QualityRun } from "../domain";
import { mapQueryResult, type QueryResult } from "../queryResult";
import { qualityRepository } from "../repositories/qualityRepository";

/** Async QueryResult selectors for future page data-state integration. */
export async function queryDatasets(): Promise<QueryResult<Dataset[]>> {
  return mapQueryResult(await qualityRepository.queryDatasets(), (datasets) => [...datasets].sort((left, right) => right.updatedAt.localeCompare(left.updatedAt)));
}

export async function queryQualityRuns(): Promise<QueryResult<QualityRun[]>> {
  return mapQueryResult(await qualityRepository.queryQualityRuns(), (runs) => [...runs].sort((left, right) => (right.completedAt ?? "").localeCompare(left.completedAt ?? "")));
}

export function getDatasets(): Dataset[] {
  return qualityRepository.listDatasets().sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
}

export function getQualityRuns(): QualityRun[] {
  return qualityRepository.listQualityRuns().sort((left, right) => (right.completedAt ?? "").localeCompare(left.completedAt ?? ""));
}

export function getQualitySummary() {
  return getQualitySummaryFor(getQualityRuns());
}

export function getQualitySummaryFor(runs: QualityRun[]) {
  const totalCases = runs.reduce((total, run) => total + run.totalCases, 0);
  const passedCases = runs.reduce((total, run) => total + run.passedCases, 0);

  return {
    totalRuns: runs.length,
    totalCases,
    passedCases,
    passRate: totalCases === 0 ? null : passedCases / totalCases,
    latestRun: runs[0],
  };
}
