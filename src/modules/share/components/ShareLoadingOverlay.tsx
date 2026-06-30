import type { ShareLoadingOverlayProps } from "../interfaces/share.interfaces";

export default function ShareLoadingOverlay({
  visible,
}: ShareLoadingOverlayProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 text-slate-800 text-sm font-semibold">
        <div className="w-5 h-5 border-2 border-slate-200 border-t-[#0c5395] rounded-full animate-spin" />
        Cargando reporte...
      </div>
    </div>
  );
}