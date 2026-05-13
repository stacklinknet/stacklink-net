import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/stacklink-logo.png";
import { COMPANY } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass shadow-card py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Stacklink" className="h-10 w-10 object-contain" />
          <span className="font-display font-bold text-xl text-primary tracking-tight">
            Stack<span className="text-emerald">link</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-emerald hover:bg-emerald/5 transition-smooth"
              activeProps={{ className: "text-emerald bg-emerald/10" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-foreground/70 hover:text-emerald transition-smooth">
            <Phone className="w-4 h-4" /> {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg bg-emerald text-white text-sm font-semibold shadow-glow hover:scale-105 transition-smooth"
            style={{ background: "var(--gradient-emerald)" }}
          >
            Request a Quote
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
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-emerald/10 hover:text-emerald"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg text-center text-white font-semibold"
              style={{ background: "var(--gradient-emerald)" }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
