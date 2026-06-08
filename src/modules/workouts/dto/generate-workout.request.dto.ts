export class GenerateWorkoutRequestDto {
  goal: 'strength' | 'hypertrophy' | 'mobility' | 'fat_loss' | 'skill';
  level: 'beginner' | 'intermediate' | 'advanced';
  daysPerWeek: number; // 1–7
  sessionDurationMinutes: number; // 15–120
  availableEquipment: string[];
  injuries?: string[];
  focusAreas?: string[];
}
