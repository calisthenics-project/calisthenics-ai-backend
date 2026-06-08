## Task 12 — Register Providers in Workouts Module

### Objective

Ensure all providers are properly registered.

### File

`src/modules/workouts/workouts.module.ts`

### Requirements

Register:

- `WorkoutsController`
- `GenerateWorkoutUseCase`
- `WorkoutPromptBuilderService`
- `WorkoutOutputValidatorService`

Import:

- `AiModule`

### Example

```ts
@Module({
  imports: [AiModule],
  controllers: [WorkoutsController],
  providers: [
    GenerateWorkoutUseCase,
    WorkoutPromptBuilderService,
    WorkoutOutputValidatorService,
  ],
})
export class WorkoutsModule {}
```

### Acceptance Criteria

- The module compiles.
- Dependency injection works.
- The controller can access the use case.
- The use case can access `AiService`.
- The use case can access the prompt builder and validator services.
