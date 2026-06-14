import type { ReactNode } from "react";

type ChartPanelProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
};

export default function ChartPanel({
  title,
  subtitle,
  children,
  className = "",
}: ChartPanelProps) {
  return (
    <section
      className={`flex min-h-0 flex-1 flex-col rounded-t-[2.75rem] bg-[#8fa3c7] p-3 pb-25 ${className}`}
    >
      <article className="animate-home-chart-in mb-4 flex min-h-0 flex-1 flex-col rounded-[1.75rem] bg-white px-5 pb-5 pt-5 shadow-[0_8px_24px_rgba(29,87,187,0.12)]">
        <h2 className="text-base font-extrabold leading-tight text-slate-800">
          {title}
        </h2>
        <p className="mt-0.5 text-sm font-medium text-slate-600">{subtitle}</p>
        <div className="mt-4 flex flex-1 flex-col justify-end">{children}</div>
      </article>
    </section>
  );
}
