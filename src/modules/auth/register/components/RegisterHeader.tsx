import Image from 'next/image';

export default function RegisterHeader() {
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
        <h1 className="text-[2rem] font-extrabold text-white text-center mb-2 tracking-tight">
          Crear cuenta
        </h1>
        <p className="text-sm text-white/55 text-center">
          Regístrate con tu correo para guardar tus datos
        </p>
      </div>
    </div>
  );
}