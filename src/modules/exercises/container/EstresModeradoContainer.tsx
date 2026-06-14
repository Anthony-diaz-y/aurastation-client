'use client';

import { ESTRES_MODERADO_CONFIG } from '../constants/exerciseConfigs';
import { ExercisePageLayout } from '../components/ExercisePageLayout';

export default function EstresModeradoContainer() {
  return <ExercisePageLayout config={ESTRES_MODERADO_CONFIG} />;
}
