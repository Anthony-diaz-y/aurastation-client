import CalendarContainer from '@/src/modules/calendar/container/CalendarContainer';

export const metadata = {
  title: 'Calendario · AURASTATION',
  description: 'Historial de tus mediciones de ritmo cardíaco.',
};

export default function CalendarPage() {
  return <CalendarContainer />;
}