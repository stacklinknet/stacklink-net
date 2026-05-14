import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

export function RelatedProducts({ items, title = "Related Products" }: { items: Product[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((p, i) => (<ProductCard key={p.slug} p={p} delay={i * 40} />))}
        </div>
      </div>
    </section>
  );
}
