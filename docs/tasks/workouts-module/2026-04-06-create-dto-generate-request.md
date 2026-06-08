## Task 2 — Create the Generate Workout Request DTO

### Objective

Create the DTO responsible for validating the request body received by the endpoint.

### File

`src/modules/workouts/dto/generate-workout.request.dto.ts`

### Requirements

Create a DTO with the following fields:

| Field                    | Type                                                                 |
| ------------------------ | -------------------------------------------------------------------- |
| `goal`                   | `"strength" \| "hypertrophy" \| "mobility" \| "fat_loss" \| "skill"` |
| `level`                  | `"beginner" \| "intermediate" \| "advanced"`                         |
| `daysPerWeek`            | `number`                                                             |
| `sessionDurationMinutes` | `number`                                                             |
| `availableEquipment`     | `string[]`                                                           |
| `injuries`               | `string[]` (optional)                                                |
| `focusAreas`             | `string[]` (optional)                                                |

### Validation Rules

- `goal` must be required.
- `level` must be required.
- `daysPerWeek` must be between 1 and 7.
- `sessionDurationMinutes` must be between 15 and 120.
- `availableEquipment` must be an array of strings.
- `injuries` must be optional and must be an array of strings.
- `focusAreas` must be optional and must be an array of strings.

### Suggested Decorators

Use `class-validator` decorators:

- `@IsEnum()`
- `@IsNumber()`
- `@Min()`
- `@Max()`
- `@IsArray()`
- `@IsString({ each: true })`
- `@IsOptional()`

### Acceptance Criteria

- Invalid inputs return HTTP 400.
- Valid inputs reach the use case.
- The DTO has no business logic.
- The DTO does not contain prompt-related logic.
