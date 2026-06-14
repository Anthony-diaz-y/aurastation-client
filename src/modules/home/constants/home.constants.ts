import { LineChartPoint } from "../interfaces/home.interfaces";

export const defaultStressData: LineChartPoint[] = [
  { day: 'Lu', value: 38, dot: '#facc15' },
  { day: 'Ma', value: 28, dot: '#5ecfea' },
  { day: 'Mi', value: 52, dot: '#22c55e' },
  { day: 'Ju', value: 44, dot: '#facc15', active: true },
  { day: 'Vi', value: 82, dot: '#f472b6' },
  { day: 'Sá', value: 58, dot: '#5ecfea' },
];


export const stats = [
  {
    label: 'Último BPM',
    value: '100',
    hint: 'Hoy',
    accent: 'bg-[#1d57bb]/10 text-[#1d57bb]',
  },
  {
    label: 'Racha',
    value: '12',
    hint: 'Días activos',
    accent: 'bg-amber-50 text-amber-700',
  },
];