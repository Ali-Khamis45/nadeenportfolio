import { cn } from "@/lib/utils";

export default function Logo({
  size = 32,
  showWordmark = true,
  className,
  wordmarkClassName,
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={showWordmark}
        role={showWordmark ? undefined : "img"}
        aria-label={showWordmark ? undefined : "Nadeen Hany"}
      >
        <rect width="64" height="64" rx="16" fill="#00C8D7" />
        <rect x="15" y="13" width="9" height="38" rx="4.5" fill="#12232A" />
        <rect x="40" y="13" width="9" height="38" rx="4.5" fill="#12232A" />
        <rect x="15" y="27.5" width="34" height="9" rx="4.5" fill="#12232A" />
        <path d="M22 17 L44 47" stroke="#12232A" strokeWidth="9" strokeLinecap="round" />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-tight text-text",
            wordmarkClassName
          )}
        >
          Nadeen<span className="text-accent">.</span>Hany
        </span>
      )}
    </span>
  );
}
