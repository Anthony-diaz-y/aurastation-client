export default function CalendarLoading() {
  return (
    <main className="min-h-dvh bg-[#0c5395] flex flex-col">
      <div className="mx-auto w-full max-w-lg flex min-h-dvh items-center justify-center text-white flex-col gap-3">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        <p className="text-sm font-semibold opacity-70 tracking-wide">
          Cargando...
        </p>
      </div>
    </main>
  );
}
