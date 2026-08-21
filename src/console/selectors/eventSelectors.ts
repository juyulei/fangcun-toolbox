import type { Event } from "../domain";
import { mapQueryResult, type QueryResult } from "../queryResult";
import { eventRepository } from "../repositories/eventRepository";

const newestFirst = (events: Event[]) => [...events].sort((left, right) => right.occurredAt.localeCompare(left.occurredAt));

/** Async QueryResult selector for future page data-state integration. */
export async function queryEvents(): Promise<QueryResult<Event[]>> {
  return mapQueryResult(await eventRepository.queryList(), newestFirst);
}

export function getEvents(): Event[] {
  return newestFirst(eventRepository.list());
}

export function getRecentEvents(limit = 20): Event[] {
  return getEvents().slice(0, Math.max(0, limit));
}

export function getEventsBySubject(subjectType: Event["subjectType"], subjectId: string): Event[] {
  return getEvents().filter((event) => event.subjectType === subjectType && event.subjectId === subjectId);
}
