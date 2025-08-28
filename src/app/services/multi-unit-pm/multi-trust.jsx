'use client'

import Image from 'next/image'
import { Sparkles, Star } from 'lucide-react'

export default function MultiUnitPMTrustSection() {
  const logos = [
    { src: '/trusted-badges/trust4.png', alt: 'Beau Soleil Condos', href: 'https://beausoleilcondos.com/' },
    { src: '/trusted-badges/trust5.jpg', alt: 'condos.ca', href: '#' },
    { src: '/strata/hero-logo.jpg', alt: 'STRATA', href: '#' },
  ]

  const testimonials = [
    {
      quote:
        'Turnovers were on time and corridors stayed spotless throughout. Zero tenant complaints.',
      name: 'James Distro',
      role: 'Senior Property Manager',
      avatar: 'james.jpg',
      rating: 5,
    },
    {
      quote:
        'Reliable crew, clear daily updates, and consistent color standards across units.',
      name: 'Leslie Malkova',
      role: 'Property & Leasing Manager',
      avatar: 'leslie.jpg',
      rating: 5,
    },
    {
      quote:
        "I didn't think they would get it done, but I was wrong! Classic Contracting delivered exactly on schedule.",
      name: 'Shane Vestova',
      role: 'Facilities & Operations Manager',
      avatar: 'shane.jpg',
      rating: 5,
    },
  ]

  return (
    <section
      className="relative overflow-hidden py-12 lg:py-16"
      aria-label="Multi-Unit / Property Management trust and testimonials"
    >
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center gap-5 px-4 lg:px-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-100)]">
            Trusted by property managers & condo boards across the GTA
          </h2>
          <p className="mt-3 text-[var(--text-200)] max-w-2xl mx-auto">
            Tenant-friendly scheduling, dust-controlled prep, and standardized finishes — delivered with clear
            communication and minimal disruption to residents.
          </p>
        </header>

        {/* Bigger logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 lg:gap-14 my-2 min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]">
          {logos.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition inline-flex items-center justify-center"
              aria-label={item.alt}
              title={item.alt}
            >
              <Image
                src={item.src}
                alt={`Client logo: ${item.alt}`}
                // larger intrinsic size for crisp rendering
                width={360}
                height={160}
                // keep aspect ratio (prevents Next/Image warnings)
                className="h-auto w-auto object-contain max-h-24 sm:max-h-28 lg:max-h-32"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="relative flex flex-col justify-between rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm h-full"
            >
              <div>
                <p className="text-[var(--text-100)]">“{t.quote}”</p>
                <div className="mt-3 flex gap-1 text-yellow-400" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${idx < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-[var(--bg-300)]">
                    <Image
                      src={`/avatars/${t.avatar}`}
                      alt={`${t.name} avatar`}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover rounded-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div className="h-9 w-9 rounded-full bg-[var(--bg-200)] border border-[var(--bg-300)] flex items-center justify-center text-[var(--primary-100)]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-[var(--text-100)]">{t.name}</div>
                  <div className="text-xs text-[var(--text-200)]">{t.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
