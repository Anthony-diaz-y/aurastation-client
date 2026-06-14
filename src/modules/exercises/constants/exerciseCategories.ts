import React from 'react';
import { doctorSvg } from '@/public/svgs/exercises/doctor';
import { smileFaceSvg } from '@/public/svgs/exercises/smile_face';
import { bodyTenseSvg } from '@/public/svgs/exercises/body_tense';
import { BodyStretchSvg } from '@/public/svgs/exercises/body_stretch';
import { ExerciseCategory } from '../interfaces/exercises.interfaces';

export const EXERCISE_CATEGORIES: ExerciseCategory[] = [
  {
    id: 'calma',
    title: 'Calma',
    range: '60 – 100 BPM',
    description: 'Ejercicios para mantener tu estado de equilibrio y tranquilidad.',
    bgColor: '#49ad8e',
    textColor: '#ffffff',
    icon: smileFaceSvg,
    href: '/exercises/calma',
    animClass: 'animate-exercise-card-1',
  },
  {
    id: 'estres-moderado',
    title: 'Estrés moderado',
    range: '101 – 140 BPM',
    description: 'Ejercicios de respiración y relajación muscular progresiva.',
    bgColor: '#FFF48F',
    textColor: '#61583F',
    icon: bodyTenseSvg,
    href: '/exercises/estres-moderado',
    animClass: 'animate-exercise-card-2',
  },
  {
    id: 'estres-fuerte',
    title: 'Estrés fuerte',
    range: '141 – 220 BPM',
    description: 'Ejercicios físicos activos para canalizar y liberar tensión física.',
    bgColor: '#e8687a',
    textColor: '#ffffff',
    icon: BodyStretchSvg,
    href: '/exercises/estres-fuerte',
    animClass: 'animate-exercise-card-3',
  },
  {
    id: 'ir-al-medico',
    title: 'Ir al médico',
    range: '0 – 59 BPM',
    description: 'Tu salud es lo primero. Consulta médica recomendada por ritmo bajo.',
    bgColor: '#5ec8e8',
    textColor: '#ffffff',
    icon: doctorSvg,
    href: '/exercises/ir-al-medico',
    animClass: 'animate-exercise-card-4',
  },
];
