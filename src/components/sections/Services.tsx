"use client";

import {
  Brain,
  ScanEye,
  BarChart3,
  Bot,
  Layers,
  PenTool,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  ScanEye,
  BarChart3,
  Bot,
  Layers,
  PenTool,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <Container>
        <SectionHeading
          index="05"
          kicker="Services"
          title="From raw data to deployed AI products."
          description="AI and machine learning first, backed by the full-stack skills to put models in front of real users."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <FadeIn key={service.id} delay={Math.min(i * 0.05, 0.3)}>
                <Card className="group h-full p-6" glow>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
