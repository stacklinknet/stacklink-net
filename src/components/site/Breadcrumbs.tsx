import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb { label: string; to?: string; params?: Record<string, string>; }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-cyan transition-smooth">
        <Home className="w-3.5 h-3.5" /> Home
      </Link>
      {items.map((c, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          {c.to ? (
            <Link to={c.to as any} params={c.params as any} className="hover:text-cyan transition-smooth">{c.label}</Link>
          ) : (
            <span className="text-primary font-medium">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
