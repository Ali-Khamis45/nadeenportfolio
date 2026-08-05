"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Doodle({
  icon: Icon,
  className,
  size = 28,
  delay = 0,
  duration = 7,
  opacity = "text-accent/20",
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
  opacity?: string;
}) {
  return (
    <motion.div
      aria-hidden
      className={cn("absolute pointer-events-none select-none", opacity, className)}
      animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Icon size={size} strokeWidth={1.25} />
    </motion.div>
  );
}
