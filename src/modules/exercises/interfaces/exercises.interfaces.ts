import React from "react";

export interface Exercise {
  id: string;
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export interface ExercisePageConfig {
  level: "ir_al_medico" | "calma" | "estres_moderado" | "estres_fuerte";
  title: string;
  badge: string;
  badgeVariant: "warning" | "default";
  bgColor: string;
  textColor: string;
  cardTextColor: string;
  badgeBg: string;
  badgeText: string;
  exercises?: Exercise[];
  alertTitle?: string;
  alertBody?: string;
  alertIcon?: React.ReactNode;
}

export interface ExerciseCategory {
  id: string;
  title: string;
  range: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon: () => React.ReactElement;
  href: string;
  animClass: string;
}
