import type { ShareLogPickerProps } from "../interfaces/share.interfaces";
import { formatStressLabel, getStressColorClass } from "../utils/calendarUtils";

export default function ShareLogPicker({
  measurements,
  selectedLogId,
  onSelectLog,
}: ShareLogPickerProps) {
  const hasMultipleLogs = measurements.length > 1;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase text-[#0c5395] tracking-widest">
        Medición a Compartir
      </label>
      <div className="flex flex-col gap-1.5 max-h-32 overflow-y-auto no-scrollbar bg-slate-50 p-2 rounded-2xl border border-slate-100">
        {hasMultipleLogs && (
          <button
            onClick={() => onSelectLog(null)}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between border ${
              selectedLogId === null
                ? "bg-[#0c5395] text-white border-[#0c5395] shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
            }`}
          >
            <span>
              Compartir día completo ({measurements.length} med.)
            </span>
            {selectedLogId === null && (
              <span className="font-extrabold text-[10px]">✓</span>
            )}
          </button>
        )}

        {measurements.map((log) => {
          const isSelected = selectedLogId === log.id;
          return (
            <button
              key={log.id}
              onClick={() => onSelectLog(log.id)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between border ${
                isSelected
                  ? "bg-[#0c5395] text-white border-[#0c5395] shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex flex-col">
                <span>
                  {log.registrationTime} — {log.bpm} BPM
                </span>
                <span
                  className={`text-[9px] mt-0.5 uppercase tracking-wider font-black ${
                    isSelected
                      ? "text-white/80"
                      : getStressColorClass(log.stressLevel)
                  }`}
                >
                  {formatStressLabel(log.stressLevel)}
                </span>
              </div>
              {isSelected && <span className="font-extrabold text-[10px]">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}