'use client';

import Image from 'next/image';
import { MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import HeroCta from '../cta-folder/Call-to-action';

export default function ServiceAreaHero() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      aria-label="Service coverage across the Greater Toronto Area"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: Copy + checklist + CTA */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white/70 px-3 py-1 text-xs font-medium text-[var(--text-200)] shadow-sm backdrop-blur">
              <MapPin className="h-3.5 w-3.5" />
              Service Area
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--text-100)] sm:text-6xl">
              GTA coverage—
              <span className="text-[var(--primary-100)]"> all major regions</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-[var(--text-200)]">
              We deliver spec-accurate painting with clean sites and predictable schedules
              across the entire Greater Toronto Area.
            </p>

            {/* Regions checklist */}
 {/* Regions checklist in 3 columns */}
<ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md">
  {['Toronto', 'Peel', 'York Region', 'Halton', 'Durham'].map((region) => (
    <li
      key={region}
      className="flex items-center gap-2 text-[var(--text-100)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[var(--primary-100)] flex-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
      <span className="font-medium">{region}</span>
    </li>
  ))}
</ul>


            {/* CTA */}
            {/* <div className="mt-7 flex flex-wrap gap-3">
              <HeroCta />
            </div> */}
          </div>

          {/* RIGHT: Map image with badge */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--bg-300)] bg-white shadow-sm">
              <div className="relative aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src="/gta-coverage.jpg"  // ← your static map image
                  alt="Map showing GTA coverage: Toronto, Peel, York, Halton, Durham"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={false}
                />

                {/* Overlay badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="flex max-w-xs items-start gap-3 rounded-2xl border border-[var(--bg-300)] bg-white/90 px-4 py-3 shadow backdrop-blur">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--primary-300)]/40 text-[var(--primary-100)]">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-[var(--text-100)]">
                        Entire GTA Covered
                      </div>
                      <div className="text-sm text-[var(--text-200)]">
                        Toronto • Peel • York • Halton • Durham
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-[var(--text-300)]">
              Map is illustrative; service available across all municipalities within these regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
