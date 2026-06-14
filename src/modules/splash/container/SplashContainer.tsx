'use client';

import { useSplashTimer } from '../hooks/useSplashTimer';
import SplashScreen from '../components/SplashScreen';

export default function SplashContainer() {
  useSplashTimer();
  return <SplashScreen />;
}
