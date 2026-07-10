import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Franciana Tertulien",
    location: "Phoenix · Repeat client, 2 moves",
    text: "I've moved twice with C-Suite Movers. In less than 6 months these guys performed with less manpower and accomplished the same or better results with no damage to my belongings. If anyone on the team sees me pick something up, they ALWAYS stop and ask to take it off my hands. Through the military and contractors I've done many moves — this fine group of men is by far the most elite team I have ever hired. My absolute go-to.",
  },
  {
    name: "Andrew Liam",
    location: "Goodyear → San Tan Valley",
    text: "After comparing quotes from over 10 moving companies, C-Suite Movers offered the best price without sacrificing quality. Sam's communication was outstanding — he always answered my calls and provided timely updates. The crew was efficient, professional, and incredibly friendly. If you need movers who truly care about their customers, C-Suite Movers is the way to go!",
  },
  {
    name: "Christina Safford",
    location: "Phoenix · 24+ lifetime moves",
    text: "Hands-down, the absolute best movers I've ever hired. I've moved over two dozen times in my life and I've never had a team as proficient, polite, and fast as these guys. True to their quotes, experts at keeping your things safe, and simply good people. I would trust them with any move, anytime, anywhere.",
  },
  {
    name: "Jessica Robinson",
    location: "Arizona → Colorado · Senior relocation",
    text: "C-Suite was instrumental in relocating my grandmother from Arizona to Colorado on very short notice. Despite only one week's notice, they moved everything seamlessly in just 24 hours, including setting up furniture and installing wall-mounted televisions. Attention to detail with her antiques was incredible — nothing was broken, everything treated with the utmost care.",
  },
  {
    name: "DeMari Davis",
    location: "Arizona → California · Long distance",
    text: "I recently moved from Arizona to California and I couldn't be happier. The team was professional, punctual, and handled my belongings with great care. Everything arrived on time and in perfect condition. Communication was excellent every step of the way. I highly recommend C-Suite Movers to anyone looking for a reliable and efficient moving service.",
  },
  {
    name: "Cutrina Oliver",
    location: "Phoenix · Local move",
    text: "From the moment they arrived to every detail throughout the process — they handled my belongings with great care, ensuring everything was safely moved and thoughtfully placed in my new space. No rushing, no shortcuts, just genuine service done right. Sam and Marquis made what could have been a stressful day feel smooth and stress-free. HIGHLY RECOMMENDED!",
  },
  {
    name: "Erikka Brooks",
    location: "Phoenix · 3rd floor → 3rd floor, no elevator",
    text: "Absolutely thrilled with the exceptional customer service. From the first quote their team was genuine, personable, and attentive. On moving day the crew was punctual and incredibly caring with my items — moving from a third floor to another third floor with no elevator. They made it happen. If you're looking for a company that treats your belongings with the utmost care, this is it.",
  },
  {
    name: "Cara Donahue",
    location: "Tempe · 2BR apartment + house combined",
    text: "Allonte and Detrionne more than exceeded our expectations in efficiency, transparency, professionalism, care, and flexibility. They took exceptional care of all of our belongings and blew me away with their ability to play 'Tetris' with our items in the truck. Everything arrived in perfect condition. Hiring C-Suite took such a weight off our shoulders.",
  },
  {
    name: "Ruochen Han",
    location: "Phoenix · Piano move",
    text: "Sam and his team did a great job. Professional, prepared, on time, quick and organized. Rate is reasonable. Note that they even moved my piano, which a lot of movers won't do. I will recommend them to my friends for moving!",
  },
  {
    name: "Tiffany Leathers",
    location: "Phoenix · Downsizing move",
    text: "I've moved a lot and C-Suite Movers has been the best. Two incredible men showed up ready to help — despite the Arizona heat — and handled everything with care, efficiency, and professionalism. Downsizing can be a stressful process, but they made it feel easy. Highly recommend to anyone looking for reliable, hard-working movers who genuinely care.",
  },
  {
    name: "Bri Bucks",
    location: "Phoenix · Peloton & treadmill move",
    text: "They did an AMAZING job moving my Peloton Bike and Treadmill. They were able to disassemble the equipment for transport and reassemble it at the delivery location. Timely and friendly. I highly recommend!",
  },
  {
    name: "GERMAINE",
    location: "Phoenix · Real estate partner",
    text: "C-Suite Movers is our go-to moving company when we hire them for our clients or refer movers to them. As a real estate professional, having good partners to help our clients is essential — we will use C-Suite Movers again and again because they are professional, efficient, and great with communication.",
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
