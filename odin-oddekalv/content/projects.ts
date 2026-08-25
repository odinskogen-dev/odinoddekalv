// content/projects.ts
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "4PLANET",
    slug: "4planet",
    status: "DEVELOPING",
    description: "A living-planet system for turning better understanding into better choices and useful action.",
    role: "Founder",
    year: "2024 —",
    link: "https://4planet.org",
    tags: ["systems", "ecology", "platform"],
    image: "/images/project-4planet.svg",
    overview:
      "4PLANET is being built to connect ecological evidence, choices, people and action — making the living world easier to understand before important decisions are locked in, and making useful work easier to find and support.",
    why: "We already have extraordinary knowledge and people working on ecological problems. Too often, what is known, what can be done and who can do it are separated from the moment a real decision is made. 4PLANET treats that gap as a design problem.",
    currentStatus:
      "In active development through public prototypes, real field cases, data sources and partnerships.",
    contribution:
      "Odin founded 4PLANET and leads its direction across mission, product, systems, brand and culture.",
    relatedLinks: [{ label: "Visit 4PLANET", href: "https://4planet.org" }],
    relatedJournal: ["before-the-decision-is-made", "truth-by-design", "future-worth-choosing", "build-one-good-model"],
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
    relatedJournal: ["change-moves-through-people", "not-a-backdrop"],
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
