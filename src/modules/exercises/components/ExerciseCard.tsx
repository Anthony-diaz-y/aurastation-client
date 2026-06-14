interface ExerciseCardProps {
  icon: React.ReactNode;
  text: string;
  textColor: string;
  className?: string;
}

export function ExerciseCard({ icon, text, textColor, className }: ExerciseCardProps) {
  return (
    <div
      className={`group flex items-center gap-5 rounded-[20px] p-5 shadow-sm bg-white hover:-translate-y-1 hover:shadow-md active:scale-[0.98] transition-all duration-300 cursor-pointer ${className || ""}`}
    >
      <div className="w-16 h-16 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
          {icon}
        </div>
      </div>
      <p
        className="text-sm font-extrabold uppercase leading-snug tracking-wider select-none"
        style={{ color: textColor }}
      >
        {text}
      </p>
    </div>
  );
}
