interface WorkoutInput {
  goal: string;
  level: string;
  daysPerWeek: number;
  sessionDurationMinutes: number;
  availableEquipment: string[];
  injuries?: string[];
  focusAreas?: string[];
}

export function buildWorkoutUserPrompt(input: WorkoutInput): string {
  const injuries = input.injuries?.length ? input.injuries.join(', ') : 'none';
  const focusAreas = input.focusAreas?.length
    ? input.focusAreas.join(', ')
    : 'general';

  return `
    Create a calisthenics workout plan based on this user profile:

    Goal: ${input.goal}
    Level: ${input.level}
    Days per week: ${input.daysPerWeek}
    Session duration: ${input.sessionDurationMinutes} minutes
    Available equipment: ${input.availableEquipment.join(', ')}
    Injuries or limitations: ${injuries}
    Focus areas: ${focusAreas}

    Return the result as valid JSON matching the workout plan schema.
      `.trim();
}
