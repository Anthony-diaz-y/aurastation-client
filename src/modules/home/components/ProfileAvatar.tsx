"use client";

import { PROFILE_AVATARS } from "../../profile/constants/profile.const";

interface ProfileAvatarProps {
  avatarId?: string;
}

export default function ProfileAvatar({ avatarId = "happy" }: ProfileAvatarProps) {
  const avatar =
    PROFILE_AVATARS.find((entry) => entry.id === avatarId) || PROFILE_AVATARS[2];
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
