import { VIEW_MODE_TABS } from "../constants/share.constants";
import type { ShareTabsProps, ViewMode } from "../interfaces/share.interfaces";

export default function ShareTabs({ active, onChange }: ShareTabsProps) {
  return (
    <div className="px-5 mb-3 shrink-0">
      <div className="flex bg-white/10 rounded-2xl p-1 gap-1">
        {VIEW_MODE_TABS.map((tab) => {
          const isActive = active === (tab.id as ViewMode);
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id as ViewMode)}
              className={`flex-1 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl transition ${
                isActive
                  ? "bg-white text-[#0c5395] shadow-md"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}