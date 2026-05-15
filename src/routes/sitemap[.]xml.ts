import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CATEGORIES, BRANDS, SERVICES, brandSlug } from "@/lib/site-data";
import { PRODUCT_CATALOG } from "@/lib/catalog";

const BASE_URL = "https://stacklink-elite-theme.lovable.app";

interface Entry { path: string; changefreq?: string; priority?: string; }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/products", changefreq: "weekly", priority: "0.8" },
          { path: "/categories", changefreq: "weekly", priority: "0.8" },
          { path: "/brands", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
        ];
        for (const s of SERVICES) entries.push({ path: `/services/${s.slug}`, changefreq: "monthly", priority: "0.7" });
        for (const c of CATEGORIES) {
          entries.push({ path: `/categories/${c.slug}`, changefreq: "weekly", priority: "0.7" });
          for (const sub of c.subs ?? []) entries.push({ path: `/categories/${c.slug}/${sub.slug}`, changefreq: "weekly", priority: "0.6" });
        }
        for (const b of BRANDS) entries.push({ path: `/brands/${brandSlug(b.name)}`, changefreq: "monthly", priority: "0.6" });
        for (const p of PRODUCT_CATALOG) entries.push({ path: `/products/${p.slug}`, changefreq: "monthly", priority: "0.5" });

        const urls = entries.map((e) => [
          "  <url>",
          `    <loc>${BASE_URL}${e.path}</loc>`,
          e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
          e.priority ? `    <priority>${e.priority}</priority>` : null,
          "  </url>",
        ].filter(Boolean).join("\n"));

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});