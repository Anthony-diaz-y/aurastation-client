import Image from "next/image";
import { MONTH_NAMES } from "../constants/calendar.constants";
import {
  type CalendarLog,
  type SelectedDay,
} from "../interfaces/calendar.interfaces";
import { formatStressLabel, getStressFaceImage } from "../utils/calendarUtils";
import MeasurementNavigator from "./MeasurementNavigator";

type DayDetailViewProps = {
  selectedDay: SelectedDay;
  navLogs: CalendarLog[];
  activeLogIdx: number;
  dayLog: CalendarLog | undefined;
  noteText: string;
  onNoteChange: (value: string) => void;
  onSelectLog: (idx: number) => void;
  onSaveNote: () => void;
  onBack: () => void;
};

export default function DayDetailView({
  selectedDay,
  navLogs,
  activeLogIdx,
  dayLog,
  noteText,
  onNoteChange,
  onSelectLog,
  onSaveNote,
  onBack,
}: DayDetailViewProps) {
  const formattedDay = String(selectedDay.day).padStart(2, "0");
  const monthName = MONTH_NAMES[selectedDay.monthIndex];

  return (
    <main className="min-h-dvh bg-[#0c5395] flex flex-col">
      <div className="mx-auto w-full max-w-lg flex flex-col min-h-dvh px-6 py-8 text-white relative">
        <button
          onClick={onBack}
          className="absolute left-6 top-8 text-white hover:text-white/80 transition"
          aria-label="Volver al calendario"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h1 className="text-2xl font-black tracking-wider text-center mt-2 mb-6">
          {formattedDay} {monthName.toUpperCase()} {selectedDay.year}
        </h1>

        <MeasurementNavigator
          navLogs={navLogs}
          activeLogIdx={activeLogIdx}
          onSelectLog={onSelectLog}
        />

        <div className="bg-[#93b2d2] rounded-[1.8rem] p-6 mb-5 text-black flex items-center justify-between shadow-md relative overflow-hidden">
          <div className="flex flex-col gap-3.5 font-black tracking-wide">
            <div>
              <span className="text-black/50 text-[10px] font-black uppercase tracking-widest block mb-0.5">
                Hora de Registro
              </span>
              <span className="text-lg font-black">
                {dayLog?.registrationTime || "--"}
              </span>
            </div>
            <div>
              <span className="text-black/50 text-[10px] font-black uppercase tracking-widest block mb-0.5">
                Ritmo Cardíaco
              </span>
              <span className="text-lg font-black">
                {dayLog?.bpm ? `${dayLog.bpm} BPM` : "--"}
              </span>
            </div>
            <div>
              <span className="text-black/50 text-[10px] font-black uppercase tracking-widest block mb-0.5">
                Estado de Estrés
              </span>
              <span className="text-lg font-black">
                {formatStressLabel(dayLog?.stressLevel)}
              </span>
            </div>
          </div>

          {dayLog?.stressLevel && (
            <div className="w-[88px] h-[88px] shrink-0 rounded-2xl overflow-hidden bg-white/20 p-2 flex items-center justify-center shadow-inner">
              <Image
                src={getStressFaceImage(dayLog.stressLevel) || ""}
                alt={dayLog.stressLevel}
                width={88}
                height={88}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="bg-[#93b2d2] rounded-[1.8rem] p-6 text-black flex flex-col gap-4 shadow-md">
          <div>
            <span className="text-black/50 text-[10px] font-black uppercase tracking-widest block mb-0.5">
              Notas del día
            </span>
            <h2 className="text-lg font-black tracking-wide">
              Diario de Bienestar
            </h2>
          </div>

          <div className="bg-white/20 rounded-2xl p-4 shadow-inner">
            <textarea
              value={noteText}
              onChange={(e) => onNoteChange(e.target.value)}
              onBlur={onSaveNote}
              placeholder="Escribe cómo te sientes hoy..."
              className="w-full min-h-[130px] bg-transparent border-none outline-none resize-none font-semibold text-slate-900 placeholder:text-black/40 text-base leading-relaxed"
            />
          </div>

          <button
            onClick={onSaveNote}
            className="w-full py-3.5 bg-[#0c5395] hover:bg-[#0a4580] text-white font-extrabold text-sm rounded-2xl active:scale-[0.98] transition-all duration-200 shadow-md uppercase tracking-wider"
          >
            Guardar nota
          </button>
        </div>
      </div>
    </main>
  );
}
