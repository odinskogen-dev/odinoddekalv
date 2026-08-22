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
  title: { default: "Odin Oddekalv — The living world came first", template: "%s — Odin Oddekalv" },
  description: "Odin Oddekalv is a Norwegian founder, photographer and storyteller working across nature, culture and systems — and building 4PLANET in response.",
  keywords: ["Odin Oddekalv", "4PLANET", "P4NTHER", "nature", "ecology", "photography", "field", "Norway"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: "Odin Oddekalv — The living world came first",
    description: "A life spent exploring how humans can thrive without destroying the living world we depend on.",
    siteName: site.name,
    images: [{ url: "/images/odin/faroe-portrait-02.jpg", alt: "Odin Oddekalv in the field" }],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odin Oddekalv — The living world came first",
    description: "A life spent exploring how humans can thrive without destroying the living world we depend on.",
    images: ["/images/odin/faroe-portrait-02.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${dmSans.variable} ${plexMono.variable}`}><body className="min-h-screen"><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
