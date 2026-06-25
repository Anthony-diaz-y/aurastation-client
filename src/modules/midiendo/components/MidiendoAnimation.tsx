"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DOTS = [".", "..", "..."];

export default function MidiendoAnimation() {
  const [dotIdx, setDotIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setDotIdx((p) => (p + 1) % DOTS.length), 480);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 bg-[#1d57bb]">
      <div className="animate-midiendo-ring flex h-50 w-50 items-center justify-center rounded-full border-2 border-white/60">
        <Image
          src="/aurastation_logo_solo.webp"
          alt="AuraStation"
          width={120}
          height={120}
          priority
          className="object-contain"
        />
      </div>

      <p className="animate-midiendo-dots min-w-[9ch] text-center text-lg font-bold tracking-[0.14em] text-white">
        MIDIENDO{DOTS[dotIdx]}
      </p>
    </main>
  );
}
