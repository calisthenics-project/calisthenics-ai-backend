import { WorkoutsController } from './workouts.controller';

const mockUseCase = { execute: jest.fn() };
const controller = new WorkoutsController(mockUseCase as any);

const input = {
  goal: 'strength' as const,
  level: 'beginner' as const,
  daysPerWeek: 3,
  sessionDurationMinutes: 45,
  availableEquipment: ['pull-up bar'],
};

const minimalWorkoutPlan = {
  title: 'Test',
  summary: 'Test',
  level: 'beginner',
  durationWeeks: 4,
  daysPerWeek: 3,
  weeklySchedule: [],
  recommendations: [],
  safetyNotes: [],
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('WorkoutsController', () => {
  describe('generate', () => {
    it('should call generateWorkoutUseCase.execute with the request body', async () => {
      mockUseCase.execute.mockResolvedValue(minimalWorkoutPlan);

      await controller.generate(input as any);

      expect(mockUseCase.execute).toHaveBeenCalledWith(input);
    });

    it('should return a WorkoutResponseDto-shaped object from the mapped response', async () => {
      mockUseCase.execute.mockResolvedValue(minimalWorkoutPlan);

      const result = await controller.generate(input as any);

      expect(result).toMatchObject({
        title: 'Test',
        summary: 'Test',
        level: 'beginner',
        durationWeeks: 4,
        daysPerWeek: 3,
        weeklySchedule: [],
        recommendations: [],
        safetyNotes: [],
      });
    });

    it('should propagate errors thrown by the use case', async () => {
      mockUseCase.execute.mockRejectedValue(new Error('Use case error'));

      await expect(controller.generate(input as any)).rejects.toThrow('Use case error');
    });
  });
});
