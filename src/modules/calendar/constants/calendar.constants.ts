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

export const NAV_ANIMATION_MS = 420;

export const YEAR_RANGE_OFFSET = 5;

export const STRESS_DAY_STYLES: Record<string, string> = {
  ir_al_medico: "bg-[#c2effd] text-[#0f5a70]",
  calma: "bg-[#d2f1e6] text-[#1b614c]",
  estres_moderado: "bg-[#fffbcf] text-[#6e612f]",
  estres_fuerte: "bg-[#ffdbe0] text-[#8d2d3a]",
};

export const DEFAULT_DAY_STYLE =
  "bg-slate-50 text-slate-700 hover:bg-slate-100";

export const STRESS_LABELS: Record<string, string> = {
  ir_al_medico: "IR AL MÉDICO",
  calma: "CALMA",
  estres_moderado: "MODERADO",
  estres_fuerte: "FUERTE",
};

export const DEFAULT_STRESS_LABEL = "SIN REGISTROS";

export const STRESS_FACE_IMAGES: Record<string, string> = {
  ir_al_medico: "/ir_al_medico_face.webp",
  calma: "/calma_face.webp",
  estres_moderado: "/estres_moderado_face.webp",
  estres_fuerte: "/estres_fuerte_face.webp",
};
