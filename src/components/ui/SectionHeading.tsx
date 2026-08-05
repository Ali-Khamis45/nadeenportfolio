"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  index,
  className,
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex items-center gap-3 mb-4",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span className="font-accent text-xs text-accent tabular-nums">{index}</span>
        )}
        <span className="h-px w-8 bg-accent/60" />
        <span className="font-accent text-xs uppercase tracking-[0.25em] text-muted">
          {kicker}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-4 text-muted leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
