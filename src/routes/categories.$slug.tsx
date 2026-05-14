import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowRight, Filter } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ProductCard } from "@/components/site/ProductCard";
import { InquiryDialog } from "@/components/site/InquiryDialog";
import { CATEGORIES } from "@/lib/site-data";
import { getProductsByCategory } from "@/lib/catalog";
import { imgForCategory } from "@/components/site/ProductImage";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.cat?.name ?? "Category"} — Stacklink UAE` },
      { name: "description", content: `Buy ${loaderData?.cat?.name} from leading global brands. Genuine, warranty-backed, with installation across UAE.` },
      { property: "og:title", content: `${loaderData?.cat?.name} | Stacklink` },
      { property: "og:description", content: loaderData?.cat?.desc ?? "" },
    ],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display font-bold text-3xl mb-4">Category not found</h1>
        <Link to="/categories" className="text-cyan font-semibold">Browse all categories →</Link>
      </div>
    </SiteLayout>
  ),
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const products = useMemo(() => getProductsByCategory(cat.slug), [cat.slug]);
  const brands = useMemo(() => Array.from(new Set(products.map((p) => p.brand))), [products]);
  const [brand, setBrand] = useState<string | null>(null);
  const filtered = brand ? products.filter((p) => p.brand === brand) : products;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-cyan/20 blur-3xl animate-float" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Shop", to: "/categories" }, { label: cat.name }]} /></div>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="animate-fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Category</p>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">{cat.name}</h1>
              <p className="text-white/80 text-lg mt-4 max-w-2xl">{cat.desc}</p>
            </div>
            <div className="hidden md:block w-48 h-32 rounded-2xl bg-white/95 p-4 shadow-elegant">
              <img src={imgForCategory(cat.slug)} alt={cat.name} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {cat.subs && (
        <section className="py-12 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">Subcategories</p>
            <div className="flex flex-wrap gap-2">
              {cat.subs.map((s) => (
                <Link
                  key={s.slug}
                  to="/categories/$slug/$sub"
                  params={{ slug: cat.slug, sub: s.slug }}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-card border border-border text-sm text-primary font-medium hover:bg-cyan hover:text-white hover:border-cyan transition-smooth"
                >
                  {s.name} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          {brands.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mr-2"><Filter className="w-4 h-4" /> Filter by brand:</span>
              <button onClick={() => setBrand(null)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-smooth ${!brand ? "bg-primary text-white" : "bg-muted text-foreground/70 hover:bg-cyan/10"}`}>All</button>
              {brands.map((b) => (
                <button key={b} onClick={() => setBrand(b)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-smooth ${brand === b ? "bg-primary text-white" : "bg-muted text-foreground/70 hover:bg-cyan/10"}`}>{b}</button>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products to display yet — request a quote for any {cat.name} requirement.</p>
              <InquiryDialog
                source={`Category: ${cat.name}`}
                subject={`${cat.name} Inquiry — Stacklink`}
                defaultRequirement={cat.name}
                title={`Inquire about ${cat.name}`}
                trigger={<button className="px-6 py-3 rounded-xl text-white font-semibold shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>Request a Quote</button>}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((p, i) => (<ProductCard key={p.slug} p={p} delay={i * 30} />))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
