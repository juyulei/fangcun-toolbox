import type { ConsoleDomainFixture } from "../domain";
import { consoleDomainFixture } from "../domainFixtures";
import { emptyResult, successResult, type QueryResult } from "../queryResult";

/**
 * Read-only fixture implementation of the Console data-source boundary.
 *
 * API, SQLite, filesystem-index, and local-runtime implementations can replace
 * this module while repositories keep their public query contracts unchanged.
 */
export interface ConsoleDataSource {
  readTools(): Promise<QueryResult<ConsoleDomainFixture["tools"]>>;
  readTasks(): Promise<QueryResult<ConsoleDomainFixture["tasks"]>>;
  readTaskArtifacts(): Promise<QueryResult<ConsoleDomainFixture["taskArtifacts"]>>;
  readTaskAttempts(): Promise<QueryResult<ConsoleDomainFixture["taskAttempts"]>>;
  readRuntimeNodes(): Promise<QueryResult<ConsoleDomainFixture["runtimeNodes"]>>;
  readServiceInstances(): Promise<QueryResult<ConsoleDomainFixture["serviceInstances"]>>;
  readModelRevisions(): Promise<QueryResult<ConsoleDomainFixture["modelRevisions"]>>;
  readDatasets(): Promise<QueryResult<ConsoleDomainFixture["datasets"]>>;
  readQualityRuns(): Promise<QueryResult<ConsoleDomainFixture["qualityRuns"]>>;
  readEvents(): Promise<QueryResult<ConsoleDomainFixture["events"]>>;
}

/** Temporary synchronous bridge while current pages still use synchronous selectors. */
interface FixtureSnapshotDataSource {
  snapshotTools(): ConsoleDomainFixture["tools"];
  snapshotTasks(): ConsoleDomainFixture["tasks"];
  snapshotTaskArtifacts(): ConsoleDomainFixture["taskArtifacts"];
  snapshotTaskAttempts(): ConsoleDomainFixture["taskAttempts"];
  snapshotRuntimeNodes(): ConsoleDomainFixture["runtimeNodes"];
  snapshotServiceInstances(): ConsoleDomainFixture["serviceInstances"];
  snapshotModelRevisions(): ConsoleDomainFixture["modelRevisions"];
  snapshotDatasets(): ConsoleDomainFixture["datasets"];
  snapshotQualityRuns(): ConsoleDomainFixture["qualityRuns"];
  snapshotEvents(): ConsoleDomainFixture["events"];
}

const fixtureList = <T>(items: T[]): Promise<QueryResult<T[]>> => Promise.resolve(
  items.length ? successResult([...items]) : emptyResult([]),
);

export const fixtureDataSource: ConsoleDataSource & FixtureSnapshotDataSource = {
  readTools: () => fixtureList(consoleDomainFixture.tools),
  readTasks: () => fixtureList(consoleDomainFixture.tasks),
  readTaskArtifacts: () => fixtureList(consoleDomainFixture.taskArtifacts),
  readTaskAttempts: () => fixtureList(consoleDomainFixture.taskAttempts),
  readRuntimeNodes: () => fixtureList(consoleDomainFixture.runtimeNodes),
  readServiceInstances: () => fixtureList(consoleDomainFixture.serviceInstances),
  readModelRevisions: () => fixtureList(consoleDomainFixture.modelRevisions),
  readDatasets: () => fixtureList(consoleDomainFixture.datasets),
  readQualityRuns: () => fixtureList(consoleDomainFixture.qualityRuns),
  readEvents: () => fixtureList(consoleDomainFixture.events),
  snapshotTools: () => [...consoleDomainFixture.tools],
  snapshotTasks: () => [...consoleDomainFixture.tasks],
  snapshotTaskArtifacts: () => [...consoleDomainFixture.taskArtifacts],
  snapshotTaskAttempts: () => [...consoleDomainFixture.taskAttempts],
  snapshotRuntimeNodes: () => [...consoleDomainFixture.runtimeNodes],
  snapshotServiceInstances: () => [...consoleDomainFixture.serviceInstances],
  snapshotModelRevisions: () => [...consoleDomainFixture.modelRevisions],
  snapshotDatasets: () => [...consoleDomainFixture.datasets],
  snapshotQualityRuns: () => [...consoleDomainFixture.qualityRuns],
  snapshotEvents: () => [...consoleDomainFixture.events],
};
