import { Link } from "@tanstack/react-router";
import { Phone, MessageSquareQuote } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCTAs() {
  return (
    <>
      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-navy-deep/95 p-3 backdrop-blur-xl md:hidden">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-royal px-4 py-3 text-sm font-semibold text-white shadow-royal"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-ember px-4 py-3 text-sm font-semibold text-white shadow-ember"
        >
          <MessageSquareQuote className="h-4 w-4" /> Free Quote
        </Link>
      </div>

      {/* Desktop floating quote button */}
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-gradient-ember px-5 py-3 text-sm font-semibold text-white shadow-ember transition hover:scale-105 md:inline-flex"
      >
        <MessageSquareQuote className="h-4 w-4" /> Get Free Quote
      </Link>
    </>
  );
}
