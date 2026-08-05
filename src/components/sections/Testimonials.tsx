"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Doodle from "@/components/ui/Doodle";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <Doodle icon={MessageSquareQuote} className="left-[4%] bottom-[10%] hidden lg:block" size={26} />

      <Container>
        <SectionHeading
          index="06"
          kicker="Testimonials"
          title="What collaborators say about working together."
          align="center"
          className="mx-auto"
          description="A few notes from placeholder collaborators — swap these in once you've collected real feedback."
        />

        <div
          className="relative mx-auto mt-14 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-8 sm:p-10" glow={false}>
                <Quote className="text-accent/50" size={28} />
                <p className="mt-4 text-lg leading-relaxed text-text/90">{current.quote}</p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-accent/30">
                    <Image src={current.avatar} alt={current.name} fill sizes="48px" />
                  </div>
                  <div>
                    <p className="font-accent text-sm text-text">{current.name}</p>
                    <p className="text-xs text-muted">{current.role}</p>
                  </div>
                  {current.placeholder && (
                    <span className="ml-auto rounded-full border border-border px-2.5 py-1 font-accent text-[10px] uppercase tracking-wider text-muted">
                      Placeholder
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-surface-2"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
