"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Send, Check, Copy, MapPin, Sparkles, Rocket, FileDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";
import { contactSchema, type ContactFormValues } from "@/lib/schema";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <Doodle icon={Sparkles} className="left-[6%] top-[10%] hidden lg:block" size={22} />
      <Doodle icon={Rocket} className="right-[8%] top-[16%] hidden lg:block" size={26} delay={0.9} />

      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            index="07"
            kicker="Contact"
            title="Let's build something worth shipping."
            description="Have a project, an idea, or just want to say hi? My inbox is open — I usually reply within a day or two."
          />

          <div className="mt-10 flex flex-col gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 text-left transition-colors hover:border-accent/30"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail size={16} />
                </span>
                <span>
                  <span className="block font-accent text-sm text-text">{profile.email}</span>
                  <span className="block text-xs text-muted">Click to copy</span>
                </span>
              </span>
              {copied ? (
                <Check size={16} className="text-accent" />
              ) : (
                <Copy size={16} className="text-muted transition-colors group-hover:text-accent" />
              )}
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 transition-colors hover:border-accent/30"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <SiGithub size={16} />
                </span>
                <span>
                  <span className="block font-accent text-sm text-text">GitHub</span>
                  <span className="block text-xs text-muted">@Nadeeen232</span>
                </span>
              </span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 transition-colors hover:border-accent/30"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <FaLinkedin size={16} />
                </span>
                <span>
                  <span className="block font-accent text-sm text-text">LinkedIn</span>
                  <span className="block text-xs text-muted">Nadeen Hany</span>
                </span>
              </span>
            </a>

            <a
              href={profile.cv}
              download="Nadeen-Hany-CV.pdf"
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 transition-colors hover:border-accent/30"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <FileDown size={16} />
                </span>
                <span>
                  <span className="block font-accent text-sm text-text">Resume / CV</span>
                  <span className="block text-xs text-muted">Download PDF</span>
                </span>
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-5 py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MapPin size={16} />
              </span>
              <span>
                <span className="block font-accent text-sm text-text">{profile.location}</span>
                <span className="block text-xs text-muted">Open to remote &amp; on-site work</span>
              </span>
            </div>
          </div>
        </div>

        <Card className="glass p-6 sm:p-10" glow={false}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  className={inputClasses(!!errors.name)}
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className={inputClasses(!!errors.email)}
                />
              </Field>
            </div>

            <Field label="Subject" error={errors.subject?.message}>
              <input
                {...register("subject")}
                type="text"
                placeholder="What's this about?"
                className={inputClasses(!!errors.subject)}
              />
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell me a little about your project…"
                className={cn(inputClasses(!!errors.message), "resize-none")}
              />
            </Field>

            <Button type="submit" disabled={isSubmitting} className="mt-2 w-full sm:w-auto">
              {isSubmitting ? "Sending…" : "Send Message"}
              <Send size={15} />
            </Button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 font-accent text-sm text-accent"
              >
                <Check size={15} /> Thanks — your message looks great. Connect this form to an
                email service (e.g. Resend, Formspree) to receive it.
              </motion.p>
            )}
          </form>
        </Card>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-accent text-xs uppercase tracking-wider text-muted">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-text placeholder:text-muted/70 transition-colors focus:outline-none",
    hasError ? "border-red-400/50 focus:border-red-400" : "border-border focus:border-accent/50"
  );
}
