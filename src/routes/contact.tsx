import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { COMPANY, OFFICES } from "@/lib/site-data";
import banner from "@/assets/banner-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Stacklink — UAE IT & Networking Experts" },
      { name: "description", content: "Talk to Stacklink's IT experts. Offices in Dubai, Abu Dhabi, Deira, London and Mumbai." },
      { property: "og:title", content: "Contact Stacklink" },
      { property: "og:description", content: "Get a free IT consultation and quote within 24 hours." },
      { property: "og:image", content: banner },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-24">
        <div className="absolute inset-0">
          <img src={banner} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.06 255 / 0.92), oklch(0.22 0.08 230 / 0.85) 50%, oklch(0.32 0.12 200 / 0.55))" }} />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-cyan/30 blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan animate-fade-up">Contact Us</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mt-3 max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>Talk to our IT experts.</h1>
          <p className="text-white/80 text-lg max-w-2xl mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>Free consultation, fast quote, UAE-wide deployment. We respond within 24 hours.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-card border border-border shadow-elegant">
            <h2 className="font-display font-bold text-2xl text-primary mb-2">Request a Quote</h2>
            <p className="text-muted-foreground mb-8">Tell us about your project — we'll get back within 24 hours.</p>

            {sent ? (
              <div className="p-8 rounded-xl bg-cyan/10 border border-cyan/30 text-center">
                <CheckCircle2 className="w-12 h-12 text-cyan mx-auto mb-3" />
                <h3 className="font-display font-bold text-xl text-primary mb-1">Thank you!</h3>
                <p className="text-muted-foreground">Your inquiry has been received. Our team will reach out shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid md:grid-cols-2 gap-4"
              >
                <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none transition-smooth" />
                <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none transition-smooth" />
                <input placeholder="Phone" className="px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none transition-smooth" />
                <input placeholder="Company" className="px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none transition-smooth" />
                <select className="md:col-span-2 px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none transition-smooth">
                  <option>Service of interest</option>
                  <option>IT Security</option>
                  <option>Networking</option>
                  <option>Wireless / WiFi</option>
                  <option>CCTV</option>
                  <option>IP Telephony</option>
                  <option>IT Infrastructure</option>
                  <option>Technical Support</option>
                </select>
                <textarea required rows={5} placeholder="Tell us about your project..." className="md:col-span-2 px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none transition-smooth" />
                <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold shadow-glow hover:scale-[1.02] transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { Icon: Phone, title: "Call us", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
              { Icon: Mail, title: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { Icon: MessageCircle, title: "WhatsApp", value: "Chat with our team", href: `https://wa.me/${COMPANY.whatsapp}` },
              { Icon: MapPin, title: "Head Office", value: "Business Bay, Dubai, UAE" },
            ].map(({ Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 hover:border-cyan/40 transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-glow shrink-0" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</div>
                  <div className="font-display font-semibold text-primary mt-0.5">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Global Presence</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-3">Our Offices</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICES.map((o) => (
              <div key={o.city} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cyan font-semibold">{o.role}</div>
                    <div className="font-display font-bold text-lg text-primary">{o.city}, {o.country}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-cyan shrink-0" /> {o.address}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden shadow-elegant aspect-[16/7] border border-border">
            <iframe
              title="Stacklink Dubai"
              src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
