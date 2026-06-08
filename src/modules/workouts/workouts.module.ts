import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { WorkoutsController } from './workouts.controller';
import { GenerateWorkoutUseCase } from './application/use-cases/generate-workout.usecase';
import { WorkoutPromptBuilderService } from './services/workout-prompt-builder.service';
import { WorkoutOutputValidatorService } from './services/workout-output-validator.service';

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
