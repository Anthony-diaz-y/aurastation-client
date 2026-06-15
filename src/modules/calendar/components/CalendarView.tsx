"use client";

import BottomNav from "@/src/shared/BottomNav";

export default function CalendarView() {
  return (
    <main className="min-h-dvh bg-white flex flex-col">
      <div className="mx-auto w-full max-w-lg flex flex-col min-h-dvh overflow-hidden">
        <div className="flex h-16 shrink-0 items-center justify-center border-b border-slate-100 bg-white px-5">
          <h1 className="text-lg font-bold text-slate-800">Calendario</h1>
        </div>

        <div className="flex flex-1 items-center justify-center p-6 text-center text-slate-500">
          <div>
            <svg
              className="mx-auto mb-3 h-12 w-12 text-[#1d57bb]/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <p className="text-sm font-semibold text-slate-600">
              Historial de mediciones
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Próximamente disponible con conexión a la base de datos.
            </p>
          </div>
        </div>

        <BottomNav />
      </div>
    </main>
  );
}
