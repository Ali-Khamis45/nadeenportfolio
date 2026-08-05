import type { Metadata } from "next";
import { Space_Grotesk, Sora, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import ThemeProvider from "@/components/layout/ThemeProvider";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CommandPalette from "@/components/layout/CommandPalette";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://nadeenhany.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Front-End & UI/UX Developer`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Portfolio of Nadeen Hany, a frontend & full-stack web developer and UI/UX specialist building interactive, human-centered web experiences.",
  keywords: [
    "Nadeen Hany",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Angular Developer",
    "UI/UX Designer",
    "Next.js",
    "Portfolio",
    "E-JUST",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Front-End & UI/UX Developer`,
    description:
      "Portfolio of Nadeen Hany, a frontend & full-stack web developer and UI/UX specialist building interactive, human-centered web experiences.",
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/images/nadeen-original.jpg", width: 960, height: 1280, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Front-End & UI/UX Developer`,
    description: "Portfolio of Nadeen Hany, a frontend & full-stack web developer and UI/UX specialist.",
    images: ["/images/nadeen-original.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-on-accent focus:font-accent"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Preloader />
          <SmoothScrollProvider>
            <CustomCursor />
            <CommandPalette />
            {children}
            <ScrollToTop />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
