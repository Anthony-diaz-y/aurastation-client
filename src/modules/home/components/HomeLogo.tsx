import Image from 'next/image';

const LOGO_BLUE_FILTER =
  'invert(1) sepia(1) saturate(8) hue-rotate(195deg) brightness(0.85)';

export default function HomeLogo() {
  return (
    <div
      className="mb-3 flex flex-col items-center"
      style={{ animation: 'home-fade-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both' }}
    >
      <Image
        src="/aurastation_logo.webp"
        alt="AURASTATION"
        width={168}
        height={110}
        priority
        className="h-27 w-auto"
        style={{ filter: LOGO_BLUE_FILTER }}
      />
    </div>
  );
}
