"use client";

import { ReactElement } from "react";
import { PROFILE_AVATARS } from "../constants/profile.const";

export interface AvatarSelectorViewProps {
  selectedAvatarId: string;
  avatarComponent: () => ReactElement;
  avatars: typeof PROFILE_AVATARS;
  onSelectAvatar: (id: string) => void;
  onConfirm: () => void;
}
export default function AvatarSelectorView({
  selectedAvatarId,
  avatarComponent: AvatarComponent,
  avatars,
  onSelectAvatar,
  onConfirm,
}: AvatarSelectorViewProps) {
  return (
    <div className="flex flex-col flex-1">
      <h1 className="animate-exercise-header text-center text-3xl font-extrabold tracking-tight mb-8">
        Editar foto de perfil
      </h1>

      <div className="animate-exercise-card-1 self-center w-44 h-44 drop-shadow-md mb-10">
        <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
          <AvatarComponent />
        </div>
      </div>

      <div className="animate-exercise-card-2 grid grid-cols-4 gap-3 bg-white/10 p-4 rounded-[28px] mb-8">
        {avatars.map((avatar) => {
          const ItemSvg = avatar.component;
          const isSelected = avatar.id === selectedAvatarId;
          return (
            <button
              key={avatar.id}
              onClick={() => onSelectAvatar(avatar.id)}
              className={`aspect-square relative transition-all duration-300 drop-shadow-sm cursor-pointer rounded-[18px] ${
                isSelected
                  ? "ring-4 ring-white/50 scale-105"
                  : "hover:scale-105 hover:ring-2 hover:ring-white/30 active:scale-95"
              }`}
            >
              <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
                <ItemSvg />
              </div>
              {isSelected && (
                <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 animate-home-dot-in">
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 14 10"
                    fill="none"
                    className="stroke-[#0c5395] stroke-[3.5]"
                  >
                    <polyline points="1.5 5 5 8.5 12.5 1" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="animate-exercise-card-3 flex mt-auto">
        <button
          onClick={onConfirm}
          className="w-full py-4 px-6 rounded-full text-center font-bold text-sm bg-white text-[#0c5395] hover:bg-slate-50 active:scale-98 transition-all shadow-md select-none cursor-pointer"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
