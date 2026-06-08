## Task 9 — Create the Generate Workout Use Case

### Objective

Create the main application use case responsible for generating a workout.

### File

`src/modules/workouts/use-cases/generate-workout.use-case.ts`

### Requirements

Create the use case:

```ts
@Injectable()
export class GenerateWorkoutUseCase {
  constructor(
    private readonly aiService: AiService,
    private readonly promptBuilder: WorkoutPromptBuilderService,
    private readonly outputValidator: WorkoutOutputValidatorService,
  ) {}

  async execute(input: GenerateWorkoutRequestDto): Promise<WorkoutPlan> {}
}
```

### Flow

The use case must:

1. Receive validated input from the controller.
2. Build the system prompt.
3. Build the user prompt.
4. Call `AiService`.
5. Receive the AI output.
6. Validate the AI output.
7. Return the validated workout plan.

### Expected AI Call

Use the existing `AiService` method for structured output generation. Adapt to the current `AiService` API if needed.

```ts
const aiOutput = await this.aiService.generateStructuredOutput({
  systemPrompt,
  userPrompt,
  schemaName: "WorkoutPlan",
});
```

### Acceptance Criteria

- The use case contains the orchestration logic.
- The use case does not know which AI provider is being used.
- The use case does not import the OpenAI SDK.
- The use case returns a typed `WorkoutPlan`.
- The use case does not persist data yet.
