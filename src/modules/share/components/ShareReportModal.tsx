import { SHARED_LOG_DETAIL_DATE_FORMAT } from "../constants/share.constants";
import type { ShareReportModalProps } from "../interfaces/share.interfaces";
import { formatStressLabel, getStressColorClass } from "../utils/calendarUtils";
import UserAvatar from "./UserAvatar";

export default function ShareReportModal({
  sharedLog,
  user,
  onClose,
}: ShareReportModalProps) {
  const formattedDate = new Date(
    `${sharedLog.sharedDate}T00:00:00`,
  ).toLocaleDateString("es-ES", SHARED_LOG_DETAIL_DATE_FORMAT);

  const bpmLogs = sharedLog.logs.filter((log) => log.bpm != null);
  const notes = sharedLog.logs
    .map((log) => log.note?.trim())
    .filter(Boolean)
    .join(" / ");

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-fade-in">
      <div className="bg-[#0c5395] text-white w-full max-w-sm rounded-4xl p-6 shadow-2xl border border-white/10 flex flex-col gap-5 max-h-[85vh] overflow-hidden">
        <div className="flex items-center gap-3.5 border-b border-white/10 pb-4">
          <UserAvatar
            avatarId={user.avatarId}
            className="w-12 h-12 rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-base font-black tracking-wide uppercase leading-tight">
              {user.name || "Usuario"}
            </h2>
            <p className="text-[10px] text-white/60 font-black uppercase tracking-wider mt-1">
              Reporte del {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-4 my-2">
          <div>
            <h4 className="text-[10px] font-black uppercase text-white/55 tracking-widest mb-2.5">
              Ritmo Cardíaco
            </h4>
            {bpmLogs.length === 0 ? (
              <p className="text-xs text-white/50 italic">
                Sin registros de ritmo cardíaco en esta fecha.
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {bpmLogs.map((log) => (
                  <div
                    key={log.id}
                    className="bg-white/10 rounded-2xl p-3 flex justify-between items-center"
                  >
                    <div>
                      <span className="text-[9px] font-black text-white/50 block">
                        Hora
                      </span>
                      <span className="text-sm font-extrabold">
                        {log.registrationTime || "--:--"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black text-[#36A9E1] block">
                        {log.bpm} BPM
                      </span>
                      <span
                        className={`text-[9px] font-black uppercase tracking-wider block mt-0.5 ${getStressColorClass(
                          log.stressLevel,
                        )}`}
                      >
                        {formatStressLabel(log.stressLevel)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white/10 rounded-2xl p-4 border border-white/5 flex flex-col gap-2">
            <span className="text-[9px] font-black uppercase text-white/55 tracking-widest leading-none">
              Diario de Bienestar
            </span>
            <p className="text-sm leading-relaxed font-semibold italic text-white/90">
              {notes || "Sin notas registradas."}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-white text-[#0c5395] font-extrabold text-xs uppercase tracking-wider rounded-xl transition active:scale-95 shadow-md text-center"
          >
            Cerrar Reporte
          </button>
        </div>
      </div>
    </div>
  );
}
