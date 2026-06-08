import { Module } from '@nestjs/common';
import { AiModule } from './modules/ai/ai.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';

@Module({
  imports: [AiModule, WorkoutsModule],
})
export class AppModule {}
