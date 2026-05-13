import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Shield, Wifi, Router, Network, Phone, Cctv, Server, HardDrive } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PRODUCTS, COMPANY } from "@/lib/site-data";

const ICONS: Record<string, any> = { Shield, Wifi, Router, Network, Phone, Cctv, Server, HardDrive };

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "IT Products & Hardware — Stacklink UAE" },
      { name: "description", content: "Firewalls, access points, routers, switches, IP phones, CCTV, servers and storage from leading global brands." },
      { property: "og:title", content: "Stacklink Products" },
      { property: "og:description", content: "Enterprise IT hardware from 25+ leading brands." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald">Products</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl">Enterprise IT hardware from the world's best.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6">Original, warranty-backed products with UAE-wide delivery, install and support.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => {
            const Icon = ICONS[p.icon] ?? Server;
            return (
              <div key={p.name} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-glow group-hover:scale-110 transition-smooth" style={{ background: "var(--gradient-emerald)" }}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
                <div className="flex gap-2">
                  <Link to="/contact" className="flex-1 px-3 py-2 rounded-lg bg-primary text-white text-xs font-semibold text-center hover:opacity-90 transition-smooth">
                    Inquire
                  </Link>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}?text=Inquiry about ${p.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-smooth"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
