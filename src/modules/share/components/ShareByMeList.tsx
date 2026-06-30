import { SHARED_LIST_DATE_FORMAT } from "../constants/share.constants";
import type { ShareByMeListProps } from "../interfaces/share.interfaces";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import UserAvatar from "./UserAvatar";

const SHARE_ICON = (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const TRASH_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export default function ShareByMeList({
  items,
  isLoading,
  onDelete,
}: ShareByMeListProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (items.length === 0) {
    return (
      <EmptyState
        title="Aún no has compartido con nadie"
        subtitle='Ve a la pestaña "Todos" y elige a un usuario para compartir.'
        icon={SHARE_ICON}
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
          <div
            key={item.id}
            className="bg-white text-slate-800 rounded-2xl p-4 shadow-md flex items-center justify-between border border-slate-100"
          >
            <div className="flex items-center gap-3">
              <UserAvatar
                avatarId={item.user.avatarId}
                className="w-11 h-11 rounded-xl shadow-inner"
              />
              <div>
                <p className="font-black text-slate-800 text-sm leading-tight">
                  {item.user.name || "Usuario"}
                </p>
                <p className="text-[11px] text-slate-400 font-bold mt-0.5">
                  {item.user.email}
                </p>
                <p className="text-[10px] text-[#36A9E1] font-black uppercase tracking-wider mt-1">
                  {formattedDate}
                  {item.measurementInfo &&
                    ` — ${item.measurementInfo.registrationTime} (${item.measurementInfo.bpm} BPM)`}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                onDelete(item.id, item.user.name || item.user.email)
              }
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-red-50 text-red-400 hover:bg-red-100 transition active:scale-95 border border-red-100 shrink-0"
              aria-label="Dejar de compartir"
            >
              {TRASH_ICON}
            </button>
          </div>
        );
      })}
    </>
  );
}