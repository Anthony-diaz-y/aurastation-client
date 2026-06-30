import LoadingState from "./LoadingState";
import UserAvatar from "./UserAvatar";
import type { ShareUserListProps } from "../interfaces/share.interfaces";
import { PeopleIcon } from "@/src/shared/icons/PeopleIcon";

export default function ShareUserList({
  users,
  isLoading,
  searchQuery,
  onShare,
}: ShareUserListProps) {
  const sectionLabel = searchQuery.trim()
    ? `Resultados para "${searchQuery}"`
    : "Todos los usuarios";

  return (
    <>
      <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
        {sectionLabel}
      </p>

      {isLoading ? (
        <LoadingState message="Cargando usuarios..." />
      ) : users.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-8 opacity-60">
          <div className="h-10 w-10 mb-2 opacity-50">{PeopleIcon()}</div>
          <p className="text-sm font-black uppercase tracking-wider">
            Sin resultados
          </p>
        </div>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="bg-white/10 rounded-2xl p-4 flex items-center justify-between border border-white/10 hover:bg-white/15 transition"
          >
            <div className="flex items-center gap-3">
              <UserAvatar
                avatarId={user.avatarId}
                className="w-11 h-11 rounded-xl"
              />
              <div>
                <p className="font-extrabold text-sm text-white leading-tight">
                  {user.name || "Usuario"}
                </p>
                <p className="text-[11px] text-white/55 leading-tight mt-0.5">
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={() => onShare(user)}
              className="px-4 py-2 bg-[#36A9E1] hover:bg-[#2a90c7] text-white text-[11px] font-black rounded-xl uppercase tracking-wide transition active:scale-95 shadow-md shrink-0"
            >
              Compartir
            </button>
          </div>
        ))
      )}
    </>
  );
}
