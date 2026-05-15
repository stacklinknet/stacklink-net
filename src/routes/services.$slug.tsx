import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Headphones, Cog, Layers } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { InquiryForm } from "@/components/site/InquiryForm";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { SERVICES, COMPANY, BRANDS, brandLogo, brandSlug } from "@/lib/site-data";
import { PRODUCT_CATALOG } from "@/lib/catalog";

const ICONS: Record<string, any> = { ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Headphones, Cog, Layers };

// Service → related category slugs + brand names
const SERVICE_LINKS: Record<string, { categories: string[]; brands: string[] }> = {
  "it-services": { categories: ["server-storage", "softwares"], brands: ["Dell", "HPE", "IBM", "Microsoft" as any] },
  "it-security": { categories: ["security-firewall"], brands: ["Fortinet", "SonicWall", "Cisco"] },
  "wireless": { categories: ["wireless"], brands: ["Aruba", "Ubiquiti", "TP-Link", "Cisco"] },
  "networking": { categories: ["network-switches"], brands: ["Cisco", "Aruba", "MikroTik", "HPE"] },
  "ip-telephony": { categories: ["telephony"], brands: ["Avaya", "Grandstream", "Yealink", "Fanvil", "Yeastar"] },
  "infrastructure": { categories: ["server-storage", "cabinets-rack"], brands: ["Dell", "HPE", "IBM"] },
  "cctv": { categories: ["cctv-surveillance"], brands: ["Honeywell", "Ubiquiti", "TP-Link"] },
  "support": { categories: [], brands: [] },
  "firewall": { categories: ["security-firewall"], brands: ["Fortinet", "SonicWall", "Cisco"] },
  "cabling": { categories: ["cabinets-rack"], brands: ["Belkin", "D-Link"] },
  "cloud": { categories: ["softwares", "server-storage"], brands: ["Dell", "HPE", "IBM"] },
};

const PROCESS = [
  { n: "01", t: "Discovery", d: "We assess your infrastructure, requirements and goals." },
  { n: "02", t: "Design", d: "Certified engineers design a tailored solution & quote." },
  { n: "03", t: "Deploy", d: "Professional installation, configuration and migration." },
  { n: "04", t: "Support", d: "SLA-backed 24/7 support and proactive maintenance." },
];

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = SERVICES.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.svc?.title ?? "Service"} — Stacklink UAE` },
      { name: "description", content: loaderData?.svc?.desc ?? "" },
      { property: "og:title", content: loaderData?.svc?.title ?? "" },
      { property: "og:description", content: loaderData?.svc?.desc ?? "" },
      { property: "og:image", content: loaderData?.svc?.img ?? "" },
      { property: "og:url", content: `https://stacklink-elite-theme.lovable.app/services/${params.slug}` },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: `https://stacklink-elite-theme.lovable.app/services/${params.slug}` },
    ],
    scripts: loaderData?.svc ? [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: loaderData.svc.title,
          description: loaderData.svc.desc,
          provider: { "@type": "Organization", name: "Stacklink", url: "https://stacklink-elite-theme.lovable.app/" },
          areaServed: ["AE", "GB", "IN"],
          url: `https://stacklink-elite-theme.lovable.app/services/${params.slug}`,
        }),
      },
    ] : [],
  }),
  component: ServicePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display font-bold text-3xl mb-4">Service not found</h1>
        <Link to="/services" className="text-cyan font-semibold">Browse all services →</Link>
      </div>
    </SiteLayout>
  ),
});

function ServicePage() {
  const { svc } = Route.useLoaderData();
  const Icon = ICONS[svc.icon] ?? ShieldCheck;
  const links = SERVICE_LINKS[svc.slug] ?? { categories: [], brands: [] };
  const relatedBrands = BRANDS.filter((b) => links.brands.includes(b.name));
  const relatedProducts = PRODUCT_CATALOG.filter((p) => links.categories.includes(p.category)).slice(0, 8);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-24">
        <div className="absolute inset-0">
          <img src={svc.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.06 255 / 0.92), oklch(0.22 0.08 230 / 0.85) 50%, oklch(0.32 0.12 200 / 0.55))" }} />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: svc.title }]} /></div>
          <div className="flex items-center gap-4 animate-fade-up">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Our Services</p>
              <h1 className="font-display font-bold text-3xl md:text-5xl text-white mt-1">{svc.title}</h1>
            </div>
          </div>
          <p className="text-white/80 text-lg max-w-2xl mt-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>{svc.desc}</p>
          <div className="flex flex-wrap gap-3 mt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a href="#inquiry" className="px-7 py-4 rounded-xl text-white font-semibold shadow-glow hover:scale-105 transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>Request a Quote</a>
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi Stacklink, I'd like to discuss ${svc.title}.`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:scale-105 transition-smooth">
              <MessageCircle className="w-4 h-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Why Stacklink</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2 mb-6">Enterprise-grade {svc.title.toLowerCase()}, delivered.</h2>
            <ul className="space-y-3">
              {[
                `22+ years of ${svc.title} experience across UAE enterprises`,
                "Certified vendor engineers (Cisco, Fortinet, Aruba, Microsoft)",
                "End-to-end: design, supply, install, configure, support",
                "SLA-backed 24/7 monitoring and on-site response",
                "Compliance with UAE TRA, SIRA and NESA standards",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-smooth">
                  <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/3]">
              <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Our Process</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2">From inquiry to operation in 4 steps</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="text-4xl font-display font-bold text-cyan/30 mb-2">{p.n}</div>
                <h3 className="font-display font-semibold text-lg text-primary mb-1">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedBrands.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-8 text-center">Technology partners for {svc.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedBrands.map((b) => (
                <Link key={b.name} to="/brands/$slug" params={{ slug: brandSlug(b.name) }} className="w-40 h-24 px-6 flex items-center justify-center rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 hover:border-cyan/40 transition-smooth">
                  <img src={brandLogo(b.domain)} alt={b.name} className="max-h-12 max-w-[110px] object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedProducts items={relatedProducts} title={`Products for ${svc.title}`} />

      <section id="inquiry" className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Get Started</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2 mb-4">Request a {svc.title} quote</h2>
            <p className="text-muted-foreground mb-6">Tell us about your project. Our certified team will respond within 24 hours with a tailored proposal.</p>
            <Link to="/services" className="inline-flex items-center gap-2 text-cyan font-semibold hover:gap-3 transition-smooth">All services <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="p-8 rounded-3xl bg-card border border-border shadow-elegant">
            <InquiryForm source={`Service: ${svc.title}`} subject={`${svc.title} — Stacklink Inquiry`} defaultRequirement={svc.title} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
