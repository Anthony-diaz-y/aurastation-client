import { MONTH_NAMES, WEEK_DAYS } from "../constants/share.constants";
import type { ShareCalendarProps } from "../interfaces/share.interfaces";
import { formatDateString, getDaysInMonth } from "../utils/calendarUtils";

export default function ShareCalendar({
  calendarYear,
  calendarMonth,
  shareDate,
  daysWithMeasurements,
  onPrevMonth,
  onNextMonth,
  onSelectDate,
}: ShareCalendarProps) {
  const days = getDaysInMonth(calendarYear, calendarMonth);

  return (
    <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-3xl border border-slate-100">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onPrevMonth}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-slate-600 shadow-sm border border-slate-100 hover:bg-slate-100 transition font-black"
          aria-label="Mes anterior"
        >
          &larr;
        </button>
        <span className="text-xs font-black text-slate-700 uppercase tracking-widest">
          {MONTH_NAMES[calendarMonth]} {calendarYear}
        </span>
        <button
          onClick={onNextMonth}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-slate-600 shadow-sm border border-slate-100 hover:bg-slate-100 transition font-black"
          aria-label="Mes siguiente"
        >
          &rarr;
        </button>
      </div>

      <div className="grid grid-cols-7 text-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">
        {WEEK_DAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((cell, idx) => {
          const dateStr = formatDateString(cell.year, cell.month, cell.day);
          const hasData = !!daysWithMeasurements[dateStr];
          const isSelected = shareDate === dateStr;

          return (
            <button
              key={`${dateStr}-${idx}`}
              disabled={!hasData}
              onClick={() => onSelectDate(dateStr)}
              className={`h-8 text-xs font-black rounded-lg flex items-center justify-center transition-all ${
                !cell.isCurrentMonth
                  ? "text-slate-300 opacity-40"
                  : isSelected
                    ? "bg-[#0c5395] text-white shadow-md scale-105"
                    : hasData
                      ? "bg-[#36A9E1]/15 text-[#0c5395] hover:bg-[#36A9E1]/30 border border-[#36A9E1]/35 cursor-pointer font-extrabold"
                      : "text-slate-300 opacity-40 cursor-not-allowed pointer-events-none"
              }`}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
