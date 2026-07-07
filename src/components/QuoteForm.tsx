import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-royal/30 bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-royal" />
        <h3 className="mt-3 font-display text-xl font-bold text-navy-deep">Request received</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          A move consultant will call you within one business hour with a custom quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`rounded-2xl border border-border bg-white p-6 shadow-card ${compact ? "" : "md:p-8"}`}
    >
      <div className="mb-5">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Free · No Obligation</div>
        <h3 className="mt-1 font-display text-2xl font-bold text-navy-deep">Request Your Quote</h3>
        <p className="mt-1 text-sm text-muted-foreground">Answer in 60 seconds. We'll respond within the hour.</p>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required className={compact ? "" : "sm:col-span-2"} />
        <Field label="Move from (ZIP or city)" name="from" required />
        <Field label="Move to (ZIP or city)" name="to" required />
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-deep">
            Move type
          </label>
          <select
            name="type"
            className="w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none transition focus:border-royal focus:ring-4 focus:ring-royal/15"
          >
            <option>Residential</option>
            <option>Apartment</option>
            <option>Commercial / Office</option>
            <option>Long Distance</option>
            <option>Specialty (Piano, Safe, Art)</option>
            <option>Packing only</option>
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-deep">
            Details (optional)
          </label>
          <textarea
            name="details"
            rows={3}
            placeholder="Bedrooms, target date, special items…"
            className="w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none transition focus:border-royal focus:ring-4 focus:ring-royal/15"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-ember px-6 py-3.5 text-sm font-semibold text-white shadow-ember transition hover:brightness-110"
      >
        Send My Free Quote <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        By submitting, you agree to be contacted about your move. We never share your info.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-deep">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none transition focus:border-royal focus:ring-4 focus:ring-royal/15"
      />
    </div>
  );
}
