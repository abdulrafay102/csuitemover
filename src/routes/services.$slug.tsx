import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import livingRoom from "@/assets/living-room.asset.json";
import homeExt from "@/assets/home-exterior.asset.json";
import crates from "@/assets/mover-crates.asset.json";
import truck from "@/assets/truck-loading.asset.json";
import tv from "@/assets/tv-install.asset.json";

type Content = {
  hero: { eyebrow: string; title: string; subtitle: string; image: string };
  intro: string;
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

const CONTENT: Record<string, Content> = {
  "residential-moving": {
    hero: {
      eyebrow: "Residential Moving",
      title: "White-glove home moving across the Phoenix Valley.",
      subtitle: "From single-bedroom apartments to luxury estates, our crews treat every home like it's their own.",
      image: livingRoom.url,
    },
    intro:
      "Moving your home is one of the most disruptive things a family goes through - and the wrong crew can turn it into a nightmare. C-Suite Movers built our residential division to be the opposite: a calm, methodical, protective process that leaves you unpacked and settled in less time than you thought possible. Every residential move begins with a walk-through, a written binding estimate, and a foreman assigned to your job from load day to unload day.",
    benefits: [
      "Full-home walk-through and written binding estimate",
      "Floor runners, doorway padding, and banister protection installed before we touch a single box",
      "Every piece of upholstered furniture shrink-wrapped; wood furniture blanket-wrapped and corner-guarded",
      "Beds disassembled and reassembled, TVs mounted or dismounted, appliances safely disconnected",
      "Uniformed, background-checked, W-2 crews - never day labor",
      "Full replacement-value cargo insurance on every move",
    ],
    process: [
      { title: "Free in-home or video walk-through", text: "We inventory your home and confirm access, parking, elevators, and specialty items." },
      { title: "Binding written estimate", text: "You get a flat rate - no fuel surcharges, no fine-print add-ons." },
      { title: "Load day", text: "A foreman and uniformed crew arrive on time, protect the home, and load with care." },
      { title: "Unload & setup", text: "We place furniture per your plan, reassemble beds, and don't leave until you're happy." },
    ],
    faqs: [
      { q: "Do you move small apartments and studios?", a: "Absolutely. We move studios, one-bedrooms, and everything up to 10,000+ sq ft estates with equal care." },
      { q: "How far in advance should I book?", a: "For weekday moves, 1–2 weeks. For last-week-of-the-month or weekend moves, 3–4 weeks is ideal." },
      { q: "Do you disassemble and reassemble furniture?", a: "Yes - beds, dining tables, sectionals, cribs, exercise equipment. It's included on most residential moves." },
      { q: "What about my TV, artwork, and mirrors?", a: "TVs travel in padded cases; artwork and mirrors in custom cartons or crates depending on size and value." },
    ],
  },
  "commercial-moving": {
    hero: {
      eyebrow: "Commercial & Office Moving",
      title: "Zero-downtime office relocations.",
      subtitle: "We move corporate offices, medical suites, and retail after-hours so your team walks in Monday ready to work.",
      image: tv.url,
    },
    intro:
      "A commercial move isn't just furniture - it's payroll, productivity, and reputation on the line. C-Suite Movers plans commercial relocations backwards from the moment your team walks back through the door. We coordinate with your IT, facilities, and building management, tag and inventory every workstation, move after hours or over weekends, and reassemble everything so Monday morning feels ordinary - not disruptive.",
    benefits: [
      "After-hours and weekend moves to minimize downtime",
      "Workstation tagging, digital inventory, and reassembly per your floor plan",
      "IT-safe handling with anti-static protection for servers and monitors",
      "COI (Certificate of Insurance) issued to your building management on request",
      "Furniture, files, safes, and modular systems handled by experienced crews",
      "Single point of contact from planning through post-move punch list",
    ],
    process: [
      { title: "Site survey & plan", text: "We walk both spaces, meet with IT and facilities, and build a phased timeline." },
      { title: "Pre-move prep", text: "Labels, crates, and materials delivered in advance; sensitive items pre-packed." },
      { title: "The move", text: "After-hours execution with a project lead on-site and updates to your ops team." },
      { title: "Reassembly & punch list", text: "Desks placed, monitors mounted, files racked, and we walk the space with you." },
    ],
    faqs: [
      { q: "Can you move over a weekend to avoid downtime?", a: "Yes - that's how we prefer to do it. Most commercial moves happen Friday night through Sunday." },
      { q: "Do you provide certificates of insurance?", a: "Yes, we issue COIs to building management with your specific insured parties and limits." },
      { q: "Do you handle office furniture disassembly?", a: "Yes - cubicles, modular workstations, conference tables, and standing desks." },
      { q: "Can you coordinate with our IT team?", a: "Absolutely. We work with your IT provider on cabling shutdown, server handling, and reconnection scheduling." },
    ],
  },
  packing: {
    hero: {
      eyebrow: "Packing Services",
      title: "Museum-grade packing, full or partial.",
      subtitle: "The way we'd want our own family's belongings packed - because that's exactly the standard we're held to.",
      image: crates.url,
    },
    intro:
      "Bad packing is the number-one cause of moving damage. That's why C-Suite Movers offers full-service, partial, and fragile-only packing using museum-grade paper, double-walled cartons, and custom-built crates for glass and artwork. We can pack an entire home in a day, or come the day before your move to handle just the kitchen, china, and closets. Every box is labeled with room, contents, and handling instructions.",
    benefits: [
      "Full pack, partial pack, or fragile-only options",
      "Museum-grade acid-free paper for china, glassware, and heirlooms",
      "Custom-built wooden crates for artwork, sculpture, and mirrors",
      "Wardrobe boxes for hanging clothes; dish-pack cartons for kitchens",
      "Every box labeled with room, contents, and handling instructions",
      "Unpacking service available - we place items in cabinets and closets",
    ],
    process: [
      { title: "Packing consultation", text: "We tour your home and recommend full, partial, or fragile-only packing based on your inventory." },
      { title: "Materials delivery", text: "Cartons, paper, tape, and wardrobe boxes delivered the day before packing begins." },
      { title: "Pack day", text: "Uniformed packers work room by room with a foreman quality-checking every box." },
      { title: "Move day", text: "Everything is boxed, labeled, and inventoried - ready for a smooth load." },
    ],
    faqs: [
      { q: "How long does it take to pack a home?", a: "A 3-bedroom home typically packs in 1 day with a 3-person crew. Larger homes take 2–3 days." },
      { q: "Can I pack some things myself?", a: "Yes. Partial packing is common - we'll handle kitchens, glassware, and artwork while you pack personal items." },
      { q: "Do you unpack too?", a: "We do. We'll unpack boxes into cabinets and closets and haul away all packing materials." },
      { q: "Are my items insured while you pack?", a: "Yes - items we pack are covered under our full replacement-value protection." },
    ],
  },
  "local-moving": {
    hero: {
      eyebrow: "Local Moving",
      title: "Phoenix, Scottsdale, Tempe & the entire Valley.",
      subtitle: "Same-day and next-day availability. Flat-rate options. Clean trucks. No fuel surcharges.",
      image: homeExt.url,
    },
    intro:
      "Most Phoenix-area local moves happen faster than clients expect - and cost less than they fear. C-Suite Movers offers transparent hourly and flat-rate pricing for local moves across Maricopa County, with same-day and next-day availability most weeks. Whether you're crossing town or crossing the street, you get the same uniformed crew, the same protective packing, and the same foreman-led execution as our largest jobs.",
    benefits: [
      "Same-day and next-day availability across Maricopa County",
      "Transparent hourly or flat-rate pricing - you choose",
      "No fuel surcharges, no travel fees within the Valley",
      "Fully equipped trucks: pads, dollies, straps, floor runners, wardrobe boxes",
      "Free stretch wrap and mattress bags on every local move",
      "Two-hour arrival window with a 30-minute foreman heads-up call",
    ],
    process: [
      { title: "Quick quote", text: "Call or text with your inventory; we quote hourly or flat rate the same day." },
      { title: "Confirm & schedule", text: "Deposit-free booking on most local moves." },
      { title: "Move day", text: "Crew arrives on time, protects both properties, and moves you efficiently." },
      { title: "Walk-through & payment", text: "We walk both spaces with you and process payment on-site." },
    ],
    faqs: [
      { q: "What counts as a local move?", a: "Any move within Maricopa County or under 50 miles from your origin address." },
      { q: "Is there a minimum?", a: "Most local moves have a 2-hour minimum plus travel time." },
      { q: "Can you move same-day?", a: "Often yes - call before noon and we can usually get a crew to you the same day." },
      { q: "Do you take cards?", a: "Yes - all major cards, ACH, cash, and check accepted." },
    ],
  },
  "long-distance": {
    hero: {
      eyebrow: "Long Distance Moving",
      title: "State-to-state, coast-to-coast.",
      subtitle: "Guaranteed delivery windows, GPS-tracked trucks, and a single point of contact from load day to unload day.",
      image: truck.url,
    },
    intro:
      "A long-distance move should not feel like handing your life to strangers. C-Suite Movers offers dedicated, non-shared long-distance moves with binding written estimates, GPS-tracked trucks, guaranteed delivery windows, and a single move coordinator from load day to unload day. Your belongings travel on our truck, with our crew, and are delivered by the same team that loaded them - never transferred, never split with other households.",
    benefits: [
      "Dedicated truck - never shared with other households",
      "Binding written estimate; the number we quote is the number you pay",
      "GPS-tracked trucks with live delivery ETA",
      "Guaranteed delivery windows (not 'sometime in the next 21 days')",
      "Same crew loads and unloads - no cross-country transfers",
      "Full replacement-value cargo protection included",
    ],
    process: [
      { title: "Virtual or in-home survey", text: "We inventory your home to build an accurate binding quote." },
      { title: "Binding written estimate", text: "Flat rate, all-inclusive. No surprises at delivery." },
      { title: "Load day", text: "Uniformed crew packs (if selected) and loads your dedicated truck." },
      { title: "Transit & delivery", text: "GPS updates en route; delivery within your guaranteed window, unloaded by the same crew." },
    ],
    faqs: [
      { q: "Where do you move to?", a: "Anywhere in the continental United States. Most common corridors: AZ to CA, TX, CO, WA, FL, and the East Coast." },
      { q: "How long will delivery take?", a: "Typically 3–10 days depending on distance. You'll have a guaranteed delivery window in writing." },
      { q: "Is my stuff on a shared truck?", a: "No. Every long-distance move is dedicated - your belongings, our truck, one destination." },
      { q: "Is it insured across state lines?", a: "Yes - full replacement-value cargo protection is included on every long-distance move." },
    ],
  },
  "specialty-moving": {
    hero: {
      eyebrow: "Specialty Items",
      title: "Pianos, safes, artwork & antiques.",
      subtitle: "Trained specialists, custom rigging, and climate-controlled transport for the items that matter most.",
      image: tv.url,
    },
    intro:
      "Not every mover should touch a Steinway or a 1,200-pound gun safe. C-Suite Movers maintains a dedicated specialty crew trained in piano moving, safe rigging, fine-art handling, and antique protection. We use custom skids, air-ride trucks, climate-controlled transport when needed, and full crating for artwork and sculpture. If you have one item you're worried about, this is who you call.",
    benefits: [
      "Grand & upright piano moving with specialty piano skids",
      "Safe moving up to 1,500+ lbs with rigging and stair equipment",
      "Fine-art custom crating and climate-controlled transport",
      "Antique furniture handled with museum-grade padding",
      "Wine collection moves with temperature-monitored trucks",
      "Fitness equipment, pool tables, and hot tubs by trained crews",
    ],
    process: [
      { title: "Specialty consult", text: "Send us photos and dimensions; we'll assess rigging, doorway access, and transport needs." },
      { title: "Custom quote", text: "Flat-rate quote with any custom crating or rigging fees itemized upfront." },
      { title: "Specialist crew dispatched", text: "Trained specialists arrive with the right equipment - not just extra hands." },
      { title: "Placement & setup", text: "We place and level the item, and coordinate with tuners or techs if needed." },
    ],
    faqs: [
      { q: "Do you move grand pianos?", a: "Yes - grand and baby grand pianos on custom piano skids with a 4-person specialty crew." },
      { q: "How heavy of a safe can you move?", a: "We regularly move safes up to 1,500 lbs, including up and down flights of stairs with proper equipment." },
      { q: "Can you crate artwork?", a: "Yes - custom wooden crates for paintings, sculpture, and mirrors are built to your item's dimensions." },
      { q: "Is climate-controlled transport available?", a: "Yes - for wine collections, fine art, and heat-sensitive antiques." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!(params.slug in CONTENT)) throw new Error("Not found");
  },
  head: ({ params }) => {
    const c = CONTENT[params.slug];
    if (!c) return { meta: [] };
    return {
      meta: [
        { title: `${c.hero.eyebrow} in Phoenix, AZ | C-Suite Movers` },
        { name: "description", content: c.hero.subtitle },
        { property: "og:title", content: `${c.hero.eyebrow} | C-Suite Movers` },
        { property: "og:description", content: c.hero.subtitle },
        { property: "og:image", content: c.hero.image },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: c.hero.eyebrow,
            provider: { "@type": "MovingCompany", name: SITE.name, telephone: SITE.phone },
            areaServed: "Phoenix, Arizona",
            description: c.hero.subtitle,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useParams();
  const c = CONTENT[slug];
  if (!c) return null;
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} subtitle={c.hero.subtitle} image={c.hero.image} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-royal">Overview</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-4xl">
              What to expect from your {c.hero.eyebrow.toLowerCase()}.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.intro}</p>

            <h3 className="mt-10 font-display text-xl font-bold text-navy-deep">Benefits & Inclusions</h3>
            <ul className="mt-5 space-y-3">
              {c.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-xl font-bold text-navy-deep">Our Process</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {c.process.map((p, i) => (
                <div key={p.title} className="rounded-2xl border border-border bg-cream p-5">
                  <div className="font-display text-2xl font-bold text-royal">0{i + 1}</div>
                  <div className="mt-1 font-display text-base font-bold text-navy-deep">{p.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 font-display text-xl font-bold text-navy-deep">Frequently Asked</h3>
            <div className="mt-5">
              <FAQAccordion items={c.faqs} />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-gradient-ember px-6 py-3 text-sm font-semibold text-white shadow-ember">
                Get Free Quote
              </Link>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold text-navy-deep">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <QuoteForm compact />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">Explore other services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}` as string} className="group rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-royal">{s.tagline}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
