import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Cloud, Headphones } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/lib/site-data";

const ICONS: Record<string, any> = { ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Cloud, Headphones };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Stacklink UAE" },
      { name: "description", content: "Enterprise networking, IT security, wireless, CCTV, IP telephony, infrastructure, cloud and 24/7 support." },
      { property: "og:title", content: "Stacklink Services" },
      { property: "og:description", content: "Full-stack IT services for UAE enterprises." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald">Our Services</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl">Complete IT solutions, expertly delivered.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6">Design, deploy and operate the technology that powers your business.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? ShieldCheck;
            return (
              <div key={s.slug} className="group relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald/10 group-hover:bg-emerald/20 blur-2xl transition-smooth" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-glow" style={{ background: "var(--gradient-emerald)" }}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-emerald hover:gap-2 transition-smooth">
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
