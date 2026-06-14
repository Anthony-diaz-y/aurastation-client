'use client';

import { ESTRES_FUERTE_CONFIG } from '../constants/exerciseConfigs';
import { ExercisePageLayout } from '../components/ExercisePageLayout';

export default function EstresFuerteContainer() {
  return <ExercisePageLayout config={ESTRES_FUERTE_CONFIG} />;
}
