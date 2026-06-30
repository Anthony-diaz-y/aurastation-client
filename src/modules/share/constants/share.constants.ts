import type { ReactElement } from "react";
import { annoyedFaceSvg } from "@/public/svgs/profiles/annoyed_face";
import { concernedFaceSvg } from "@/public/svgs/profiles/concerned_face";
import { happyFaceSvg } from "@/public/svgs/profiles/happy_face";
import { angryFaceSvg } from "@/public/svgs/profiles/angry_face";
import { cheekyFaceSvg } from "@/public/svgs/profiles/cheeky_face";
import { deadFaceSvg } from "@/public/svgs/profiles/dead_face";
import { uncertainFaceSvg } from "@/public/svgs/profiles/uncertain_face";
import { seriousFaceSvg } from "@/public/svgs/profiles/serious_face";
import { pleadingFaceSvg } from "@/public/svgs/profiles/pleading_face";
import { surpriseFaceSvg } from "@/public/svgs/profiles/surprise_face";
import { joyfulFaceSvg } from "@/public/svgs/profiles/joyful_face";
import { silentFaceSvg } from "@/public/svgs/profiles/silent_face";

export const SHARE_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

export const SHARE_USERS_ENDPOINT = `${SHARE_API_URL}users/search`;
export const SHARE_LIST_BY_ME_ENDPOINT = `${SHARE_API_URL}share/shared-by-me`;
export const SHARE_LIST_WITH_ME_ENDPOINT = `${SHARE_API_URL}share/shared-with-me`;
export const SHARE_DAYS_MEASUREMENTS_ENDPOINT = `${SHARE_API_URL}calendar/days-with-measurements`;
export const SHARE_CREATE_ENDPOINT = `${SHARE_API_URL}share`;
export const SHARE_LOG_DETAIL_ENDPOINT = (relId: number) =>
  `${SHARE_API_URL}share/shared-log/${relId}`;
export const SHARE_DELETE_ENDPOINT = (id: number) => `${SHARE_API_URL}share/${id}`;

export const SEARCH_DEBOUNCE_MS = 400;
export const CALENDAR_GRID_SIZE = 42;

export const MONTH_NAMES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

export const WEEK_DAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"] as const;

export const VIEW_MODE_TABS = [
  { id: "all", label: "Todos" },
  { id: "by-me", label: "Mis compartidos" },
  { id: "with-me", label: "Conmigo" },
] as const;

export const VIEW_MODE_TITLES: Record<string, string> = {
  all: "Compartir con",
  "by-me": "Mis compartidos",
  "with-me": "Compartidos conmigo",
};

export const AVATAR_MAP: Record<string, () => ReactElement> = {
  annoyed: annoyedFaceSvg,
  concerned: concernedFaceSvg,
  happy: happyFaceSvg,
  angry: angryFaceSvg,
  cheeky: cheekyFaceSvg,
  dead: deadFaceSvg,
  uncertain: uncertainFaceSvg,
  serious: seriousFaceSvg,
  pleading: pleadingFaceSvg,
  surprise: surpriseFaceSvg,
  joyful: joyfulFaceSvg,
  silent: silentFaceSvg,
};

export const DEFAULT_AVATAR_RENDERER = happyFaceSvg;

export const AVATAR_BG_COLORS: Record<string, string> = {
  annoyed: "bg-[#e17b7b]",
  concerned: "bg-[#a6d5c5]",
  happy: "bg-[#f3a4b5]",
  angry: "bg-[#e97c7c]",
  cheeky: "bg-[#f7c59f]",
  dead: "bg-[#d1d5db]",
  uncertain: "bg-[#c7d2fe]",
  serious: "bg-[#cbd5e1]",
  pleading: "bg-[#fef08a]",
  surprise: "bg-[#bfdbfe]",
  joyful: "bg-[#fed7aa]",
  silent: "bg-[#f5f5f5]",
};

export const DEFAULT_AVATAR_BG = "bg-[#f3a4b5]";

export const STRESS_LABELS: Record<string, string> = {
  ir_al_medico: "IR AL MÉDICO",
  calma: "CALMA",
  estres_moderado: "MODERADO",
  estres_fuerte: "FUERTE",
};

export const DEFAULT_STRESS_LABEL = "SIN REGISTROS";

export const STRESS_TEXT_COLOR: Record<string, string> = {
  ir_al_medico: "text-red-500",
  calma: "text-green-500",
  estres_moderado: "text-yellow-500",
  estres_fuerte: "text-orange-500",
};

export const DEFAULT_STRESS_TEXT_COLOR = "text-slate-400";

export const SHARED_LOG_DETAIL_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
};

export const SHARED_LIST_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};