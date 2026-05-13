import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Cloud, Headphones, Award, Users, Package, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Counter } from "@/components/site/Counter";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { COMPANY, SERVICES, STATS } from "@/lib/site-data";
import heroImg from "@/assets/hero-network.jpg";

const ICONS: Record<string, any> = { ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Cloud, Headphones };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stacklink — UAE's Premium IT Hardware & Networking Partner" },
      { name: "description", content: "22+ years delivering enterprise IT, networking, security, CCTV and cloud solutions across the UAE. Trusted by 1000+ businesses." },
      { property: "og:title", content: "Stacklink — Premium IT & Networking" },
      { property: "og:description", content: "Enterprise IT infrastructure, networking, security and cloud solutions across the UAE." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden -mt-20 pt-20 min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.15 0.06 255 / 0.95), oklch(0.22 0.08 255 / 0.85), oklch(0.25 0.1 200 / 0.7))" }} />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-emerald/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-cyan/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-emerald" />
              Trusted by 1000+ UAE Enterprises
            </div>

            <h1 className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              22+ Years of Trusted{" "}
              <span className="block mt-2" style={{ background: "var(--gradient-emerald)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
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
                style={{ background: "var(--gradient-emerald)" }}
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

            {/* Hero stats */}
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
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">Certified Technology Partners</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mt-2">Powered by the world's leading IT brands</h2>
          </div>
          <BrandMarquee />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">What We Do</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-4">End-to-end IT solutions for modern enterprises</h2>
            <p className="text-muted-foreground text-lg">From advisory to deployment to 24/7 support — one partner for your entire IT stack.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? ShieldCheck;
              return (
                <div
                  key={s.slug}
                  className="group relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth overflow-hidden"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald/10 group-hover:bg-emerald/20 blur-2xl transition-smooth" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-glow" style={{ background: "var(--gradient-emerald)" }}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-emerald hover:gap-2 transition-smooth">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US — TRUST */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald/20 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">Why Stacklink</p>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-3 mb-6">Built on trust. Delivered with precision.</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                For over two decades, Stacklink has been the silent backbone of UAE's most demanding businesses — banks, hospitals, hotels, government, and SMEs.
              </p>
              <ul className="space-y-4">
                {[
                  "Authorized partner with 25+ global IT brands",
                  "Certified network & security engineers in-house",
                  "SLA-backed 24/7 technical support across UAE",
                  "End-to-end design, supply, install & maintain",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="w-6 h-6 text-emerald shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { Icon: Award, label: "Years Experience", value: 22, suf: "+" },
                { Icon: Users, label: "Happy Clients", value: 1000, suf: "+" },
                { Icon: Package, label: "Products Delivered", value: 5000, suf: "+" },
                { Icon: Clock, label: "Support", value: 24, suf: "/7" },
              ].map(({ Icon, label, value, suf }) => (
                <div key={label} className="glass-dark p-6 rounded-2xl text-center">
                  <Icon className="w-8 h-8 text-emerald mx-auto mb-3" />
                  <div className="font-display font-bold text-4xl text-white">
                    <Counter to={value} suffix={suf} />
                  </div>
                  <div className="text-sm text-white/70 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 shadow-elegant" style={{ background: "var(--gradient-emerald)" }}>
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
