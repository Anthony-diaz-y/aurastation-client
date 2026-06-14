"use client";

import { CheckIcon } from "@/src/shared/icons/CheckIcon";
import { CloseIcon } from "@/src/shared/icons/CloseIcon";
import { PencilIcon } from "@/src/shared/icons/PencilIcon";
import { FIELD_DEFS } from "../constants/profile.const";
import { ProfileField, UseProfileReturn } from "../hooks/useProfile";
import { ReactElement } from "react";

export interface ProfileViewProps {
  fields: ProfileField;
  avatarComponent: () => ReactElement;
  editingField: string | null;
  editValue: string;
  setEditValue: (v: string) => void;
  startEditing: UseProfileReturn["startEditing"];
  cancelEditing: () => void;
  saveField: UseProfileReturn["saveField"];
  onEditAvatar: () => void;
  onLogout: () => void;
}

export default function ProfileView({
  fields,
  avatarComponent: AvatarComponent,
  editingField,
  editValue,
  setEditValue,
  startEditing,
  cancelEditing,
  saveField,
  onEditAvatar,
  onLogout,
}: ProfileViewProps) {
  return (
    <div className="flex flex-col flex-1">
      <h1 className="animate-exercise-header text-center text-3xl font-extrabold tracking-tight mb-8">
        Perfil
      </h1>

      <div className="animate-exercise-card-1 self-center relative mb-10 w-44 h-44 drop-shadow-md">
        <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
          <AvatarComponent />
        </div>
        <button
          onClick={onEditAvatar}
          className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border border-slate-100 group cursor-pointer"
          title="Editar foto de perfil"
        >
          <svg
            className="w-6 h-6 text-[#0c5395] group-hover:rotate-12 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        </button>
      </div>

      <div className="animate-exercise-card-2 bg-white rounded-3xl p-6 text-slate-800 shadow-lg flex-1 mb-8 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3 mb-4 tracking-wide uppercase">
            Datos básicos
          </h2>
          <div className="flex flex-col gap-4">
            {FIELD_DEFS.map(({ key, label, type, placeholder, extraClass }) => {
              const value = fields[key];
              const isEditing = editingField === key;
              return (
                <div key={key} className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {label}
                  </span>
                  {isEditing ? (
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="flex-1 border-b-2 border-[#0c5395] py-1 px-1 text-sm font-semibold text-slate-800 focus:outline-none"
                        autoFocus
                      />
                      <button
                        onClick={() =>
                          saveField(
                            key,
                            editValue ||
                              (key === "password" ? "••••••••" : editValue),
                          )
                        }
                        className="text-emerald-500 p-1 hover:scale-110 active:scale-90 transition-transform"
                      >
                        <CheckIcon />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="text-rose-500 p-1 hover:scale-110 active:scale-90 transition-transform"
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mt-1 group">
                      <span
                        className={`text-sm font-semibold text-slate-700 ${extraClass ?? ""}`}
                      >
                        {value}
                      </span>
                      <button
                        onClick={() => startEditing(key, value)}
                        className="opacity-60 group-hover:opacity-100 p-1 text-[#0c5395] hover:scale-110 transition-all"
                      >
                        <PencilIcon />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="animate-exercise-card-3 flex">
        <button
          onClick={onLogout}
          className="w-full py-4 px-6 rounded-full text-center font-bold text-sm bg-[#bcedff] text-[#0c5395] hover:bg-[#a6e2fc] active:scale-98 transition-all shadow-[0_4px_12px_rgba(29,87,187,0.15)] select-none cursor-pointer"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
