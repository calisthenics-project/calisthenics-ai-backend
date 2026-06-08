## Task 4 — Create the Workout Plan Zod Schema

### Objective

Create the schema that validates the AI-generated output.

### File

`src/modules/workouts/schemas/workout-plan.schema.ts`

### Requirements

Use `zod` to define the expected structure of the generated workout.

Create:

- `exerciseSchema`
- `workoutDaySchema`
- `workoutPlanSchema`

Export:

```ts
export type WorkoutPlan = z.infer<typeof workoutPlanSchema>;
```

### Expected Schema Shape

```ts
{
  title: string;
  summary: string;
  level: string;
  durationWeeks: number;
  daysPerWeek: number;
  weeklySchedule: [
    {
      day: number;
      name: string;
      focus: string;
      warmup: Exercise[];
      mainExercises: Exercise[];
      cooldown: Exercise[];
    }
  ];
  recommendations: string[];
  safetyNotes: string[];
}
```

### Acceptance Criteria

- The schema validates a successful AI response.
- The schema rejects malformed AI responses.
- The exported `WorkoutPlan` type is used in the module.
- No HTTP-specific logic exists inside this file.
