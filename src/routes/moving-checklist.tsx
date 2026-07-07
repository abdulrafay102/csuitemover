import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const CHECKLIST: { title: string; items: string[] }[] = [
  {
    title: "8 Weeks Before",
    items: [
      "Create a moving binder or digital folder",
      "Set your moving budget",
      "Request in-home or video estimates from movers",
      "Research schools, doctors, and utilities at your destination",
      "Start decluttering — donate, sell, or trash unwanted items",
    ],
  },
  {
    title: "6 Weeks Before",
    items: [
      "Book your moving company (deposit if required)",
      "Order specialty packing materials for artwork, china, and TVs",
      "Notify your child's school and request records transfer",
      "Start using up frozen and perishable food",
    ],
  },
  {
    title: "4 Weeks Before",
    items: [
      "File a USPS change of address",
      "Update address with banks, insurance, subscriptions, and DMV",
      "Schedule utility shutoff at old home and setup at new home",
      "Arrange time off work for moving day",
      "Book cleaners for your old home if needed",
    ],
  },
  {
    title: "2 Weeks Before",
    items: [
      "Confirm arrival time with your moving foreman",
      "Reserve elevator time with building management (if applicable)",
      "Pick up medical, dental, and vet records",
      "Refill prescriptions for at least 2 weeks",
      "Begin packing rooms you use least (guest, storage, seasonal)",
    ],
  },
  {
    title: "1 Week Before",
    items: [
      "Pack an essentials box for each person (clothes, toiletries, chargers, meds)",
      "Defrost and clean your freezer",
      "Confirm parking arrangements for the moving truck",
      "Withdraw cash for tips (industry standard: $20–$40 per mover, per day)",
      "Take photos of electronics before disconnecting",
    ],
  },
  {
    title: "Moving Day",
    items: [
      "Walk through the home with the foreman before loading begins",
      "Sign the inventory sheet after everything is loaded",
      "Do a final walk-through — check closets, cabinets, garage, attic",
      "Hand off keys to landlord or new owners",
      "Keep valuables, documents, and medications with you",
    ],
  },
  {
    title: "First Week in Your New Home",
    items: [
      "Unpack essentials and set up bedrooms first",
      "Test smoke and CO detectors",
      "Locate the water shutoff and electrical panel",
      "Register your vehicle and update your driver's license if you moved states",
      "Leave a Google review for your movers if the experience was great",
    ],
  },
];

export const Route = createFileRoute("/moving-checklist")({
  head: () => ({
    meta: [
      { title: "Moving Checklist | 8-Week Countdown from C-Suite Movers" },
      { name: "description", content: "A week-by-week moving checklist from Arizona's executive movers. Everything you need to do from 8 weeks out to your first week in the new home." },
      { property: "og:title", content: "Moving Checklist | C-Suite Movers" },
      { property: "og:description", content: "The 8-week countdown checklist to a stress-free move." },
    ],
    links: [{ rel: "canonical", href: "/moving-checklist" }],
  }),
  component: Checklist,
});

function Checklist() {
  return (
    <>
      <PageHero
        eyebrow="Moving Checklist"
        title="Your 8-week countdown to a stress-free move."
        subtitle="A week-by-week plan built from thousands of moves. Print it, save it, or send it to your family — and let us handle the heavy part."
      />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 lg:px-8">
          {CHECKLIST.map((phase) => (
            <div key={phase.title} className="rounded-2xl border border-border bg-white p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-ember px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-ember">
                  {phase.title}
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {phase.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                    <span className="text-navy-deep">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
