import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Shield } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="C-Suite Movers" className="h-14 w-14 rounded-full ring-2 ring-royal/60" />
              <div>
                <div className="font-display text-xl font-bold text-white">C-Suite Movers</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-royal-glow">Executive Relocation</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Arizona's premier moving company for homes, offices, and specialty items. Licensed, insured, and trusted by
              families and businesses across the Valley.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-royal hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-royal hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SITE.socials.google} target="_blank" rel="noreferrer" aria-label="Google Business" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xs font-bold transition hover:border-royal hover:text-white">
                G
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}` as string} className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/service-areas" className="hover:text-white">Service Areas</Link></li>
              <li><Link to="/moving-checklist" className="hover:text-white">Moving Checklist</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-royal-glow" /><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-royal-glow" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-royal-glow" />{SITE.address}</li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-royal-glow" />{SITE.hours}</li>
            </ul>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-xs">
              <Shield className="h-4 w-4 text-royal-glow" /> Licensed & Insured · USDOT compliant
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <div>© {new Date().getFullYear()} C-Suite Movers. All rights reserved.</div>
          <div>Executive relocation · Residential · Commercial · Specialty</div>
        </div>
      </div>
    </footer>
  );
}
