import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog";

const PAGE_SIZE = 3;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — IT, Networking & Security Insights | Stacklink" },
      { name: "description", content: "Expert guides on networking, cybersecurity, wireless, servers and structured cabling for UAE enterprises. Read the Stacklink blog." },
      { property: "og:title", content: "Stacklink Blog — IT & Networking Insights" },
      { property: "og:description", content: "Expert guides on networking, security, wireless and data center solutions across the UAE." },
      { property: "og:url", content: "https://stacklink-net.lovable.app/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://stacklink-net.lovable.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS;
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = rest.slice(0, visible);
  const hasMore = visible < rest.length;
  return (
    <SiteLayout>
      <section className="relative overflow-hidden -mt-20 pt-32 pb-16">
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.06 255), oklch(0.22 0.08 230) 60%, oklch(0.32 0.12 200))" }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan animate-fade-up">Stacklink Blog</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Insights on IT, networking & security
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mt-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Practical guides and expert opinions from our engineers — helping UAE enterprises make smarter infrastructure decisions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {featured && (
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid md:grid-cols-2 gap-8 mb-16 rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-cyan text-white">Featured</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan">{featured.category}</span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mt-3 group-hover:text-cyan transition-smooth">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatBlogDate(featured.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 mt-6 font-semibold text-cyan">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shown.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 0.05} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="bg-cyan hover:bg-cyan/90 text-white font-semibold px-8"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function BlogCard({ post, delay = 0 }: { post: typeof BLOG_POSTS[number]; delay?: number }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-primary">
          {post.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-primary group-hover:text-cyan transition-smooth line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatBlogDate(post.date)}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-cyan">
            Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}