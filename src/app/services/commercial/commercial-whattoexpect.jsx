'use client';

import { CheckCircle2 } from 'lucide-react';

export default function CommercialWhatToExpectCC() {
  const ITEMS = [

    {
      title: 'Low-Odor, Fast-Cure Systems',
      desc: 'Commercial-grade coatings specified for occupied spaces—quick re-entry and clean turnovers.',
    },
    {
      title: 'Dust-Controlled Prep & Protection',
      desc: 'Containment, floor/wall protection, and HEPA sanding to maintain a clean, safe worksite.',
    },
    {
      title: 'WSIB & Compliance',
      desc: 'WSIB coverage, $2M liability, JSAs, site orientations, and documented safety procedures.',
    },
  ];

  return (
    <section
      className="py-16 lg:py-20"
      aria-label="What to expect from Classic Contracting (Commercial)"
    >
      <div className="mx-auto max-w-5xl px-4">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            What to Expect on Your Commercial Project
          </h2>
          <p className="mt-3 text-[var(--text-200)] max-w-2xl mx-auto">
            Clean, compliant, and on-schedule delivery—optimized for offices, retail, and multi-unit facilities.
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
