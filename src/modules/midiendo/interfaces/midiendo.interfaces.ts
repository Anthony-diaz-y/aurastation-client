export type BpmLevel = 'ir_al_medico' | 'calma' | 'estres_moderado' | 'estres_fuerte';

export interface BpmResult {
  level: BpmLevel;
  label: string;
  description: string;
  range: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  faceImage: string;
  bpm: number;
  exercisesHref: string;
}