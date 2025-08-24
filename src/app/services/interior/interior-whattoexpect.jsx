'use client'

import Image from 'next/image'
import { CheckCircle2, ShieldCheck, Wind, Clock } from 'lucide-react'

export default function InteriorWhatToExpectCC() {
  const ITEMS = [
    {
      icon: Wind,
      title: 'Low-Odor, Family-Friendly Systems',
      desc: 'Zero/low-VOC paints and coatings ideal for homes, condos, and offices — safe for tenants, families, and pets.',
    },
    {
      icon: CheckCircle2,
      title: 'Surface Prep & Drywall Repair',
      desc: 'Scraping, patching, sanding, and priming — plus careful masking of floors, furniture, and fixtures.',
    },
    {
      icon: ShieldCheck,
      title: 'WSIB & Safety Compliance',
      desc: 'Full WSIB coverage, $2M liability, and documented safety procedures to protect your property and residents.',
    },
  ]

  return (
    <section aria-label="What to expect from Classic Contracting (Interior)" className="relative overflow-hidden">
      {/* Soft pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 500px at 10% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(0,0,0,0.04), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        {/* Header with logo */}
        <header className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo/cc-logo-f.svg"   // <-- replace with your logo path
              alt="Classic Contracting Logo"
              width={120}
              height={36}
              priority
              className="h-30 w-auto object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            What to Expect on Your Interior Project
          </h2>
          <p className="mt-3 text-[var(--text-200)] max-w-2xl mx-auto">
            Clean, low-odor, and tenant-friendly finishes — optimized for suites, common areas, offices, and condo interiors.
          </p>
        </header>

        {/* Card deck */}
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 items-stretch gap-4 sm:gap-6">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group relative h-full rounded-2xl border border-[var(--bg-300)] bg-white/90 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition
                         hover:-translate-y-0.5 hover:shadow-md flex flex-col"
            >
              {/* top: icon + text */}
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-[var(--primary-200)]/60 bg-[var(--primary-300)]/30 text-[var(--primary-100)] transition group-hover:scale-105">
                  <Icon className="h-10 w-10" />
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--text-100)] leading-snug">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-200)]">{desc}</p>
                </div>
              </div>

              {/* bottom: pinned footer */}
              <div className="mt-auto pt-5 flex items-center gap-2 text-xs text-[var(--text-200)]/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--primary-100)]/70" />
                Included on every engagement
              </div>
            </li>
          ))}
        </ul>

        {/* Compact trust row */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs text-[var(--text-200)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white/80 px-3 py-1">
            <ShieldCheck className="h-6 w-6 text-[var(--primary-100)]" /> Transparent Deadlines
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white/80 px-3 py-1">
            <CheckCircle2 className="h-6 w-6 text-[var(--primary-100)]" /> Tenant-Friendly Scheduling
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white/80 px-3 py-1">
            <Clock className="h-6 w-6 text-[var(--primary-100)]" /> On-Schedule Delivery
          </span>
        </div>
      </div>
    </section>
  )
}
