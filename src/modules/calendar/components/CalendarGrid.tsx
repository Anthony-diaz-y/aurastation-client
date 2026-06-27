import { WEEK_DAYS } from "../constants/calendar.constants";
import { type CalendarLog } from "../interfaces/calendar.interfaces";
import {
  formatDateStr,
  getDayStyles,
  getLatestStressForDay,
  getLogsForDate,
} from "../utils/calendarUtils";

type CalendarGridProps = {
  year: number;
  monthIndex: number;
  days: (number | null)[];
  animClass: string;
  logs: CalendarLog[];
  onSelectDay: (day: number) => void;
};

export default function CalendarGrid({
  year,
  monthIndex,
  days,
  animClass,
  logs,
  onSelectDay,
}: CalendarGridProps) {
  return (
    <div
      key={`${year}-${monthIndex}`}
      className={`w-full bg-white rounded-4xl p-5 shadow-xl text-slate-800 ${animClass}`}
    >
      <div className="grid grid-cols-7 gap-1 mb-3 text-center">
        {WEEK_DAYS.map((day) => (
          <span
            key={day}
            className="text-[11px] font-black uppercase text-slate-400"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((dayNum, idx) => {
          if (dayNum === null) {
            return <div key={`e-${idx}`} className="aspect-square" />;
          }

          const dateStr = formatDateStr(year, monthIndex, dayNum);
          const dayEntries = getLogsForDate(logs, dateStr);
          const displayStress = getLatestStressForDay(dayEntries);

          return (
            <button
              key={`d-${dayNum}`}
              onClick={() => onSelectDay(dayNum)}
              className={`aspect-square flex items-center justify-center text-sm font-bold rounded-xl transition-all duration-200 active:scale-90 hover:scale-105 ${getDayStyles(displayStress)}`}
            >
              {dayNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}
