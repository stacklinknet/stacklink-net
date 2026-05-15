import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Network, PhoneCall, Wifi, ShieldCheck, Server, Cctv, Cog, Lock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CATEGORIES } from "@/lib/site-data";
import { imgForCategory } from "@/components/site/ProductImage";
import banner from "@/assets/banner-products.jpg";

const ICONS: Record<string, any> = { Network, PhoneCall, Wifi, ShieldCheck, Server, Cctv, Cog, Lock };

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Shop by Category — Stacklink IT Hardware UAE" },
      { name: "description", content: "Browse 9 enterprise IT categories: Network Switches, Telephony, Wireless, Firewall, Server & Storage, CCTV, Cabinets, Software, Access Control." },
      { property: "og:title", content: "Shop by Category — Stacklink" },
      { property: "og:description", content: "Shop 9 enterprise IT categories — switches, telephony, wireless, firewalls, servers, CCTV, cabinets, software and access control from 25+ leading brands." },
      { property: "og:image", content: banner },
      { property: "og:url", content: "https://stacklink-elite-theme.lovable.app/categories" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://stacklink-elite-theme.lovable.app/categories" },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-20">
        <div className="absolute inset-0">
          <img src={banner} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.06 255 / 0.92), oklch(0.22 0.08 230 / 0.85) 50%, oklch(0.32 0.12 200 / 0.55))" }} />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan animate-fade-up">Shop by Category</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>Enterprise IT, organized.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>9 specialized categories. 5000+ products. One trusted partner.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8"><Breadcrumbs items={[{ label: "Shop by Category" }]} /></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((c, i) => {
              const Icon = ICONS[c.icon] ?? Server;
              return (
                <Link
                  key={c.slug}
                  to="/categories/$slug"
                  params={{ slug: c.slug }}
                  className="group relative rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 hover:border-cyan/40 transition-smooth overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                    <img src={imgForCategory(c.slug)} alt={c.name} loading="lazy" className="w-full h-full object-contain p-8 group-hover:scale-110 transition-smooth duration-500" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-lg text-primary group-hover:text-cyan transition-smooth">{c.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{c.desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-cyan group-hover:gap-2 transition-smooth">
                      Browse {c.subs ? `${c.subs.length} subcategories` : "products"} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
