'use client';

import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const AREAS = [
    { city: 'Toronto', desc: 'Downtown, Midtown, North York, Scarborough, Etobicoke' },
    { city: 'Mississauga', desc: 'Condos, rentals, and office spaces across the city' },
    { city: 'Brampton', desc: 'Multi-unit properties, retail, and residential repaints' },
    { city: 'Oakville', desc: 'Interior and exterior painting for homes and condos' },
    { city: 'Vaughan', desc: 'Commercial offices, retail spaces, and high-rise buildings' },
    { city: 'Milton', desc: 'Turnovers, suites, and property management painting' },
    { city: 'Hamilton', desc: 'Multi-residential, commercial, and retail projects' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[var(--bg-100)]" id="service-areas">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
          Interior & Exterior Painting Across the GTA
        </h2>
        <p className="mt-3 text-[var(--text-200)] max-w-2xl mx-auto">
          Classic Contracting proudly serves property managers, building owners, and homeowners across Toronto and the Greater Toronto Area.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {AREAS.map((area, i) => (
            <li
              key={i}
              className="flex flex-col gap-2 rounded-xl border border-[var(--bg-300)] bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 text-[var(--primary-100)] font-semibold">
                <MapPin className="h-5 w-5" />
                {area.city}
              </div>
              <p className="text-sm text-[var(--text-200)]">{area.desc}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[var(--text-200)]">
          Don’t see your city listed? <span className="font-semibold text-[var(--primary-100)]">Contact us</span> — we serve the entire GTA and surrounding areas.
        </p>
      </div>
    </section>
  );
}
