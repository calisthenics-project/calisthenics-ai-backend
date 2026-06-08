import { Body, Controller, Post } from '@nestjs/common';
import { GenerateWorkoutUseCase } from './application/use-cases/generate-workout.usecase';
import { WorkoutHttpMapper } from './mappers/workout-http.mapper';
import { GenerateWorkoutRequestDto } from './dto/generate-workout.request.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly generateWorkoutUseCase: GenerateWorkoutUseCase) {}

  @Post('generate')
  async generate(@Body() body: GenerateWorkoutRequestDto) {
    const workout = await this.generateWorkoutUseCase.execute(body);
    return WorkoutHttpMapper.toResponse(workout);
  }
}
