"use client";

import Image from "next/image";
import { GraduationCap, Sparkles, Lightbulb, Coffee } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import Doodle from "@/components/ui/Doodle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile } from "@/lib/data";

const stats = [
  { value: 6, suffix: "+", label: "Projects Built" },
  { value: 40, suffix: "+", label: "Technologies Used" },
  { value: 3, suffix: "+", label: "Years Learning & Building" },
];

const focusAreas = [
  "Human-Centered Design",
  "Front-End Architecture",
  "Artificial Intelligence",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            index="01"
            kicker="About Me"
            title="Building interfaces people actually enjoy using."
          />

          <FadeIn delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {profile.about}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <Badge key={area}>{area}</Badge>
            ))}
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-text sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <Doodle icon={Sparkles} className="-left-6 -top-6 hidden sm:block" size={22} delay={0.3} />
          <Doodle icon={Lightbulb} className="-right-4 top-10 hidden sm:block" size={24} delay={1} />
          <Doodle icon={Coffee} className="-left-8 bottom-16 hidden sm:block" size={22} delay={0.7} />

          <FadeIn y={30}>
            <Card className="overflow-hidden p-3" glow>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-surface-2">
                <Image
                  src="/images/nadeen-original.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-bg/60 px-3 py-2.5">
                <GraduationCap size={16} className="text-accent shrink-0" />
                <span className="font-accent text-xs text-text/90">
                  Computer Engineering @ E-JUST
                </span>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.15} y={20} className="mt-4">
            <Card className="p-4" glow={false}>
              <p className="font-accent text-xs uppercase tracking-wider text-accent">
                Currently
              </p>
              <p className="mt-1.5 text-sm text-text/90">
                AI Trainee @ Samsung Innovation Campus
              </p>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
