import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getJournal } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/story",
    "/field",
    "/field/faroe-islands",
    "/photography",
    "/prints",
    "/journal",
    "/work",
    "/archive",
    "/press",
    "/manifest",
    "/now",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/journal" || route === "/now" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/work" || route === "/journal" || route === "/photography" ? 0.8 : 0.6,
  }));

  const journalEntries: MetadataRoute.Sitemap = getJournal().map((post) => ({
    url: `${site.url}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticEntries, ...journalEntries];
}
