import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, CheckCircle2, Package, ShieldCheck, Headphones } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BRANDS, COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/brands/$slug")({
  loader: ({ params }) => {
    const brand = BRANDS.find((b) => b.toLowerCase().replace(/\s+/g, "-") === params.slug);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.brand ?? "Brand"} — Authorized Partner | Stacklink` },
      { name: "description", content: `Stacklink is an authorized partner of ${loaderData?.brand}. Sales, deployment and support across the UAE.` },
      { property: "og:title", content: `${loaderData?.brand} — Stacklink` },
      { property: "og:description", content: `Buy ${loaderData?.brand} products with installation and support across UAE.` },
    ],
  }),
  component: BrandPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display font-bold text-3xl mb-4">Brand not found</h1>
        <Link to="/brands" className="text-emerald font-semibold">Back to all brands →</Link>
      </div>
    </SiteLayout>
  ),
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <Link to="/brands" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-emerald mb-6 transition-smooth">
            <ArrowLeft className="w-4 h-4" /> All Brands
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-emerald text-sm font-semibold mb-4">
            Authorized Partner
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white">{brand}</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-4">
            Stacklink is a certified {brand} partner — supplying, deploying and supporting {brand} solutions for enterprises across the UAE.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/contact" className="px-7 py-4 rounded-xl text-white font-semibold shadow-glow hover:scale-105 transition-smooth" style={{ background: "var(--gradient-emerald)" }}>
              Request a Quote
            </Link>
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=Inquiry about ${brand}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:scale-105 transition-smooth">
              <MessageCircle className="w-4 h-4" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Package, title: "Genuine Products", text: `Original ${brand} hardware with full manufacturer warranty.` },
            { Icon: ShieldCheck, title: "Certified Engineers", text: `In-house ${brand}-certified engineers for design and deployment.` },
            { Icon: Headphones, title: "24/7 Support", text: "SLA-backed support and AMC across the UAE." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="p-8 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-glow" style={{ background: "var(--gradient-emerald)" }}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-primary mb-2">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-primary mb-8 text-center">{brand} Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Routers","Switches","Firewalls","Access Points","Controllers","Cameras","Phones","Accessories"].map((c) => (
              <div key={c} className="p-6 rounded-xl bg-card border border-border text-center hover:shadow-glow hover:-translate-y-1 transition-smooth">
                <CheckCircle2 className="w-6 h-6 text-emerald mx-auto mb-2" />
                <div className="font-semibold text-primary">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 shadow-elegant text-center" style={{ background: "var(--gradient-emerald)" }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Ready to deploy {brand} for your business?</h2>
              <p className="text-white/90 text-lg mb-8">Get expert advice and a tailored quote within 24 hours.</p>
              <Link to="/contact" className="inline-block px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition-smooth shadow-elegant">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
