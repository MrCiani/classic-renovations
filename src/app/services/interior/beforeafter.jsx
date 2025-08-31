'use client';

import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const CASES = [
   {
    before: '/beforeafter/interior/before1.jpg',
    after: '/beforeafter/interior/after1.jpg',
    title: 'Cozy Living Room Makeover',
    caption: 'Soft tones replaced with clean, modern shades around the fireplace.',
  },


    {
    before: '/beforeafter/interior/before2.jpg',
    after:  '/beforeafter/interior/after2.jpg',
    title: 'Faded to Fresh Living Space',
    caption: 'Lightened walls and trim give a refreshed, inviting ambiance with enhanced brightness.',
  },
   {
    before: '/beforeafter/interior/before3.jpg',
    after:  '/beforeafter/interior/after3.jpg',
    title: 'Bright Living Room Transformation',
    caption: 'Muted tones replaced with crisp white walls and improved lighting to create a fresh, open feel.',
  },
];

export default function InteriorBeforeAfter() {
  return (
    <section className="mx-auto my-12 max-w-7xl px-4">
      <header className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
          Interior Before & After
        </h2>
        <p className="mt-2 text-[var(--text-200)]">
          <span className='font-bold text-[var(--primary-100)]'>Slide to compare</span> <br/>transformations across brick, stucco, and multi-unit exteriors.
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
