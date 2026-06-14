'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SPLASH_DURATION_MS = 9000;

export function useSplashTimer() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/auth/login'), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [router]);
}
