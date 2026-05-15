import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971547832139"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Our IT Experts on WhatsApp"
        className="group inline-flex items-center gap-2.5 md:gap-3 pl-3.5 pr-5 md:pl-4 md:pr-6 py-3 md:py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm md:text-base shadow-[0_8px_28px_-6px_rgba(37,211,102,0.65)] hover:bg-[#128C7E] hover:scale-105 hover:shadow-[0_12px_36px_-8px_rgba(37,211,102,0.8)] transition-all duration-300 ease-out animate-whatsapp-pulse-glow will-change-transform"
      >
        <span className="relative flex w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 items-center justify-center shrink-0">
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-50 group-hover:opacity-0" />
          <MessageCircle className="w-5 h-5 md:w-[22px] md:h-[22px] relative" strokeWidth={2.2} />
        </span>
        <span className="whitespace-nowrap tracking-tight">Chat with Our IT Experts</span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-primary text-white shadow-elegant hover:scale-110 transition-transform duration-300 ease-out"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" strokeWidth={2} />
      </a>
    </div>
  );
}
