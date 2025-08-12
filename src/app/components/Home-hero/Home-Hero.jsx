'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import HeroCta from '../Call-to-action'

export default function HomeHero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* LEFT: Solid primary card with subtle texture/gradient */}
          <div className="flex flex-col">
            <div
              className="
                relative rounded-3xl border border-[var(--border)] shadow-md p-7 sm:p-10 text-white
                overflow-hidden
                before:pointer-events-none before:absolute before:inset-0
                before:bg-[radial-gradient(80%_80%_at_20%_20%,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0)_60%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%)]
                before:opacity-80
                after:pointer-events-none after:absolute after:inset-0
                after:bg-[radial-gradient(1px_1px_at_15%_25%,rgba(255,255,255,0.09),transparent_1.5px)]
                after:opacity-40
              "
              style={{ background: 'var(--primary-100)' }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-white/80 mb-2">
                Commercial & Multi-Residential
              </p>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl font-extrabold leading-[1.05] drop-shadow-sm"
              >
                HIGH-RISE. MID-RISE.
                <br />
                COMMERCIAL PAINTING.
              </h1>

              <p className="mt-4 text-white/90 max-w-prose leading-relaxed sm:leading-normal">
                Large crews, sharp lines, and durable low-VOC finishes. We hit schedules,
                coordinate with trades, and keep sites safe and tidy.
              </p>

              <div className="mt-7 flex gap-3">
                <HeroCta buttontext="Request a call back" />
              </div>
            </div>

{/* Social proof strip — Stars ABOVE */}
<div className="mt-4 rounded-3xl bg-[var(--bg-200)]/90 backdrop-blur-sm border border-[var(--primary-100)] shadow-sm px-5 py-4 hover:shadow-md transition">
  <figure className="flex items-start gap-3">
    {/* Avatars */}
    <div className="flex -space-x-2 shrink-0 pt-1">
      <Image src="/avatars/jeremyj.jpg" alt="Jeremy J." width={44} height={44} className="h-11 w-11 rounded-full border border-[var(--border)] object-cover" />
      <Image src="/avatars/phillipe.jpg" alt="Phillipe M." width={44} height={44} className="h-11 w-11 rounded-full border border-[var(--border)] object-cover" />
      <Image src="/avatars/mason.jpg" alt="Mason K." width={44} height={44} className="h-11 w-11 rounded-full border border-[var(--border)] object-cover" />
    </div>

    <figcaption className="flex-1">
      {/* Rating row */}
      <div className="flex items-center gap-2 text-[var(--accent-100)]" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} aria-hidden fill="currentColor" />
        ))}
      </div>

      {/* Quote + name */}
<blockquote className="mt-1 text-[var(--text-100)] text-xs sm:text-[15px] italic">
  “Professional, fast, and flawless results. Highly recommend.”
</blockquote>
      <div className="mt-1 text-[13px] text-[var(--text-300)]">
        — <span className="font-semibold text-[var(--text-100)]">David P.</span>, Toronto
      </div>
    </figcaption>
  </figure>
</div>


          </div>

          {/* RIGHT: Stacked media column (large image + small image + stat oval) */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 items-start">
              {/* Main image (big) */}
              <div className="col-span-2">
                <div
                  className="
                    group relative rounded-3xl overflow-hidden border-1 border-[var(--primary-100)] shadow-lg
                    lg:translate-x-0
                  "
                >
                  {/* Optional promo-friendly gradient for future text overlays */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="aspect-[4/5] sm:h-full">
                    <Image
                      src="/01-hero.jpg"
                      alt="High-rise exterior painting in progress"
                      fill
                      priority
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Side stack: small image + stat */}
              <div className="col-span-1 flex flex-col gap-4 items-stretch">
                {/* Small supporting image (tighter crop + motion) */}
                <div className="group relative rounded-[2rem] overflow-hidden border-1 border-[var(--primary-100)] shadow-md">
                  <div className="aspect-[3/4]">
                    <Image
                      src="/02-detail.jpg"
                      alt="Detail: clean lines & finishes"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 32vw, 25vw"
                    />
                  </div>
                </div>

                {/* Stat oval (aligned with small image, slight overlap on lg for cohesion) */}
                <div
                  className="
                    relative flex flex-col items-center justify-center
                    rounded-[2rem] px-4 py-6 sm:px-6 sm:py-8 text-white shadow-md
                    lg:-translate-x-2
                  "
                  style={{
                    background:
                      'radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%), linear-gradient(135deg, var(--primary-100) 0%, var(--primary-200) 70%)'
                  }}
                >
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow">300+</span>
                  <span className="text-xs sm:text-sm opacity-95 text-center mt-1 leading-tight">
                    clients served<br />across the GTA
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
