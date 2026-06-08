import { WorkoutPromptBuilderService } from './workout-prompt-builder.service';
import { GenerateWorkoutRequestDto } from '../dto/generate-workout.request.dto';

describe('WorkoutPromptBuilderService', () => {
  let service: WorkoutPromptBuilderService;

  beforeEach(() => {
    service = new WorkoutPromptBuilderService();
  });

  describe('buildSystemPrompt', () => {
    it('should return a non-empty system prompt string', () => {
      const result = service.buildSystemPrompt();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('buildUserPrompt', () => {
    const baseInput: GenerateWorkoutRequestDto = {
      goal: 'strength',
      level: 'beginner',
      daysPerWeek: 3,
      sessionDurationMinutes: 45,
      availableEquipment: ['pull-up bar'],
    };

    it('should include goal in user prompt', () => {
      const result = service.buildUserPrompt(baseInput);
      expect(result).toContain('strength');
    });

    it('should include level in user prompt', () => {
      const result = service.buildUserPrompt(baseInput);
      expect(result).toContain('beginner');
    });

    it('should include daysPerWeek in user prompt', () => {
      const result = service.buildUserPrompt(baseInput);
      expect(result).toContain('3');
    });

    it('should use "none" when injuries are absent', () => {
      const result = service.buildUserPrompt({
        ...baseInput,
        injuries: undefined,
      });
      expect(result).toContain('none');
    });

    it('should use "none" when injuries array is empty', () => {
      const result = service.buildUserPrompt({ ...baseInput, injuries: [] });
      expect(result).toContain('none');
    });

    it('should use "general" when focusAreas are absent', () => {
      const result = service.buildUserPrompt({
        ...baseInput,
        focusAreas: undefined,
      });
      expect(result).toContain('general');
    });

    it('should use "general" when focusAreas array is empty', () => {
      const result = service.buildUserPrompt({ ...baseInput, focusAreas: [] });
      expect(result).toContain('general');
    });
  });
});
