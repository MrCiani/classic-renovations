// pages/condos-apartments.jsx
import React from "react";
import { Check } from "lucide-react";

const CONDO_PROJECTS = [
  {
    id: "beau-soleil",
    title: "Beau Soleil Condos",
    location: "Burlington, ON",
    year: 2025,
    logoSrc: "/trusted-badges/trust4.png",
    heroImage: "/beau-soleil/hero.jpg",
    description:
      "Beau Soleil Condos is a modern high-rise on the Burlington waterfront offering premium finishes and amenities.",
    website: "https://beausoleilcondos.com/",
    workCompleted: [
      "Corridor & suite repaint (low-VOC)",
      "Dust-controlled surface prep",
      "Fire doors & frames (enamel)",
    ],
    galleryHref: "/gallery/beau-soleil",
  },
  {
    id: "delinda-condo",
    title: "Delinda Team – Condo Refresh",
    location: "Toronto, ON",
    year: 2025,
    logoSrc: "/delinda/hero-logo.jpg",
    heroImage: "/delinda/hero.jpg",
    description:
      "Full refresh for Delinda Team’s downtown Toronto condo, including suites and common areas.",
    website: "https://30oldmill.com/",
    workCompleted: ["Feature walls & trim", "Suite repaint", "Detail caulking & repairs"],
    galleryHref: "/gallery/delinda-condo",
  },
  {
    id: "lasalle-retirement",
    title: "La Salle Park – Suites & Common Areas",
    location: "Burlington, ON",
    year: 2024,
    logoSrc: "/trusted-badges/trust2.png",
    heroImage: "/lasalle/hero.jpg",
    description:
      "Painting and refinishing for suites and common areas at La Salle Park Retirement residence.",
    website: "https://www.lasalleparkretirement.com/",
    workCompleted: [
      "Common area repaint",
      "Doors/frames – scuff-resistant enamel",
      "Amenity spaces refresh",
    ],
    galleryHref: "/gallery/lasalle",
  },
{
  id: "strata-greenlife",
  title: "Strata – Greenlife Golden Condos",
  location: "Markham, ON",
  year: 2024,
  logoSrc: "/strata/hero-logo.jpg",
  heroImage: "/strata/hero.jpg",
  description:
    "Condo refresh and paint upgrade for Greenlife Golden Condos in Markham under Strata management.",
  website: "https://strata.ca/markham/7400-markham-rd-greenlife-golden-condos",
  workCompleted: [
    "Suite coat refresh",
    "Common area repaint",
    "Low-VOC finishes applied",
  ],
  galleryHref: "/gallery/strata-greenlife"
},
{
  id: "venvi-birkdale",
  title: "Venvi Birkdale Place – Suites & Common Areas",
  location: "Milton, ON",
  year: 2025,
  logoSrc: "/venvi-birkdale/hero-logo.jpg", // you can swap this to the actual Cogir logo in your assets
  heroImage: "/venvi-birkdale/hero.jpg", // place your hero image here
  description:
    "Painting and refinishing for suites and common areas at Venvi Birkdale Place, a Cogir Senior Living residence.",
  website: "https://cogirseniorliving.ca/retirement-home-milton-ontario/venvi-birkdale-place?utm_source=venvibirkdaleplace&utm_medium=mybusiness",
  workCompleted: [
    "Suites repaint & touch-ups",
    "Amenity spaces refresh",
    "Doors and trim – scuff-resistant enamel",
  ],
  galleryHref: "/gallery/venvi-birkdale",
}


];

function CondoProjectCard({ p }) {
  return (
    <article className="grid lg:grid-cols-2 gap-8 rounded-3xl border border-[var(--bg-300)] bg-white p-6 lg:p-8 shadow-sm">
      {/* Left: hero image + logo */}
      <div>
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[var(--bg-200)]">
          {p.heroImage ? (
            <img
              src={p.heroImage}
              alt={p.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full" />
          )}

          {p.logoSrc && (
            <div className="absolute left-4 top-4 bg-white/85 backdrop-blur px-3 py-2 rounded-lg border border-[var(--bg-300)] shadow">
              <img src={p.logoSrc} alt={`${p.title} logo`} className="h-8 w-auto" />
            </div>
          )}
        </div>
      </div>

      {/* Right: details */}
      <div className="flex flex-col">
        <header className="mb-4">
          <h3 className="text-2xl font-bold text-[var(--text-100)]">{p.title}</h3>
          <p className="text-[var(--text-200)] mt-1">
            {p.location} {p.year ? <>• {p.year}</> : null}
          </p>
        </header>

        {/* Description */}
        {p.description && (
          <p className="text-[var(--text-200)] mb-4 leading-relaxed">{p.description}</p>
        )}

        {/* Website link */}
        {p.website && (
          <div className="mb-6">
            <a
              href={p.website}
              target="_blank"
              rel="noopener noreferrer"
              
            >
             <span className="text-[var(--primary-100)] underline hover:text-[var(--primary-200)]">
              Visit Project Website</span> 
            </a>
          </div>
        )}

        {/* Work Completed */}
        <section className="space-y-2">
          <h4 className="font-medium text-[var(--text-100)]">Work Completed</h4>
          <ul className="space-y-2">
            {p.workCompleted.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[var(--text-200)]">
                <Check className="text-[var(--primary-100)] w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* View Gallery button right under work completed */}
          <div className="pt-4">
            <a
              href={p.galleryHref}
              className="inline-flex items-center justify-center rounded-xl border border-transparent px-4 py-2 text-sm font-semibold
                         bg-[var(--primary-100)] text-white hover:opacity-90 transition"
            >
             <span className="text-white"> View Gallery</span>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}


export default function CondosApartmentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 lg:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl   lg:text-4xl font-extrabold text-[var(--primary-100)]">
          Condos & Apartments
        </h1>
        <p className="text-[var(--text-200)] mt-2">
          Recent condo and apartment projects across the GTA—organized with a simple,
          visual layout.
        </p>
      </header>

      <section className="space-y-8">
        {CONDO_PROJECTS.map((p) => (
          <CondoProjectCard key={p.id} p={p} />
        ))}
      </section>
    </main>
  );
}
