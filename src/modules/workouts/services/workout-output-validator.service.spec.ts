import { BadRequestException } from '@nestjs/common';
import { WorkoutOutputValidatorService } from './workout-output-validator.service';
import { WorkoutPlan } from '../schemas/workout-plan.schema';

describe('WorkoutOutputValidatorService', () => {
  let service: WorkoutOutputValidatorService;

  beforeEach(() => {
    service = new WorkoutOutputValidatorService();
  });

  const validWorkoutPlan: WorkoutPlan = {
    title: 'Test Workout',
    summary: 'A test plan',
    level: 'beginner',
    durationWeeks: 4,
    daysPerWeek: 3,
    weeklySchedule: [
      {
        day: 1,
        name: 'Day 1',
        focus: 'upper body',
        warmup: [{ name: 'Arm circles' }],
        mainExercises: [{ name: 'Push-up', sets: 3, reps: '10' }],
        cooldown: [{ name: 'Stretch' }],
      },
    ],
    recommendations: ['Rest between sets'],
    safetyNotes: ['Warm up first'],
  };

  it('should return a valid WorkoutPlan when input is valid', () => {
    const result = service.validate(validWorkoutPlan);
    expect(result).toEqual(validWorkoutPlan);
  });

  it('should throw BadRequestException when title is missing', () => {
    const { title, ...withoutTitle } = validWorkoutPlan;
    expect(() => service.validate(withoutTitle)).toThrow(BadRequestException);
  });

  it('should throw BadRequestException when weeklySchedule is missing', () => {
    const { weeklySchedule, ...withoutSchedule } = validWorkoutPlan;
    expect(() => service.validate(withoutSchedule)).toThrow(
      BadRequestException,
    );
  });

  it('should throw BadRequestException when an exercise is malformed (missing name)', () => {
    const malformed = {
      ...validWorkoutPlan,
      weeklySchedule: [
        {
          ...validWorkoutPlan.weeklySchedule[0],
          mainExercises: [{ sets: 3, reps: '10' }],
        },
      ],
    };
    expect(() => service.validate(malformed)).toThrow(BadRequestException);
  });

  it('should throw BadRequestException when input is not an object', () => {
    expect(() => service.validate('not an object')).toThrow(
      BadRequestException,
    );
  });
});
