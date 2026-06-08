# Architecture Rules

- The workouts module must not call OpenAI, Anthropic, Gemini, or any other provider directly.
- The workouts module must use the `AiService` from `AiModule`.
- The controller must only handle HTTP concerns.
- The use case must orchestrate the workout generation flow.
- Prompt creation must stay inside a dedicated prompt builder service.
- AI output validation must stay inside a dedicated validator service.
- The AI response must be validated before returning it to the frontend.
- For now, do not persist generated workouts in the database.
- Keep the implementation lean and focused on the MVP.

---

## Task 1 — Create the Workouts Module

### Objective

Create the base NestJS module for workouts.

### Files

- `src/modules/workouts/workouts.module.ts`
- `src/modules/workouts/workouts.controller.ts`

### Requirements

- Create `WorkoutsModule`.
- Import `AiModule`.
- Register all providers used by the module.
- Create an initial `WorkoutsController`.
- Expose a `POST /workouts/generate` endpoint.

### Expected Providers

- `GenerateWorkoutUseCase`
- `WorkoutPromptBuilderService`
- `WorkoutOutputValidatorService`

### Acceptance Criteria

- `WorkoutsModule` is properly registered.
- `AiModule` is imported.
- `WorkoutsController` is available.
- `POST /workouts/generate` route exists.
- The module compiles without errors.
