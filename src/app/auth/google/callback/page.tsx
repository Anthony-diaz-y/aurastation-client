'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function GoogleCallback() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get('token');
    const userRaw = params.get('user');

    if (token) {
      localStorage.setItem('access_token', token);

      if (userRaw) {
        try {
          const user = JSON.parse(decodeURIComponent(userRaw));
          if (user.avatarId) {
            localStorage.setItem('user_avatar_id', user.avatarId);
          }
        } catch {}
      }

      router.replace('/home');
    } else {
      router.replace('/auth/login');
    }
  }, [params, router]);

  return (
    <main className="min-h-dvh flex items-center justify-center bg-linear-to-br from-[#1d57bb] to-[#0f2d6e]">
      <div className="w-8 h-8 border-4 border-[#5ecfea]/30 border-t-[#5ecfea] rounded-full animate-spin" />
    </main>
  );
}

export default function GoogleCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-dvh flex items-center justify-center bg-linear-to-br from-[#1d57bb] to-[#0f2d6e]">
          <div className="w-8 h-8 border-4 border-[#5ecfea]/30 border-t-[#5ecfea] rounded-full animate-spin" />
        </main>
      }
    >
      <GoogleCallback />
    </Suspense>
  );
}
