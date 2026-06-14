import ExercisesContainer from '@/src/modules/exercises/container/ExercisesContainer';

export const metadata = {
  title: 'Categorías de Ejercicios · AURASTATION',
  description: 'Selecciona una categoría de ejercicio según tu estado de ánimo o nivel de estrés.',
};

export default function ExercisesPage() {
  return <ExercisesContainer />;
}