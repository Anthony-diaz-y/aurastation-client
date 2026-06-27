import { MONTH_NAMES } from "../constants/calendar.constants";
import { type PickerView } from "../interfaces/calendar.interfaces";
import { getYearRange } from "../utils/calendarUtils";

type CalendarPickerProps = {
  pickerView: Exclude<PickerView, "none">;
  monthIndex: number;
  year: number;
  onPickMonth: (month: number) => void;
  onPickYear: (year: number) => void;
};

export default function CalendarPicker({
  pickerView,
  monthIndex,
  year,
  onPickMonth,
  onPickYear,
}: CalendarPickerProps) {
  if (pickerView === "month") {
    return (
      <div className="w-full bg-white/15 backdrop-blur-sm rounded-[1.6rem] p-4 mb-4 grid grid-cols-3 gap-2 animate-slide-in-right">
        {MONTH_NAMES.map((name, idx) => (
          <button
            key={name}
            onClick={() => onPickMonth(idx)}
            className={`py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-150 active:scale-95 ${
              idx === monthIndex
                ? "bg-white text-[#0c5395] shadow-sm"
                : "text-white hover:bg-white/20"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full bg-white/15 backdrop-blur-sm rounded-[1.6rem] p-4 mb-4 grid grid-cols-3 gap-2 animate-slide-in-right">
      {getYearRange(year).map((y) => (
        <button
          key={y}
          onClick={() => onPickYear(y)}
          className={`py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-150 active:scale-95 ${
            y === year
              ? "bg-white text-[#0c5395] shadow-sm"
              : "text-white hover:bg-white/20"
          }`}
        >
          {y}
        </button>
      ))}
    </div>
  );
}
