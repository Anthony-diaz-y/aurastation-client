"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PROFILE_AVATARS } from "../../profile/constants/profile.const";

function ProfileAvatar() {
  const [avatarId, setAvatarId] = useState("happy");

  useEffect(() => {
    const saved = localStorage.getItem("aurastation_profile_avatar");
    if (saved) {
      setAvatarId(saved);
    }
  }, []);

  const avatar =
    PROFILE_AVATARS.find((a) => a.id === avatarId) || PROFILE_AVATARS[2];
  const SvgComponent = avatar.component;

  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-100 overflow-hidden border border-white/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
      aria-label="Ver perfil"
    >
      <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
        <SvgComponent />
      </div>
    </div>
  );
}

export default function HomeHeader() {
  return (
    <header className="flex items-center justify-between bg-[#1d57bb] px-5 py-3 select-none">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#4ade80]" />
        <span className="text-sm font-semibold text-white">Conectado</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Notificaciones"
          className="text-white transition hover:opacity-80 cursor-pointer"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <Link href="/profile">
          <ProfileAvatar />
        </Link>
      </div>
    </header>
  );
}
