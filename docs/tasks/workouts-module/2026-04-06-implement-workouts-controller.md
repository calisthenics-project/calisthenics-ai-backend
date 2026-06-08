## Task 11 — Implement the Workouts Controller

### Objective

Connect the HTTP route to the use case.

### File

`src/modules/workouts/workouts.controller.ts`

### Requirements

Create endpoint: `POST /workouts/generate`

```ts
@Controller("workouts")
export class WorkoutsController {
  constructor(
    private readonly generateWorkoutUseCase: GenerateWorkoutUseCase,
  ) {}

  @Post("generate")
  async generate(@Body() body: GenerateWorkoutRequestDto) {
    const workout = await this.generateWorkoutUseCase.execute(body);

    return WorkoutHttpMapper.toResponse(workout);
  }
}
```

### Acceptance Criteria

- The endpoint receives the request body.
- The endpoint calls `GenerateWorkoutUseCase`.
- The endpoint returns a formatted response.
- The controller does not build prompts.
- The controller does not call `AiService` directly.
- The controller does not validate the AI output directly.
