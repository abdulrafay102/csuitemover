import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTAs } from "@/components/layout/FloatingCTAs";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-white/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-ember px-6 py-3 text-sm font-semibold text-white shadow-ember"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-navy-deep">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-royal px-5 py-2.5 text-sm font-semibold text-white shadow-royal"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-input bg-white px-5 py-2.5 text-sm font-semibold text-navy-deep"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "C-Suite Movers | Premium Moving Company in Phoenix, AZ" },
      {
        name: "description",
        content:
          "C-Suite Movers is Arizona's premier executive moving company. Licensed, insured, white-glove residential, commercial, long-distance and specialty relocation.",
      },
      { name: "author", content: "C-Suite Movers" },
      { property: "og:site_name", content: "C-Suite Movers" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "C-Suite Movers | Premium Moving Company in Phoenix, AZ" },
      { property: "og:description", content: "Executive-level residential, commercial, packing, long-distance and specialty moving across Phoenix, Scottsdale, Tempe & the Valley. Licensed, insured, on-time." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#123A73" },
      { name: "twitter:title", content: "C-Suite Movers | Premium Moving Company in Phoenix, AZ" },
      { name: "description", content: "Executive-level residential, commercial, packing, long-distance and specialty moving across Phoenix, Scottsdale, Tempe & the Valley. Licensed, insured, on-time." },
      { name: "twitter:description", content: "Executive-level residential, commercial, packing, long-distance and specialty moving across Phoenix, Scottsdale, Tempe & the Valley. Licensed, insured, on-time." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/39e362e0-7a8f-452b-8a88-78b9ea8ccadb/id-preview-d57dd513--7795d29c-d0bc-4fbf-9177-6490ff21545a.lovable.app-1783430003288.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/39e362e0-7a8f-452b-8a88-78b9ea8ccadb/id-preview-d57dd513--7795d29c-d0bc-4fbf-9177-6490ff21545a.lovable.app-1783430003288.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: SITE.name,
          telephone: SITE.phone,
          email: SITE.email,
          areaServed: "Phoenix Metropolitan Area, Arizona",
          address: { "@type": "PostalAddress", addressRegion: "AZ", addressCountry: "US", addressLocality: "Phoenix" },
          priceRange: "$$",
          openingHours: "Mo-Sa 07:00-20:00",
          sameAs: [SITE.socials.instagram, SITE.socials.facebook, SITE.socials.google],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </main>
        <Footer />
        <FloatingCTAs />
      </div>
    </QueryClientProvider>
  );
}
