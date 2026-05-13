import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Headphones, Cog, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { InquiryDialog } from "@/components/site/InquiryDialog";
import { SERVICES } from "@/lib/site-data";
import { COMPANY } from "@/lib/site-data";
import banner from "@/assets/banner-services.jpg";

const ICONS: Record<string, any> = { ShieldCheck, Network, Wifi, Cctv, PhoneCall, Server, Headphones, Cog };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Stacklink UAE" },
      { name: "description", content: "Enterprise networking, IT security, wireless, CCTV, IP telephony, infrastructure and 24/7 support." },
      { property: "og:title", content: "Stacklink Services" },
      { property: "og:description", content: "Full-stack IT services for UAE enterprises." },
      { property: "og:image", content: banner },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-24">
        <div className="absolute inset-0">
          <img src={banner} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.16 0.07 250 / 0.92), oklch(0.22 0.09 230 / 0.85) 50%, oklch(0.32 0.12 200 / 0.55))" }} />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-cyan/30 blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan animate-fade-up">Our Services</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>Complete IT solutions, expertly delivered.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>Design, deploy and operate the technology that powers your business.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? ShieldCheck;
            return (
              <div
                key={s.slug}
                className="group relative rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.18 0.07 250 / 0.4) 0%, oklch(0.18 0.07 250 / 0.85) 100%)" }} />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-3">
                    <InquiryDialog
                      source={`Service: ${s.title}`}
                      subject={`Service Inquiry — ${s.title}`}
                      defaultRequirement={s.title}
                      title={`Get a quote for ${s.title}`}
                      trigger={
                        <button type="button" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan hover:gap-2 transition-smooth">
                          Get a quote <ArrowRight className="w-4 h-4" />
                        </button>
                      }
                    />
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi Stacklink, I'd like to discuss ${s.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#25D366] hover:gap-2 transition-smooth"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
