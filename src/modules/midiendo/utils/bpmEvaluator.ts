import { BpmResult } from "../interfaces/midiendo.interfaces";

export function evaluateBpm(bpm: number): BpmResult {
  if (bpm <= 59) {
    return {
      level: "ir_al_medico",
      label: "Ir al médico",
      description:
        "Tu frecuencia cardíaca es muy baja. Te recomendamos consultar con un profesional de la salud lo antes posible.",
      range: "0 – 59 BPM",
      bgColor: "#5ec8e8",
      accentColor: "#3ab4d4",
      textColor: "#ffffff",
      buttonColor: "#ffffff",
      buttonTextColor: "#3ab4d4",
      faceImage: "/ir_al_medico_face.webp",
      exercisesHref: "/exercises/ir-al-medico",
      bpm,
    };
  }

  if (bpm <= 100) {
    return {
      level: "calma",
      label: "Calma",
      description:
        "Tu frecuencia cardíaca está dentro del rango normal. ¡Sigue así, estás en equilibrio!",
      range: "60 – 100 BPM",
      bgColor: "#b2dfdb",
      accentColor: "#4caf93",
      textColor: "#1b4332",
      buttonColor: "#ffffff",
      buttonTextColor: "#4caf93",
      faceImage: "/calma_face.webp",
      exercisesHref: "/exercises/calma",
      bpm,
    };
  }

  if (bpm <= 140) {
    return {
      level: "estres_moderado",
      label: "Estrés moderado",
      description:
        "Tu frecuencia cardíaca indica un nivel de estrés moderado. Prueba los ejercicios de respiración.",
      range: "101 – 140 BPM",
      bgColor: "#f9e547",
      accentColor: "#d4a017",
      textColor: "#3d2c00",
      buttonColor: "#ffffff",
      buttonTextColor: "#d4a017",
      faceImage: "/estres_moderado_face.webp",
      exercisesHref: "/exercises/estres-moderado",
      bpm,
    };
  }

  return {
    level: "estres_fuerte",
    label: "Estrés fuerte",
    description:
      "Tu frecuencia cardíaca es muy elevada. Te recomendamos hacer una pausa y practicar los ejercicios de relajación.",
    range: "141 – 220 BPM",
    bgColor: "#e8687a",
    accentColor: "#c0392b",
    textColor: "#ffffff",
    buttonColor: "#ffffff",
    buttonTextColor: "#c0392b",
    faceImage: "/estres_fuerte_face.webp",
    exercisesHref: "/exercises/estres-fuerte",
    bpm,
  };
}
