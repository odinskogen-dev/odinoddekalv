// content/site.ts
// Site-wide configuration. Edit links and identity here.

export const site = {
  name: "Odin Oddekalv",
  // Trailing underscore wordmark, consistent with the 4PLANET system (OCE4N_, E4RTH_).
  wordmark: "ODIN ODDEKALV_",
  shortmark: "ODIN_",
  tagline: "Exploring better ways for humans and nature to thrive together.",
  roles: [
    { label: "Founder", org: "4PLANET", href: "https://4planet.no" },
    { label: "Creative", org: "P4NTHER", href: "https://p4nther.no" },
  ],
  url: "https://odinoddekalv.com",
  email: "odin@4planet.no",
  // ── External links (replace with real handles) ──────────────────
  links: {
    instagram: "https://instagram.com/4planet____",
    substack: "https://odinoddekalv.substack.com",
    fourplanet: "https://4planet.no",
    p4nther: "https://p4nther.no",
    email: "mailto:odin@4planet.no",
  },
};

// Primary navigation (kept short — editorial restraint).
export const nav = [
  { label: "Journal", href: "/journal" },
  { label: "Projects", href: "/projects" },
  { label: "Photography", href: "/photography" },
  { label: "Story", href: "/story" },
  { label: "Now", href: "/now" },
];

// Secondary nav surfaced in the footer and elsewhere.
export const navSecondary = [
  { label: "Expeditions", href: "/expeditions" },
  { label: "Library", href: "/library" },
  { label: "Contact", href: "/contact" },
];
