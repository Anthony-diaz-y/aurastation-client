interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = "Cargando...",
}: LoadingStateProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      <p className="text-sm font-semibold opacity-60">{message}</p>
    </div>
  );
}