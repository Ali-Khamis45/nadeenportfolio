"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, FolderKanban, Sparkles, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import TiltCard from "@/components/ui/TiltCard";
import Doodle from "@/components/ui/Doodle";
import { projects, projectTags, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectTags)[number]>("All");
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const filteredRest = rest.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <Doodle icon={FolderKanban} className="left-[3%] top-[14%] hidden lg:block" size={26} />

      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            kicker="Featured Work"
            title="A few projects worth a closer look."
            description="Real builds from GitHub: deep learning for medical imaging, data science at Samsung Innovation Campus, and the full-stack apps that ship them."
          />

          <div className="flex flex-wrap gap-2">
            {projectTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                className={cn(
                  "rounded-full border px-4 py-2 font-accent text-xs transition-colors",
                  filter === tag
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted hover:border-accent/30 hover:text-text"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {featured && (filter === "All" || featured.tags.includes(filter)) && (
          <div className="mt-12">
            <FeaturedProjectCard project={featured} />
          </div>
        )}

        <AnimatePresence mode="popLayout">
          <motion.div layout className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {filteredRest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard max={4}>
      <Card className="grid gap-0 overflow-hidden p-0 lg:grid-cols-2" glow>
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-bg/70 px-3 py-1.5 font-accent text-[11px] uppercase tracking-wider text-accent backdrop-blur-sm">
            <Sparkles size={12} />
            Featured AI Project
          </span>
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-10">
          <h3 className="font-display text-2xl font-semibold text-text">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.goal}</p>

          <ul className="mt-5 flex flex-col gap-2.5">
            {project.contributions.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-text/85">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-4 border-t border-border pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 font-accent text-sm text-accent transition-colors hover:bg-accent/10"
              >
                <SiGithub size={15} /> View Repository
              </a>
            )}
          </div>
        </div>
      </Card>
    </TiltCard>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard max={6}>
        <Card className="group flex h-full flex-col overflow-hidden p-0" glow>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 rounded-full border border-border bg-bg/70 px-2.5 py-1 font-accent text-[10px] uppercase tracking-wider text-muted backdrop-blur-sm">
              {project.tagline}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-lg font-semibold text-text">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.goal}</p>

            <ul className="mt-4 flex flex-col gap-1.5">
              {project.contributions.slice(0, 2).map((point) => (
                <li key={point} className="flex items-start gap-2 text-xs text-text/75">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mb-6 mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-accent text-xs text-accent transition-colors hover:opacity-80"
                >
                  <SiGithub size={13} /> View Repository
                </a>
              )}
              {project.linkUrl && (
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-accent text-xs text-accent transition-colors hover:opacity-80"
                >
                  <ExternalLink size={13} /> {project.linkLabel ?? "Learn more"}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-accent text-xs text-accent transition-colors hover:opacity-80"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </Card>
      </TiltCard>
    </motion.div>
  );
}
