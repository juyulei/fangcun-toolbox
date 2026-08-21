/**
 * Transport-neutral result contract for Console reads.
 *
 * Domain entities intentionally remain free of loading, transport, cache, and
 * connectivity concerns. Repositories expose those concerns through this type.
 */
export type QueryStatus = "loading" | "success" | "empty" | "error" | "stale" | "offline";
export type QueryFreshness = "fresh" | "stale" | "unknown";

export type QueryError = {
  code: string;
  message: string;
  cause?: unknown;
};

export type QueryResult<T> = {
  status: QueryStatus;
  data?: T;
  error?: QueryError;
  fetchedAt?: string;
  freshness: QueryFreshness;
};

const now = () => new Date().toISOString();

export function successResult<T>(data: T, fetchedAt = now()): QueryResult<T> {
  return { status: "success", data, fetchedAt, freshness: "fresh" };
}

export function emptyResult<T>(data?: T, fetchedAt = now()): QueryResult<T> {
  return { status: "empty", data, fetchedAt, freshness: "fresh" };
}

export function loadingResult<T>(): QueryResult<T> {
  return { status: "loading", freshness: "unknown" };
}

export function errorResult<T>(error: QueryError, data?: T, fetchedAt?: string): QueryResult<T> {
  return { status: "error", data, error, fetchedAt, freshness: data === undefined ? "unknown" : "stale" };
}

export function staleResult<T>(data: T, fetchedAt: string, error?: QueryError): QueryResult<T> {
  return { status: "stale", data, error, fetchedAt, freshness: "stale" };
}

export function offlineResult<T>(error: QueryError, data?: T, fetchedAt?: string): QueryResult<T> {
  return { status: "offline", data, error, fetchedAt, freshness: data === undefined ? "unknown" : "stale" };
}

/** Applies selector-only presentation logic without changing read state. */
export function mapQueryResult<T, U>(result: QueryResult<T>, mapper: (data: T) => U): QueryResult<U> {
  if (result.data === undefined) {
    const { data: _data, ...state } = result;
    return state;
  }
  return { ...result, data: mapper(result.data) };
}
