import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus & Elena T.",
    location: "Scottsdale, AZ · 5-bedroom home",
    text: "We interviewed four moving companies before choosing C-Suite. The foreman walked our entire home, protected every doorway, and had our grand piano tuned back in place by the end of the week. Genuinely white-glove.",
  },
  {
    name: "Priya S.",
    location: "Phoenix · Office relocation, 42 desks",
    text: "They moved our entire office over a weekend with zero downtime. Monday morning our team walked in and everything worked — IT reconnected, monitors mounted, files in place.",
  },
  {
    name: "David R.",
    location: "Chandler → Denver, long distance",
    text: "GPS-tracked truck, single point of contact, on-time delivery. Nothing was damaged, nothing was lost. Fifteen years of moves and this was easily the best.",
  },
  {
    name: "Karen M.",
    location: "Tempe · Senior downsizing",
    text: "The crew was patient with my mother, careful with her heirlooms, and finished under the estimate. I'll recommend C-Suite to every family I know.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];

  return (
    <section className="relative overflow-hidden bg-gradient-dark py-24 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-royal/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-royal-glow">
          Client Stories
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Trusted by Arizona's most demanding movers.</h2>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
          <Quote className="mx-auto h-10 w-10 text-royal-glow" />
          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-ember-glow text-ember-glow" />
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">"{r.text}"</p>
          <div className="mt-6">
            <div className="font-display text-base font-semibold">{r.name}</div>
            <div className="text-sm text-white/60">{r.location}</div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:border-white/60">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Review ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-royal-glow" : "w-2 bg-white/25"}`} />
            ))}
          </div>
          <button onClick={() => setI((v) => (v + 1) % REVIEWS.length)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:border-white/60">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
