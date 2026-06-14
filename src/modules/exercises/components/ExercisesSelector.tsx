"use client";

import Link from "next/link";
import { type ExerciseCategory } from "../interfaces/exercises.interfaces";

interface ExercisesSelectorProps {
  categories: ExerciseCategory[];
}

export default function ExercisesSelector({
  categories,
}: ExercisesSelectorProps) {
  return (
    <div className="min-h-dvh bg-[#0c5395] sm:flex sm:justify-center transition-colors duration-300">
      <main className="relative flex min-h-dvh w-full max-w-105 flex-col px-6 pt-12 pb-24 overflow-x-hidden text-white">
        <Link
          href="/home"
          className="animate-exercise-header mb-6 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Volver al inicio"
        >
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
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Volver
        </Link>

        <h1 className="animate-exercise-header text-3xl font-extrabold tracking-tight mb-2">
          Ejercicios
        </h1>
        <p
          className="animate-exercise-header text-sm text-white/70 mb-8"
          style={{ animationDelay: "0.05s" }}
        >
          Selecciona una categoría para ver los ejercicios recomendados para
          regular tu ritmo cardíaco.
        </p>

        <div className="flex flex-col gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className={`group flex items-center justify-between p-5 rounded-3xl shadow-md border-2 border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-white/20 active:scale-[0.98] ${cat.animClass}`}
                style={{ backgroundColor: cat.bgColor, color: cat.textColor }}
              >
                <div className="flex flex-col gap-1 pr-4 max-w-[70%]">
                  <span className="text-[10px] font-extrabold tracking-widest opacity-75 uppercase">
                    {cat.range}
                  </span>
                  <h2 className="text-xl font-extrabold leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-xs font-medium leading-relaxed opacity-80 mt-1">
                    {cat.description}
                  </p>
                </div>
                <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-white/10 rounded-2xl p-2 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
                    <Icon />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
