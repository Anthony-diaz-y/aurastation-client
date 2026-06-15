import Image from "next/image";
import Link from "next/link";
import { BpmResult } from "../interfaces/midiendo.interfaces";

interface ResultCardProps {
  result: BpmResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  const {
    label,
    description,
    range,
    bgColor,
    textColor,
    buttonColor,
    buttonTextColor,
    faceImage,
    bpm,
    exercisesHref,
  } = result;

  return (
    <main className="min-h-dvh" style={{ backgroundColor: bgColor }}>
      <div
        className="mx-auto flex min-h-dvh w-full max-w-lg flex-col overflow-hidden relative"
        style={{ backgroundColor: bgColor }}
        role="region"
        aria-label={`Resultado: ${label}`}
      >
        <div className="flex flex-col px-8 pt-14 text-center items-center">
          <div className="mb-8 flex items-center justify-between w-full">
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: textColor, opacity: 0.7 }}
            >
              {range}
            </span>

            <div
              className="flex items-center gap-1.5 rounded-full border px-3 py-1.5"
              style={{ color: textColor, borderColor: `${textColor}35` }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span
                className="text-[15px] font-extrabold leading-none"
                style={{ color: textColor }}
              >
                {bpm}
              </span>
              <span
                className="text-[11px] font-semibold"
                style={{ color: textColor, opacity: 0.65 }}
              >
                BPM
              </span>
            </div>
          </div>

          <h1
            className="mb-3 text-[2rem] font-bold leading-tight tracking-tight mt-4"
            style={{ color: textColor }}
          >
            {label}
          </h1>

          <p
            className="mb-8 text-sm leading-relaxed max-w-sm"
            style={{ color: textColor, opacity: 0.8 }}
          >
            {description}
          </p>

          <div className="flex justify-center">
            <Link
              href={exercisesHref}
              id="btn-ver-ejercicios"
              className="flex items-center gap-2 rounded-lg px-7 py-3 text-[11px] font-extrabold tracking-[0.12em] shadow-sm transition-transform active:scale-[0.97] hover:-translate-y-px"
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
              aria-label="Ver ejercicios recomendados"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              VER EJERCICIOS
            </Link>
          </div>
        </div>

        <div
          className="animate-face-rise pointer-events-none absolute bottom-0 left-1/2 w-[88%] max-w-85 -translate-x-1/2"
          aria-hidden
        >
          <Image
            src={faceImage}
            alt=""
            width={340}
            height={280}
            className="block h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
