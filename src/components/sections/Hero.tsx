"use client";

import { Download, FolderGit2, Mail, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import {
  Sparkles as SparkleIcon,
  Code2,
  Braces,
  Cpu,
  Rocket,
  GitBranch,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import Doodle from "@/components/ui/Doodle";
import HeroVisual from "@/components/three/HeroVisual";
import { useTypewriter } from "@/hooks/useTypewriter";
import { profile } from "@/lib/data";

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(0,200,215,0.12), transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(110,231,249,0.08), transparent 60%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px guide-line lg:block" />

      <Doodle icon={SparkleIcon} className="left-[6%] top-[18%] hidden md:block" size={22} delay={0.2} />
      <Doodle icon={Code2} className="right-[8%] top-[22%] hidden md:block" size={26} delay={1} />
      <Doodle icon={Braces} className="left-[10%] bottom-[18%] hidden lg:block" size={30} delay={0.6} />
      <Doodle icon={Cpu} className="right-[4%] bottom-[28%] hidden lg:block" size={24} delay={1.4} />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="font-accent text-sm uppercase tracking-[0.3em] text-accent">
            Hello, I&apos;m
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <div className="mt-5 flex h-9 items-center font-accent text-xl text-muted sm:text-2xl">
            <span className="text-gradient">{role}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-blink bg-accent" />
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {profile.subtitle}. I build beautiful, responsive interfaces and love bringing
            AI and modern web tooling into the products I ship.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects" magnetic>
              <FolderGit2 size={16} />
              View Projects
            </Button>
            <Button href="/cv/nadeen-hany-cv.pdf" variant="secondary" download magnetic>
              <Download size={16} />
              Download CV
            </Button>
            <Button href="#contact" variant="ghost" magnetic>
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <Magnetic strength={0.4}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <SiGithub size={17} />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <FaLinkedin size={17} />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Mail size={17} />
              </a>
            </Magnetic>
            <span className="font-accent text-xs text-muted">
              Based in {profile.location}
            </span>
          </div>
        </div>

        <div className="relative">
          <Doodle icon={Rocket} className="-left-4 -top-6 hidden lg:block" size={26} delay={0.4} opacity="text-accent/25" />
          <Doodle icon={GitBranch} className="-right-2 bottom-8 hidden lg:block" size={24} delay={1.1} opacity="text-accent/25" />
          <HeroVisual />
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-muted">
        <span className="font-accent text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce text-accent" />
      </div>
    </section>
  );
}
