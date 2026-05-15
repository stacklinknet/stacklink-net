import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ProductCard } from "@/components/site/ProductCard";
import { InquiryDialog } from "@/components/site/InquiryDialog";
import { CATEGORIES, COMPANY } from "@/lib/site-data";
import { getProductsByCategory } from "@/lib/catalog";
import { imgForCategory } from "@/components/site/ProductImage";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/categories/$slug/$sub")({
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    const sub = cat.subs?.find((s) => s.slug === params.sub);
    if (!sub) throw notFound();
    return { cat, sub };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.sub?.name ?? "Subcategory"} — ${loaderData?.cat?.name} | Stacklink UAE` },
      { name: "description", content: `Buy ${loaderData?.sub?.name} from Dell, HPE, IBM and more. Genuine, warranty-backed, with installation across UAE.` },
      { property: "og:title", content: `${loaderData?.sub?.name} — ${loaderData?.cat?.name} | Stacklink` },
      { property: "og:description", content: `Shop ${loaderData?.sub?.name} from Dell, HPE, IBM and more. Genuine, warranty-backed enterprise hardware with UAE-wide delivery and installation.` },
      { property: "og:url", content: `https://stacklink-elite-theme.lovable.app/categories/${params.slug}/${params.sub}` },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: `https://stacklink-elite-theme.lovable.app/categories/${params.slug}/${params.sub}` },
    ],
  }),
  component: SubcategoryPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display font-bold text-3xl mb-4">Subcategory not found</h1>
        <Link to="/categories" className="text-cyan font-semibold">Browse all categories →</Link>
      </div>
    </SiteLayout>
  ),
});

function SubcategoryPage() {
  const { cat, sub } = Route.useLoaderData();
  const products = useMemo(() => getProductsByCategory(cat.slug, sub.slug), [cat.slug, sub.slug]);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-6">
            <Breadcrumbs items={[
              { label: "Shop", to: "/categories" },
              { label: cat.name, to: "/categories/$slug", params: { slug: cat.slug } },
              { label: sub.name },
            ]} />
          </div>
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">{cat.name}</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">{sub.name}</h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl">Original {sub.name} from Dell, HPE, IBM and more — supplied and supported across the UAE.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <img src={imgForCategory(cat.slug)} alt="" className="w-32 h-32 mx-auto object-contain opacity-50" />
              <p className="text-muted-foreground mt-4 mb-6">Tell us your exact {sub.name} requirement — our team will source it for you.</p>
              <div className="flex justify-center gap-3">
                <InquiryDialog
                  source={`Subcategory: ${sub.name}`}
                  subject={`${sub.name} Inquiry — Stacklink`}
                  defaultRequirement={sub.name}
                  title={`Inquire about ${sub.name}`}
                  trigger={<button className="px-6 py-3 rounded-xl text-white font-semibold shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>Request a Quote</button>}
                />
                <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi Stacklink, I'd like to inquire about ${sub.name}.`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((p, i) => (<ProductCard key={p.slug} p={p} delay={i * 30} />))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
