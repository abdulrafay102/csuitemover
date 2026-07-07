import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, Award, Clock, HeartHandshake, DollarSign, Users, Sparkles, Star,
  Home, Building2, Package, MapPin, Truck, Phone, ArrowRight, CheckCircle2,
} from "lucide-react";
import truck from "@/assets/truck-loading.asset.json";
import livingRoom from "@/assets/living-room.asset.json";
import homeExt from "@/assets/home-exterior.asset.json";
import crates from "@/assets/mover-crates.asset.json";
import tv from "@/assets/tv-install.asset.json";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SITE, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C-Suite Movers | Premium Moving Company in Phoenix, AZ" },
      {
        name: "description",
        content:
          "Executive-level residential, commercial, packing, long-distance and specialty moving across Phoenix, Scottsdale, Tempe & the Valley. Licensed, insured, on-time.",
      },
      { property: "og:title", content: "C-Suite Movers | Premium Moving Company in Phoenix, AZ" },
      { property: "og:description", content: "White-glove moving across the Phoenix Valley. Licensed & insured. Free quote in under an hour." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Package, MapPin, Truck, Sparkles,
};

const FEATURES = [
  { icon: Shield, title: "Licensed & Insured", text: "USDOT-registered, fully bonded, and covered end-to-end." },
  { icon: Award, title: "Experienced Movers", text: "Background-checked, uniformed crews with 5+ years on the truck." },
  { icon: DollarSign, title: "Transparent Pricing", text: "Flat-rate & binding estimates. No fuel surcharges. No surprises." },
  { icon: Building2, title: "Residential & Commercial", text: "From studios to 20,000 sq ft offices, we scale to your move." },
  { icon: HeartHandshake, title: "White-Glove Handling", text: "Museum-grade padding, custom crating, floor & doorway protection." },
  { icon: Clock, title: "On-Time, Every Time", text: "Guaranteed arrival windows. Foreman calls 30 minutes ahead." },
  { icon: Users, title: "Real Customer Support", text: "A human answers the phone. One point of contact from quote to unload." },
  { icon: Star, title: "Satisfaction Guaranteed", text: "If we don't earn 5 stars, we make it right. Simple as that." },
];

const STEPS = [
  { n: "01", title: "Request Your Free Quote", text: "Tell us where, when, and what's moving. Get a written estimate the same day." },
  { n: "02", title: "Schedule & Plan", text: "A dedicated move consultant confirms crew size, truck size, and materials." },
  { n: "03", title: "Professional Packing & Transport", text: "Uniformed crew arrives, protects your home, wraps, loads, and drives." },
  { n: "04", title: "Safe Delivery & Setup", text: "We place furniture, reassemble beds, and don't leave until you're happy." },
];

const FAQS = [
  { q: "How quickly can you schedule my move?", a: "For local Phoenix-area moves we can usually schedule within 48–72 hours. Same-day and next-day availability is common outside of the last week of the month." },
  { q: "Are you licensed and insured?", a: "Yes. C-Suite Movers is fully licensed, USDOT-compliant for interstate moves, and carries full cargo and liability insurance on every job." },
  { q: "Do you provide packing materials?", a: "We do. Museum-grade paper, double-walled cartons, wardrobe boxes, custom crates for artwork and glass, mattress bags, and floor protection are all available." },
  { q: "How is pricing calculated?", a: "Local moves are typically hourly with a flat truck fee. Long-distance and specialty moves are quoted as binding flat rates based on inventory and distance — never based on gas prices or hidden surcharges." },
  { q: "Can you move pianos, safes, or artwork?", a: "Yes. Our specialty crew handles grand and upright pianos, gun safes up to 1,500 lbs, sculpture, wine collections, and fine art with custom rigging and climate-controlled transport." },
  { q: "Do you offer storage?", a: "We partner with climate-controlled, 24/7-monitored storage facilities in the Phoenix area for short-term staging and long-term storage between moves." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-gradient-hero pt-24 text-white">
        <div className="absolute inset-0">
          <img src={truck.url} alt="C-Suite Movers crew loading a truck" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        </div>
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-royal/25 blur-3xl" />
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-ember/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-royal-glow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-glow" /> Arizona's Executive Movers
            </div>
            <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[1.02] text-balance md:text-6xl lg:text-7xl">
              Moving Made <span className="bg-gradient-to-r from-royal-glow to-white bg-clip-text text-transparent">Simple.</span>
              <br />
              Professional. Reliable.
              <br />
              Stress-Free.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75 text-balance">
              Whether you're moving your home, office, or specialty items, C-Suite Movers delivers dependable
              service with care, efficiency, and unmatched professionalism.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-ember px-7 py-4 text-sm font-semibold text-white shadow-ember transition hover:brightness-110"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-white/60"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              <Stat n="2,400+" l="Moves Completed" />
              <Stat n="4.9★" l="Avg. Rating" />
              <Stat n="100%" l="Licensed & Insured" />
            </div>
          </div>

          <div className="animate-fade-up lg:mt-8">
            <QuoteForm compact />
          </div>
        </div>

        {/* trust marquee */}
        <div className="relative overflow-hidden border-y border-white/10 bg-navy-deep/80 py-4 backdrop-blur">
          <div className="flex animate-marquee gap-12 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                <span>✦ Licensed & Insured</span>
                <span>✦ USDOT Compliant</span>
                <span>✦ Background-Checked Crews</span>
                <span>✦ Flat-Rate Pricing</span>
                <span>✦ 4.9-Star Service</span>
                <span>✦ Phoenix · Scottsdale · Tempe · Chandler · Mesa</span>
                <span>✦ Same-Day Availability</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Why C-Suite"
            title="A moving company built for people who won't accept mediocre."
            subtitle="We're not the cheapest truck in the parking lot — we're the company you call when the piano is a Steinway, the office relaunches Monday, or the estate has been in your family for generations."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-royal transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-royal text-white shadow-royal">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-deep">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Every kind of move, done the right way."
            subtitle="From a Scottsdale studio to a 40-desk office relocation to a coast-to-coast estate move, we bring the same crew, same standards, same care."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              const img = [truck, livingRoom, crates, homeExt, tv, truck][i % 6];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}` as string}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={img.url} alt={s.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-royal shadow-royal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-royal-glow">{s.tagline}</div>
                      <h3 className="mt-1 font-display text-xl font-bold text-white">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                      Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden bg-gradient-dark py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-royal/60 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            dark
            eyebrow="How It Works"
            title="Four steps from first call to keys-in-hand."
            subtitle="A simple, transparent process — because moving day should be the least stressful part of your relocation."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-royal/50 hover:bg-white/10">
                <div className="font-display text-5xl font-bold text-royal-glow/60">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-royal-glow/60 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / IMAGE SPLIT */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img src={livingRoom.url} alt="Furniture wrapped and protected in a client's home" className="w-full rounded-3xl shadow-elevated" />
            <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl bg-white p-5 shadow-elevated md:block">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-ember text-ember" />)}
              </div>
              <p className="mt-2 text-sm font-medium text-navy-deep">"Every piece of furniture wrapped, every doorway padded. Best movers we've ever hired."</p>
              <p className="mt-1 text-xs text-muted-foreground">— Verified Google Review</p>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-royal/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-royal">
              Our Standard
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep md:text-5xl">
              We protect your home like it's ours.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Before a single item leaves the room, we lay down floor runners, wrap banisters, pad doorways, and shrink-wrap
              every piece of upholstered furniture. Dining tables get blanket-wrapped and corner-guarded. TVs travel in padded
              cases. Artwork ships in custom crates. That's not an upsell — that's how every C-Suite move begins.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Full-home walk-through with the foreman before we start",
                "Uniformed, background-checked, W-2 crews (never day-labor)",
                "Digital inventory with photos on every specialty item",
                "24/7 GPS tracking on all long-distance trucks",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-royal px-6 py-3 text-sm font-semibold text-white shadow-royal"
            >
              About C-Suite Movers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-royal">FAQ</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-4xl">
              Answers before you ask.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still have questions? Our team is standing by at{" "}
              <a href={SITE.phoneHref} className="font-semibold text-royal">{SITE.phone}</a>.
            </p>
            <Link to="/faq" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal">
              See all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-royal py-20 text-white">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:text-left lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Ready when you are.</h2>
            <p className="mt-2 max-w-xl text-white/85">
              Get a written quote in under an hour. No pressure, no hidden fees, no gimmicks — just a straight answer from Arizona's executive movers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy-deep shadow-elevated">
              Get Free Quote
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold md:text-3xl">{n}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/60">{l}</div>
    </div>
  );
}

export function SectionHeader({
  eyebrow, title, subtitle, dark,
}: { eyebrow: string; title: string; subtitle?: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] ${
        dark ? "border-white/15 bg-white/5 text-royal-glow" : "border-royal/20 bg-royal/5 text-royal"
      }`}>
        {eyebrow}
      </div>
      <h2 className={`mt-4 font-display text-3xl font-bold text-balance md:text-5xl ${dark ? "text-white" : "text-navy-deep"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed text-balance md:text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
