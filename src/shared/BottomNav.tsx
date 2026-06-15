'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_ICON_SIZE = 32;

function NavIcon({ src, alt, dimmed }: { src: string; alt: string; dimmed?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={NAV_ICON_SIZE}
      height={NAV_ICON_SIZE}
      className={`h-8 w-8 object-contain transition-opacity duration-300 ${dimmed ? 'opacity-70' : 'opacity-100'}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

function NavItem({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-1 px-1 text-[12px] font-semibold transition-all duration-300 active:scale-95 ${
        active
          ? 'text-white'
          : 'text-white/70 hover:-translate-y-0.5 hover:text-white'
      }`}
    >
      <span className="flex h-9 w-9 items-center justify-center">{icon}</span>
      {label}
    </Link>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const isHome = pathname === '/home';

  return (
    <nav className="animate-home-nav-in absolute bottom-0 left-0 right-0 mx-auto w-full max-w-lg rounded-t-[1.6rem] bg-[#1d57bb] px-4 pb-5 pt-3 shadow-[0_-4px_20px_rgba(29,87,187,0.28)]">
      <div className="grid grid-cols-4 items-end">
        <div className="flex justify-center">
          <NavItem
            href="/exercises"
            label="Ejercicios"
            icon={
              <NavIcon
                src="/ejercicios_icon.png"
                alt="Ejercicios"
                dimmed={pathname !== '/exercises'}
              />
            }
            active={pathname === '/exercises'}
          />
        </div>

        <div className="flex justify-center">
          <NavItem
            href="/calendar"
            label="Calendario"
            icon={
              <NavIcon
                src="/calendario_icon.png"
                alt="Calendario"
                dimmed={pathname !== '/calendar'}
              />
            }
            active={pathname === '/calendar'}
          />
        </div>

        <div className="flex justify-center -mt-5">
          <Link
            href="/home"
            className={`flex flex-col items-center gap-1 transition-all duration-300 active:scale-95 ${
              isHome ? 'text-white' : 'text-white/70 hover:-translate-y-0.5 hover:text-white'
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#36A9E1] transition-transform duration-300 ${
                isHome ? 'animate-home-pulse-soft scale-105' : 'scale-100'
              }`}
            >
              <Image
                src="/aurastation_logo_solo.webp"
                alt="Inicio"
                width={NAV_ICON_SIZE}
                height={NAV_ICON_SIZE}
                className="h-8 w-8 object-contain"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
            <span className="text-[12px] font-semibold">Inicio</span>
          </Link>
        </div>

        <div className="flex justify-center">
          <NavItem
            href="/share"
            label="Compartir"
            icon={
              <NavIcon src="/compartir_icon.png" alt="Compartir" dimmed={pathname !== '/share'} />
            }
            active={pathname === '/share'}
          />
        </div>
      </div>
    </nav>
  );
}
