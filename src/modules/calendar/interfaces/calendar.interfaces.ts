export type StressLevel =
  | "ir_al_medico"
  | "calma"
  | "estres_moderado"
  | "estres_fuerte";

export interface CalendarLog {
  id: number;
  userId: number;
  date: string;
  bpm?: number;
  stressLevel?: StressLevel;
  registrationTime?: string;
  note?: string;
}

export interface SaveLogPayload {
  date: string;
  bpm?: number;
  stressLevel?: string;
  registrationTime?: string;
  note?: string;
  id?: number;
}

export interface SelectedDay {
  day: number;
  monthIndex: number;
  year: number;
}

export type PickerView = "none" | "month" | "year";
