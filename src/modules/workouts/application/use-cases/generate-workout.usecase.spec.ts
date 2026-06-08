import { InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { GenerateWorkoutUseCase } from './generate-workout.usecase';

const mockAiService = { generateStructuredOutput: jest.fn() };
const mockPromptBuilder = { buildSystemPrompt: jest.fn(), buildUserPrompt: jest.fn() };
const mockOutputValidator = { validate: jest.fn() };

const useCase = new GenerateWorkoutUseCase(
  mockAiService as any,
  mockPromptBuilder as any,
  mockOutputValidator as any,
);

const input = {
  goal: 'strength' as const,
  level: 'beginner' as const,
  daysPerWeek: 3,
  sessionDurationMinutes: 45,
  availableEquipment: ['pull-up bar'],
};

const mockWorkoutPlan = {
  title: 'Beginner Strength Plan',
  summary: 'A strength plan for beginners',
  level: 'beginner',
  durationWeeks: 4,
  daysPerWeek: 3,
  weeklySchedule: [],
  recommendations: ['Rest well'],
  safetyNotes: ['Warm up first'],
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('GenerateWorkoutUseCase', () => {
  describe('execute', () => {
    it('should call buildSystemPrompt and buildUserPrompt with the input', async () => {
      mockPromptBuilder.buildSystemPrompt.mockReturnValue('system prompt');
      mockPromptBuilder.buildUserPrompt.mockReturnValue('user prompt');
      mockAiService.generateStructuredOutput.mockResolvedValue({});
      mockOutputValidator.validate.mockReturnValue(mockWorkoutPlan);

      await useCase.execute(input);

      expect(mockPromptBuilder.buildSystemPrompt).toHaveBeenCalledTimes(1);
      expect(mockPromptBuilder.buildUserPrompt).toHaveBeenCalledWith(input);
    });

    it('should call aiService.generateStructuredOutput with system and user prompts', async () => {
      mockPromptBuilder.buildSystemPrompt.mockReturnValue('system prompt');
      mockPromptBuilder.buildUserPrompt.mockReturnValue('user prompt');
      mockAiService.generateStructuredOutput.mockResolvedValue({});
      mockOutputValidator.validate.mockReturnValue(mockWorkoutPlan);

      await useCase.execute(input);

      expect(mockAiService.generateStructuredOutput).toHaveBeenCalledWith({
        systemPrompt: 'system prompt',
        userPrompt: 'user prompt',
        schemaName: 'WorkoutPlan',
      });
    });

    it('should call outputValidator.validate with the AI output', async () => {
      const aiOutput = { raw: 'ai response' };
      mockPromptBuilder.buildSystemPrompt.mockReturnValue('system prompt');
      mockPromptBuilder.buildUserPrompt.mockReturnValue('user prompt');
      mockAiService.generateStructuredOutput.mockResolvedValue(aiOutput);
      mockOutputValidator.validate.mockReturnValue(mockWorkoutPlan);

      await useCase.execute(input);

      expect(mockOutputValidator.validate).toHaveBeenCalledWith(aiOutput);
    });

    it('should return the validated workout plan', async () => {
      mockPromptBuilder.buildSystemPrompt.mockReturnValue('system prompt');
      mockPromptBuilder.buildUserPrompt.mockReturnValue('user prompt');
      mockAiService.generateStructuredOutput.mockResolvedValue({});
      mockOutputValidator.validate.mockReturnValue(mockWorkoutPlan);

      const result = await useCase.execute(input);

      expect(result).toEqual(mockWorkoutPlan);
    });

    it('should throw InternalServerErrorException when AI service throws', async () => {
      mockPromptBuilder.buildSystemPrompt.mockReturnValue('system prompt');
      mockPromptBuilder.buildUserPrompt.mockReturnValue('user prompt');
      mockAiService.generateStructuredOutput.mockRejectedValue(new Error('AI error'));

      await expect(useCase.execute(input)).rejects.toThrow(InternalServerErrorException);
      await expect(useCase.execute(input)).rejects.toThrow('Unable to generate workout at the moment.');
    });

    it('should propagate BadRequestException thrown by validator', async () => {
      mockPromptBuilder.buildSystemPrompt.mockReturnValue('system prompt');
      mockPromptBuilder.buildUserPrompt.mockReturnValue('user prompt');
      mockAiService.generateStructuredOutput.mockResolvedValue({});
      mockOutputValidator.validate.mockImplementation(() => {
        throw new BadRequestException('Invalid workout data');
      });

      await expect(useCase.execute(input)).rejects.toThrow(BadRequestException);
    });
  });
});
