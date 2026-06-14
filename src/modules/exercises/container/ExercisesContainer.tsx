'use client';

import { EXERCISE_CATEGORIES } from '../constants/exerciseCategories';
import ExercisesSelector from '../components/ExercisesSelector';

export default function ExercisesContainer() {
  return <ExercisesSelector categories={EXERCISE_CATEGORIES} />;
}
