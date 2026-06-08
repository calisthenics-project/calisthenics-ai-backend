import {
  WorkoutPlan,
  WorkoutDay,
  Exercise,
} from '../schemas/workout-plan.schema';
import {
  WorkoutResponseDto,
  WorkoutDayResponseDto,
  ExerciseResponseDto,
} from '../dto/workout-response.dto';

export class WorkoutHttpMapper {
  static toResponse(workout: WorkoutPlan): WorkoutResponseDto {
    return {
      title: workout.title,
      summary: workout.summary,
      level: workout.level,
      durationWeeks: workout.durationWeeks,
      daysPerWeek: workout.daysPerWeek,
      weeklySchedule: workout.weeklySchedule.map(WorkoutHttpMapper.toDay),
      recommendations: workout.recommendations,
      safetyNotes: workout.safetyNotes,
    };
  }

  private static toDay(day: WorkoutDay): WorkoutDayResponseDto {
    return {
      day: day.day,
      name: day.name,
      focus: day.focus,
      warmup: day.warmup.map(WorkoutHttpMapper.toExercise),
      mainExercises: day.mainExercises.map(WorkoutHttpMapper.toExercise),
      cooldown: day.cooldown.map(WorkoutHttpMapper.toExercise),
    };
  }

  private static toExercise(exercise: Exercise): ExerciseResponseDto {
    return {
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      duration: exercise.duration,
      restSeconds: exercise.restSeconds,
      progression: exercise.progression,
      regression: exercise.regression,
      notes: exercise.notes,
    };
  }
}
