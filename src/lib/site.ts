export const SITE = {
  name: "C-Suite Movers",
  phone: "+1 (623) 242-3952",
  phoneHref: "tel:+16232423952",
  address: "Phoenix Metro, Arizona",
  hours: "Mon–Sat: 7:00 AM – 8:00 PM · Sun: By appointment",
  socials: {
    instagram: "https://www.instagram.com/csuitemovers/",
    facebook: "https://www.facebook.com/profile.php?id=61557659952699",
    google: "https://g.page/r/CVYKJX3j9OjCEBQ",
  },
};

export type NavItem =
  | { to: string; label: string; children?: undefined }
  | { label: string; children: { to: string; label: string }[]; to?: undefined };

export const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Services",
    children: [
      { to: "/services/residential-moving", label: "Residential Moving" },
      { to: "/services/commercial-moving", label: "Commercial & Office" },
      { to: "/services/packing", label: "Packing Services" },
      { to: "/services/local-moving", label: "Local Moving" },
      { to: "/services/long-distance", label: "Long Distance" },
      { to: "/services/specialty-moving", label: "Specialty Items" },
    ],
  },
  { to: "/gallery", label: "Gallery" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/moving-checklist", label: "Checklist" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    slug: "residential-moving",
    title: "Residential Moving",
    tagline: "Homes, apartments & estates handled with care.",
    blurb: "From single-bedroom apartments to luxury estates, our residential crews treat every home like it's their own — protected floors, blanket-wrapped furniture, and a foreman on every job.",
    icon: "Home",
  },
  {
    slug: "commercial-moving",
    title: "Commercial & Office",
    tagline: "Zero-downtime office relocations.",
    blurb: "We move corporate offices, medical suites, and retail after-hours so your team walks in Monday morning ready to work — desks staged, IT reconnected, and floors cleared.",
    icon: "Building2",
  },
  {
    slug: "packing",
    title: "Packing & Unpacking",
    tagline: "White-glove packing, full or partial.",
    blurb: "Museum-grade paper, double-walled cartons, custom crates for artwork and glass. We pack the way we'd want our own family's belongings packed.",
    icon: "Package",
  },
  {
    slug: "local-moving",
    title: "Local Moving",
    tagline: "Phoenix, Scottsdale, Tempe & beyond.",
    blurb: "Same-day and next-day availability across the Valley. Flat-rate options, no fuel surcharges, and a clean truck on every job.",
    icon: "MapPin",
  },
  {
    slug: "long-distance",
    title: "Long Distance",
    tagline: "State-to-state, coast-to-coast.",
    blurb: "Guaranteed delivery windows, GPS-tracked trucks, and a single point of contact from load day to unload day. No surprise transfers, no shared loads.",
    icon: "Truck",
  },
  {
    slug: "specialty-moving",
    title: "Specialty Items",
    tagline: "Pianos, safes, art & antiques.",
    blurb: "Trained specialists, custom rigging, and climate-controlled transport for grand pianos, gun safes, sculpture, wine collections, and heirloom antiques.",
    icon: "Sparkles",
  },
] as const;
