import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/stacklink-logo.png";
import { COMPANY, CATEGORIES } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/categories", label: "Shop", hasMega: true },
  { to: "/brands", label: "Partners" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate({ to: "/search", search: { q: q.trim() } as any });
    setQ("");
    setOpen(false);
  };

  const serverCat = CATEGORIES.find((c) => c.slug === "server-storage");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass shadow-card py-2" : "bg-white/85 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center group shrink-0" aria-label="Stacklink home">
          <img
            src={logo}
            alt="Stacklink"
            className="h-11 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) =>
            n.hasMega ? (
              <div key={n.to} className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                <Link
                  to={n.to}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-cyan transition-smooth"
                  activeProps={{ className: "text-cyan" }}
                >
                  {n.label} <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {megaOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[760px] z-50 animate-fade-up">
                    <div className="rounded-2xl glass shadow-elegant border border-border p-6 grid grid-cols-3 gap-4">
                      <div className="col-span-2 grid grid-cols-2 gap-2">
                        <p className="col-span-2 text-xs font-bold uppercase tracking-widest text-cyan mb-1">All Categories</p>
                        {CATEGORIES.map((c) => (
                          <Link
                            key={c.slug}
                            to="/categories/$slug"
                            params={{ slug: c.slug }}
                            className="px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-cyan/10 hover:text-cyan transition-smooth"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-2">Server & Storage</p>
                        <div className="space-y-1 max-h-72 overflow-auto pr-1">
                          {serverCat?.subs?.map((s) => (
                            <Link
                              key={s.slug}
                              to="/categories/$slug/$sub"
                              params={{ slug: serverCat.slug, sub: s.slug }}
                              className="block px-2 py-1.5 rounded text-xs text-foreground/70 hover:text-cyan transition-smooth"
                            >
                              › {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-cyan transition-smooth after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-0.5 after:bg-cyan hover:after:w-6 after:transition-all"
                activeProps={{ className: "text-cyan" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs ml-auto">
          <form onSubmit={submitSearch} className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products, brands..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-muted/60 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none"
            />
          </form>
        </div>

        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hidden xl:flex items-center gap-1 text-xs text-foreground/70 hover:text-cyan transition-smooth">
            <Phone className="w-3.5 h-3.5" /> {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-glow hover:scale-105 transition-smooth"
            style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-foreground"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border mt-2 animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            <form onSubmit={submitSearch} className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-muted/60 border border-border outline-none"
              />
            </form>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-cyan/10 hover:text-cyan"
              >
                {n.label}
              </Link>
            ))}
            <details className="px-2">
              <summary className="px-2 py-2 rounded-lg text-sm font-semibold text-cyan cursor-pointer">Categories</summary>
              <div className="pl-3 mt-1 flex flex-col">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/categories/$slug"
                    params={{ slug: c.slug }}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded text-sm text-foreground/70 hover:text-cyan"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg text-center text-white font-semibold"
              style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
