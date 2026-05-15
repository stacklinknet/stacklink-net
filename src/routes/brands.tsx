import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BRANDS, brandLogo, brandSlug } from "@/lib/site-data";
import banner from "@/assets/banner-brands.jpg";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Technology Partners & Brands — Stacklink" },
      { name: "description", content: "Authorized partner of Cisco, Fortinet, Aruba, Dell, Ubiquiti, TP-Link and 20+ leading IT brands." },
      { property: "og:title", content: "Stacklink Technology Partners" },
      { property: "og:description", content: "25+ certified IT brand partnerships." },
      { property: "og:image", content: banner },
      { property: "og:url", content: "https://stacklink-elite-theme.lovable.app/brands" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://stacklink-elite-theme.lovable.app/brands" },
    ],
  }),
  component: Brands,
});

function PageBanner({ eyebrow, title, subtitle, img }: { eyebrow: string; title: string; subtitle: string; img: string }) {
  return (
    <section className="relative overflow-hidden -mt-20 pt-32 pb-24">
      <div className="absolute inset-0">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.06 255 / 0.92), oklch(0.22 0.08 230 / 0.85) 50%, oklch(0.32 0.12 200 / 0.55))" }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-cyan/30 blur-3xl animate-float" />
      </div>
      <div className="container mx-auto px-4 relative">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan animate-fade-up">{eyebrow}</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>{title}</h1>
        <p className="text-white/80 text-lg max-w-2xl mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>{subtitle}</p>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Technology Partners"
        title="Powered by the world's leading IT brands."
        subtitle="Authorized partnerships with 25+ global vendors for enterprise networking, security, wireless, voice and storage."
        img={banner}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {BRANDS.map((b, i) => (
            <Link
              key={b.name}
              to="/brands/$slug"
              params={{ slug: brandSlug(b.name) }}
              className="group relative h-40 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 hover:border-cyan/40 transition-smooth flex flex-col items-center justify-center overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 200 / 0.6), oklch(0.92 0.05 230 / 0.4))" }} />
              <div className="relative flex items-center justify-center h-16">
                <img
                  src={brandLogo(b.domain)}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-14 max-w-[140px] object-contain transition-smooth group-hover:scale-110"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const fb = t.nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = "block";
                  }}
                />
                <span style={{ display: "none" }} className="font-display font-bold text-xl text-primary">{b.name}</span>
              </div>
              <div className="relative mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan opacity-0 group-hover:opacity-100 transition-smooth">
                Explore <ArrowRight className="w-3 h-3" />
              </div>
              <div className="relative text-sm font-medium text-muted-foreground mt-2 group-hover:text-primary">{b.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
