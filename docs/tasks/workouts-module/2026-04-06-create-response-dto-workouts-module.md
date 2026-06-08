## Task 3 — Create the Workout Response DTO

### Objective

Create a response DTO representing the workout returned to the frontend.

### File

`src/modules/workouts/dto/workout-response.dto.ts`

### Requirements

The response should represent the generated workout plan.

Base structure:

```ts
export class WorkoutResponseDto {
  title: string;
  summary: string;
  level: string;
  durationWeeks: number;
  daysPerWeek: number;
  weeklySchedule: WorkoutDayResponseDto[];
  recommendations: string[];
  safetyNotes: string[];
}
```

Also create supporting DTOs:

- `WorkoutDayResponseDto`
- `ExerciseResponseDto`

### Exercise Fields

| Field | Type |
|---|---|
| `name` | `string` |
| `sets` | `number` (optional) |
| `reps` | `string` (optional) |
| `duration` | `string` (optional) |
| `restSeconds` | `number` (optional) |
| `progression` | `string` (optional) |
| `regression` | `string` (optional) |
| `notes` | `string` (optional) |

### Acceptance Criteria

- The response structure matches the expected frontend contract.
- The DTO is only used for output formatting.
- No AI logic exists inside response DTOs.
