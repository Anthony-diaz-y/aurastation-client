import Link from "next/link";

import { ExercisePageConfig } from "../interfaces/exercises.interfaces";
import { ExerciseCard } from "./ExerciseCard";
import { ReturnArrowIcon } from "@/src/shared/icons/ReturnArrowIcon";

interface ExercisePageLayoutProps {
  config: ExercisePageConfig;
}

export function ExercisePageLayout({ config }: ExercisePageLayoutProps) {
  const {
    title,
    badge,
    bgColor,
    textColor,
    cardTextColor,
    badgeBg,
    badgeText,
    exercises,
    alertTitle,
    alertBody,
    alertIcon,
  } = config;

  return (
    <main
      className="min-h-dvh transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-6 pt-14 pb-10"
        style={{ backgroundColor: bgColor }}
      >
        <Link
          href="/exercises"
          className="animate-exercise-header mb-8 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-80 transition-opacity hover:opacity-100"
          style={{ color: textColor }}
          aria-label="Volver al inicio"
        >
          <ReturnArrowIcon />
          Volver
        </Link>

        <div
          className="animate-exercise-header mb-5 flex"
          style={{ animationDelay: "0.05s" } as any}
        >
          <span
            className="rounded px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]"
            style={{ backgroundColor: badgeBg, color: badgeText }}
          >
            {badge}
          </span>
        </div>

        <h1
          className="animate-exercise-header mb-8 text-[2.2rem] font-bold leading-tight tracking-tight"
          style={{ color: textColor, animationDelay: "0.1s" } as any}
        >
          {title}
        </h1>

        {exercises && exercises.length > 0 ? (
          <div className="flex flex-col gap-3">
            {exercises.map((ex, index) => {
              const animClass =
                index === 0
                  ? "animate-exercise-card-1"
                  : index === 1
                    ? "animate-exercise-card-2"
                    : "animate-exercise-card-3";
              return (
                <ExerciseCard
                  key={ex.id}
                  icon={ex.icon}
                  text={ex.text}
                  textColor={cardTextColor}
                  className={`${animClass} ${ex.className || ""}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="animate-exercise-card-1 flex flex-col items-center rounded-3xl p-8 text-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-6 w-45 h-45 flex items-center justify-center shrink-0">
              <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
                {alertIcon}
              </div>
            </div>
            <h2
              className="mb-4 text-xl font-extrabold uppercase leading-tight tracking-wider"
              style={{ color: cardTextColor }}
            >
              {alertTitle}
            </h2>
            <p
              className="text-sm font-medium leading-relaxed"
              style={{ color: cardTextColor }}
            >
              {alertBody}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
