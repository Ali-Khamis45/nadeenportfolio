"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Layers3 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Doodle from "@/components/ui/Doodle";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const category = skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="relative py-28 lg:py-36">
      <Doodle icon={Layers3} className="left-[4%] top-[10%] hidden lg:block" size={26} />
      <Doodle icon={Wand2} className="right-[6%] bottom-[8%] hidden lg:block" size={24} delay={0.8} />

      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="02"
            kicker="Skills"
            title="A toolkit built across front-end, design, and AI."
            description="From pixel-considered interfaces to model-backed features — here's what I reach for, grouped by discipline."
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                "rounded-full border px-5 py-2.5 font-accent text-sm transition-colors",
                active === cat.id
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-accent/30 hover:text-text"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {category.skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-accent text-sm text-text/90">{skill.name}</span>
                  <span className="font-accent text-xs text-muted">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: Math.min(i * 0.03, 0.4),
                    }}
                    style={{ width: `${skill.level}%`, transformOrigin: "left" }}
                    className="h-full rounded-full accent-gradient"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
