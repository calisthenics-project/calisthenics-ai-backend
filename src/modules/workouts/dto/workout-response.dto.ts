export class ExerciseResponseDto {
  name: string;
  sets?: number;
  reps?: string;
  duration?: string;
  restSeconds?: number;
  progression?: string;
  regression?: string;
  notes?: string;
}

export class WorkoutDayResponseDto {
  day: number;
  name: string;
  focus: string;
  warmup: ExerciseResponseDto[];
  mainExercises: ExerciseResponseDto[];
  cooldown: ExerciseResponseDto[];
}

export class WorkoutResponseDto {
  title: string;
  summary: string;
  level: string;
  durationWeeks: number;
  daysPerWeek: number;
  weeklySchedule: WorkoutDayResponseDto[];
  recommendations: string[];
  safetyNotes: string[];
}
