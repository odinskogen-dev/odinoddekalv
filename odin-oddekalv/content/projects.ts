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
    link: "https://4planet.no",
    tags: ["systems", "ecology", "platform"],
    image: "/images/project-4planet.svg",
    overview:
      "4PLANET is a multi-tenant platform built to make ecological action legible: clear about what an action is, what it does, and whether it actually happened. It organises work across ocean, earth, human systems and culture.",
    why: "Most ecological intent dies in the gap between caring and acting — not from opposition, but from confusion. 4PLANET treats that confusion as a design problem and builds for legibility before scale.",
    currentStatus:
      "In active development. Architecture, design system and the pledged-to-verified impact pipeline are being built piece by piece.",
    contribution:
      "Odin founded 4PLANET and leads its direction, design language and systems thinking — from the trust architecture down to the typography.",
    relatedLinks: [{ label: "Visit 4PLANET", href: "https://4planet.no" }],
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
      "P4NTHER is an interdisciplinary creative studio and idea engine — the cultural arm of the work, activating projects across music, art, events, design and visual culture.",
    why: "Ideas about nature and the future do not move on logic alone. They move on form, story and culture. P4NTHER exists to give serious ideas a body people can feel.",
    currentStatus: "Active, with ongoing cultural projects and editorial output.",
    contribution:
      "Odin works as creative across identity, art direction and storytelling, shaping how the wider universe looks, sounds and feels.",
    relatedLinks: [{ label: "Visit P4NTHER", href: "https://p4nther.no" }],
    relatedJournal: ["not-a-backdrop"],
  },
  {
    title: "4PLANET Journal / Magazine",
    slug: "4planet-magazine",
    status: "DEVELOPING",
    description: "Editorial platform for nature, systems and action.",
    role: "Editor & creative director",
    year: "2025 —",
    tags: ["editorial", "publishing", "magazine"],
    image: "/images/project-magazine.svg",
    overview:
      "An editorial platform exploring the relationship between the living world, human systems and the future — bold black headlines, electric-blue accents, nature photography and long-form thinking.",
    why: "Legibility needs language. A magazine gives the ideas room to be argued properly, with the depth and craft of serious editorial journalism rather than the compression of social media.",
    currentStatus: "In development — design language defined, building toward a standalone publication.",
    contribution:
      "Odin directs the editorial vision, art direction and the relationship between writing and photography.",
    relatedJournal: ["easier-to-understand"],
  },
  {
    title: "4PLANET Film",
    slug: "4planet-film",
    status: "FUTURE",
    description: "Documentary and visual storytelling projects.",
    role: "Director & cinematographer",
    year: "Future",
    tags: ["film", "documentary", "storytelling"],
    image: "/images/project-film.svg",
    overview:
      "A future strand of documentary and visual storytelling — films about people, places and living systems, made with the same restraint and patience as the photography.",
    why: "Some truths about the living world only land in motion and time. Film is the medium for the stories too large to hold in a single frame.",
    currentStatus: "Future. In early thinking and reference-gathering.",
    contribution: "Odin will direct and shoot, extending the photographic language into time.",
  },
  {
    title: "Photography Archive",
    slug: "photography-archive",
    status: "ACTIVE",
    description: "Nature, people, places and living systems.",
    role: "Photographer",
    year: "Ongoing",
    link: "/photography",
    tags: ["photography", "archive", "fieldwork"],
    image: "/images/project-archive.svg",
    overview:
      "A growing visual archive built slowly over years — wildlife, nature, people, places and expeditions. Less a portfolio than a long record of looking.",
    why: "An archive is a form of attention kept over time. It is how a single way of seeing becomes evidence rather than a collection of nice pictures.",
    currentStatus: "Active and growing with every expedition.",
    contribution: "Odin photographs, edits and sequences the archive.",
    relatedLinks: [{ label: "View the archive", href: "/photography" }],
    relatedJournal: ["not-a-backdrop", "field-note-limits"],
  },
];
