'use client';

import { CheckCircle2 } from 'lucide-react';

export default function ExteriorWhatToExpectCC() {
const ITEMS = [
  {
    title: 'Spotless Exterior Prep',
    desc: 'Power washing, scraping, sanding, and masking to ensure a flawless paint base.',
  },
  {
    title: 'Weather-Rated Protection',
    desc: 'High-performance coatings for stucco, siding, brick, fences, decks, and railings.',
  },
  {
    title: 'Curb Appeal On Schedule',
    desc: 'Projects completed on time with minimal disruption to your home or property.',
  },
  {
    title: 'Insured & Safety-Certified',
    desc: 'Full WSIB coverage, liability insurance, and safety compliance for peace of mind.',
  },
];


  return (
    <section
      className="py-16 lg:py-20"
      aria-label="What to expect from Classic Contracting"
    >
      <div className="mx-auto max-w-5xl px-4">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            What to Expect for Your Exterior Project
          </h2>
          <p className="mt-3 text-[var(--text-200)] max-w-2xl mx-auto">
            Professional prep, durable systems, and peace of mind from start to finish.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--primary-100)]/90 text-white shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-[var(--text-100)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-200)]">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
