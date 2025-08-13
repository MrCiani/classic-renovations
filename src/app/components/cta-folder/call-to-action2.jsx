import React from 'react'
import Link from 'next/link'

export default function HeroCta2({
  title = "Ready to Start Your Painting Project?",
  subtitle = "Spec‑accurate • Clean sites • On‑time delivery",
  buttontext = "Request a Proposal →",
  bgColor = "var(--accent-100)",
  textColor = "var(--text-100)"
}) {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="relative bg-white border border-[var(--bg-300)] rounded-2xl shadow-sm p-8 text-center overflow-hidden">
        {/* FADE / GLINT ACCENTS */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full opacity-60 blur-xl"
          style={{
            background:
              'radial-gradient(30% 60% at 50% 50%, var(--primary-100), transparent 70%)'
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -top-2 -right-2 h-48 w-48 rounded-[28px] opacity-40"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.05) 60%, transparent)'
          }}
        />
        {/* optional subtle base glow bottom-left */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-25 blur-2xl"
          style={{
            background:
              'radial-gradient(55% 55% at 50% 50%, var(--primary-300), transparent 70%)'
          }}
        />

        {/* Title */}
        <h3 className="relative z-[1] text-2xl md:text-3xl font-bold text-[var(--text-100)] mb-2">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="relative z-[1] text-[var(--text-200)] mb-6 text-sm md:text-base">
          {subtitle}
        </p>

        {/* CTA Button */}
        <Link href="/contact" className="relative z-[1] inline-block">
          <button
            className="px-6 py-3 rounded-md transition font-semibold cursor-pointer duration-200 ease-in text-lg hover:opacity-90"
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            {buttontext}
          </button>
        </Link>

        {/* Trust note */}
        <p className="relative z-[1] mt-3 text-xs text-[var(--text-200)]">
          Licensed & Insured • Replies within 1–2 business hours
        </p>
      </div>
    </div>
  )
}
