"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setVisible(false), prefersReducedMotion ? 0 : 1400);
    document.body.style.overflow = "hidden";
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ y: 40, opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{
              y: 0,
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{ y: -20, opacity: 0, transition: { duration: 0.4 } }}
            className="flex flex-col items-center gap-3"
          >
            <Logo size={44} wordmarkClassName="text-3xl sm:text-4xl" />
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 } }}
              className="h-px w-32 origin-left bg-gradient-to-r from-accent to-accent-2"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
