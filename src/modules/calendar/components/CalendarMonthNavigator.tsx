import { MONTH_NAMES } from "../constants/calendar.constants";
import { type PickerView } from "../interfaces/calendar.interfaces";
import CalendarNavButton from "./CalendarNavButton";

type CalendarMonthNavigatorProps = {
  monthIndex: number;
  year: number;
  pickerView: PickerView;
  onNavigate: (direction: "prev" | "next") => void;
  onTogglePicker: (view: Exclude<PickerView, "none">) => void;
};

export default function CalendarMonthNavigator({
  monthIndex,
  year,
  pickerView,
  onNavigate,
  onTogglePicker,
}: CalendarMonthNavigatorProps) {
  return (
    <div className="flex items-center justify-between w-full mb-4 px-1">
      <CalendarNavButton
        direction="prev"
        size="sm"
        onClick={() => onNavigate("prev")}
        ariaLabel="Mes anterior"
      />

      <div className="flex items-center gap-2">
        <button
          onClick={() => onTogglePicker("month")}
          className={`px-3 py-1.5 rounded-xl font-black text-base tracking-widest uppercase transition-all duration-200 ${
            pickerView === "month"
              ? "bg-white text-[#0c5395]"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {MONTH_NAMES[monthIndex]}
        </button>
        <button
          onClick={() => onTogglePicker("year")}
          className={`px-3 py-1.5 rounded-xl font-black text-base tracking-widest uppercase transition-all duration-200 ${
            pickerView === "year"
              ? "bg-white text-[#0c5395]"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {year}
        </button>
      </div>

      <CalendarNavButton
        direction="next"
        size="sm"
        onClick={() => onNavigate("next")}
        ariaLabel="Mes siguiente"
      />
    </div>
  );
}
