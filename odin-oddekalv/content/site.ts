// content/site.ts
// ODIN_ site-wide identity and room architecture.

export const site = {
  name: "Odin Oddekalv",
  wordmark: "ODIN ODDEKALV_",
  shortmark: "ODIN_",
  tagline: "A life spent exploring how humans can thrive without destroying the living world we depend on.",
  roles: [
    { label: "Founder", org: "4PLANET", href: "https://4planet.org" },
    { label: "Creative", org: "P4NTHER", href: "https://p4nther.no" },
  ],
  url: "https://oddekalv.org",
  email: "odin@4planet.org",
  links: {
    instagram: "https://instagram.com/4planet____",
    substack: "https://odinoddekalv.substack.com",
    fourplanet: "https://4planet.org",
    p4nther: "https://p4nther.no",
    email: "mailto:odin@4planet.org",
  },
};

// The front door stays intentionally small. Deeper rooms live in the footer and
// in the homepage room index rather than turning the header into a sitemap.
export const nav = [
  { label: "Story", href: "/story" },
  { label: "Field", href: "/field" },
  { label: "Photography", href: "/photography" },
  { label: "Work", href: "/work" },
  { label: "Notes", href: "/journal" },
];

export const navSecondary = [
  { label: "Archive", href: "/archive" },
  { label: "Press", href: "/press" },
  { label: "Origin text", href: "/manifest" },
  { label: "Now", href: "/now" },
  { label: "Contact", href: "/contact" },
];
