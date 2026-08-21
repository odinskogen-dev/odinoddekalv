import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap", weight: ["400", "500", "600", "700"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Odin Oddekalv — Exploring better ways for humans and nature to thrive together", template: "%s — Odin Oddekalv" },
  description: "Odin Oddekalv is a Norwegian founder, storyteller and builder working across ecological intelligence, culture and practical systems for a living world.",
  keywords: ["Odin Oddekalv", "4PLANET", "P4NTHER", "nature", "ecology", "photography", "systems", "Norway"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: "Odin Oddekalv — Exploring better ways for humans and nature to thrive together",
    description: "A Norwegian founder, storyteller and builder working across ecological intelligence, culture and practical systems for a living world.",
    siteName: site.name,
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: site.name }],
    locale: "en",
  },
  twitter: { card: "summary_large_image", title: "Odin Oddekalv", description: "Exploring better ways for humans and nature to thrive together.", images: ["/images/og-image.svg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${dmSans.variable} ${plexMono.variable}`}><body className="min-h-screen"><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
