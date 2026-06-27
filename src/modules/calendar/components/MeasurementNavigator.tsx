import { type CalendarLog } from "../interfaces/calendar.interfaces";
import { getMeasurementLabel } from "../utils/calendarUtils";
import CalendarNavButton from "./CalendarNavButton";

type MeasurementNavigatorProps = {
  navLogs: CalendarLog[];
  activeLogIdx: number;
  onSelectLog: (idx: number) => void;
};

export default function MeasurementNavigator({
  navLogs,
  activeLogIdx,
  onSelectLog,
}: MeasurementNavigatorProps) {
  if (navLogs.length <= 1) return null;

  return (
    <div className="flex items-center justify-between w-full mb-5 px-1">
      <CalendarNavButton
        direction="prev"
        onClick={() => onSelectLog(Math.max(0, activeLogIdx - 1))}
        disabled={activeLogIdx === 0}
        ariaLabel="Medición anterior"
      />

      <div className="text-center select-none">
        <p className="text-white/55 text-[10px] font-black uppercase tracking-[0.2em] mb-0.5">
          Medición {activeLogIdx + 1} de {navLogs.length}
        </p>
        <p className="text-white font-black text-base tracking-wider">
          {getMeasurementLabel(navLogs[activeLogIdx])}
        </p>
      </div>

      <CalendarNavButton
        direction="next"
        onClick={() =>
          onSelectLog(Math.min(navLogs.length - 1, activeLogIdx + 1))
        }
        disabled={activeLogIdx === navLogs.length - 1}
        ariaLabel="Siguiente medición"
      />
    </div>
  );
}
