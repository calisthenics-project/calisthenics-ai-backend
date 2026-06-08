## Task 15 — Add Unit Tests for Prompt Builder

### Objective

Test prompt generation without calling the AI.

### File

`src/modules/workouts/services/workout-prompt-builder.service.spec.ts`

### Test Cases

- Should return the system prompt.
- Should include goal in user prompt.
- Should include level in user prompt.
- Should include days per week in user prompt.
- Should use `"none"` when injuries are empty.
- Should use `"general"` when focus areas are empty.

### Acceptance Criteria

- Tests do not call external APIs.
- Tests run quickly.
- Prompt builder behavior is covered.
