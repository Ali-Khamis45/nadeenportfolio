"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <a href="#home" aria-label="Nadeen Hany — home">
              <Logo size={34} />
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted">
              AI engineer building deep learning, computer vision and data-driven products,
              from Alexandria, Egypt.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <SiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="h-px w-full guide-line" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-1 font-accent text-xs text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
