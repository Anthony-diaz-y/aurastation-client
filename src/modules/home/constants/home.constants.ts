export const STRESS_LABELS: Record<string, string> = {
  ir_al_medico: "¡Visita al médico!",
  calma: "Calma",
  estres_moderado: "Estrés moderado",
  estres_fuerte: "Estrés fuerte",
};

export const DEFAULT_STRESS_LABEL = "Sin medición hoy";
export const UNREGISTERED_STRESS_LABEL = "Sin registrar";

export const WEEK_LABELS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"] as const;

export const MONTH_ABBR = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
] as const;

export const STRESS_CHART_COLORS: Record<string, string> = {
  ir_al_medico: "#f472b6",
  calma: "#22c55e",
  estres_moderado: "#facc15",
  estres_fuerte: "#f97316",
};

export const DEFAULT_CHART_COLOR = "#5ecfea";

export const LINE_CHART_WIDTH = 360;
export const LINE_CHART_HEIGHT = 88;
export const LINE_CHART_LABEL_Y = 112;
export const LINE_CHART_PADDING_X = 22;
export const LINE_CHART_DEFAULT_MAX = 220;

export const LOGO_BLUE_FILTER =
  "invert(1) sepia(1) saturate(8) hue-rotate(195deg) brightness(0.85)";

export const USER_AVATAR_STORAGE_KEY = "user_avatar_id";
