import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
}

export default function EmptyState({ title, subtitle, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 opacity-70">
      <div className="h-14 w-14 mb-2 opacity-50">{icon}</div>
      <p className="text-sm font-black uppercase tracking-wider">{title}</p>
      {subtitle && <p className="text-xs opacity-80 mt-1">{subtitle}</p>}
    </div>
  );
}