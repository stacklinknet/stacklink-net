import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { SearchX } from "lucide-react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { searchProducts } from "@/lib/catalog";

const SearchSchema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/search")({
  validateSearch: (s) => SearchSchema.parse(s),
  head: () => ({
    meta: [{ title: `Search — Stacklink` }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const results = useMemo(() => (q ? searchProducts(q) : []), [q]);
  return (
    <SiteLayout>
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: `Search results` }]} />
          <h1 className="font-display font-bold text-3xl md:text-4xl text-primary mt-4">
            {q ? `Search: "${q}"` : "Search products"}
          </h1>
          <p className="text-muted-foreground mt-2">{results.length} result{results.length === 1 ? "" : "s"}</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {results.length === 0 ? (
            <div className="text-center py-20">
              <SearchX className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No products matched. Try browsing categories.</p>
              <Link to="/categories" className="text-cyan font-semibold">Browse all categories →</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {results.map((p, i) => (<ProductCard key={p.slug} p={p} delay={i * 30} />))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
