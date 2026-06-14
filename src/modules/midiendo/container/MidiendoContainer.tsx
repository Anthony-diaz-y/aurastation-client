'use client';

import { useMidiendo } from '../hooks/useMidiendo';
import MidiendoAnimation from '../components/MidiendoAnimation';
import ResultCard from '../components/ResultCard';

export default function MidiendoContainer() {
  const { measuring, result } = useMidiendo();

  if (measuring || result === null) {
    return <MidiendoAnimation />;
  }

  return <ResultCard result={result} />;
}
