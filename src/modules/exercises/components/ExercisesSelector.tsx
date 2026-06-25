"use client";

import Image from "next/image";
import Link from "next/link";
import { type ExerciseCategory } from "../interfaces/exercises.interfaces";

interface ExercisesSelectorProps {
  categories: ExerciseCategory[];
}

export default function ExercisesSelector({
  categories,
}: ExercisesSelectorProps) {
  return (
    <main className="min-h-dvh bg-[#0c5395] transition-colors duration-300">
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-6 pt-12 pb-24 overflow-x-hidden text-white">
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
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`group relative overflow-hidden flex items-center justify-between py-6 px-5 rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-white/20 active:scale-[0.98] ${cat.animClass}`}
              style={{ backgroundColor: cat.bgColor, color: cat.textColor }}
            >
              <div className="flex flex-col gap-1 pr-4 max-w-[62%] relative z-10">
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
              <div className="absolute right-2 -bottom-0.5 w-28.75 h-28.75 shrink-0 group-hover:scale-105 transition-transform duration-300 pointer-events-none">
                <Image
                  src={cat.faceImage}
                  alt={cat.title}
                  width={115}
                  height={115}
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
