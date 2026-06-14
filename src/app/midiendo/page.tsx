import { Suspense } from 'react';
import MidiendoContainer from '@/src/modules/midiendo/container/MidiendoContainer';


export const metadata = {
  title: 'Midiendo · AURASTATION',
  description: 'Resultado de tu medición de frecuencia cardíaca',
};

export default function MidiendoPage() {
  return (
    <Suspense fallback={<div className="midiendo-screen" />}>
      <MidiendoContainer />
    </Suspense>
  );
}
