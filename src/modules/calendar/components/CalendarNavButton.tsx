type CalendarNavButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  size?: "sm" | "md";
  ariaLabel: string;
};

const sizeClasses = {
  sm: "w-9 h-9",
  md: "w-10 h-10",
};

export default function CalendarNavButton({
  direction,
  onClick,
  disabled = false,
  size = "md",
  ariaLabel,
}: CalendarNavButtonProps) {
  const points = direction === "prev" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-white/15 text-white disabled:opacity-30 hover:bg-white/25 active:scale-90 transition-all duration-200`}
      aria-label={ariaLabel}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points={points} />
      </svg>
    </button>
  );
}
