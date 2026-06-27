import {
  DEFAULT_DAY_STYLE,
  DEFAULT_STRESS_LABEL,
  STRESS_DAY_STYLES,
  STRESS_FACE_IMAGES,
  STRESS_LABELS,
  YEAR_RANGE_OFFSET,
} from "../constants/calendar.constants";
import { type CalendarLog } from "../interfaces/calendar.interfaces";

export function getMonthDays(
  year: number,
  monthIndex: number,
): (number | null)[] {
  const firstDay = new Date(year, monthIndex, 1);
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();
  const startDayOfWeek = (firstDay.getDay() + 6) % 7;

  const days: (number | null)[] = [];
  for (let i = 0; i < startDayOfWeek; i++) days.push(null);
  for (let d = 1; d <= totalDays; d++) days.push(d);
  return days;
}

export function getYearRange(currentYear: number): number[] {
  const years: number[] = [];
  for (
    let y = currentYear - YEAR_RANGE_OFFSET;
    y <= currentYear + YEAR_RANGE_OFFSET;
    y++
  ) {
    years.push(y);
  }
  return years;
}

export function formatDateStr(
  year: number,
  monthIndex: number,
  day: number,
): string {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function getDayStyles(stressLevel?: string): string {
  if (!stressLevel) return DEFAULT_DAY_STYLE;
  return STRESS_DAY_STYLES[stressLevel] ?? DEFAULT_DAY_STYLE;
}

export function formatStressLabel(stressLevel?: string): string {
  if (!stressLevel) return DEFAULT_STRESS_LABEL;
  return STRESS_LABELS[stressLevel] ?? DEFAULT_STRESS_LABEL;
}

export function getStressFaceImage(stressLevel?: string): string | null {
  if (!stressLevel) return null;
  return STRESS_FACE_IMAGES[stressLevel] ?? null;
}

export function getLogsForDate(
  logs: CalendarLog[],
  dateStr: string,
): CalendarLog[] {
  return logs.filter((log) => log.date === dateStr);
}

export function getNavLogsForDay(dayLogs: CalendarLog[]): CalendarLog[] {
  const measurementLogs = dayLogs.filter((log) => log.bpm != null);
  return measurementLogs.length > 0 ? measurementLogs : dayLogs;
}

export function getLatestStressForDay(
  dayLogs: CalendarLog[],
): string | undefined {
  const latestMeasurement = [...dayLogs]
    .reverse()
    .find((log) => log.stressLevel);
  return latestMeasurement?.stressLevel;
}

export function getMeasurementLabel(log: CalendarLog): string {
  if (!log.registrationTime) return "Nota sin hora";
  return log.registrationTime;
}
