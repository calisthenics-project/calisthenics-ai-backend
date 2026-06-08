## Task 18 — Add Controller Test

### Objective

Test the controller behavior.

### File

`src/modules/workouts/workouts.controller.spec.ts`

### Test Cases

- Should call `GenerateWorkoutUseCase`.
- Should return mapped response.
- Should propagate errors from the use case.

### Acceptance Criteria

- Controller test does not call AI.
- Controller test does not build prompts.
- Controller test only validates HTTP layer behavior.
