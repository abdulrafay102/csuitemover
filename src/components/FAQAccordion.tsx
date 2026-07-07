import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-muted/40"
            >
              <span className="font-display text-base font-semibold text-navy-deep md:text-lg">{item.q}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-royal/10 text-royal">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
