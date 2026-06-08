## Task 14 — Add Manual Test Payload

### Objective

Create a sample request payload to test the endpoint manually.

### File

`src/modules/workouts/examples/generate-workout.payload.json`

### Payload

```json
{
  "goal": "strength",
  "level": "beginner",
  "daysPerWeek": 3,
  "sessionDurationMinutes": 45,
  "availableEquipment": ["pull-up bar", "parallel bars"],
  "injuries": ["shoulder discomfort"],
  "focusAreas": ["upper body", "core"]
}
```

### Acceptance Criteria

- The payload can be used in Postman, Insomnia, Thunder Client, or curl.
- The payload generates a valid workout.
- The generated response matches `WorkoutPlan`.
