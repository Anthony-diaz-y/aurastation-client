import React from 'react';
import { doctorSvg } from '@/public/svgs/exercises/doctor';
import { smileFaceSvg } from '@/public/svgs/exercises/smile_face';
import { spinnerSvg } from '@/public/svgs/exercises/spinner';
import { bodyShakeSvg } from '@/public/svgs/exercises/body_shake';
import { bodyTenseSvg } from '@/public/svgs/exercises/body_tense';
import { BodyStretchSvg } from '@/public/svgs/exercises/body_stretch';
import { washHandsSvg } from '@/public/svgs/exercises/wash_hands';
import { type ExercisePageConfig } from '../interfaces/exercises.interfaces';
import { BreatheIcon } from '@/src/shared/icons/BreatheIcon';

export const CALMA_CONFIG: ExercisePageConfig = {
  level: 'calma',
  title: 'Calma',
  badge: 'EJERCICIOS',
  badgeVariant: 'default',
  bgColor: '#49ad8e',
  textColor: '#ffffff',
  cardTextColor: '#327C66',
  badgeBg: 'rgba(255,255,255,0.25)',
  badgeText: '#ffffff',
  exercises: [
    { id: 'calma-1', icon: smileFaceSvg(), text: 'Tómate un pequeño descanso' },
    { id: 'calma-2', icon: spinnerSvg(),    text: 'Cambia de actividad y vuelve luego' },
  ],
};

export const ESTRES_MODERADO_CONFIG: ExercisePageConfig = {
  level: 'estres_moderado',
  title: 'Estrés moderado',
  badge: 'EJERCICIOS',
  badgeVariant: 'default',
  bgColor: '#FFF48F',
  textColor: '#61583F',
  cardTextColor: '#61583F',
  badgeBg: 'rgba(255,255,255,0.6)',
  badgeText: '#61583F',
  exercises: [
    { id: 'em-1', icon: bodyShakeSvg(), text: 'Sacude tu cuerpo durante un minuto seguido' },
    { id: 'em-2', icon: bodyTenseSvg(), text: 'Tensa un grupo muscular por 5 segundos' },
    { id: 'em-3', icon: React.createElement(BreatheIcon), text: 'Inhala por la nariz y suelta el aire lentamente por la boca' },
  ],
};

export const ESTRES_FUERTE_CONFIG: ExercisePageConfig = {
  level: 'estres_fuerte',
  title: 'Estrés fuerte',
  badge: 'EJERCICIOS',
  badgeVariant: 'default',
  bgColor: '#e8687a',
  textColor: '#ffffff',
  cardTextColor: '#7B4646',
  badgeBg: 'rgba(255,255,255,0.25)',
  badgeText: '#ffffff',
  exercises: [
    { id: 'ef-1', icon: washHandsSvg(),   text: 'Moja con agua fría tu rostro y tus manos' },
    { id: 'ef-2', icon: BodyStretchSvg(), text: 'Ejerce presión suavemente en tu cuerpo' },
    {
      id: 'ef-3',
      icon: bodyShakeSvg(),
      text: 'Sacude tu cuerpo durante un minuto seguido',
      className: '[&_path]:fill-[#7B4646]',
    },
  ],
};

export const IR_AL_MEDICO_CONFIG: ExercisePageConfig = {
  level: 'ir_al_medico',
  title: 'Ir al médico',
  badge: 'PRECAUCIÓN',
  badgeVariant: 'warning',
  bgColor: '#5ec8e8',
  textColor: '#ffffff',
  cardTextColor: '#2F6479',
  badgeBg: 'rgba(255,255,255,0.3)',
  badgeText: '#ffffff',
  alertTitle: '¡Es momento de hablar con tu médico!',
  alertBody:
    'Recuerda comentarle tus síntomas y compartir tu historial de actividad en la aplicación para que te pueda ayudar con lo que necesites.',
  alertIcon: doctorSvg(),
};
