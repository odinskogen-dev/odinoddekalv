// content/site.ts
// Site-wide configuration. Edit links and identity here.

export const site = {
  name: "Odin Oddekalv",
  wordmark: "ODIN ODDEKALV_",
  shortmark: "ODIN_",
  tagline: "Exploring better ways for humans and nature to thrive together.",
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

export const nav = [
  { label: "Story", href: "/story" },
  { label: "Manifest", href: "/manifest" },
  { label: "Work", href: "/projects" },
  { label: "Notes", href: "/journal" },
  { label: "Now", href: "/now" },
];

// Unverified / placeholder-led archive routes stay out of public navigation
// until their real source material is installed and QA'd.
export const navSecondary = [
  { label: "Contact", href: "/contact" },
];
