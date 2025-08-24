'use client'

import BeforeAfterSlider from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

const CASES = [
  {
    before: '/beforeafter/multiunit/suite-before.jpg',
    after:  '/beforeafter/multiunit/suite-after.jpg',
    title: 'Suite Turnover Repaint',
    caption: 'Walls, ceilings & trim refreshed between tenants — fast re-entry with standardized colors.',
  },
  {
    before: '/beforeafter/multiunit/corridor-before.jpg',
    after:  '/beforeafter/multiunit/corridor-after.jpg',
    title: 'Condo Corridor Refresh',
    caption: 'Dust-controlled prep and scuff-resistant eggshell for high-traffic hallways.',
  },
  {
    before: '/beforeafter/multiunit/stairwell-before.jpg',
    after:  '/beforeafter/multiunit/stairwell-after.jpg',
    title: 'Stairwell & Service Areas',
    caption: 'Anti-slip treads, numbering & durable coatings for safer, cleaner common areas.',
  },
]

export default function MultiUnitPMBeforeAfter() {
  return (
    <section className="mx-auto my-12 max-w-7xl px-4">
      <header className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
          Multi-Unit / PM Before &amp; After
        </h2>
        <p className="mt-2 text-[var(--text-200)]">
          Slide to compare transformations across suites, corridors, and shared spaces.
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map((c, i) => (
          <li key={i} className="rounded-2xl border border-[var(--bg-300)] bg-white p-4 shadow-sm">
            {c.title && (
              <h3 className="mb-3 text-lg font-semibold text-[var(--text-100)]">{c.title}</h3>
            )}

            <BeforeAfterSlider
              firstImage={{ imageUrl: c.before, alt: `${c.title} — before` }}
              secondImage={{ imageUrl: c.after, alt: `${c.title} — after` }}
              sliderLineColor="#005B99"
              className="rounded-xl overflow-hidden"
            />

            {c.caption && (
              <p className="mt-2 text-sm text-[var(--text-200)]">{c.caption}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
