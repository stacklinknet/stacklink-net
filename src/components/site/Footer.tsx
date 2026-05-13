import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Twitter, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/stacklink-logo.png";
import { COMPANY, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan/20 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Stacklink" className="h-10 w-10 object-contain bg-white rounded-lg p-1" />
              <span className="font-display font-bold text-xl">Stacklink</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              UAE's trusted IT hardware & networking partner with 22+ years of enterprise experience.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Linkedin, href: COMPANY.social.linkedin },
                { Icon: Instagram, href: COMPANY.social.instagram },
                { Icon: Facebook, href: COMPANY.social.facebook },
                { Icon: Twitter, href: COMPANY.social.twitter },
                { Icon: Youtube, href: COMPANY.social.youtube },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass-dark flex items-center justify-center hover:bg-emerald hover:scale-110 transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="hover:text-emerald transition-smooth">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-emerald">About Us</Link></li>
              <li><Link to="/brands" className="hover:text-emerald">Technology Partners</Link></li>
              <li><Link to="/products" className="hover:text-emerald">Products</Link></li>
              <li><Link to="/contact" className="hover:text-emerald">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-emerald" />{COMPANY.address}</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald" /><a href={`tel:${COMPANY.phone}`} className="hover:text-emerald">{COMPANY.phone}</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald" /><a href={`mailto:${COMPANY.email}`} className="hover:text-emerald">{COMPANY.email}</a></li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-emerald" /><a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-emerald">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Stacklink. All rights reserved.</p>
          <p>UAE's Premium IT Infrastructure & Networking Partner</p>
        </div>
      </div>
    </footer>
  );
}
