import { defineConfig } from '@hey-api/openapi-ts';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Resolve paths relative to THIS package so the recipe is portable across the
// sibling SDK lanes - only the service slug changes.
const here = dirname(fileURLToPath(import.meta.url));

// Source of truth: the OpenAPI 3.1 the tasks-core-service emits from its
// TypeSpec contract via `bun run spec:openapi` (= `tsp compile specs/tasks.tsp`).
// scripts/generate.mjs runs that compile first, so this file always exists.
// NOTE: this is a `-core-service` (ADR-0210 neutral root), so the service dir is
// `tasks-core-service`, not the plain `<name>-service` form. The SDK package name stays
// `@curaos/tasks-sdk`.
const openapiInput = resolve(here, '../../services/tasks-core-service/dist/openapi.yaml');

export default defineConfig({
  input: openapiInput,
  output: {
    path: resolve(here, 'src/rest'),
    // No generator-side lint/format - the committed output stays deterministic
    // so the drift guard can rely on byte-equality. (`postProcess: []` is the
    // non-deprecated form of the old `format: false` / `lint: false`.)
    postProcess: [],
    tsConfigPath: resolve(here, 'openapi-ts.tsconfig.json'),
  },
  plugins: ['@hey-api/client-fetch'],
});
