import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Headphones, Cog, Sparkles, Lock, Radio, Layers, HeartHandshake, Quote, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Counter } from "@/components/site/Counter";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { ProductCard } from "@/components/site/ProductCard";
import { COMPANY, SERVICES, STATS, CATEGORIES, TESTIMONIALS, CERTIFICATIONS } from "@/lib/site-data";
import { featuredProducts } from "@/lib/catalog";
import { imgForCategory } from "@/components/site/ProductImage";
import heroImg from "@/assets/hero-network.jpg";

const ICONS: Record<string, any> = { ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Headphones, Cog, Lock, Layers };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stacklink — IT Hardware & Networking equipment supplier in UAE" },
      { name: "description", content: "22+ years delivering enterprise IT, networking, security, CCTV and cloud solutions across the UAE. Trusted by 1000+ businesses." },
      { property: "og:title", content: "Stacklink — Premium IT & Networking UAE" },
      { property: "og:description", content: "22+ years delivering enterprise networking, security, CCTV, telephony, server and cloud solutions to 1000+ UAE businesses." },
      { property: "og:url", content: "https://stacklink-elite-theme.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://stacklink-elite-theme.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Stacklink",
          url: "https://stacklink-elite-theme.lovable.app/",
          logo: "https://stacklink-elite-theme.lovable.app/favicon.ico",
          description: "UAE's premium IT hardware & networking partner — 22+ years delivering enterprise networking, security, CCTV, telephony, server and cloud solutions.",
          telephone: "+971 56 339 0030",
          email: "contact@stacklink.net",
          address: { "@type": "PostalAddress", streetAddress: "Business Bay", addressLocality: "Dubai", addressCountry: "AE" },
          sameAs: ["https://linkedin.com", "https://instagram.com", "https://facebook.com"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Stacklink",
          url: "https://stacklink-elite-theme.lovable.app/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://stacklink-elite-theme.lovable.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const ENTERPRISE = [
  { Icon: Lock, title: "Secure Enterprise Networking", desc: "Hardened routing, switching and SD-WAN with zero-trust architecture." },
  { Icon: Cctv, title: "Smart Surveillance Solutions", desc: "AI-powered CCTV, NVR and centralized monitoring for total visibility." },
  { Icon: Radio, title: "Advanced Wireless Infrastructure", desc: "High-density WiFi 6/6E for offices, hotels, warehouses and campuses." },
  { Icon: Headphones, title: "Reliable Technical Support", desc: "SLA-backed 24/7 support with on-site engineers across the UAE." },
  { Icon: Layers, title: "Future-Ready IT Solutions", desc: "Cloud, hybrid and modern data center designs built to scale." },
  { Icon: HeartHandshake, title: "Certified Technology Partnerships", desc: "Authorized partner of Cisco, Fortinet, Aruba, Dell and 20+ vendors." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden -mt-20 pt-20 min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.15 0.06 255 / 0.95), oklch(0.22 0.08 235 / 0.85), oklch(0.28 0.1 200 / 0.7))" }} />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-cyan/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-cyan" />
              Trusted by 1000+ UAE Enterprises
            </div>

            <h1 className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              22+ Years of Trusted{" "}
              <span className="block mt-2" style={{ background: "linear-gradient(135deg, oklch(0.78 0.13 200), oklch(0.65 0.18 220))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                IT Hardware & Networking Excellence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              From enterprise networking and cybersecurity to cloud and CCTV — Stacklink delivers world-class IT infrastructure backed by certified engineers and global brands.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold shadow-glow hover:scale-105 transition-smooth"
                style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass-dark text-white font-semibold hover:bg-white/10 transition-smooth">
                <Phone className="w-4 h-4" /> Contact Us
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:scale-105 transition-smooth"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Now
              </a>
            </div>

            {/* Hero stats — single source of truth */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {STATS.map((s) => (
                <div key={s.label} className="glass-dark rounded-xl p-4">
                  <div className="font-display font-bold text-3xl text-white">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-white/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Certified Technology Partners</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mt-2">Powered by the world's leading IT brands</h2>
          </div>
          <BrandMarquee />
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Shop by Category</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-4">Browse 9 enterprise IT categories</h2>
            <p className="text-muted-foreground text-lg">From network switches to servers — find exactly what your business needs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((c, i) => {
              const Icon = ICONS[c.icon] ?? Server;
              return (
                <Link key={c.slug} to="/categories/$slug" params={{ slug: c.slug }}
                  className="group relative rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 hover:border-cyan/40 transition-smooth overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100">
                    <img src={imgForCategory(c.slug)} alt={c.name} loading="lazy" className="w-full h-full object-contain p-6 group-hover:scale-110 transition-smooth duration-500" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-base text-primary group-hover:text-cyan transition-smooth">{c.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{c.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-cyan group-hover:gap-2 transition-smooth">
                      Browse <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/categories" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-glow hover:scale-105 transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
              Shop All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Featured Products</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-4">Top picks across our catalog</h2>
            <p className="text-muted-foreground text-lg">5000+ products from 25+ leading brands. Genuine, warranty-backed and ready to ship.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredProducts(8).map((p, i) => (<ProductCard key={p.slug} p={p} delay={i * 40} />))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">What We Do</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-4">End-to-end IT solutions for modern enterprises</h2>
            <p className="text-muted-foreground text-lg">From advisory to deployment to 24/7 support — one partner for your entire IT stack.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? ShieldCheck;
              return (
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  key={s.slug}
                  className="group relative rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="relative h-36 overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.18 0.07 250 / 0.3) 0%, oklch(0.18 0.07 250 / 0.85) 100%)" }} />
                    <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-base text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan group-hover:gap-2 transition-smooth">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENTERPRISE TECHNOLOGY SOLUTIONS (replaces Why Stacklink) */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan/20 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-sky-400/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan animate-fade-up">Enterprise Technology Solutions</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-3 mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Future-ready infrastructure, built for performance.
            </h2>
            <p className="text-white/80 text-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Premium engineering, certified partnerships and 24/7 support — the foundation behind every connected business we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTERPRISE.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="group relative p-7 rounded-2xl glass-dark border border-white/10 hover:border-cyan/40 hover:-translate-y-2 transition-smooth overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan/10 group-hover:bg-cyan/30 blur-2xl transition-smooth" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-glow group-hover:scale-110 transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Client Testimonials</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-3">Trusted by enterprises across UAE</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                <Quote className="w-6 h-6 text-cyan mb-3" />
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <div className="font-display font-semibold text-primary text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 mb-16">
          <div className="rounded-3xl bg-muted/40 border border-border p-8 md:p-10">
            <div className="text-center mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Certifications & Partnerships</p>
              <h3 className="font-display font-bold text-2xl text-primary mt-2">Authorized partner of the world's leading vendors</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CERTIFICATIONS.map((c) => (
                <div key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-primary shadow-sm">
                  <Award className="w-4 h-4 text-cyan" /> {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 shadow-elegant" style={{ background: "linear-gradient(135deg, oklch(0.45 0.2 240), oklch(0.65 0.18 200))" }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Talk to our IT experts today</h2>
                <p className="text-white/90 text-lg">Free consultation. Fast quote. UAE-wide deployment.</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/contact" className="px-7 py-4 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition-smooth shadow-elegant">
                  Get Free Quote
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="px-7 py-4 rounded-xl bg-primary text-white font-semibold hover:scale-105 transition-smooth">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
