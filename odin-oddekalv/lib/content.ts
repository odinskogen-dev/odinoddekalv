// lib/content.ts
// Single access layer over the local content files. Pages import from here
// so that swapping local files for a CMS (Sanity / Supabase) later only
// means changing this one file.

import { journal } from "@/content/journal";
import { projects } from "@/content/projects";
import { photography } from "@/content/photography";
import { expeditions } from "@/content/expeditions";
import { library } from "@/content/library";
import { timeline } from "@/content/timeline";
import type { JournalPost, Project, Expedition } from "@/lib/types";

// ── Journal ──────────────────────────────────────────────────────
export function getJournal(): JournalPost[] {
  return [...journal].sort((a, b) => (a.date < b.date ? 1 : -1));
}
export function getJournalPost(slug: string): JournalPost | undefined {
  return journal.find((p) => p.slug === slug);
}
export function getFeaturedPost(): JournalPost {
  return getJournal().find((p) => p.featured) ?? getJournal()[0];
}
export function getLatestJournal(n = 3): JournalPost[] {
  return getJournal().slice(0, n);
}

// ── Projects ─────────────────────────────────────────────────────
export function getProjects(): Project[] {
  return projects;
}
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// ── Expeditions ──────────────────────────────────────────────────
export function getExpeditions(): Expedition[] {
  return expeditions;
}
export function getExpedition(slug: string): Expedition | undefined {
  return expeditions.find((e) => e.slug === slug);
}

// ── Photography ──────────────────────────────────────────────────
export function getPhotography() {
  return photography;
}
export function getSelectedPhotography(n = 6) {
  return photography.slice(0, n);
}

// ── Library ──────────────────────────────────────────────────────
export function getLibrary() {
  return library;
}

// ── Timeline ─────────────────────────────────────────────────────
export function getTimeline() {
  return timeline;
}
