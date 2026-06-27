import { useMemo } from "react";
import { type CalendarLog } from "@/src/modules/calendar/interfaces/calendar.interfaces";
import { WEEK_LABELS } from "../constants/home.constants";
import { type LineChartPoint } from "../interfaces/home.interfaces";
import {
  formatWeekPeriodLabel,
  getStressChartColor,
  getWeekMonday,
  toDateStr,
} from "../utils/chartDataUtils";

export function useChartData(logs: CalendarLog[]) {
  return useMemo(() => {
    const now = new Date();
    const todayStr = toDateStr(now);
    const monday = getWeekMonday(now);
    const points: LineChartPoint[] = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);

      const dateStr = toDateStr(day);
      const isFuture = day > now;
      const isToday = dateStr === todayStr;

      const dayMeasurements = isFuture
        ? []
        : logs.filter((log) => log.date === dateStr && log.bpm != null);
      const log = dayMeasurements[dayMeasurements.length - 1];

      points.push({
        day: WEEK_LABELS[i],
        value: log?.bpm ?? null,
        dot: log ? getStressChartColor(log.stressLevel) : undefined,
        active: isToday,
        stressLevel: log?.stressLevel,
      });
    }

    const periodLabel = formatWeekPeriodLabel(monday);

    const todayMeasurements = logs.filter(
      (log) => log.date === todayStr && log.bpm != null,
    );
    const latestStress = todayMeasurements[todayMeasurements.length - 1]?.stressLevel;

    return { chartData: points, periodLabel, latestStress };
  }, [logs]);
}
