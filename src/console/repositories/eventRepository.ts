import type { Event } from "../domain";
import { fixtureDataSource } from "../dataSources/fixtureDataSource";
import type { QueryResult } from "../queryResult";

/** Data-source boundary for the immutable Console event stream. */
export interface EventRepository {
  /** Async production-read contract. */
  queryList(): Promise<QueryResult<Event[]>>;
  /** @deprecated Compatibility read for pages not yet migrated to QueryResult. */
  list(): Event[];
}

export const eventRepository: EventRepository = {
  queryList: () => fixtureDataSource.readEvents(),
  list: () => fixtureDataSource.snapshotEvents(),
};
