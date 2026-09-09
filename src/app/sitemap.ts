import type { MetadataRoute } from "next";
import { site, consultancySlugs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/vision",
    "/consultancies",
    ...consultancySlugs.map((s) => `/consultancies/${s}`),
    "/ifo",
    "/events-media",
    "/achievements",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
