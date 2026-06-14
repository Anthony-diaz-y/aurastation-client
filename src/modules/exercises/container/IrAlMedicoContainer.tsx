'use client';

import { IR_AL_MEDICO_CONFIG } from '../constants/exerciseConfigs';
import { ExercisePageLayout } from '../components/ExercisePageLayout';

export default function IrAlMedicoContainer() {
  return <ExercisePageLayout config={IR_AL_MEDICO_CONFIG} />;
}
