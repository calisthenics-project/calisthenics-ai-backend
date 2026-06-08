# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
pnpm install

# Development server (watch mode)
pnpm run start:dev

# Build
pnpm run build

# Lint (auto-fixes)
pnpm run lint

# Format
pnpm run format

# Unit tests
pnpm run test

# Run a single test file
pnpm run test -- --testPathPattern=<filename>

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov
```

## Architecture

This is a **NestJS** backend for a calisthenics AI app. The package manager is **pnpm**.

- `src/main.ts` — bootstrap entry point; reads `PORT` from env (default 3000), loads `.env` via `dotenv/config`
- `src/app.module.ts` — root module; feature modules are registered here
- `src/modules/workouts/` — workouts feature module (controllers/providers TBD)
- `src/modules/ai/` — AI feature module (controllers/providers TBD)

**AI integration:** Uses the `openai` npm package (not the Anthropic SDK). The app calls OpenAI's API — the API key must be available as `OPENAI_API_KEY` in the environment (loaded via `.env`).

**Module pattern:** Each feature lives under `src/modules/<feature>/` and exports a `<Feature>Module` registered in `AppModule`. NestJS standard structure: `<feature>.module.ts`, `<feature>.controller.ts`, `<feature>.service.ts`.

**TypeScript config:** `nodenext` module resolution, `ES2023` target, `emitDecoratorMetadata` enabled (required for NestJS DI), `noImplicitAny: false`.

Unit tests (`.spec.ts`) live alongside source files; e2e tests live in `test/`.
