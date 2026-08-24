// lib/types.ts
// Central content types. All site content is typed against these so the
// pages stay dumb and the content files stay editable on their own.

export type JournalCategory =
  | "EARTH"
  | "HUMANITY"
  | "FUTURE"
  | "SYSTEMS"
  | "EXPLORATION"
  | "BUILDING"
  | "FIELD NOTES"
  | "THESIS"
  | "PEOPLE"
  | "TRUST";

export interface JournalPost {
  title: string;
  slug: string;
  date: string; // ISO: "2025-11-02"
  category: JournalCategory;
  excerpt: string;
  readingTime: number; // minutes
  image: string; // path under /public or placeholder key
  tags: string[];
  /** Markdown body. Authored as a plain string — swap for MDX later if needed. */
  body: string;
  featured?: boolean;
}

export type ProjectStatus = "ACTIVE" | "DEVELOPING" | "ARCHIVE" | "FUTURE";

export interface Project {
  title: string;
  slug: string;
  status: ProjectStatus;
  description: string;
  role: string;
  year: string;
  link?: string;
  tags: string[];
  // Detail page
  overview: string;
  why: string;
  currentStatus: string;
  contribution: string; // "what Odin does"
  relatedLinks?: { label: string; href: string }[];
  relatedJournal?: string[]; // journal slugs
  image?: string;
}

export type PhotoCategory =
  | "WILDLIFE"
  | "NATURE"
  | "PEOPLE"
  | "PLACES"
  | "EXPEDITIONS"
  | "FIELD NOTES"
  | "CULTURE"
  | "SEA SHEPHERD";

export interface PhotoItem {
  id: string;
  title: string;
  location: string;
  year: string;
  category: PhotoCategory;
  caption: string;
  image: string;
  /** Aspect orientation, retained for future editorial layouts. */
  orientation?: "portrait" | "landscape" | "square";
}

export interface Expedition {
  title: string;
  slug: string;
  location: string;
  year: string;
  theme: string;
  description: string;
  images: string[];
  relatedJournal?: string[];
}

export type LibraryCategory = "BOOKS" | "FILMS" | "PEOPLE" | "IDEAS" | "PLACES";

export interface LibraryItem {
  title: string;
  type: string; // e.g. "Book", "Documentary", "Essay"
  creator: string; // author / director / who
  note: string;
  category: LibraryCategory;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}
