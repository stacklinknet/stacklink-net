import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { getPostBySlug, getRelatedPosts, formatBlogDate, BLOG_POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    const url = `https://stacklink-net.lovable.app/blog/${params.slug}`;
    if (!post) return { meta: [{ title: "Blog Post — Stacklink" }] };
    return {
      meta: [
        { title: `${post.title} | Stacklink Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.image },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@type": "Organization", name: "Stacklink" },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="py-32 text-center container mx-auto px-4">
        <h1 className="font-display font-bold text-3xl text-primary mb-4">Blog post not found</h1>
        <p className="text-muted-foreground mb-6">The article you're looking for may have been moved.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <section className="py-32 text-center container mx-auto px-4">
        <h1 className="font-display font-bold text-3xl text-primary mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">{error.message}</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </section>
    </SiteLayout>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = getRelatedPosts(post.slug, 3);

  return (
    <SiteLayout>
      <article>
        <section className="relative overflow-hidden -mt-20 pt-32 pb-12">
          <div className="absolute inset-0">
            <img src={post.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.06 255 / 0.92), oklch(0.22 0.08 230 / 0.85) 50%, oklch(0.32 0.12 200 / 0.6))" }} />
          </div>
          <div className="container mx-auto px-4 relative">
            <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan mt-4">{post.category}</p>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mt-3 max-w-4xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-5 mt-6 text-white/80 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatBlogDate(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full rounded-2xl shadow-elegant mb-10 aspect-[16/9] object-cover"
            />
            <div className="prose prose-lg max-w-none">
              {post.content.map((block, i) => (
                <div key={i} className="mb-8">
                  {block.heading && (
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-4">{block.heading}</h2>
                  )}
                  <p className="text-foreground/85 leading-relaxed text-lg">{block.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-glow hover:scale-105 transition-smooth" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}>
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 bg-muted/40">
            <div className="container mx-auto px-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan">{p.category}</span>
                      <h3 className="font-display font-semibold text-base text-primary mt-2 group-hover:text-cyan transition-smooth line-clamp-2">{p.title}</h3>
                      <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-cyan">
                        Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </SiteLayout>
  );
}

export const __allSlugs = BLOG_POSTS.map((p) => p.slug);