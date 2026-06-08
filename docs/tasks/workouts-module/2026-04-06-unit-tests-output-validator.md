## Task 16 — Add Unit Tests for Output Validator

### Objective

Test the AI output validator.

### File

`src/modules/workouts/services/workout-output-validator.service.spec.ts`

### Test Cases

- Should return a valid workout plan.
- Should throw when `title` is missing.
- Should throw when `weeklySchedule` is missing.
- Should throw when exercises are malformed.
- Should throw when response is not an object.

### Acceptance Criteria

- Valid schema passes.
- Invalid schema fails.
- The validator returns a typed `WorkoutPlan`.
