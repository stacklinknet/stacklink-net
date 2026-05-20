import { Link } from "@tanstack/react-router";
import { BRANDS, brandLogo, brandSlug } from "@/lib/site-data";

export function BrandMarquee() {
  const list = [...BRANDS, ...BRANDS];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-4 animate-marquee w-max">
        {list.map((b, i) => (
          <Link
            key={i}
            to="/brands/$slug"
            params={{ slug: brandSlug(b.name) }}
            className="shrink-0 w-44 h-24 px-6 flex items-center justify-center rounded-2xl bg-white border border-border shadow-card hover:shadow-glow hover:-translate-y-1 hover:border-cyan/40 transition-smooth group"
            aria-label={b.name}
          >
            <img
              src={b.logo}
              alt={b.name}
              />
              loading="lazy"
              className="max-h-12 max-w-[120px] object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-smooth"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                const fb = t.nextElementSibling as HTMLElement | null;
                if (fb) fb.style.display = "block";
              }}
            <span style={{ display: "none" }} className="font-display font-bold text-base text-primary">{b.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
