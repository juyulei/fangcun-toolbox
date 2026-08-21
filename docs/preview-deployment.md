# Fangcun Console Preview Deployment

## Purpose

Vercel Preview publishes the existing Fangcun Console as a read-only static site for UI/UX review. It uses the real React/Vite application, current fixture data, and the existing `/fangcun-toolbox/` routes. It does not deploy an API, backend, local Runtime, or development machine.

## Vercel project configuration

Import `juyulei/fangcun-toolbox` into Vercel and use these repository settings:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Build Command | `npm run build:vercel-preview` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Production deployment | Do not enable as part of this Preview setup |

`vercel.json` is intentionally limited to the Vite build command, `dist` output, and the SPA fallback under `/fangcun-toolbox/`. The Vercel-specific build emits `dist/fangcun-toolbox/`, matching the existing Vite base path, so static assets remain available at `/fangcun-toolbox/assets/...`.

## Preview environment

`npm run build:vercel-preview` injects only public build metadata:

- environment label: `Preview`
- short Git commit
- build time

The Console top bar shows this metadata only in Preview builds. No local paths, secrets, private environment variables, backend URLs, or Runtime controls are included.

## Expected Preview URL and routes

After Vercel connects the repository, each pull request or non-production commit receives a URL shaped like:

`https://<deployment>.vercel.app/fangcun-toolbox/overview`

Verify these routes directly, including a browser refresh on each route:

- `/fangcun-toolbox/overview`
- `/fangcun-toolbox/tasks`
- `/fangcun-toolbox/runtime`
- `/fangcun-toolbox/tools`
- `/fangcun-toolbox/models`
- `/fangcun-toolbox/datasets`
- `/fangcun-toolbox/quality`
- `/fangcun-toolbox/logs`
- `/fangcun-toolbox/settings`

Each route must load through HTTPS, keep the Preview Environment marker visible, and preserve Sidebar navigation without requiring an account.

## Release workflow

1. Commit and push the UI change to GitHub.
2. Vercel creates the Preview deployment from that commit.
3. Open the Preview URL at `/fangcun-toolbox/overview`.
4. Run `npm run review:console` locally for automated browser review.
5. Share the Vercel URL for the final manual review.

Vercel account connection and project authorization are the only manual prerequisite. This repository contains no production auto-publish instruction.
