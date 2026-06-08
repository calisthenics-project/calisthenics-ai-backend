## Task 8 — Create the Workout Output Validator Service

### Objective

Create a service responsible for validating the AI output.

### File

`src/modules/workouts/services/workout-output-validator.service.ts`

### Requirements

Create the service:

```ts
@Injectable()
export class WorkoutOutputValidatorService {
  validate(output: unknown): WorkoutPlan {}
}
```

### Rules

- Use `workoutPlanSchema.safeParse`.
- Throw an error if the output does not match the schema.
- Return a typed `WorkoutPlan` when validation succeeds.

### Suggested Behavior

```ts
const parsed = workoutPlanSchema.safeParse(output);

if (!parsed.success) {
  throw new BadRequestException("Invalid AI workout response");
}

return parsed.data;
```

### Acceptance Criteria

- Valid AI output returns a typed `WorkoutPlan`.
- Invalid AI output throws an exception.
- The use case does not directly depend on Zod.
- The validator does not call the AI provider.
