import {
  CALENDAR_GRID_SIZE,
  DEFAULT_STRESS_LABEL,
  STRESS_LABELS,
  STRESS_TEXT_COLOR,
  DEFAULT_STRESS_TEXT_COLOR,
} from "../constants/share.constants";
import type { CalendarDayCell } from "../interfaces/share.interfaces";

export function getDaysInMonth(year: number, month: number): CalendarDayCell[] {
  const firstWeekDay = new Date(year, month, 1).getDay();
  const mondayOffset = firstWeekDay === 0 ? 6 : firstWeekDay - 1;
  const prevMonthDaysCount = new Date(year, month, 0).getDate();
  const days: CalendarDayCell[] = [];

  for (let i = mondayOffset - 1; i >= 0; i -= 1) {
    const day = prevMonthDaysCount - i;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    days.push({ day, month: prevMonth, year: prevYear, isCurrentMonth: false });
  }

  const totalDays = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= totalDays; day += 1) {
    days.push({ day, month, year, isCurrentMonth: true });
  }

  const remaining = CALENDAR_GRID_SIZE - days.length;
  for (let day = 1; day <= remaining; day += 1) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    days.push({ day, month: nextMonth, year: nextYear, isCurrentMonth: false });
  }

  return days;
}

export function formatDateString(
  year: number,
  month: number,
  day: number,
): string {
  const monthStr = String(month + 1).padStart(2, "0");
  const dayStr = String(day).padStart(2, "0");
  return `${year}-${monthStr}-${dayStr}`;
}

export function shiftMonth(
  year: number,
  month: number,
  direction: -1 | 1,
): { year: number; month: number } {
  const next = month + direction;
  if (next < 0) return { year: year - 1, month: 11 };
  if (next > 11) return { year: year + 1, month: 0 };
  return { year, month: next };
}

export function formatStressLabel(level?: string): string {
  if (!level) return DEFAULT_STRESS_LABEL;
  return STRESS_LABELS[level] ?? DEFAULT_STRESS_LABEL;
}

export function getStressColorClass(level?: string): string {
  if (!level) return DEFAULT_STRESS_TEXT_COLOR;
  return STRESS_TEXT_COLOR[level] ?? DEFAULT_STRESS_TEXT_COLOR;
}

export function filterUsersByQuery<T extends { name?: string; email?: string }>(
  users: T[],
  query: string,
): T[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return users;

  return users.filter(
    (user) =>
      user.name?.toLowerCase().includes(normalized) ||
      user.email?.toLowerCase().includes(normalized),
  );
}