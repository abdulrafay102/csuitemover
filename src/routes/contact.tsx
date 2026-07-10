import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import truck from "@/assets/truck-loading.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact C-Suite Movers | Free Quote in Phoenix, AZ" },
      { name: "description", content: "Call or request a free moving quote from C-Suite Movers. Serving Phoenix, Scottsdale, Tempe, Chandler, Mesa & the entire Valley." },
      { property: "og:title", content: "Contact C-Suite Movers" },
      { property: "og:description", content: "Free quote in under an hour. Serving the Phoenix Valley." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your move."
        subtitle="Call, text, or fill out the form — a real human answers, and you'll have a written quote in under an hour."
        image={truck.url}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <div className="space-y-4">
            <InfoCard icon={Phone} label="Call or Text" value={SITE.phone} href={SITE.phoneHref} />
            
            <InfoCard icon={MapPin} label="Service Area" value="Phoenix Metro & the entire Valley" />
            <InfoCard icon={Clock} label="Hours" value={SITE.hours} />

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="C-Suite Movers service area"
                src="https://www.google.com/maps?q=Phoenix,+Arizona&output=embed"
                loading="lazy"
                className="h-80 w-full"
              />
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon, label, value, href,
}: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-cream p-5 transition hover:border-royal/40 hover:shadow-card">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-royal text-white shadow-royal">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-display text-base font-semibold text-navy-deep">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
