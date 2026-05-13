import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/971547832139"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Our IT Experts on WhatsApp"
        className="group inline-flex items-center gap-2 md:gap-3 pl-3 pr-4 md:pl-4 md:pr-5 py-2.5 md:py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm md:text-base shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] hover:bg-[#1ebe5b] hover:scale-[1.04] transition-all duration-300 animate-pulse-glow"
      >
        <span className="relative flex w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/15 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-60 group-hover:opacity-0" />
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
        </span>
        <span className="whitespace-nowrap">Chat with Our IT Experts</span>
      </a>
      <a
        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-primary text-white shadow-elegant hover:scale-110 transition-smooth"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
