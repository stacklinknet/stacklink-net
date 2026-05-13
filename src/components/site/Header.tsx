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
        scrolled ? "glass shadow-card py-2" : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Stacklink home">
          <img
            src={logo}
            alt="Stacklink"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-2deg] drop-shadow-md"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-cyan transition-smooth after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-0.5 after:bg-cyan hover:after:w-6 after:transition-all"
              activeProps={{ className: "text-cyan" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-foreground/70 hover:text-cyan transition-smooth">
            <Phone className="w-4 h-4" /> {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold shadow-glow hover:scale-105 transition-smooth"
            style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}
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
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-cyan/10 hover:text-cyan"
              >
                {n.label}
              </Link>
            ))}
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
