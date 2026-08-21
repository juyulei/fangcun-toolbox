import type { Task, TaskArtifact, TaskAttempt } from "../domain";
import { fixtureDataSource } from "../dataSources/fixtureDataSource";
import { emptyResult, mapQueryResult, type QueryResult } from "../queryResult";

const queryEntityById = <T extends { id: string }>(result: QueryResult<T[]>, id: string): QueryResult<T> => {
  if (result.data === undefined) {
    const { data: _data, ...state } = result;
    return state;
  }
  const entity = result.data.find((item) => item.id === id);
  return entity ? { ...result, data: entity } : emptyResult<T>(undefined, result.fetchedAt);
};

/**
 * Data-source boundary for task records.
 * Replace this fixture-backed implementation with an API adapter later while
 * preserving the interface consumed by selectors.
 */
export interface TaskRepository {
  /** Async production-read contracts. */
  queryList(): Promise<QueryResult<Task[]>>;
  queryById(taskId: string): Promise<QueryResult<Task>>;
  queryArtifacts(): Promise<QueryResult<TaskArtifact[]>>;
  queryArtifactsByTaskId(taskId: string): Promise<QueryResult<TaskArtifact[]>>;
  queryAttempts(): Promise<QueryResult<TaskAttempt[]>>;
  queryAttemptsByTaskId(taskId: string): Promise<QueryResult<TaskAttempt[]>>;
  /** @deprecated Compatibility reads for pages not yet migrated to QueryResult. */
  list(): Task[];
  findById(taskId: string): Task | undefined;
  listArtifactsByTaskId(taskId: string): TaskArtifact[];
  listAttemptsByTaskId(taskId: string): TaskAttempt[];
}

export const taskRepository: TaskRepository = {
  queryList: () => fixtureDataSource.readTasks(),
  async queryById(taskId) {
    return queryEntityById(await fixtureDataSource.readTasks(), taskId);
  },
  queryArtifacts: () => fixtureDataSource.readTaskArtifacts(),
  async queryArtifactsByTaskId(taskId) {
    return mapQueryResult(await fixtureDataSource.readTaskArtifacts(), (artifacts) => artifacts.filter((artifact) => artifact.taskId === taskId));
  },
  queryAttempts: () => fixtureDataSource.readTaskAttempts(),
  async queryAttemptsByTaskId(taskId) {
    return mapQueryResult(await fixtureDataSource.readTaskAttempts(), (attempts) => attempts.filter((attempt) => attempt.taskId === taskId));
  },
  list: () => fixtureDataSource.snapshotTasks(),
  findById: (taskId) => fixtureDataSource.snapshotTasks().find((task) => task.id === taskId),
  listArtifactsByTaskId: (taskId) => fixtureDataSource.snapshotTaskArtifacts().filter((artifact) => artifact.taskId === taskId),
  listAttemptsByTaskId: (taskId) => fixtureDataSource.snapshotTaskAttempts().filter((attempt) => attempt.taskId === taskId),
};
