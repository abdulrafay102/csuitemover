import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { Award, Heart, Shield, Target, Users, Truck } from "lucide-react";
import truck from "@/assets/truck-loading.asset.json";
import crates from "@/assets/mover-crates.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About C-Suite Movers | Arizona's Executive Moving Company" },
      { name: "description", content: "Meet C-Suite Movers — a family-run, executive-caliber moving company built on white-glove service, transparent pricing, and Phoenix roots." },
      { property: "og:title", content: "About C-Suite Movers" },
      { property: "og:description", content: "Executive-caliber moving built on white-glove service and transparent pricing." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Shield, title: "Integrity", text: "Written estimates. Binding pricing. No surprise line items." },
  { icon: Heart, title: "Care", text: "Every home is protected before the first box moves." },
  { icon: Target, title: "Precision", text: "A foreman on every job. A plan for every room." },
  { icon: Users, title: "People", text: "W-2 crews we train, insure, and stand behind." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Executive moving, built from the truck up."
        subtitle="C-Suite Movers was founded on a simple idea: bring the discipline of corporate logistics to a service that too often treats your belongings like inventory."
        image={truck.url}
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <img src={crates.url} alt="C-Suite Movers crew member with stacked moving crates" className="rounded-3xl shadow-elevated" />
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-royal">Our Story</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-4xl">
              Started by a foreman. Built by families who choose us twice.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We started C-Suite Movers after too many years watching great moves get ruined by bad crews — rushed loading,
              chipped corners, mystery charges at delivery. So we built the company we wanted to hire: uniformed W-2 crews,
              a foreman on every job, museum-grade packing materials on the truck by default, and binding written estimates.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today we serve families and businesses across the Phoenix Valley — from Scottsdale estates to Tempe apartments
              to Chandler office relocations — plus long-distance moves anywhere in the continental U.S. Our repeat-customer
              rate is our proudest number.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-cream p-4 text-center">
                <div className="font-display text-2xl font-bold text-royal">2,400+</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Moves</div>
              </div>
              <div className="rounded-xl border border-border bg-cream p-4 text-center">
                <div className="font-display text-2xl font-bold text-royal">4.9★</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Avg Rating</div>
              </div>
              <div className="rounded-xl border border-border bg-cream p-4 text-center">
                <div className="font-display text-2xl font-bold text-royal">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-royal/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-royal">
              Our Values
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep md:text-5xl">
              Four commitments we live by.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-royal text-white shadow-royal">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-deep">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-gradient-royal py-20 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:text-left lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Let's move you the right way.</h2>
            <p className="mt-2 text-white/85">Free quote in under an hour. Zero pressure.</p>
          </div>
          <Link to="/contact" className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy-deep shadow-elevated">
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
