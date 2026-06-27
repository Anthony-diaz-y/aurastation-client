"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Tab {
  href: string;
  label: string;
  src: string;
  invertWhite?: boolean;
}

const TABS: Tab[] = [
  {
    href: "/exercises",
    label: "Ejercicios",
    src: "/ejercicios_icon.webp",
  },
  {
    href: "/calendar",
    label: "Calendario",
    src: "/calendario_icon.webp",
  },
  {
    href: "/home",
    label: "Inicio",
    src: "/aurastation_logo_solo.webp",
    invertWhite: true,
  },
  {
    href: "/share",
    label: "Compartir",
    src: "/compartir_icon.webp",
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const activeIdx = TABS.findIndex((t) => t.href === pathname);

  return (
    <nav className="animate-home-nav-in absolute bottom-0 left-0 right-0 mx-auto w-full max-w-lg rounded-t-[1.6rem] bg-[#1d57bb] px-4 pb-5 pt-3 shadow-[0_-4px_20px_rgba(29,87,187,0.28)]">
      <div className="grid grid-cols-4 items-end">
        {TABS.map((tab, idx) => {
          const active = idx === activeIdx;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-1.5 text-[11px] font-bold tracking-wide active:scale-95 transition-colors duration-300 ${
                active ? "text-white" : "text-white/55 hover:text-white/80"
              }`}
            >
              <span
                className={`flex items-center justify-center rounded-full border-[3px] transition-all duration-380 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  active
                    ? "h-13 w-13 -translate-y-6 border-white bg-[#36A9E1] shadow-[0_8px_28px_rgba(54,169,225,0.70)]"
                    : "h-13 w-13 translate-y-0 border-transparent bg-transparent"
                }`}
              >
                <Image
                  src={tab.src}
                  alt={tab.label}
                  width={30}
                  height={30}
                  className={`object-contain transition-all duration-300 ${
                    tab.invertWhite ? "h-[1.9rem] w-[1.9rem]" : "h-7 w-7"
                  }`}
                  style={
                    active
                      ? { filter: "brightness(0) invert(1)" }
                      : tab.invertWhite
                        ? { filter: "brightness(0) invert(1)", opacity: 0.55 }
                        : { mixBlendMode: "screen", opacity: 0.65 }
                  }
                />
              </span>

              <span className="leading-none">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
