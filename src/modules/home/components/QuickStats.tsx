import { type QuickStatsProps } from "../interfaces/home.interfaces";

export default function QuickStats({
  className = "",
  lastBpm,
  streak,
}: QuickStatsProps) {
  const dynamicStats = [
    {
      label: "Último BPM",
      value: lastBpm ? `${lastBpm}` : "--",
      hint: "BPM",
      accent: "bg-[#1d57bb]/10 text-[#1d57bb]",
    },
    {
      label: "Racha",
      value: `${streak}`,
      hint: streak === 1 ? "Día activo" : "Días activos",
      accent: "bg-amber-50 text-amber-700",
    },
  ];

  return (
    <section
      className={`mt-4 grid w-full grid-cols-2 gap-2.5 ${className}`}
      style={{
        animation: "home-fade-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both",
      }}
    >
      {dynamicStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-100 bg-white px-3.5 py-3.5 shadow-[0_2px_12px_rgba(29,87,187,0.06)]"
        >
          <p className="text-[11px] font-medium text-slate-500">{stat.label}</p>
          <p className="mt-1 text-2xl font-bold tabular-nums leading-none text-slate-800">
            {stat.value}
          </p>
          <span
            className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold ${stat.accent}`}
          >
            {stat.hint}
          </span>
        </div>
      ))}
    </section>
  );
}
