import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AiService } from '../../../ai/ai.service';
import { WorkoutPromptBuilderService } from '../../services/workout-prompt-builder.service';
import { WorkoutOutputValidatorService } from '../../services/workout-output-validator.service';
import { GenerateWorkoutRequestDto } from '../../dto/generate-workout.request.dto';
import { WorkoutPlan } from '../../schemas/workout-plan.schema';

@Injectable()
export class GenerateWorkoutUseCase {
  constructor(
    private readonly aiService: AiService,
    private readonly promptBuilder: WorkoutPromptBuilderService,
    private readonly outputValidator: WorkoutOutputValidatorService,
  ) {}

  async execute(input: GenerateWorkoutRequestDto): Promise<WorkoutPlan> {
    const systemPrompt = this.promptBuilder.buildSystemPrompt();
    const userPrompt = this.promptBuilder.buildUserPrompt(input);

    let aiOutput: unknown;
    try {
      aiOutput = await this.aiService.generateStructuredOutput({
        systemPrompt,
        userPrompt,
        schemaName: 'WorkoutPlan',
      });
    } catch {
      throw new InternalServerErrorException('Unable to generate workout at the moment.');
    }

    return this.outputValidator.validate(aiOutput);
  }
}
