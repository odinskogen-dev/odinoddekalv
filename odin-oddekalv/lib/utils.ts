// lib/utils.ts

/** Format an ISO date as a restrained editorial date: "02 Nov 2025". */
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-GB", { month: "short" });
  return `${day} ${month} ${d.getFullYear()}`;
}

/** Year only. */
export function yearOf(iso: string): string {
  return iso.slice(0, 4);
}

/** Join class names, dropping falsy values. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Pad an index into the "01_" system label used across 4PLANET / ODIN_. */
export function indexLabel(i: number): string {
  return String(i + 1).padStart(2, "0");
}
