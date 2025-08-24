'use client'

import Image from 'next/image'
import HeroCta from '@/app/components/cta-folder/Call-to-action'
import { Building2, ShieldCheck, Star, Check } from 'lucide-react'

/**
 * Classic Contracting — Full Viewport Hero + Overlapping Social Proof + 3 Support Images with Titles & Bullets (Check Icons)
 */

export default function HeroClassicSplit() {
  const heroImg = '/multiunit/social-proof.jpg'
  const cardImgs = [
    {
      src: '/lasalle/hero.jpg',
      alt: 'LaSalle Apartments exterior repaint',
      title: 'LaSalle Apartments',
      bullets: [
        'Interior repaint of all suites',
        'Hallway & common area painting',
        'Exterior façade touch-ups'
      ],
    },
    {
      src: '/condoca/hero.jpg',
      alt: 'Condo CA exterior repaint in progress',
      title: 'Condo CA Complex',
      bullets: [
        'Lobby & reception repaint',
        'Amenity room painting',
        'Exterior window trim refinishing'
      ],
    },
    {
      src: '/strata/hero.jpg',
      alt: 'Strata building stairwell and railings repaint',
      title: 'Strata Residences',
      bullets: [
        'Stairwell & railing painting',
        'Unit door enamel systems',
        'Underground parking repaint'
      ],
    },
  ]

  return (
    <section aria-label="Classic Contracting hero" style={{ background: "var(--hero-gradient)" }} className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <div className="flex-grow flex flex-col justify-center mx-auto max-w-7xl px-4 lg:px-8 py-8 lg:py-12">
        {/* Top two-column hero */}
        <div className="grid gap-6 lg:grid-cols-12 items-center flex-grow">
          {/* Copy column */}
          <div className="lg:col-span-6 rounded-xl p-5 sm:p-6 h-full flex flex-col justify-center">
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1 text-xs font-medium text-[var(--text-100)] shadow-sm">
                <Building2 className="h-4 w-4" /> Multi-Unit • Commercial • Common Areas
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.7rem] font-semibold leading-tight">
                Multi-Unit & Commercial Painting
              </h1>
              <p className="mt-1 text-base sm:text-lg text-[var(--text-200)]">
                Built for property managers & builders. We coordinate notices, protect tenant spaces, and deliver spotless turnover—on schedule.
              </p>

              {/* Proof badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1 text-xs font-medium shadow-sm">
                  <ShieldCheck className="h-4 w-4" /> WSIB / COI Provided
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1 text-xs font-medium shadow-sm">
                  <Star className="h-4 w-4" /> 40+ Buildings Maintained
                </span>
              </div>

              {/* CTA row */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <HeroCta buttontext='Lets get started!' />
              </div>
            </div>
          </div>

          {/* Image column with overlapping social proof */}
          <div className="lg:col-span-6 rounded-xl border-[var(--bg-300)] overflow-hidden h-full relative flex">
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src={heroImg}
                alt="Classic Contracting team delivering a clean commercial repaint"
                fill
                className="object-cover"
                priority
              />
              {/* Overlapping Social Proof */}
              <div className="absolute w-full top-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm border border-[var(--bg-300)] rounded-xl shadow-md max-w-sm p-4">
                <p className="text-sm sm:text-base text-[var(--text-200)] italic">
                  “30 units were completed in half the time than what was agreed on. Fast, reliable, and always on time. Highly recommended.”
                </p>
                <p className="mt-2 text-xs text-[var(--text-300)]">— Property Manager, Multi-Tenant Building</p>
              </div>
            </div>
          </div>
        </div>

<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-shrink-0">
  {cardImgs.map((img) => (
    <div key={img.src} className="group border rounded-2xl border-[var(--bg-300)] bg-white shadow-sm overflow-hidden">
      <div className="relative w-full h-64 sm:h-72 lg:h-80">
        <Image src={img.src} alt={img.alt} fill className="object-cover transition scale-[1.02] group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[var(--primary-100)]">{img.title}</h3>
        <ul className="mt-2 space-y-2">
          {img.bullets.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-200)]">
              <Check className="h-4 w-4 text-[var(--primary-100)] mt-[2px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

{/* CTA button at the bottom */}
<div className="mt-8 flex justify-center">
  <button
    onClick={() => window.location.href = '/projects/condos'}
    className="inline-flex items-center cursor-pointer justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm bg-[var(--primary-100)] hover:bg-[var(--primary-200)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-100)] focus:ring-offset-2 transition"
  >
    View Projects
  </button>
</div>

      </div>
    </section>
  )
}
