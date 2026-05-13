import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function FloatingCTA() {
  const [showLabel, setShowLabel] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowLabel(false), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {showLabel && (
        <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold shadow-elegant border border-border animate-fade-up">
          <span>Chat with Our IT Experts</span>
          <button
            onClick={() => setShowLabel(false)}
            className="text-muted-foreground hover:text-primary"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <span className="absolute -bottom-1.5 right-7 w-3 h-3 bg-white border-r border-b border-border rotate-45" />
        </div>
      )}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi Stacklink, I'd like to chat with your IT experts.")}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-glow animate-pulse-glow hover:scale-110 transition-smooth"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-white shadow-elegant hover:scale-110 transition-smooth"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
