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
  title: "Waymeet — Go somewhere. Find your people.",
  description:
    "Waymeet brings travelers together through shared stories, nearby discovery, chat, and profiles. See actual screens from the Android app.",
  keywords: ["travel", "social", "meet travelers", "adventure", "explore"],
  openGraph: {
    title: "Waymeet — Go somewhere. Find your people.",
    description:
      "Share travel stories, discover people nearby, and keep the conversation going.",
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
