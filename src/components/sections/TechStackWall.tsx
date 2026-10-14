"use client";

import type { ComponentType } from "react";
import {
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFigma,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiCplusplus,
} from "react-icons/si";
import { Sparkles, BarChart3 } from "lucide-react";
import Container from "@/components/ui/Container";
import { techStack } from "@/lib/data";

const iconMap: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  React: SiReact,
  Angular: SiAngular,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Git: SiGit,
  Figma: SiFigma,
  Python: SiPython,
  TensorFlow: SiTensorflow,
  OpenAI: Sparkles,
  Docker: SiDocker,
  Vercel: SiVercel,
  Firebase: SiFirebase,
  Keras: SiKeras,
  "Scikit-Learn": SiScikitlearn,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Jupyter: SiJupyter,
  "C++": SiCplusplus,
  "Power BI": BarChart3,
};

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...techStack, ...techStack];
  return (
    <div className="flex w-max overflow-hidden">
      <div
        className={`flex shrink-0 gap-4 pr-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((tech, i) => {
          const Icon = iconMap[tech];
          return (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-5 py-3 font-accent text-sm text-muted"
            >
              {Icon && <Icon className="text-accent" size={16} />}
              {tech}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStackWall() {
  return (
    <section className="relative overflow-hidden border-y border-border py-16">
      <Container>
        <p className="mb-8 text-center font-accent text-xs uppercase tracking-[0.3em] text-muted">
          Tools &amp; Technologies I Work With
        </p>
      </Container>
      <div
        className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex flex-col gap-4">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
