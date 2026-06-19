import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";

// Real content-change dates — update when a page meaningfully changes.
// Stamping every URL with the build date is a false freshness signal
// engines learn to ignore.
const LAST_MODIFIED = {
  home: new Date("2026-06-12"),
  programs: new Date("2026-06-06"),
  about: new Date("2026-06-10"),
  cities: new Date("2026-06-06"),
  compare: new Date("2026-06-10"),
  pricing: new Date("2026-06-15"),
  contact: new Date("2026-06-06"),
  playbook: new Date("2026-06-06"),
  playbookDailyPrompt: new Date("2026-06-06"),
  bestAiTrainers: new Date("2026-06-10"),
  pelatihanAiPerusahaan: new Date("2026-06-12"),
  geoTraining: new Date("2026-06-16"),
  bestGeoTrainers: new Date("2026-06-16"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aitraining.id";

  // Cities carrying a GEO block (currently Jakarta) were updated on the GEO
  // ship date; the rest keep the original cities date. Avoids a false-fresh
  // signal on unchanged city pages while honestly stamping the ones that moved.
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/cities/${city.id}`,
    lastModified: city.geo ? LAST_MODIFIED.geoTraining : LAST_MODIFIED.cities,
    changeFrequency: "monthly",
    priority: city.geo ? 0.8 : 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: LAST_MODIFIED.programs,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-ai-trainers-indonesia`,
      lastModified: LAST_MODIFIED.bestAiTrainers,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/geo-training`,
      lastModified: LAST_MODIFIED.geoTraining,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-geo-trainers-indonesia`,
      lastModified: LAST_MODIFIED.bestGeoTrainers,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pelatihan-ai-untuk-perusahaan`,
      lastModified: LAST_MODIFIED.pelatihanAiPerusahaan,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: LAST_MODIFIED.about,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: LAST_MODIFIED.cities,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...cityPages,
    {
      url: `${baseUrl}/compare`,
      lastModified: LAST_MODIFIED.compare,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: LAST_MODIFIED.pricing,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: LAST_MODIFIED.contact,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/playbook`,
      lastModified: LAST_MODIFIED.playbook,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/playbook/daily-prompt`,
      lastModified: LAST_MODIFIED.playbookDailyPrompt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
