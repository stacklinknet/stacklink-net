import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BRANDS } from "@/lib/site-data";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Technology Partners & Brands — Stacklink" },
      { name: "description", content: "Authorized partner of Cisco, Fortinet, Aruba, Dell, Ubiquiti, TP-Link and 20+ leading IT brands." },
      { property: "og:title", content: "Stacklink Technology Partners" },
      { property: "og:description", content: "25+ certified IT brand partnerships." },
    ],
  }),
  component: Brands,
});

function Brands() {
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald">Technology Partners</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl">Powered by the world's leading IT brands.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6">Authorized partnerships with 25+ global vendors for enterprise networking, security, wireless, voice and storage.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {BRANDS.map((b) => (
            <Link
              key={b}
              to="/brands/$slug"
              params={{ slug: b.toLowerCase().replace(/\s+/g, "-") }}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-2 transition-smooth text-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth" style={{ background: "var(--gradient-emerald)" }} />
              <div className="relative">
                <div className="font-display font-bold text-xl text-primary group-hover:text-white transition-smooth">{b}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald group-hover:text-white transition-smooth">
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
