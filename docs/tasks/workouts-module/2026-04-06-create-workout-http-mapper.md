## Task 10 — Create the HTTP Mapper

### Objective

Create a mapper responsible for transforming the internal workout object into the HTTP response DTO.

### File

`src/modules/workouts/mappers/workout-http.mapper.ts`

### Requirements

Create:

```ts
export class WorkoutHttpMapper {
  static toResponse(workout: WorkoutPlan): WorkoutResponseDto {}
}
```

### Rules

- The controller should use this mapper before returning data.
- The mapper should not call services.
- The mapper should not validate the AI output.
- The mapper should not contain business logic.

### Acceptance Criteria

- The mapper receives a `WorkoutPlan`.
- The mapper returns a `WorkoutResponseDto`.
- The controller does not manually shape the response.
