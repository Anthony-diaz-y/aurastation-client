import type { ShareDateModalProps } from "../interfaces/share.interfaces";
import ShareCalendar from "./ShareCalendar";
import ShareLogPicker from "./ShareLogPicker";

export default function ShareDateModal({
  recipient,
  shareDate,
  selectedLogId,
  isSubmitting,
  daysWithMeasurements,
  calendarYear,
  calendarMonth,
  onPrevMonth,
  onNextMonth,
  onSelectDate,
  onSelectLog,
  onCancel,
  onSubmit,
}: ShareDateModalProps) {
  const measurements = shareDate ? daysWithMeasurements[shareDate] : undefined;
  const canSubmit = !!shareDate && !isSubmitting;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white text-slate-800 w-full max-w-sm rounded-4xl p-5 shadow-2xl border border-slate-100 flex flex-col gap-4 max-h-[90vh] overflow-y-auto no-scrollbar">
        <div>
          <h2 className="text-base font-black text-slate-800 tracking-wide uppercase">
            Compartir Reporte
          </h2>
          <p className="text-[11px] text-slate-400 font-bold mt-0.5">
            Compartiendo con {recipient.name || recipient.email}
          </p>
        </div>

        <ShareCalendar
          calendarYear={calendarYear}
          calendarMonth={calendarMonth}
          shareDate={shareDate}
          daysWithMeasurements={daysWithMeasurements}
          onPrevMonth={onPrevMonth}
          onNextMonth={onNextMonth}
          onSelectDate={onSelectDate}
        />

        {!shareDate && (
          <div className="py-2 text-center bg-[#36A9E1]/5 rounded-2xl border border-[#36A9E1]/15">
            <p className="text-[11px] font-bold text-[#0c5395] px-2 leading-snug">
              Haz clic en un día destacado (celeste) para seleccionar tu
              medición.
            </p>
          </div>
        )}

        {shareDate && measurements && (
          <ShareLogPicker
            shareDate={shareDate}
            measurements={measurements}
            selectedLogId={selectedLogId}
            onSelectLog={onSelectLog}
          />
        )}

        <div className="flex gap-3 mt-1">
          <button
            disabled={isSubmitting}
            onClick={onCancel}
            className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-500 font-extrabold text-xs uppercase tracking-wider rounded-xl transition active:scale-95"
          >
            Cancelar
          </button>
          <button
            disabled={!canSubmit}
            onClick={onSubmit}
            className="flex-1 py-3 bg-[#0c5395] hover:bg-[#0a4580] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition active:scale-95 shadow-md flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Compartir"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
