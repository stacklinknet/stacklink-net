import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-glow animate-pulse-glow hover:scale-110 transition-smooth"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${COMPANY.phone}`}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-white shadow-elegant hover:scale-110 transition-smooth"
        aria-label="Call"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
