// src/app/components/cabinetry/CabinetryHeroShowcase.jsx
'use client'

import Image from 'next/image'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import HeroCta from '@/app/components/cta-folder/Call-to-action'

export default function CabinetryHero() {
  const heroImg = '/cabinetry/hero-wide.jpg' // <-- replace with your wide cabinetry image

  return (
    <section
      aria-label="Classic Contracting — Custom Cabinetry"
      className="relative overflow-hidden"
      style={{
        background: 'var(--hero-gradient)',
      }}
    >
      {/* subtle contour lines pattern, tinted with your text color */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-[var(--text-100)]/10"
      >
        <defs>
          <pattern id="cc-contours" width="140" height="140" patternUnits="userSpaceOnUse">
            <path
              d="M0 70 C 35 0, 105 0, 140 70 M0 70 C 35 140, 105 140, 140 70"
              fill="none"
              stroke="currentColor"
              strokeWidth=".6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cc-contours)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-10 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: headline + copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span className="h-1.5 w-8 rounded-full bg-[var(--accent-100)]" />
              <span className="text-sm font-semibold tracking-wide text-[var(--accent-100)]">
                Custom Cabinetry • Built-Ins • Vanities
              </span>
            </div>

            <h1 className="mt-4 font-serif tracking-tight text-[var(--text-100)] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Meticulous Cabinetry
              <br className="hidden sm:block" />
              <span className="text-[var(--text-100)]/90"> Made to Measure.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-[var(--text-200)] text-base sm:text-lg">
              Site-measured, fabricated, and spray-finished by one team. We handle
              layouts, hardware, finishing, and a spotless install—on your schedule.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <HeroCta buttontext="Get a Cabinetry Quote" />
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--bg-300)] bg-[var(--bg-100)]/10 px-4 py-2 text-sm font-medium text-[var(--text-100)] hover:bg-[var(--bg-100)]/20 transition"
              >
                See Gallery <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: subhead block */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[var(--bg-300)] bg-[var(--bg-100)]/15 backdrop-blur p-5 text-[var(--text-100)]">
              <p className="text-[var(--accent-100)] font-semibold">Precision &amp; Finish</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-200)]">
                Solid plywood boxes, dovetail drawers, soft-close hardware, and catalyzed lacquer
                finishes. Colour-match available for a seamless look throughout your space.
              </p>
            </div>
          </div>
        </div>

        {/* Hero image with theme borders/surfaces */}
        <div className="relative mt-10">
          <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-[var(--bg-300)] shadow-2xl">
            <Image
              src={heroImg}
              alt="Classic Contracting custom cabinetry installation"
              width={1920}
              height={900}
              className="h-[46vh] min-h-[320px] w-full object-cover"
              priority
            />

            {/* circular accent badge */}
            <div className="absolute -right-4 -top-6 sm:-right-6 sm:-top-8">
              <div className="grid place-items-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[var(--accent-100)] text-[var(--text-100)] shadow-lg ring-4 ring-[var(--bg-100)]/20">
                <ArrowDownRight className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* decorative dots (accent) */}
      <span className="absolute left-4 top-6 h-2 w-2 rounded-full bg-[var(--accent-100)]/90" />
      <span className="absolute right-4 bottom-6 h-2 w-2 rounded-full bg-[var(--accent-100)]/90" />
    </section>
  )
}
