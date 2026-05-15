import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, ShieldCheck, Truck, Headphones } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { InquiryDialog } from "@/components/site/InquiryDialog";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { COMPANY, brandLogo, brandSlug } from "@/lib/site-data";
import { getProduct, getRelated } from "@/lib/catalog";
import { imgForCategory } from "@/components/site/ProductImage";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product, related: getRelated(product) };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.product?.title ?? "Product"} — Stacklink UAE` },
      { name: "description", content: loaderData?.product?.description ?? "" },
      { property: "og:title", content: loaderData?.product?.title ?? "" },
      { property: "og:description", content: loaderData?.product?.shortSpec ?? "" },
      { property: "og:url", content: `https://stacklink-elite-theme.lovable.app/products/${params.slug}` },
      { property: "og:type", content: "product" },
    ],
    links: [
      { rel: "canonical", href: `https://stacklink-elite-theme.lovable.app/products/${params.slug}` },
    ],
    scripts: loaderData?.product ? [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: loaderData.product.title,
          description: loaderData.product.description,
          brand: { "@type": "Brand", name: loaderData.product.brand },
          category: loaderData.product.categoryName,
          url: `https://stacklink-elite-theme.lovable.app/products/${params.slug}`,
        }),
      },
    ] : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display font-bold text-3xl mb-4">Product not found</h1>
        <Link to="/categories" className="text-cyan font-semibold">Browse categories →</Link>
      </div>
    </SiteLayout>
  ),
});

function ProductDetail() {
  const { product, related } = Route.useLoaderData();
  const img = imgForCategory(product.category);
  const waMsg = encodeURIComponent(`Hi Stacklink, I'd like to inquire about: ${product.title}`);

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 pt-8 pb-4">
        <Breadcrumbs items={[
          { label: "Shop", to: "/categories" },
          { label: product.categoryName, to: "/categories/$slug", params: { slug: product.category } },
          { label: product.title },
        ]} />
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-10 shadow-card aspect-square flex items-center justify-center animate-fade-up">
            <img src={img} alt={product.title} className="max-w-full max-h-full object-contain" />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Link to="/brands/$slug" params={{ slug: brandSlug(product.brand) }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-border shadow-sm hover:shadow-glow transition-smooth">
                <img src={brandLogo(product.brandDomain)} alt={product.brand} className="h-5 max-w-[80px] object-contain" />
                <span className="text-xs font-semibold text-primary">{product.brand}</span>
              </Link>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan/10 text-cyan font-semibold">{product.categoryName}</span>
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 leading-tight">{product.title}</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            <div className="rounded-2xl border border-border bg-card p-6 mb-6">
              <h3 className="font-display font-semibold text-lg text-primary mb-4">Key Specifications</h3>
              <dl className="grid sm:grid-cols-2 gap-3">
                {product.specs.map((s: {label:string;value:string}) => (
                  <div key={s.label} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-1" />
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</dt>
                      <dd className="text-sm text-primary font-medium">{s.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <InquiryDialog
                source={`Product: ${product.title}`}
                subject={`Product Inquiry — ${product.title}`}
                defaultRequirement={product.categoryName}
                title={`Get a quote for ${product.title}`}
                trigger={
                  <button className="flex-1 min-w-[180px] px-7 py-4 rounded-xl text-white font-semibold shadow-glow hover:scale-[1.02] transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                    Request a Quote
                  </button>
                }
              />
              <a href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:scale-[1.02] transition-smooth">
                <MessageCircle className="w-4 h-4" /> WhatsApp Inquiry
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { Icon: ShieldCheck, label: "Genuine Warranty" },
                { Icon: Truck, label: "UAE-wide Delivery" },
                { Icon: Headphones, label: "24/7 Support" },
              ].map(({ Icon, label }) => (
                <div key={label} className="p-3 rounded-xl bg-muted/40 border border-border">
                  <Icon className="w-5 h-5 text-cyan mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-primary">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts items={related} />
    </SiteLayout>
  );
}
