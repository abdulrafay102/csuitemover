import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const AREAS = [
  { name: "Phoenix", blurb: "Central Phoenix condos, historic districts, Arcadia estates, and everything in between." },
  { name: "Scottsdale", blurb: "Old Town condos to North Scottsdale luxury estates. Gated-community experience." },
  { name: "Tempe", blurb: "ASU-area student and faculty moves, apartments, and family homes." },
  { name: "Chandler", blurb: "Family homes, tech-corridor offices, and Ocotillo relocations." },
  { name: "Mesa", blurb: "East Valley residential moves and commercial relocations." },
  { name: "Gilbert", blurb: "Master-planned community moves with HOA-friendly scheduling." },
  { name: "Glendale", blurb: "West Valley homes, apartments, and businesses near the sports district." },
  { name: "Peoria", blurb: "Lake Pleasant and northwest Valley residential relocations." },
  { name: "Surprise", blurb: "Active-adult communities and family homes across the northwest Valley." },
  { name: "Queen Creek", blurb: "Growing southeast Valley communities and long-haul rural moves." },
  { name: "Paradise Valley", blurb: "Luxury estate moves with white-glove specialty handling." },
  { name: "Cave Creek & Carefree", blurb: "North Valley custom-home moves and desert-property relocations." },
];

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | C-Suite Movers Phoenix Valley" },
      { name: "description", content: "C-Suite Movers serves the entire Phoenix Valley — Phoenix, Scottsdale, Tempe, Chandler, Mesa, Gilbert, Glendale, Peoria, and more." },
      { property: "og:title", content: "Service Areas | C-Suite Movers" },
      { property: "og:description", content: "Serving the entire Phoenix Valley with executive moving service." },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: Areas,
});

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Serving the entire Phoenix Valley."
        subtitle="Local expertise from Paradise Valley to Queen Creek. Long-distance moves anywhere in the continental U.S."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a) => (
              <div key={a.name} className="group rounded-2xl border border-border bg-cream p-6 transition hover:-translate-y-1 hover:border-royal/40 hover:shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-royal text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-deep">{a.name}, AZ</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.blurb}</p>
                <a href={SITE.phoneHref} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                  <Phone className="h-3.5 w-3.5" /> Call for a {a.name} quote
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Phoenix Valley service area map"
              src="https://www.google.com/maps?q=Phoenix,+Arizona+metropolitan+area&output=embed"
              loading="lazy"
              className="h-[420px] w-full"
            />
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-royal p-10 text-center text-white">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Don't see your city?</h2>
            <p className="mx-auto mt-2 max-w-xl text-white/85">We service the entire Phoenix Valley and offer long-distance moves nationwide. Call for a quick answer.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-deep">Free Quote</Link>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
