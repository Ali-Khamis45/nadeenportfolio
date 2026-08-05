import type { ElementType, ReactNode } from "react";
import { createElement } from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return createElement(
    as,
    { className: cn("mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12", className) },
    children
  );
}
