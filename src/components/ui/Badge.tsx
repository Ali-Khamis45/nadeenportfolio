import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & { children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-accent text-xs text-accent-2",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
