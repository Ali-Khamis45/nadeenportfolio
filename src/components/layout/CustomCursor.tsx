"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const isTouch = useMediaQuery("(pointer: coarse)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = !isTouch && !prefersReducedMotion;

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-enabled");

    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let targetX = 0;
    let targetY = 0;

    function handleMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    }

    let raf = 0;
    function loop() {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      glowX += (targetX - glowX) * 0.08;
      glowY += (targetY - glowY) * 0.08;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("cursor-enabled");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90]">
      <div
        ref={glowRef}
        className="fixed left-0 top-0 h-[420px] w-[420px] rounded-full opacity-[0.06] blur-[80px]"
        style={{ background: "radial-gradient(circle, #00c8d7, transparent 70%)" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border border-accent/50 transition-[width,height] duration-200 ease-out"
        style={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          backgroundColor: hovering ? "rgba(0,200,215,0.08)" : "transparent",
        }}
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent"
      />
    </div>
  );
}
