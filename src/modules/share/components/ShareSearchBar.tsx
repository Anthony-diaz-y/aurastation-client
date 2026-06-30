import type { ShareSearchBarProps } from "../interfaces/share.interfaces";

export default function ShareSearchBar({
  value,
  onChange,
}: ShareSearchBarProps) {
  return (
    <div className="px-5 mb-3 shrink-0">
      <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-md border border-slate-100 gap-3">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#36A9E1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar por nombre o correo..."
          className="w-full bg-transparent border-none outline-none text-slate-700 text-sm font-semibold placeholder:text-slate-400"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="shrink-0 text-slate-400 hover:text-slate-600 transition"
            aria-label="Limpiar búsqueda"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}