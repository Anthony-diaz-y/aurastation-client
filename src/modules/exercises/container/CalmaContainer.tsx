'use client';

import { CALMA_CONFIG } from '../constants/exerciseConfigs';
import { ExercisePageLayout } from '../components/ExercisePageLayout';

export default function CalmaContainer() {
  return <ExercisePageLayout config={CALMA_CONFIG} />;
}
