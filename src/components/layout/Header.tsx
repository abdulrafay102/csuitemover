import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/90 backdrop-blur-xl shadow-elevated" : "bg-gradient-to-b from-navy-deep/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src={logo.url} alt="C-Suite Movers logo" className="h-11 w-11 rounded-full ring-2 ring-royal/60 object-cover" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">C-Suite Movers</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-royal-glow">Executive Relocation</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-royal/40 bg-royal/25 px-2 py-1.5 shadow-royal backdrop-blur-md lg:flex">
          {NAV.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white">
                  {item.label} <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full min-w-[260px] pt-2">
                    <div className="glass-light rounded-xl p-2 shadow-elevated">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to as string}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-deep transition hover:bg-royal/10 hover:text-royal"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to as string}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                activeProps={{ className: "rounded-full px-3 py-1.5 text-sm font-semibold text-navy-deep bg-white shadow-sm" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-ember px-5 py-2.5 text-sm font-semibold text-white shadow-ember transition hover:brightness-110"
          >
            Free Quote
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            {NAV.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label} className="py-1">
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-royal-glow">
                    {item.label}
                  </div>
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to as string}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to as string}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-3 flex flex-col gap-2 px-3">
              <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <Link to="/contact" onClick={() => setOpen(false)} className="rounded-full bg-gradient-ember px-5 py-3 text-center text-sm font-semibold text-white shadow-ember">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
