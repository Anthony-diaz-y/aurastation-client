"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MeasureActions() {
  const [bpm, setBpm] = useState("");
  const router = useRouter();

  const handleMeasure = () => {
    const value = bpm.trim();
    const query = value ? `?bpm=${encodeURIComponent(value)}` : "";
    router.push(`/midiendo${query}`);
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{
        animation:
          "home-fade-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both",
      }}
    >
      <div className="flex items-center gap-1 rounded-full bg-white p-1 shadow-[0_6px_20px_rgba(29,87,187,0.18)] ring-1 ring-[#1d57bb]/12">
        <input
          type="number"
          inputMode="numeric"
          min={40}
          max={220}
          placeholder="100"
          value={bpm}
          onChange={(e) => setBpm(e.target.value)}
          aria-label="Ingresa tu medición de BPM"
          className="h-10 w-22 rounded-full bg-[#eef3fb] px-4 text-center text-[15px] font-bold tabular-nums text-[#1d57bb] placeholder:text-[#1d57bb]/35 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5ecfea]/50"
        />
        <button
          type="button"
          onClick={handleMeasure}
          className="h-10 min-w-23 rounded-full bg-linear-to-b from-[#2a65c8] to-[#1d57bb] px-5 text-[13px] font-extrabold tracking-[0.08em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_4px_12px_rgba(29,87,187,0.35)] transition hover:from-[#3370d4] hover:to-[#1749a3] active:scale-[0.97]"
        >
          MEDIR
        </button>
      </div>
    </div>
  );
}
