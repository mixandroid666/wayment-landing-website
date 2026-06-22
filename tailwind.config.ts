import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Waymeet Design System (mirrored from app_theme.dart) ──────────────
      // Ocean Breeze palette: Deep Ocean Blue + Sky Blue + Golden Sand
      colors: {
        wm: {
          // Light mode tokens
          primary:   "#006994",   // Deep Ocean Blue
          secondary: "#69C8DE",   // Sky Blue
          accent:    "#ECA72C",   // Golden Sand
          surface:   "#F8FAFC",   // Page background
          card:      "#FFFFFF",
          text:      "#0D2233",
          muted:     "#5A7A8A",
          border:    "#CFE8F0",
          // Dark mode tokens
          "dark-primary":   "#5BD4EC",
          "dark-secondary": "#006994",
          "dark-surface":   "#0A1929",
          "dark-card":      "#0F2537",
          "dark-text":      "#E4F2F8",
          "dark-muted":     "#7BA8BC",
          "dark-border":    "#1E3D52",
        },
      },
      // ── Typography: Poppins (headings) + Inter (body) ────────────────────
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter:   ["var(--font-inter)",   "sans-serif"],
      },
      // ── Border radius: 14 px inputs/buttons/cards, 22 px hero images ─────
      borderRadius: {
        "wm-sm":  "8px",
        "wm":     "14px",   // FilledButton, InputDecoration, social button
        "wm-lg":  "22px",   // login hero image (ClipRRect radius 22)
        "wm-xl":  "28px",   // post media cards
        "wm-2xl": "44px",   // phone bezel
      },
      // ── Shadows matching Flutter's elevation = 0 cards + subtle depth ────
      boxShadow: {
        "wm-card":  "0 1px 4px 0 rgba(0,105,148,0.06), 0 4px 16px 0 rgba(0,105,148,0.06)",
        "wm-hover": "0 4px 24px 0 rgba(0,105,148,0.14)",
        "wm-phone": "0 32px 64px -12px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.08)",
      },
      // ── Button height mirrors FilledButton minimumSize: Size.fromHeight(56) ─
      height: {
        "wm-btn": "56px",
      },
      backgroundImage: {
        // Mirrors the LoginScreen gradient:
        // secondary/12% → surface → primary/12%
        "wm-hero": "linear-gradient(180deg, rgba(105,200,222,0.18) 0%, #F8FAFC 45%, rgba(0,105,148,0.10) 100%)",
        "wm-dark": "linear-gradient(180deg, #0A1929 0%, #0F2537 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
