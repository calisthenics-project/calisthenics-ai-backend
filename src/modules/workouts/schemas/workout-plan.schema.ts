import { z } from 'zod';

export const exerciseSchema = z.object({
  name: z.string(),
  sets: z.number().optional(),
  reps: z.string().optional(),
  duration: z.string().optional(),
  restSeconds: z.number().optional(),
  progression: z.string().optional(),
  regression: z.string().optional(),
  notes: z.string().optional(),
});

export const workoutDaySchema = z.object({
  day: z.number(),
  name: z.string(),
  focus: z.string(),
  warmup: z.array(exerciseSchema),
  mainExercises: z.array(exerciseSchema),
  cooldown: z.array(exerciseSchema),
});

export const workoutPlanSchema = z.object({
  title: z.string(),
  summary: z.string(),
  level: z.string(),
  durationWeeks: z.number(),
  daysPerWeek: z.number(),
  weeklySchedule: z.array(workoutDaySchema),
  recommendations: z.array(z.string()),
  safetyNotes: z.array(z.string()),
});

export type Exercise = z.infer<typeof exerciseSchema>;
export type WorkoutDay = z.infer<typeof workoutDaySchema>;
export type WorkoutPlan = z.infer<typeof workoutPlanSchema>;
