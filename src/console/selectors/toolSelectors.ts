import type { Tool } from "../domain";
import { mapQueryResult, type QueryResult } from "../queryResult";
import { toolRepository } from "../repositories/toolRepository";

/** Async QueryResult selector for future page data-state integration. */
export async function queryTools(): Promise<QueryResult<Tool[]>> {
  return mapQueryResult(await toolRepository.queryList(), (tools) => [...tools].sort((left, right) => left.name.localeCompare(right.name)));
}

export function getTools(): Tool[] {
  return toolRepository.list().sort((left, right) => left.name.localeCompare(right.name));
}
