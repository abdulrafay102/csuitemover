import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import livingRoom from "@/assets/living-room.asset.json";
import homeExt from "@/assets/home-exterior.asset.json";
import crates from "@/assets/mover-crates.asset.json";
import truck from "@/assets/truck-loading.asset.json";
import tv from "@/assets/tv-install.asset.json";
import { useState } from "react";
import { X } from "lucide-react";

const IMAGES = [
  { src: livingRoom.url, alt: "Living room with wrapped and protected furniture", cat: "Residential" },
  { src: homeExt.url, alt: "Happy family in front of their new home", cat: "Residential" },
  { src: crates.url, alt: "C-Suite crew member with stacked moving crates", cat: "Crew" },
  { src: truck.url, alt: "Loading a large moving truck with expandable TV kits", cat: "Loading" },
  { src: tv.url, alt: "Fitness equipment installed on wall mount", cat: "Specialty" },
  { src: livingRoom.url, alt: "Interior of luxury home ready for move-in", cat: "Residential" },
  { src: crates.url, alt: "Green plastic crate stacking system", cat: "Packing" },
  { src: truck.url, alt: "Furniture kit protection loading", cat: "Loading" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | C-Suite Movers Phoenix" },
      { name: "description", content: "See C-Suite Movers on the job — real Phoenix-area residential, commercial, and specialty moves." },
      { property: "og:title", content: "Gallery | C-Suite Movers" },
      { property: "og:description", content: "Real photos of real Phoenix-area moves." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="On the job with C-Suite."
        subtitle="Real Phoenix-area moves. Real crews. No stock photos."
      />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setOpen(img.src)}
                className="group relative mb-5 block w-full overflow-hidden rounded-2xl shadow-card transition hover:shadow-elevated"
              >
                <img src={img.src} alt={img.alt} className="w-full transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-royal-glow">{img.cat}</div>
                  <div className="mt-0.5 font-display text-sm font-semibold text-white">{img.alt}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-lg" onClick={() => setOpen(null)}>
          <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white" onClick={() => setOpen(null)} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-6xl rounded-2xl shadow-elevated" />
        </div>
      )}
    </>
  );
}
