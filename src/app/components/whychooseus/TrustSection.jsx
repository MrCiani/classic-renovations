'use client';

import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';

// ---------- Public API ----------
export default function TrustSection({
  title = 'Trusted by property managers, builders & operators',
  subtitle = 'Clean sites, respectful crews, and finishes that stand up to daily use.',
  logos = [],
  testimonials = [],
  variant = 'full', // 'full' | 'compact'
  className = '',
}) {
  const isCompact = variant === 'compact';

  return (
    <section
      className={`relative  overflow-hidden py-12 lg:py-16 ${className}`}
      aria-label="Trust and testimonials"
    >
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center gap-5 px-4 lg:px-8">
        {/* Header */}
        <header className={`mb-8  flex flex-col items-center ${isCompact ? 'text-left' : 'text-center'}`}>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-100)]">{title}</h2>
          {subtitle && (
            <p className={`mt-3 text-[var(--text-200)] ${isCompact ? '' : 'max-w-2xl mx-auto'}`}>
              {subtitle}
            </p>
          )}
        </header>

        {/* Logos */}
        {logos?.length > 0 && <TrustedLogos items={logos} compact={isCompact} />}

          {/* Testimonials */}
          {testimonials?.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => <Testimonial key={i} {...t} />)}
            </ul>
)}

      </div>
    </section>
  );
}

// ---------- Internals ----------
function TrustedLogos({ items = [], compact = false }) {
  return (
    <div className={`${compact ? 'mb-6' : 'mb-12'}`}>
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex h-35 items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={compact ? 150 : 200}
              height={compact ? 60 : 80}
              className="h-full w-full object-contain opacity-90 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonial({ quote, name, role, avatar, rating = 5 }) {
  return (
    <li className="relative flex flex-col justify-between rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm h-full">
      {/* Top content */}
      <div>
        <p className="text-[var(--text-100)]">“{quote}”</p>

        {/* Stars */}
        <div className="mt-3 flex gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom content (avatar + name/role) */}
      <div className="mt-6 flex items-center gap-3">
        {avatar ? (
          <div className="h-12 w-12 overflow-hidden rounded-full border border-[var(--bg-300)]">
            <Image
              src={`/avatars/${avatar}`}
              alt={`${name} avatar`}
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="h-9 w-9 rounded-full bg-[var(--bg-200)] border border-[var(--bg-300)] flex items-center justify-center text-[var(--primary-100)]">
            <Sparkles className="h-4 w-4" />
          </div>
        )}
        <div>
          <div className="text-sm font-semibold text-[var(--text-100)]">{name}</div>
          <div className="text-xs text-[var(--text-200)]">{role}</div>
        </div>
      </div>
    </li>
  );
}
