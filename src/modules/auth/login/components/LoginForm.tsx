'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SocialButtons from '@/src/shared/SocialButtons';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    router.push('/home');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">

        <div style={{ animation: 'fade-up 0.6s 0.25s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full h-11 bg-white/15 border border-white/20 rounded-full px-5 text-sm text-white placeholder:text-white/45 outline-none focus:border-white/50 focus:bg-white/20 transition"
          />
        </div>

        <div style={{ animation: 'fade-up 0.6s 0.35s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full h-11 bg-white/15 border border-white/20 rounded-full px-5 text-sm text-white placeholder:text-white/45 outline-none focus:border-white/50 focus:bg-white/20 transition"
          />
        </div>

        <div
          className="flex items-center gap-3 my-1"
          style={{ animation: 'fade-up 0.6s 0.45s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}
        >
          <div className="flex-1 h-px bg-white/15" />
          <span className="text-xs text-white/40">o</span>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div style={{ animation: 'fade-up 0.6s 0.5s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}>
          <SocialButtons />
        </div>

        <div style={{ animation: 'fade-up 0.6s 0.55s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#5ecfea] text-[#0e3a7a] font-bold text-sm rounded-full hover:bg-[#7dd8ef] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-[#0e3a7a]/30 border-t-[#0e3a7a] rounded-full animate-spin" />
                Iniciando...
              </span>
            ) : 'Iniciar sesión'}
          </button>
        </div>

        <div style={{ animation: 'fade-up 0.6s 0.6s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
              className="mt-0.5 w-3.5 h-3.5 accent-[#5ecfea] shrink-0"
            />
            <span className="text-xs text-white/45 leading-snug">
              Guardar mi información y consultar más rápidamente la próxima vez
            </span>
          </label>
        </div>

        <div
          className="w-full h-px bg-white/15 my-2"
          style={{ animation: 'fade-up 0.6s 0.65s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}
        />

        <div style={{ animation: 'fade-up 0.6s 0.7s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}>
          <Link
            href="/auth/register"
            className="w-full h-11 border border-white/40 rounded-full text-white text-sm font-semibold flex items-center justify-center hover:bg-white/10 active:scale-[0.98] transition"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
  );
}