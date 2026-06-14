"use client";

import BottomNav from "@/src/shared/BottomNav";

export default function ShareView() {
  return (
    <div className="min-h-dvh bg-[#e9eef6] sm:flex sm:justify-center">
      <main className="relative flex min-h-dvh w-full max-w-105 flex-col overflow-hidden bg-white sm:shadow-[0_16px_48px_rgba(29,87,187,0.12)]">
        <div className="flex h-16 shrink-0 items-center justify-center border-b border-slate-100 bg-white px-5">
          <h1 className="text-lg font-bold text-slate-800">Compartir</h1>
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
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <p className="text-sm font-semibold text-slate-600">
              Compartir mi historial
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Comparte tus mediciones en tus redes sociales favoritas
              próximamente.
            </p>
          </div>
        </div>

        <BottomNav />
      </main>
    </div>
  );
}
