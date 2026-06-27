"use client";

import {
  DEFAULT_STRESS_LABEL,
  STRESS_LABELS,
} from "../constants/home.constants";
import { type StressCardProps } from "../interfaces/home.interfaces";
import LineChart from "./LineChart";

export default function StressCard({
  className = "",
  chartData,
  periodLabel,
  latestStress,
}: StressCardProps) {
  const hasData = chartData.some((point) => point.value != null);
  const stressLabel = latestStress
    ? (STRESS_LABELS[latestStress] ?? latestStress)
    : DEFAULT_STRESS_LABEL;

  return (
    <section
      className={`flex min-h-0 flex-1 flex-col rounded-t-[2.75rem] bg-[#8fa3c7] p-3 pb-25 ${className}`}
    >
      <article className="animate-home-chart-in flex min-h-0 flex-1 flex-col rounded-[1.75rem] bg-white px-5 pb-5 pt-5 shadow-[0_8px_24px_rgba(29,87,187,0.12)]">
        <div className="mb-3">
          <h2 className="text-base font-extrabold leading-tight text-slate-800">
            Ritmo Cardíaco
          </h2>
          <p className="mt-0.5 text-sm font-medium text-slate-500">{stressLabel}</p>
          <p className="text-xs text-slate-400 font-medium mt-0.5">{periodLabel}</p>
        </div>

        <div className="flex flex-1 flex-col justify-end">
          {hasData ? (
            <LineChart
              data={chartData}
              ariaLabel={`Gráfico semanal de ritmo cardíaco — ${periodLabel}`}
            />
          ) : (
            <div className="flex flex-1 items-center justify-center pb-6">
              <p className="text-sm text-slate-400 font-medium text-center">
                Aún no hay mediciones esta semana
              </p>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
