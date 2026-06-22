import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// ── Poppins: headings — mirrors Flutter's poppins() TextStyle helper ──────
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// ── Inter: body & UI labels — mirrors Flutter's inter() TextStyle helper ──
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waymeet — Meet Travelers. Share Adventures.",
  description:
    "Waymeet is the social platform built for explorers. Connect with fellow travelers, share stories, and discover your next destination.",
  keywords: ["travel", "social", "meet travelers", "adventure", "explore"],
  openGraph: {
    title: "Waymeet — Meet Travelers. Share Adventures.",
    description:
      "Connect with fellow travelers, share stories, and discover your next destination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
