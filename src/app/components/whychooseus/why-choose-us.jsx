'use client'

import { ShieldCheck, Timer, Sparkles, Leaf, ThumbsUp, ClipboardCheck, Building2, Users } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
      blurb: 'Fully insured crews with WSIB coverage and professional supervision on every job.'
    },
    {
      icon: Timer,
      title: 'On-Time & On-Schedule',
      blurb: 'Reliable scheduling for suites, corridors, and common areas—no surprises.'
    },
    {
      icon: Sparkles,
      title: 'Quality That Lasts',
      blurb: 'Spec-driven prep, crisp lines, and durable coatings for high-traffic spaces.'
    },
    {
      icon: Leaf,
      title: 'Low/Zero-VOC Options',
      blurb: 'Health-conscious products and clean sites to keep buildings safe and tidy.'
    },
    {
      icon: ClipboardCheck,
      title: 'Clear Scope & Pricing',
      blurb: 'Transparent quotes, site sign-off checklists, and documented warranties.'
    },
    {
      icon: ThumbsUp,
      title: 'Responsive Service',
      blurb: 'Fast communication, photo updates, and punch-list close-out.'
    },
  ]

  return (
    <section className="py-16 bg-[var(--bg-100)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 flex flex-col items-start sm:items-center gap-3 text-left sm:text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-[var(--bg-300)] text-[var(--text-200)]">
            <Building2 className="w-4 h-4" />
            Why choose Classic Contracting
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)] leading-tight">
            Reliable crews. Professional finishes. Zero drama.
          </h2>
          <p className="text-[var(--text-200)] max-w-2xl">
            We hit schedules, coordinate with trades, and deliver clean, long-lasting results across residential,
            commercial, and multi-unit properties.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--bg-300)] bg-white/80 shadow-sm hover:shadow transition p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl p-3 bg-[var(--primary-100)]">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-100)]">{p.title}</h3>
                  <p className="mt-1 text-[var(--text-200)]">{p.blurb}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats + CTA bar */}
        <div className="mt-10 rounded-2xl border border-[var(--bg-300)] bg-white/90 p-6 sm:p-7 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-xl p-3 bg-[var(--primary-100)]">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text-100)]">300+ projects</p>
              <p className="text-[var(--text-200)]">Completed across the GTA</p>
            </div>
          </div>

          <div className="hidden lg:block flex-1 h-px bg-[var(--bg-300)] mx-6" />

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-[var(--text-200)]">
            <li><span className="font-semibold text-[var(--text-100)]">WSIB & Liability:</span> fully covered</li>
            <li><span className="font-semibold text-[var(--text-100)]">Warranty:</span> written & documented</li>
            <li><span className="font-semibold text-[var(--text-100)]">Scheduling:</span> nights & weekends available</li>
          </ul>

          <div className="flex-1 lg:flex-none" />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                       bg-[var(--accent-100)] text-[var(--text-100)] hover:bg-[var(--accent-200)]
                       border border-[var(--bg-300)] shadow-sm"
          >
            Request a call back
          </Link>
        </div>
      </div>
    </section>
  )
}
