// pages/homes.jsx
import React from "react";
import { Check } from "lucide-react";

const HOME_PROJECTS = [
  {
    id: "oakville-home",
    title: "Oakville Family Home",
    location: "Oakville, ON",
    year: 2025,
    logoSrc: "/trusted-badges/trust1.png",
    heroImage: "/homes/oakville-home/hero.jpg",
    description:
      "Full interior repaint with premium low-VOC finishes for a modern Oakville family home.",
    website: null,
    workCompleted: [
      "Living room & bedrooms repaint",
      "Feature walls & trim detailing",
      "Doors & frames (scuff-resistant enamel)",
    ],
    galleryHref: "/gallery/houseful",
  }
];

function HomeProjectCard({ p }) {
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

        {/* Website link (optional for homes) */}
        {p.website && (
          <div className="mb-6">
            <a
              href={p.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--primary-100)] underline hover:text-[var(--primary-200)]">
                Visit Project Website
              </span>
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

          {/* View Gallery button */}
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

export default function HomesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 lg:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-[var(--primary-100)]">
          Homes & Residences
        </h1>
        <p className="text-[var(--text-200)] mt-2">
          Recent home painting projects across the GTA—organized with a simple,
          visual layout.
        </p>
      </header>

      <section className="space-y-8">
        {HOME_PROJECTS.map((p) => (
          <HomeProjectCard key={p.id} p={p} />
        ))}
      </section>
    </main>
  );
}
