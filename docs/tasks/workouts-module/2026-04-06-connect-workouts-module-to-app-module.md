## Task 19 — Connect Workouts Module to App Module

### Objective

Register the `WorkoutsModule` in the root application.

### File

`src/app.module.ts`

### Requirements

Import:

- `WorkoutsModule`

### Example

```ts
@Module({
  imports: [
    AiModule,
    WorkoutsModule,
  ],
})
export class AppModule {}
```

### Acceptance Criteria

- The application starts successfully.
- `POST /workouts/generate` is reachable.
- No dependency injection errors occur.
