import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SITE } from "@/lib/site";

const GROUPS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Booking & Pricing",
    items: [
      { q: "How do I get a quote?", a: "Call or text us at " + SITE.phone + ", or use the quote form on any page. Local moves are quoted the same day; long-distance and commercial moves usually within one business day." },
      { q: "How is pricing calculated?", a: "Local moves are typically hourly with a flat truck fee. Long-distance and specialty moves are flat-rate binding estimates based on inventory and distance." },
      { q: "Do you require a deposit?", a: "Most local moves are deposit-free. Long-distance and specialty moves require a small refundable deposit to hold the truck and crew." },
      { q: "What forms of payment do you accept?", a: "All major credit cards, ACH, cash, check, and Zelle." },
    ],
  },
  {
    title: "Insurance & Protection",
    items: [
      { q: "Are you licensed and insured?", a: "Yes — fully licensed in Arizona, USDOT-compliant for interstate moves, with cargo, liability, and workers' comp insurance on every job." },
      { q: "What if something is damaged?", a: "We include basic released-value protection at no cost, and offer full replacement-value coverage on request. Claims are handled directly by our office." },
      { q: "Do you issue Certificates of Insurance?", a: "Yes — COIs for building management can be issued within one business day of request." },
    ],
  },
  {
    title: "Move Day",
    items: [
      { q: "What time will the crew arrive?", a: "You get a 2-hour arrival window, and your foreman calls 30 minutes before arrival. Most crews arrive within the first hour of the window." },
      { q: "Do I need to be there?", a: "Yes — someone authorized to make decisions should be present at both origin and destination for walk-throughs and inventory sign-off." },
      { q: "What do I need to do before you arrive?", a: "Empty drawers of loose items (dressers can stay assembled), disconnect electronics, and defrost/drain any appliances. We handle the rest." },
      { q: "How long will my move take?", a: "A 2-bedroom apartment typically takes 4–6 hours. A 3–4 bedroom home takes 6–10 hours. Long-distance loads take 4–8 hours to load." },
    ],
  },
  {
    title: "Services & Specialty",
    items: [
      { q: "Do you offer packing services?", a: "Yes — full, partial, and fragile-only packing with museum-grade materials." },
      { q: "Can you move pianos, safes, and artwork?", a: "Yes — trained specialty crews for grand pianos, gun safes up to 1,500 lbs, and custom-crated fine art." },
      { q: "Do you offer storage?", a: "We partner with climate-controlled, 24/7-monitored storage in Phoenix for short and long-term storage." },
      { q: "Do you do commercial moves?", a: "Yes — after-hours and weekend office relocations with IT coordination and workstation reassembly." },
    ],
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Moving FAQ | C-Suite Movers Phoenix" },
      { name: "description", content: "Answers to the most common questions about moving with C-Suite Movers — pricing, insurance, packing, specialty items, and more." },
      { property: "og:title", content: "Moving FAQ | C-Suite Movers" },
      { property: "og:description", content: "Answers to common questions about pricing, insurance, packing and more." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: GROUPS.flatMap((g) =>
            g.items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything, answered."
        subtitle={`Still stuck? Call us at ${SITE.phone} — a human answers, and there's no obligation.`}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl space-y-14 px-4 lg:px-8">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="mb-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">{g.title}</h2>
              <FAQAccordion items={g.items} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
