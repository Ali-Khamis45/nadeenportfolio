"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Doodle from "@/components/ui/Doodle";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressDesktopRef = useRef<HTMLDivElement>(null);
  const progressMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const lines = [progressDesktopRef.current, progressMobileRef.current].filter(
      (el): el is HTMLDivElement => el !== null
    );
    gsap.set(lines, { scaleY: 0, transformOrigin: "top" });

    const trigger = ScrollTrigger.create({
      trigger: trackRef.current,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 0.6,
      onUpdate: (self) => {
        gsap.set(lines, { scaleY: self.progress });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <Doodle icon={Briefcase} className="right-[4%] top-[8%] hidden lg:block" size={26} />

      <Container>
        <SectionHeading
          index="04"
          kicker="Journey"
          title="Where the work has happened so far."
          align="center"
          className="mx-auto"
        />

        <div ref={trackRef} className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 guide-line lg:block" />
          <div className="absolute left-4 top-0 h-full w-px guide-line lg:hidden" />
          <div
            ref={progressDesktopRef}
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent to-accent-2 lg:block"
          />
          <div
            ref={progressMobileRef}
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent to-accent-2 lg:hidden"
          />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={cn(
                    "relative flex flex-col gap-6 pl-12 lg:pl-0",
                    "lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16"
                  )}
                >
                  <span className="absolute left-[9px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(0,200,215,0.15)] lg:left-1/2" />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "lg:col-start-1",
                      !isEven && "lg:col-start-2 lg:row-start-1"
                    )}
                  >
                    <Card className={cn("p-6", !isEven && "lg:ml-0")} glow>
                      <span className="font-accent text-xs uppercase tracking-wider text-accent">
                        {item.period}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-text">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-accent text-sm text-accent-2">{item.org}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <Badge key={tag} className="text-[10px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  <div
                    className={cn(
                      "hidden lg:block",
                      isEven ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-1 lg:row-start-1"
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
