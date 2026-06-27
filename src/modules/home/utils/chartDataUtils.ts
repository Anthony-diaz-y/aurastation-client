import {
  DEFAULT_CHART_COLOR,
  MONTH_ABBR,
  STRESS_CHART_COLORS,
} from "../constants/home.constants";

export function getStressChartColor(level?: string): string {
  if (!level) return DEFAULT_CHART_COLOR;
  return STRESS_CHART_COLORS[level] ?? DEFAULT_CHART_COLOR;
}

export function toDateStr(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function getWeekMonday(date: Date): Date {
  const monday = new Date(date);
  monday.setHours(0, 0, 0, 0);
  const dayOfWeek = monday.getDay();
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  monday.setDate(monday.getDate() + diff);
  return monday;
}

export function formatWeekPeriodLabel(monday: Date): string {
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return `${monday.getDate()} – ${sunday.getDate()} ${MONTH_ABBR[sunday.getMonth()]}`;
}
