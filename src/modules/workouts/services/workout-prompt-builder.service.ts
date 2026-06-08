import { Injectable } from '@nestjs/common';
import { WORKOUT_SYSTEM_PROMPT } from '../prompts/workout-system.prompt';
import { buildWorkoutUserPrompt } from '../prompts/workout-user-prompt.builder';
import { GenerateWorkoutRequestDto } from '../dto/generate-workout.request.dto';

@Injectable()
export class WorkoutPromptBuilderService {
  buildSystemPrompt(): string {
    return WORKOUT_SYSTEM_PROMPT;
  }

  buildUserPrompt(input: GenerateWorkoutRequestDto): string {
    return buildWorkoutUserPrompt(input);
  }
}
