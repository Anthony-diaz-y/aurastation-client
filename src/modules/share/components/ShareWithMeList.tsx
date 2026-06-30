import { PeopleIcon } from "@/src/shared/icons/PeopleIcon";
import { SHARED_LIST_DATE_FORMAT } from "../constants/share.constants";
import type { ShareWithMeListProps } from "../interfaces/share.interfaces";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import UserAvatar from "./UserAvatar";
import { ChevrronRightIcon } from "@/src/shared/icons/ChevrronRightIcon";

export default function ShareWithMeList({
  items,
  isLoading,
  onViewDetail,
}: ShareWithMeListProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (items.length === 0) {
    return (
      <EmptyState
        title="Nadie ha compartido contigo aún"
        subtitle="Cuando alguien comparta su ritmo cardíaco contigo, aparecerá aquí."
        icon={PeopleIcon()}
      />
    );
  }

  return (
    <>
      {items.map((item) => {
        const formattedDate = new Date(
          `${item.sharedDate}T00:00:00`,
        ).toLocaleDateString("es-ES", SHARED_LIST_DATE_FORMAT);

        return (
          <button
            key={item.id}
            onClick={() => onViewDetail(item.id, item.user)}
            className="w-full text-left bg-white text-slate-800 rounded-2xl p-4 shadow-md flex items-center justify-between gap-3 border border-slate-100 active:scale-[0.98] transition"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <UserAvatar
                avatarId={item.user.avatarId}
                className="w-11 h-11 rounded-xl shadow-inner shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="font-black text-slate-800 text-sm leading-tight truncate">
                  {item.user.name || "Usuario"}
                </p>
                <p className="text-[11px] text-slate-400 font-bold mt-0.5 truncate">
                  {item.user.email}
                </p>
                <p className="text-[10px] text-[#0c5395] font-black uppercase tracking-wider mt-1.5 truncate">
                  {formattedDate}
                </p>
              </div>
            </div>
            <div className="self-center shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#0c5395]/10 text-[#0c5395]">
              {ChevrronRightIcon()}
            </div>
          </button>
        );
      })}
    </>
  );
}
