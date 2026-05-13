import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PRODUCTS, COMPANY } from "@/lib/site-data";
import banner from "@/assets/banner-products.jpg";
import imgFirewall from "@/assets/product-firewall.jpg";
import imgAp from "@/assets/product-ap.jpg";
import imgRouter from "@/assets/product-router.jpg";
import imgSwitch from "@/assets/product-switch.jpg";
import imgIpphone from "@/assets/product-ipphone.jpg";
import imgCctv from "@/assets/product-cctv.jpg";
import imgServer from "@/assets/product-server.jpg";
import imgStorage from "@/assets/product-storage.jpg";

const IMG: Record<string, string> = {
  "firewalls": imgFirewall,
  "access-points": imgAp,
  "routers": imgRouter,
  "switches": imgSwitch,
  "ip-phones": imgIpphone,
  "cctv": imgCctv,
  "servers": imgServer,
  "storage": imgStorage,
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "IT Products & Hardware — Stacklink UAE" },
      { name: "description", content: "Firewalls, access points, routers, switches, IP phones, CCTV, servers and storage from leading global brands." },
      { property: "og:title", content: "Stacklink Products" },
      { property: "og:description", content: "Enterprise IT hardware from 25+ leading brands." },
      { property: "og:image", content: banner },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-24">
        <div className="absolute inset-0">
          <img src={banner} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.06 255 / 0.92), oklch(0.22 0.08 230 / 0.85) 50%, oklch(0.32 0.12 200 / 0.55))" }} />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-cyan/30 blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan animate-fade-up">Products</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>Enterprise IT hardware from the world's best.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>Original, warranty-backed products with UAE-wide delivery, install and support.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.slug}
              className="group rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                <img src={IMG[p.slug]} alt={p.name} loading="lazy" className="w-full h-full object-contain p-6 group-hover:scale-110 transition-smooth duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth" style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0.18 0.07 250 / 0.85))" }} />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-smooth">
                  <Link to="/contact" className="block w-full text-center px-3 py-2 rounded-lg bg-white text-primary text-xs font-semibold">
                    Quick Inquiry
                  </Link>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-primary mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex gap-2">
                  <Link to="/contact" className="flex-1 px-3 py-2 rounded-lg text-white text-xs font-semibold text-center hover:opacity-90 transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
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
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
