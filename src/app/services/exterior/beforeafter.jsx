'use client';

import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const CASES = [
  {
    before: '/beforeafter/exterior/before1.jpg',
    after:  '/beforeafter/exterior/after1.jpg',
    title: 'Brick Facade Repaint',
    caption: 'Fresh masonry coating with crisp trim lines.',
  },
  {
    before: '/beforeafter/exterior/before2.jpg',
    after:  '/beforeafter/exterior/after2.jpg',
    title: 'Stucco Refresh',
    caption: 'High-build elastomeric system for durability.',
  },
  {
    before: '/beforeafter/exterior/before3.jpg',
    after:  '/beforeafter/exterior/after3.jpg',
    title: 'Condo Balcony Elevation',
    caption: 'Railings + soffits updated with weather-rated enamel.',
  },
];

export default function ExteriorBeforeAfter() {
  return (
    <section className="mx-auto my-12 max-w-7xl px-4">
      <header className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
          Exterior Before & After
        </h2>
        <span className='font-bold text-[var(--primary-100)]'>Slide to compare</span> <br/>
        <p className="mt-2 text-[var(--text-200)]">
        transformations across brick, stucco, and multi-unit exteriors.
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map((c, i) => (
          <li key={i} className="rounded-2xl border border-[var(--bg-300)] bg-white p-4 shadow-sm">
            {c.title && (
              <h3 className="mb-3 text-lg font-semibold text-[var(--text-100)]">{c.title}</h3>
            )}

            <BeforeAfterSlider
              // ✅ pass objects with imageUrl
              firstImage={{ imageUrl: c.before, alt: `${c.title} — before` }}
              secondImage={{ imageUrl: c.after, alt: `${c.title} — after` }}
              sliderLineColor="#005B99"
              className="rounded-xl overflow-hidden"
              // optional extras:
              // keyboard
              // delimiterIconStyles={{ background: '#005B99' }}
            />

            {c.caption && (
              <p className="mt-2 text-sm text-[var(--text-200)]">{c.caption}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
