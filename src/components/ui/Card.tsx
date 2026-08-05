import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  glow = true,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode; glow?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface/80 backdrop-blur-sm transition-all duration-300",
        glow && "glow-border hover:-translate-y-1 hover:border-accent/30 hover:card-shadow",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
