// content/projects.ts
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "4PLANET",
    slug: "4planet",
    status: "DEVELOPING",
    description: "A system for making ecological action easier to understand and support.",
    role: "Founder",
    year: "2024 —",
    link: "https://4planet.org",
    tags: ["systems", "ecology", "platform"],
    image: "/images/project-4planet.svg",
    overview:
      "4PLANET is being built to make ecological action easier to understand, trust, support and follow — across living systems, missions and real-world impact.",
    why: "Most ecological intent dies in the gap between caring and acting — not from opposition, but from confusion. 4PLANET treats that confusion as a design problem and builds for legibility before scale.",
    currentStatus:
      "In active development. Product, intelligence, impact and partnership layers are being built and tested in parallel.",
    contribution:
      "Odin founded 4PLANET and leads its direction across mission, product, brand, systems and culture.",
    relatedLinks: [{ label: "Visit 4PLANET", href: "https://4planet.org" }],
    relatedJournal: ["building-4planet-in-public", "easier-to-understand"],
  },
  {
    title: "P4NTHER",
    slug: "p4nther",
    status: "ACTIVE",
    description: "Creative studio for ideas, identity, storytelling and systems.",
    role: "Creative",
    year: "2023 —",
    link: "https://p4nther.no",
    tags: ["studio", "design", "culture"],
    image: "/images/project-p4nther.svg",
    overview:
      "P4NTHER is an interdisciplinary creative studio and cultural layer for ideas that need to move through identity, art direction and storytelling.",
    why: "Ideas about nature and the future do not move on logic alone. They also move through form, story and culture.",
    currentStatus: "Active and developing as a distinct cultural universe.",
    contribution:
      "Odin works across identity, art direction, strategy and storytelling, shaping how ideas become culture.",
    relatedLinks: [{ label: "Visit P4NTHER", href: "https://p4nther.no" }],
    relatedJournal: ["not-a-backdrop"],
  },
  {
    title: "Photography Archive",
    slug: "photography-archive",
    status: "ACTIVE",
    description: "Nature, people, places and living systems.",
    role: "Photographer",
    year: "Ongoing",
    tags: ["photography", "archive", "fieldwork"],
    image: "/images/project-archive.svg",
    overview:
      "A growing visual archive built over years — nature, people, places, environmental work and field experience. The public archive is being re-edited from original source files.",
    why: "An archive is a form of attention kept over time. It can carry both memory and evidence when the metadata and context are real.",
    currentStatus: "Active archive; public curation in progress.",
    contribution: "Odin photographs, edits and sequences the archive.",
  },
];
