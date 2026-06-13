import type { MetadataRoute } from "next";

// Explicit allow rules for AI search crawlers. Gemini uses Google-Extended
// (Google index + Knowledge Graph). Blocking any of these prevents citation.
const AI_SEARCH_BOTS = [
  "Google-Extended", // Gemini + Google AI Overviews
  "GPTBot", // ChatGPT search
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Bingbot", // Copilot
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: "https://aitraining.id/sitemap.xml",
  };
}
