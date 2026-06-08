## Task 7 — Create the Workout Prompt Builder Service

### Objective

Create a service responsible for preparing the prompts used in workout generation.

### File

`src/modules/workouts/services/workout-prompt-builder.service.ts`

### Requirements

Create the service:

```ts
@Injectable()
export class WorkoutPromptBuilderService {
  buildSystemPrompt(): string {}

  buildUserPrompt(input: GenerateWorkoutRequestDto): string {}
}
```

### Responsibilities

- Return the fixed system prompt.
- Build the dynamic user prompt.
- Hide prompt implementation details from the use case.

### Dependencies

Use:

- `WORKOUT_SYSTEM_PROMPT`
- `buildWorkoutUserPrompt`

### Acceptance Criteria

- The service is injectable.
- The service is registered in `WorkoutsModule`.
- The service does not call the AI provider.
- The service does not validate the AI output.
