"use client";

import Link from "next/link";
import { type HomeHeaderProps } from "../interfaces/home.interfaces";
import ProfileAvatar from "./ProfileAvatar";
import { NotificationIcon } from "@/src/shared/icons/NotificationIcon";

export default function HomeHeader({ avatarId }: HomeHeaderProps) {
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
          <NotificationIcon />
        </button>

        <Link href="/profile">
          <ProfileAvatar avatarId={avatarId} />
        </Link>
      </div>
    </header>
  );
}
