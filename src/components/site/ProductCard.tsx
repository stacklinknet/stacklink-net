import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { COMPANY, brandLogo } from "@/lib/site-data";
import { imgForCategory } from "./ProductImage";
import { InquiryDialog } from "./InquiryDialog";

export function ProductCard({ p, delay = 0 }: { p: Product; delay?: number }) {
  const img = imgForCategory(p.category);
  const waMsg = encodeURIComponent(`Hi Stacklink, I'd like to inquire about: ${p.title}`);
  return (
    <div
      className="group rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth overflow-hidden flex flex-col animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to="/products/$slug" params={{ slug: p.slug }} className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <img src={img} alt={p.title} loading="lazy" className="w-full h-full object-contain p-6 group-hover:scale-110 transition-smooth duration-500" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-lg px-2 py-1 shadow-sm">
          <img src={brandLogo(p.brandDomain)} alt={p.brand} className="h-5 max-w-[70px] object-contain" loading="lazy" />
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-4">
          <span className="px-3 py-1.5 rounded-full bg-white text-primary text-xs font-semibold inline-flex items-center gap-1">
            Quick View <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan mb-1">{p.categoryName}</p>
        <Link to="/products/$slug" params={{ slug: p.slug }} className="font-display font-semibold text-sm text-primary leading-snug line-clamp-2 mb-2 hover:text-cyan transition-smooth">
          {p.title}
        </Link>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">{p.shortSpec}</p>
        <div className="flex gap-2 mt-auto">
          <InquiryDialog
            source={`Product Card: ${p.title}`}
            subject={`Product Inquiry — ${p.title}`}
            defaultRequirement={p.categoryName}
            title={`Inquire about ${p.title}`}
            trigger={
              <button type="button" className="flex-1 px-3 py-2 rounded-lg text-white text-xs font-semibold hover:opacity-90 transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                Inquire
              </button>
            }
          />
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp inquiry for ${p.title}`}
            className="px-3 py-2 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-smooth"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
