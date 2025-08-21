'use client';

import { Star, ShieldCheck, Clock3, Sparkles, Quote } from 'lucide-react';
import TrustedBy from '@/app/components/trustedbadges-testimonials/trusted-business';

export default function TrustTestimonials() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      aria-label="Trust and testimonials"
    >
      {/* soft background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 500px at 0% 0%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, var(--bg-100), #fff)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Trusted by property managers, builders & operators
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[var(--text-200)]">
            Clean sites, respectful crews, and finishes that stand up to daily use.
          </p>
        </header>

        {/* Stats row */}
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <Stat
            icon={<Star className="h-5 w-5" />}
            label="Average rating"
            value="4.9/5"
          />
          <Stat
            icon={<ShieldCheck className="h-5 w-5" />}
            label="Safety & coverage"
            value="WSIB & insured"
          />
          <Stat
            icon={<Clock3 className="h-5 w-5" />}
            label="Scheduling"
            value="Days, evenings, weekends"
          />
        </div>

        {/* Logo strip */}
<TrustedBy/>

        {/* Testimonials */}
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial
            quote="Classic kept our corridors operational while repainting—clean edges and zero mess. Turned over on schedule."
            name="Johnny W."
            role="Project Manager, General Contractor"
          />
          <Testimonial
            quote="Professional prep and low-VOC systems made it easy to keep the clinic open during work. Highly recommend."
            name="Dr. A. Singh"
            role="Clinic Owner"
          />
          <Testimonial
            quote="Fast unit turnovers, consistent colour standards, and great communication with our tenants."
            name="L. Martinez"
            role="Property Manager"
          />
        </ul>
      </div>
    </section>
  );
}

/* ——— Helpers ——— */

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-[var(--bg-300)] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 text-[var(--text-100)]">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--bg-200)] text-[var(--primary-100)]">
          {icon}
        </span>
        <div>
          <div className="text-sm text-[var(--text-200)]">{label}</div>
          <div className="text-lg font-semibold">{value}</div>
        </div>
      </div>
    </div>
  );
}

function Logo({ src, alt }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-[var(--bg-300)] bg-white p-4">
      {/* Use next/image if you prefer */}
      <img
        src={src}
        alt={alt}
        className="h-10 w-auto opacity-80"
        loading="lazy"
      />
    </div>
  );
}

function Testimonial({ quote, name, role }) {
  return (
    <li className="relative rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-[var(--primary-100)]">
        <Quote className="h-5 w-5" />
        <span className="text-sm font-semibold">Testimonial</span>
      </div>
      <p className="text-[var(--text-100)]">
        “{quote}”
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[var(--bg-200)] border border-[var(--bg-300)] flex items-center justify-center text-[var(--primary-100)]">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold text-[var(--text-100)]">{name}</div>
          <div className="text-xs text-[var(--text-200)]">{role}</div>
        </div>
      </div>
    </li>
  );
}
