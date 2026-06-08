// @curaos/tasks-sdk - public surface.
//
// Generated from tasks-service's TypeSpec REST contract (specs/tasks.tsp ->
// OpenAPI 3.1 -> @hey-api/openapi-ts) and its AsyncAPI event contract
// (specs/tasks.asyncapi.yaml -> json-schema-to-typescript). Run
// `bun run generate` to refresh from the contracts; drift is enforced by
// test/drift.test.ts.
//
// REST: typed operation functions + request/response types + the `client`
// instance. Configure the base URL via `client.setConfig({ baseUrl })` or
// `createClient()` from `@hey-api/client-fetch`.
//
// Events: the snake_case envelope wire-types (the canonical envelope; do NOT
// camelCase) for the event-consumer surface.
//
// NOTE: re-run `bun run generate` to (re)create the `./rest` + `./events.gen`
// outputs this barrel re-exports, then add the service-specific event-type
// re-export below (the event interface names come from the AsyncAPI schema ids).

export * from './rest';
export { client } from './rest/client.gen';
// export type { TasksEventPayload, EventHeaders } from './events.gen';
