import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 text-white">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep" />
        </div>
      )}
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-royal/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-ember/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-royal-glow backdrop-blur">
          {eyebrow}
        </div>
        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-balance md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75 text-balance">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-ember px-6 py-3 text-sm font-semibold text-white shadow-ember transition hover:brightness-110"
          >
            Get Free Quote
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/60"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
