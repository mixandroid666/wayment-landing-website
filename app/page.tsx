"use client";

import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS (sourced from app_theme.dart)
//
//  Primary   #006994  Deep Ocean Blue   → wm-primary
//  Secondary #69C8DE  Sky Blue          → wm-secondary
//  Accent    #ECA72C  Golden Sand       → wm-accent
//  Surface   #F8FAFC                   → wm-surface
//  Card      #FFFFFF                   → wm-card
//  Text      #0D2233                   → wm-text
//  Muted     #5A7A8A                   → wm-muted
//  Border    #CFE8F0                   → wm-border
//
//  Border-radius: 14px (buttons/inputs/cards) → rounded-wm
//                 22px (hero images)          → rounded-wm-lg
//  Button height: 56px                        → h-wm-btn
// ─────────────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-wm-surface text-wm-text">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#preview",  label: "Preview"  },
    { href: "#download", label: "Download" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wm-card/90 backdrop-blur-md border-b border-wm-border shadow-wm-card"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-wm bg-wm-accent-gradient shadow-sm">
            <CompassIcon className="h-5 w-5 text-white" />
          </span>
          <span className="font-poppins text-xl font-bold text-wm-primary">
            Waymeet
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-inter text-sm font-medium text-wm-muted transition-colors hover:text-wm-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#download"
          className="hidden h-10 items-center gap-2 rounded-wm bg-wm-primary px-5 font-inter text-sm font-semibold text-white shadow-none transition-all hover:bg-[#005578] hover:shadow-wm-hover md:flex"
        >
          <DownloadIcon className="h-4 w-4" />
          Get the App
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-wm text-wm-primary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-wm-border bg-wm-card px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-inter text-base font-medium text-wm-text hover:text-wm-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-wm-btn w-full items-center justify-center gap-2 rounded-wm bg-wm-primary font-inter text-sm font-semibold text-white"
          >
            <DownloadIcon className="h-4 w-4" />
            Get the App
          </a>
        </div>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// Mirrors LoginScreen gradient + typography scale
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-wm-hero-gradient pt-24 pb-16">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-32 h-[480px] w-[480px] rounded-full bg-wm-secondary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-wm-primary/8 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-12 lg:py-20">
        {/* ── Text column ────────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge — mimics a small secondary-tinted chip */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-wm-border bg-wm-card px-4 py-1.5 font-inter text-xs font-semibold text-wm-primary shadow-wm-card">
            <span className="h-2 w-2 animate-pulse rounded-full bg-wm-secondary" />
            Travel Social Platform
          </span>

          {/* Headline — displayLarge: Poppins w700 40px lh 1.2 */}
          <h1 className="font-poppins text-[2.6rem] font-bold leading-[1.2] tracking-tight text-wm-text sm:text-5xl lg:text-[3.25rem]">
            Meet Travelers.{" "}
            <span className="bg-wm-accent-gradient bg-clip-text text-transparent">
              Share Adventures.
            </span>{" "}
            Explore Together.
          </h1>

          {/* Sub — bodyLarge: Inter w400 16px lh 1.6 */}
          <p className="mt-6 max-w-[480px] font-inter text-base leading-relaxed text-wm-muted">
            Waymeet is the social platform built for explorers — connect with
            fellow travelers, share your journey, and discover hidden gems
            anywhere in the world.
          </p>

          {/* CTAs — FilledButton style: h 56px, rounded 14px */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#download"
              className="inline-flex h-wm-btn items-center justify-center gap-2.5 rounded-wm bg-wm-primary px-7 font-inter text-[15px] font-semibold text-white shadow-none transition-all hover:bg-[#005578] hover:shadow-wm-hover"
            >
              <AppleIcon className="h-5 w-5" />
              Download on iOS
            </a>
            <a
              href="#download"
              className="inline-flex h-wm-btn items-center justify-center gap-2.5 rounded-wm border border-wm-border bg-wm-card px-7 font-inter text-[15px] font-semibold text-wm-primary shadow-wm-card transition-all hover:border-wm-primary hover:shadow-wm-hover"
            >
              <AndroidIcon className="h-5 w-5" />
              Get on Android
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2.5">
              {["#69C8DE", "#006994", "#ECA72C", "#5A7A8A"].map((c, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-wm-card"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="font-inter text-sm text-wm-muted">
              <span className="font-semibold text-wm-text">10,000+</span>{" "}
              travelers already exploring
            </p>
          </div>
        </div>

        {/* ── Phone mockup column ─────────────────────────────────────────── */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="animate-float">
            <PhoneMockup variant="feed" />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 56L60 46.7C120 37.3 240 18.7 360 14C480 9.3 600 18.7 720 28C840 37.3 960 46.7 1080 46.7C1200 46.7 1320 37.3 1380 32.7L1440 28V56H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURES SECTION
// 3-card grid — each card mirrors Flutter card style:
//   bg white, border #CFE8F0, rounded 14px, shadow-wm-card
// ─────────────────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <FeedIcon className="h-6 w-6 text-wm-primary" />,
    iconBg: "bg-wm-primary/10",
    title: "Share Your Journey",
    description:
      "Post travel stories with photos, videos, and geo-tagged locations. Every adventure you share inspires someone else's next trip.",
    highlights: ["Photo & video posts", "Location tags", "Travel stories"],
    accent: "#006994",
  },
  {
    icon: <ChatIcon className="h-6 w-6 text-wm-secondary" />,
    iconBg: "bg-wm-secondary/15",
    title: "Connect in Real-Time",
    description:
      "Instant messaging with fellow travelers. Plan meetups, exchange local tips, and build real connections across borders.",
    highlights: ["Real-time chat", "Presence indicators", "Push notifications"],
    accent: "#69C8DE",
  },
  {
    icon: <MapPinIcon className="h-6 w-6 text-wm-accent" />,
    iconBg: "bg-wm-accent/15",
    title: "Discover Places",
    description:
      "Browse community location pins, find hidden gems, and see exactly where the most adventurous travelers are headed next.",
    highlights: ["Interactive map", "Community pins", "Local discoveries"],
    accent: "#ECA72C",
  },
] as const;

function FeaturesSection() {
  return (
    <section id="features" className="bg-wm-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-inter text-sm font-semibold uppercase tracking-widest text-wm-secondary">
            Why Waymeet
          </p>
          <h2 className="font-poppins text-3xl font-bold text-wm-text sm:text-4xl">
            Everything you need{" "}
            <span className="text-wm-primary">on your journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-inter text-base text-wm-muted">
            Built for real explorers — every feature is designed around how
            travelers actually connect, share, and discover.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
}: {
  feature: (typeof FEATURES)[number];
}) {
  return (
    <div className="group flex flex-col gap-5 rounded-wm border border-wm-border bg-wm-card p-7 shadow-wm-card transition-all duration-300 hover:-translate-y-1 hover:shadow-wm-hover">
      {/* Icon pill */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-wm ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
      >
        {feature.icon}
      </div>

      {/* Title — titleLarge: Poppins w600 18px */}
      <h3 className="font-poppins text-lg font-semibold text-wm-text">
        {feature.title}
      </h3>

      {/* Description — bodyMedium: Inter w400 14px lh 1.5 */}
      <p className="flex-1 font-inter text-sm leading-relaxed text-wm-muted">
        {feature.description}
      </p>

      {/* Highlight list */}
      <ul className="flex flex-col gap-2">
        {feature.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ background: feature.accent }}
            />
            <span className="font-inter text-xs font-medium text-wm-muted">
              {h}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PREVIEW SECTION
// Split layout: descriptive text left, second phone mockup right
// ─────────────────────────────────────────────────────────────────────────────
function PreviewSection() {
  return (
    <section
      id="preview"
      className="overflow-hidden bg-wm-hero-gradient py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20">
        {/* ── Phone mockup ─────────────────────────────────────────────── */}
        <div className="flex flex-1 justify-center">
          <div className="animate-float" style={{ animationDelay: "1.5s" }}>
            <PhoneMockup variant="chat" />
          </div>
        </div>

        {/* ── Text column ─────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col gap-6">
          <p className="font-inter text-sm font-semibold uppercase tracking-widest text-wm-secondary">
            App Preview
          </p>
          <h2 className="font-poppins text-3xl font-bold leading-tight text-wm-text sm:text-4xl">
            Your travel community{" "}
            <span className="text-wm-primary">in your pocket</span>
          </h2>
          <p className="font-inter text-base leading-relaxed text-wm-muted">
            A beautifully crafted app that mirrors how you actually travel —
            switch between your feed, map, and chats with a single tap.
          </p>

          {/* Feature checklist */}
          <ul className="flex flex-col gap-4">
            {[
              {
                title: "Instant-load feed",
                desc: "Stories and posts load with skeleton previews so you're never staring at a blank screen.",
              },
              {
                title: "Live chat & presence",
                desc: "See when fellow travelers are online and chat in real-time over a persistent WebSocket connection.",
              },
              {
                title: "Offline-aware auth",
                desc: "Session tokens are securely cached — you stay logged in even with an unstable connection.",
              },
              {
                title: "Light & dark themes",
                desc: "Ocean Breeze palette adapts seamlessly to your device's system theme.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-wm-sm bg-wm-primary/10">
                  <CheckIcon className="h-3.5 w-3.5 text-wm-primary" />
                </span>
                <div>
                  <p className="font-inter text-sm font-semibold text-wm-text">
                    {item.title}
                  </p>
                  <p className="font-inter text-sm leading-relaxed text-wm-muted">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Inline CTA */}
          <a
            href="#download"
            className="mt-2 inline-flex h-wm-btn w-fit items-center gap-2.5 rounded-wm bg-wm-primary px-7 font-inter text-sm font-semibold text-white transition-all hover:bg-[#005578] hover:shadow-wm-hover"
          >
            Download Free
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA SECTION
// Dark ocean gradient — mirrors dark-surface palette (#0A1929 → #0F2537)
// ─────────────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="download" className="bg-wm-dark-gradient py-28">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-wm-secondary/5 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 text-center">
        <span className="rounded-full border border-wm-dark-border px-4 py-1.5 font-inter text-xs font-semibold text-wm-dark-primary">
          Available Now
        </span>

        <h2 className="font-poppins text-3xl font-bold leading-tight text-wm-dark-text sm:text-4xl">
          Ready to start your{" "}
          <span className="text-wm-dark-primary">next adventure?</span>
        </h2>

        <p className="font-inter text-base leading-relaxed text-wm-dark-muted">
          Download Waymeet for free and join a growing community of explorers.
          Your next travel story starts here.
        </p>

        {/* Store buttons — outlined on dark, mirroring FilledButton + border style */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <StoreButton
            icon={<AppleIcon className="h-6 w-6" />}
            line1="Download on the"
            line2="App Store"
          />
          <StoreButton
            icon={<AndroidIcon className="h-6 w-6" />}
            line1="Get it on"
            line2="Google Play"
          />
        </div>

        {/* Trust line */}
        <p className="font-inter text-xs text-wm-dark-muted">
          Free download · No credit card required · iOS 16+ and Android 8+
        </p>
      </div>
    </section>
  );
}

function StoreButton({
  icon,
  line1,
  line2,
}: {
  icon: React.ReactNode;
  line1: string;
  line2: string;
}) {
  return (
    <button className="flex h-wm-btn min-w-[180px] items-center gap-3.5 rounded-wm border border-wm-dark-border bg-wm-dark-card px-6 text-left transition-all hover:border-wm-dark-primary hover:shadow-wm-hover">
      <span className="text-wm-dark-text">{icon}</span>
      <span>
        <span className="block font-inter text-[10px] leading-none text-wm-dark-muted">
          {line1}
        </span>
        <span className="block font-inter text-[15px] font-semibold leading-tight text-wm-dark-text">
          {line2}
        </span>
      </span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    {
      heading: "Product",
      links: ["Features", "Preview", "Download", "Changelog"],
    },
    {
      heading: "Company",
      links: ["About", "Blog", "Careers", "Press kit"],
    },
    {
      heading: "Support",
      links: ["Help center", "Community", "Privacy policy", "Terms of service"],
    },
  ];

  return (
    <footer className="border-t border-wm-border bg-wm-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-wm bg-wm-accent-gradient">
                <CompassIcon className="h-5 w-5 text-white" />
              </span>
              <span className="font-poppins text-lg font-bold text-wm-primary">
                Waymeet
              </span>
            </a>
            <p className="font-inter text-sm leading-relaxed text-wm-muted">
              The social platform built for explorers. Meet travelers, share
              adventures, explore together.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: "Twitter/X", icon: <XSocialIcon className="h-4 w-4" /> },
                { label: "Instagram", icon: <InstagramIcon className="h-4 w-4" /> },
                { label: "TikTok",    icon: <TiktokIcon className="h-4 w-4" /> },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-wm border border-wm-border text-wm-muted transition-colors hover:border-wm-primary hover:text-wm-primary"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 font-poppins text-sm font-semibold text-wm-text">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-inter text-sm text-wm-muted transition-colors hover:text-wm-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-wm-border pt-8 sm:flex-row">
          <p className="font-inter text-xs text-wm-muted">
            © {new Date().getFullYear()} Waymeet. All rights reserved.
          </p>
          <p className="font-inter text-xs text-wm-muted">
            Built with Flutter & Next.js · Ocean Breeze Design System
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PHONE MOCKUP
// CSS-only device frame rendering a pixel-faithful mock of the app UI.
// Border-radius 44px matches Flutter ClipRRect(borderRadius: 22) × 2.
// Inner screen uses the exact wm-surface (#F8FAFC) background.
// ─────────────────────────────────────────────────────────────────────────────
function PhoneMockup({ variant }: { variant: "feed" | "chat" }) {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="phone-notch" />

        {/* Status bar */}
        <div className="flex justify-between px-7 pt-3 pb-1 text-[9px] font-medium text-wm-text/60">
          <span>9:41</span>
          <div className="flex items-center gap-1 text-[8px]">
            <span>▲▲▲</span>
            <span>WiFi</span>
            <span>🔋</span>
          </div>
        </div>

        {variant === "feed" ? <FeedScreenMock /> : <ChatScreenMock />}

        {/* Bottom nav — mirrors HomeScreen BottomNavigationBar (5 items) */}
        <div className="mt-auto flex justify-around border-t border-wm-border bg-wm-card py-2.5">
          {[
            { icon: <HomeNavIcon />,     active: variant === "feed" },
            { icon: <MapNavIcon />,      active: false },
            { icon: <ChatNavIcon />,     active: variant === "chat" },
            { icon: <PersonNavIcon />,   active: false },
            { icon: <SettingsNavIcon />, active: false },
          ].map(({ icon, active }, i) => (
            <span
              key={i}
              className={`flex h-6 w-6 items-center justify-center ${
                active ? "text-wm-primary" : "text-wm-muted/50"
              }`}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Feed screen mock ────────────────────────────────────────────────────── */
function FeedScreenMock() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden px-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <span className="font-poppins text-sm font-bold text-wm-primary">
          Waymeet
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-wm-sm bg-wm-primary/10">
          <BellIcon className="h-3.5 w-3.5 text-wm-primary" />
        </div>
      </div>

      {/* Stories strip */}
      <div className="mb-3 flex gap-2 overflow-hidden">
        {[
          { color: "#006994", name: "You" },
          { color: "#69C8DE", name: "Aria" },
          { color: "#ECA72C", name: "Luca" },
          { color: "#5A7A8A", name: "Maya" },
        ].map(({ color, name }) => (
          <div key={name} className="flex flex-col items-center gap-1">
            <div
              className="h-10 w-10 rounded-full border-2 border-wm-primary/70"
              style={{ background: `${color}30` }}
            />
            <span style={{ fontSize: 7 }} className="text-wm-muted">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Post card 1 — mirrors PostCard widget */}
      <MockPostCard
        avatarColor="#69C8DE"
        name="Aria Santos"
        time="2 h ago"
        location="Santorini, GR"
        imgGradient="from-[#006994]/30 to-[#69C8DE]/50"
        likes="1.2k"
        comments="48"
        liked
      />

      {/* Post card 2 */}
      <MockPostCard
        avatarColor="#ECA72C"
        name="Luca Rossi"
        time="5 h ago"
        location="Chiang Mai, TH"
        imgGradient="from-[#ECA72C]/20 to-[#006994]/30"
        likes="876"
        comments="32"
        liked={false}
      />
    </div>
  );
}

function MockPostCard({
  avatarColor,
  name,
  time,
  location,
  imgGradient,
  likes,
  comments,
  liked,
}: {
  avatarColor: string;
  name: string;
  time: string;
  location: string;
  imgGradient: string;
  likes: string;
  comments: string;
  liked: boolean;
}) {
  return (
    <div className="mb-2.5 border-b border-wm-border pb-2.5">
      {/* Author row */}
      <div className="mb-2 flex items-center gap-2">
        <div
          className="h-7 w-7 rounded-full"
          style={{ background: `${avatarColor}40` }}
        />
        <div>
          <p style={{ fontSize: 9 }} className="font-semibold text-wm-text">
            {name}
          </p>
          <div className="flex items-center gap-1">
            <span style={{ fontSize: 7 }} className="text-wm-muted/70">
              {time}
            </span>
            <span style={{ fontSize: 7 }} className="text-wm-muted/50">
              ·
            </span>
            <span style={{ fontSize: 7 }} className="text-wm-secondary font-medium">
              {location}
            </span>
          </div>
        </div>
      </div>

      {/* Image placeholder */}
      <div
        className={`mb-2 h-20 w-full rounded-[8px] bg-gradient-to-br ${imgGradient} flex items-center justify-center`}
      >
        <MountainSmIcon className="h-6 w-6 text-wm-primary/40" />
      </div>

      {/* Body text */}
      <div className="mb-1.5 space-y-1">
        <div className="h-1.5 w-full rounded-full bg-wm-text/10" />
        <div className="h-1.5 w-3/4 rounded-full bg-wm-text/10" />
      </div>

      {/* Interactions */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span style={{ fontSize: 8 }} className={liked ? "text-red-400" : "text-wm-primary"}>
            {liked ? "♥" : "♡"}
          </span>
          <span style={{ fontSize: 7 }} className="text-wm-muted">{likes}</span>
        </span>
        <span className="flex items-center gap-1">
          <span style={{ fontSize: 8 }} className="text-wm-primary">💬</span>
          <span style={{ fontSize: 7 }} className="text-wm-muted">{comments}</span>
        </span>
      </div>
    </div>
  );
}

/* ── Chat screen mock ────────────────────────────────────────────────────── */
function ChatScreenMock() {
  const convos = [
    { color: "#69C8DE", name: "Aria Santos", msg: "Are you in Chiang Mai yet?", time: "2m", unread: 2 },
    { color: "#ECA72C", name: "Luca Rossi",  msg: "The sunset here is amazing!",   time: "1h", unread: 0 },
    { color: "#006994", name: "Maya Patel",  msg: "Let's meet at the night market",  time: "3h", unread: 1 },
    { color: "#5A7A8A", name: "Tom Walker",  msg: "Thanks for the recommendation",  time: "1d", unread: 0 },
  ];

  return (
    <div className="flex flex-1 flex-col overflow-hidden px-3">
      <div className="pb-2">
        <span className="font-poppins text-sm font-bold text-wm-primary">
          Messages
        </span>
      </div>

      {/* Search bar — mirrors InputDecoration rounded 14px */}
      <div className="mb-3 flex h-7 items-center gap-2 rounded-[10px] bg-wm-border/50 px-3">
        <SearchIcon className="h-3 w-3 text-wm-muted/60" />
        <span style={{ fontSize: 9 }} className="text-wm-muted/50">
          Search conversations
        </span>
      </div>

      {/* Conversation list */}
      {convos.map((c) => (
        <div key={c.name} className="flex items-center gap-2.5 border-b border-wm-border py-2">
          <div className="relative">
            <div
              className="h-8 w-8 rounded-full"
              style={{ background: `${c.color}35` }}
            />
            {/* Online indicator */}
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-wm-card bg-green-400" />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 9 }} className="font-semibold text-wm-text">
                {c.name}
              </span>
              <span style={{ fontSize: 7 }} className="text-wm-muted/60">
                {c.time}
              </span>
            </div>
            <span
              style={{ fontSize: 8 }}
              className="block truncate text-wm-muted/70"
            >
              {c.msg}
            </span>
          </div>
          {c.unread > 0 && (
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full bg-wm-primary font-inter font-semibold text-white"
              style={{ fontSize: 7 }}
            >
              {c.unread}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INLINE SVG ICONS
// Keeping icons inline avoids an extra icon-library dependency.
// ─────────────────────────────────────────────────────────────────────────────
type IconProps = { className?: string };

const CompassIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={12} cy={12} r={10} />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const DownloadIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1={12} y1={15} x2={12} y2={3} />
  </svg>
);

const ArrowRightIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const MenuIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1={3} y1={6}  x2={21} y2={6}  /><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={18} x2={21} y2={18} />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} />
  </svg>
);

const AppleIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const AndroidIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
  </svg>
);

function FeedIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x={3} y={3} width={18} height={18} rx={2} /><path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function ChatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} />
    </svg>
  );
}

const BellIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const SearchIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2={16.65} y2={16.65} />
  </svg>
);

const MountainSmIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

// Bottom nav icons
const HomeNavIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);
const MapNavIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);
const ChatNavIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);
const PersonNavIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);
const SettingsNavIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

// Social / footer icons
const XSocialIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
  </svg>
);

const TiktokIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.8a8.27 8.27 0 0 0 4.83 1.55V6.9a4.85 4.85 0 0 1-1.06-.21z"/>
  </svg>
);
