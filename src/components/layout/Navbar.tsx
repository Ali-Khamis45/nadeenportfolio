"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Command as CommandIcon, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ scaleX: scrollYProgress }}
      />
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled && "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          )}
        >
          <a href="#home" aria-label="Nadeen Hany — home">
            <Logo size={30} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 font-accent text-sm text-muted transition-colors hover:text-accent xl:px-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => {
                const ev = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                document.dispatchEvent(ev);
              }}
              className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-accent text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent xl:flex"
              aria-label="Open command palette"
            >
              <CommandIcon size={13} />K
            </button>
            <ThemeToggle />
            <Button href={profile.cv} variant="secondary" size="sm" download="Nadeen-Hany-CV.pdf">
              <Download size={14} />
              CV
            </Button>
            <Button href="#contact" size="sm">
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mx-4 mt-2 rounded-2xl border border-border bg-surface/95 p-4 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-accent text-sm text-text/90 transition-colors hover:bg-accent/10 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={profile.cv}
            variant="secondary"
            className="mt-3 w-full"
            download="Nadeen-Hany-CV.pdf"
            onClick={() => setOpen(false)}
          >
            <Download size={16} />
            Download CV
          </Button>
          <Button href="#contact" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Contact Me
          </Button>
        </motion.div>
      )}
    </header>
  );
}
