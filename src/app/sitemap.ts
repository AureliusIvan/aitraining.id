import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { cities } from "@/lib/cities";
import { partners } from "@/lib/partners";

const baseUrl = "https://aitraining.id";
const APP_DIR = join(process.cwd(), "src/app");

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];
type Meta = {
  // Real content-change date — present only when one is known. Bump it when a
  // page meaningfully changes; NEVER stamp the build date (engines learn to
  // ignore false freshness). A route with no date here is still indexed; it
  // just ships without a freshness hint, which is honest for a page whose last
  // real edit date we don't track.
  lastModified?: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
};

// Pages that exist on disk but must NOT appear in the sitemap — drafts,
// thank-you/confirmation pages, gated or canonical-elsewhere routes. Add the
// route path exactly as it would render, e.g. "/thank-you".
const EXCLUDE = new Set<string>([]);

// Editorial overlay for STATIC routes. The filesystem (see discoverStaticRoutes)
// is the source of truth for *which* static URLs exist, so a new page is in the
// sitemap the moment it ships — no manual list to update. This map only supplies
// real dates + crawl hints, keyed by route path. A discovered route missing from
// here is still emitted (default priority, no lastModified) and logged at build.
const STATIC_META: Record<string, Meta> = {
  "/": {
    lastModified: new Date("2026-07-08"),
    changeFrequency: "weekly",
    priority: 1,
  },
  "/programs": {
    lastModified: new Date("2026-07-08"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/programs/cursor": {
    lastModified: new Date("2026-07-07"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/programs/heygen": {
    lastModified: new Date("2026-07-08"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/programs/claude": {
    lastModified: new Date("2026-07-08"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/claude-training": {
    lastModified: new Date("2026-07-01"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/partners": {
    lastModified: new Date("2026-06-24"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  "/articles": {
    lastModified: new Date("2026-07-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  "/best-ai-trainers-indonesia": {
    lastModified: new Date("2026-07-09"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/best-geo-trainers-indonesia": {
    lastModified: new Date("2026-07-02"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/geo-training": {
    lastModified: new Date("2026-07-08"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/pelatihan-ai-untuk-perusahaan": {
    lastModified: new Date("2026-07-08"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/about": {
    lastModified: new Date("2026-06-10"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  "/cities": {
    lastModified: new Date("2026-06-06"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  "/compare": {
    lastModified: new Date("2026-06-10"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  "/pricing": {
    lastModified: new Date("2026-06-15"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  "/contact": {
    lastModified: new Date("2026-06-06"),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/playbook": {
    lastModified: new Date("2026-06-06"),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  "/playbook/daily-prompt": {
    lastModified: new Date("2026-06-06"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  // Crawl hints curated; lastModified intentionally omitted until a real
  // content-change date is known (don't fabricate freshness).
  "/kursus-ai-online-indonesia": {
    lastModified: new Date("2026-07-09"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  "/pembicara-ai-indonesia": { changeFrequency: "monthly", priority: 0.85 },
};

const DEFAULT_META: Meta = { changeFrequency: "monthly", priority: 0.6 };

// Walk src/app for directories that contain a page.tsx, building the route path
// for each. Dynamic segments (`[city]`, `[slug]`) are skipped — those routes are
// emitted from their data sources below, not the filesystem. Route groups
// `(group)` add no path segment; private `_folders` and `api` carry no page.
function discoverStaticRoutes(dir: string, prefix = ""): string[] {
  const entries = (() => {
    try {
      return readdirSync(dir, { withFileTypes: true });
    } catch {
      return [];
    }
  })();

  const routes: string[] = [];
  if (entries.some((e) => e.isFile() && e.name === "page.tsx")) {
    routes.push(prefix === "" ? "/" : prefix);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (name.startsWith("[") || name.startsWith("_") || name === "api")
      continue;
    const segment =
      name.startsWith("(") && name.endsWith(")") ? "" : `/${name}`;
    routes.push(...discoverStaticRoutes(join(dir, name), prefix + segment));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = discoverStaticRoutes(APP_DIR)
    .filter((route) => !EXCLUDE.has(route))
    .sort()
    .map((route) => {
      const meta = STATIC_META[route];
      if (!meta) {
        console.warn(
          `[sitemap] ${route} has no STATIC_META entry — emitted with default priority ${DEFAULT_META.priority} and no lastModified. Add it to STATIC_META for editorial control.`,
        );
      }
      const { lastModified, changeFrequency, priority } = meta ?? DEFAULT_META;
      return {
        url: route === "/" ? baseUrl : `${baseUrl}${route}`,
        ...(lastModified ? { lastModified } : {}),
        changeFrequency,
        priority,
      };
    });

  // Dynamic routes the filesystem can't enumerate — driven by their data source.
  // Cities carrying a GEO block were updated on the GEO ship date; the rest keep
  // the original cities date. Avoids a false-fresh signal on unchanged pages.
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/cities/${city.id}`,
    lastModified:
      city.id === "jakarta" ||
      city.id === "surabaya" ||
      city.id === "bandung" ||
      city.id === "tangerang" ||
      city.id === "yogyakarta" ||
      city.id === "bali"
        ? new Date("2026-07-09")
        : city.geo
          ? new Date("2026-07-01")
          : new Date("2026-06-06"),
    changeFrequency: "monthly",
    priority: city.geo ? 0.8 : 0.7,
  }));

  // Each partner page carries its own real content-change date so freshness
  // signals stay honest (don't bump n8n/cursor/heygen when only one changes).
  const partnerPages: MetadataRoute.Sitemap = partners.map((p) => ({
    url: `${baseUrl}/partners/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Each article carries its own real content-change date, same rationale
  // as partner pages.
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/articles/${a.slug}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages, ...partnerPages, ...articlePages];
}
