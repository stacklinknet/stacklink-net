import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart, Award, Users, Package, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stacklink — 22+ Years of UAE IT Excellence" },
      { name: "description", content: "Discover Stacklink's 22+ year journey delivering enterprise IT, networking and security across the UAE." },
      { property: "og:title", content: "About Stacklink" },
      { property: "og:description", content: "UAE's premium IT infrastructure & networking company." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald">About Stacklink</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl">Two decades of powering UAE's enterprise IT.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6">Founded over 22 years ago, Stacklink has grown from a Dubai-based networking specialist into a multi-region IT solutions partner serving banks, hotels, hospitals, government, and SMEs across the UAE, UK and India.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Target, title: "Our Mission", text: "Deliver world-class IT infrastructure that empowers UAE businesses to operate securely and at scale." },
            { Icon: Eye, title: "Our Vision", text: "To be the most trusted IT hardware & networking partner across the GCC region." },
            { Icon: Heart, title: "Our Values", text: "Integrity, expertise, partnership and unwavering commitment to client success." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-glow" style={{ background: "var(--gradient-emerald)" }}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-xl text-primary mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { Icon: Award, label: "Years Experience", value: 22, suf: "+" },
              { Icon: Users, label: "Happy Clients", value: 1000, suf: "+" },
              { Icon: Package, label: "Products Delivered", value: 5000, suf: "+" },
              { Icon: Clock, label: "Technical Support", value: 24, suf: "/7" },
            ].map(({ Icon, label, value, suf }) => (
              <div key={label} className="bg-card p-8 rounded-2xl text-center shadow-card">
                <Icon className="w-10 h-10 text-emerald mx-auto mb-4" />
                <div className="font-display font-bold text-4xl text-primary"><Counter to={value} suffix={suf} /></div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-8">Why enterprises choose Stacklink</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Authorized partner with 25+ leading IT brands",
              "Certified Cisco, Fortinet, Aruba & Microsoft engineers",
              "End-to-end design, supply, install & maintain",
              "SLA-backed 24/7 support across UAE",
              "On-site engineers in Dubai, Abu Dhabi & Deira",
              "Compliance with UAE TRA, SIRA, NESA standards",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
                <CheckCircle2 className="w-6 h-6 text-emerald shrink-0 mt-0.5" />
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-semibold shadow-glow hover:scale-105 transition-smooth" style={{ background: "var(--gradient-emerald)" }}>
              Partner with Stacklink
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
