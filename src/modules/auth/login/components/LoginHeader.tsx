import Image from 'next/image';

export default function LoginHeader() {
  return (
    <div className="flex flex-col items-center mb-6">
      <div style={{ animation: 'fade-down 0.7s cubic-bezier(0.16,1,0.3,1) both' }}>
        <Image
          src="/aurastation_logo.webp"
          alt="AURASTATION"
          width={160}
          height={90}
          priority
          className="mb-9"
        />
      </div>
      <div style={{ animation: 'fade-down 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both', opacity: 0 }}>
        <h1 className="text-[1.75rem] font-extrabold text-white text-center mb-1 tracking-tight">
          Iniciar sesión
        </h1>
        <p className="text-sm text-white/55 text-center">
          Inicia sesión con email y contraseña
        </p>
      </div>
    </div>
  );
}