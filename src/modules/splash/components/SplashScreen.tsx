'use client';

import Image from 'next/image';

export default function SplashScreen() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center bg-linear-to-br from-[#1d57bb] to-[#0f2d6e] relative overflow-hidden">
      <div style={{ animation: 'breathe 2.4s ease-in-out infinite' }}>
        <Image
          src="/aurastation_logo.webp"
          alt="AURASTATION"
          width={220}
          height={124}
          priority
          style={{
            filter: 'drop-shadow(0 0 24px rgba(94,207,234,0.5))',
            animation: 'fade-in 0.8s ease both',
          }}
        />
      </div>

      <div
        className="absolute bottom-10 flex gap-2"
        style={{ animation: 'fade-in 0.5s 1s ease both', opacity: 0 }}
      >
        {[0, 0.2, 0.4].map((delay, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              animation: 'dot-pulse 1.2s ease-in-out infinite',
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
