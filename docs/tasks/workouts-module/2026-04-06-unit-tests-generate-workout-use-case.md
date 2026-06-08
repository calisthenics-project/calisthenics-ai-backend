## Task 17 — Add Unit Tests for Generate Workout Use Case

### Objective

Test the use case orchestration without calling the real AI provider.

### File

`src/modules/workouts/use-cases/generate-workout.use-case.spec.ts`

### Requirements

Mock:

- `AiService`
- `WorkoutPromptBuilderService`
- `WorkoutOutputValidatorService`

### Test Cases

- Should build prompts.
- Should call `AiService`.
- Should validate AI output.
- Should return validated workout.
- Should throw when AI service fails.
- Should throw when validator fails.

### Acceptance Criteria

- No real AI request is made.
- The use case orchestration is tested.
- Dependencies are mocked properly.
