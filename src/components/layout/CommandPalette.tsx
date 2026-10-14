"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  Sparkles,
  FolderGit2,
  Briefcase,
  Layers,
  MessageSquareQuote,
  Mail,
  Download,
  Search,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { navLinks, profile } from "@/lib/data";

const iconMap: Record<string, typeof Home> = {
  "#home": Home,
  "#about": User,
  "#skills": Sparkles,
  "#projects": FolderGit2,
  "#experience": Briefcase,
  "#services": Layers,
  "#testimonials": MessageSquareQuote,
  "#contact": Mail,
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-start justify-center bg-bg/70 backdrop-blur-sm px-4 pt-[14vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <Command label="Command palette" className="flex flex-col">
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <Search size={16} className="text-muted" />
                <Command.Input
                  autoFocus
                  placeholder="Jump to a section…"
                  className="w-full bg-transparent py-1 text-sm text-text placeholder:text-muted focus:outline-none"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">
                  Esc
                </kbd>
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
                  No results found.
                </Command.Empty>
                <Command.Group heading="Navigate" className="px-2 pt-2 pb-1 text-[11px] uppercase tracking-wider text-muted [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-2">
                  {navLinks.map((link) => {
                    const Icon = iconMap[link.href] ?? Home;
                    return (
                      <Command.Item
                        key={link.href}
                        onSelect={() => go(link.href)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text/90 aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer"
                      >
                        <Icon size={16} />
                        {link.label}
                      </Command.Item>
                    );
                  })}
                </Command.Group>
                <Command.Group heading="Actions" className="px-2 pt-2 pb-1 text-[11px] uppercase tracking-wider text-muted [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-2">
                  <Command.Item
                    onSelect={() => {
                      window.open(profile.github, "_blank");
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text/90 aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer"
                  >
                    <SiGithub size={16} />
                    Open GitHub profile
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      const link = document.createElement("a");
                      link.href = "/cv/nadeen-hany-cv.pdf";
                      link.download = "Nadeen-Hany-CV.pdf";
                      link.click();
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text/90 aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer"
                  >
                    <Download size={16} />
                    Download CV
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.location.href = `mailto:${profile.email}`;
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text/90 aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer"
                  >
                    <Mail size={16} />
                    Send an email
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
