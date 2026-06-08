## Task 6 — Create the User Prompt Builder

### Objective

Create a function that builds the dynamic user prompt based on the request input.

### File

`src/modules/workouts/prompts/workout-user-prompt.builder.ts`

### Requirements

Create and export a function:

```ts
export function buildWorkoutUserPrompt(input: GenerateWorkoutRequestDto): string
```

The function must include:

- Goal
- Level
- Days per week
- Session duration
- Available equipment
- Injuries or limitations
- Focus areas
- Expected JSON structure

### Rules

- Do not call the AI inside this function.
- Do not validate AI output inside this function.
- Only generate the user prompt string.

### Acceptance Criteria

- The function returns a string.
- The prompt includes all user-provided relevant fields.
- Optional fields are handled safely.
- Empty injuries should become `"none"`.
- Empty focus areas should become `"general"`.
