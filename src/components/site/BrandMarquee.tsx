import { Link } from "@tanstack/react-router";
import { BRANDS } from "@/lib/site-data";

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
            params={{ slug: b.toLowerCase().replace(/\s+/g, "-") }}
            className="shrink-0 px-8 py-4 rounded-xl glass shadow-card hover:shadow-glow hover:-translate-y-1 transition-smooth"
          >
            <span className="font-display font-bold text-lg text-primary whitespace-nowrap">{b}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
