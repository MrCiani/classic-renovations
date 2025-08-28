// Server Component (no "use client")
import Image from 'next/image'
import { ShieldCheck, BadgeCheck, UserCheck } from 'lucide-react'
import HeroCta from '../cta-folder/Call-to-action'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://classic-contracting.ca'

export default function HomeValueProp() {
  const logoUrl = `${SITE_URL}/valueprop-images/homevalueprop.jpg`

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Classic Contracting',
    description:
      'Spec-accurate interior and exterior painting for condos, rentals, and commercial spaces in Toronto & the GTA. Dust-controlled prep, crisp lines, durable low/zero-VOC finishes.',
    areaServed: { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
    image: logoUrl,
    telephone: '+1-437-555-5555',
    email: 'hello@classiccontracting.ca',
    url: SITE_URL,
    serviceType: [
      'Interior Painting',
      'Exterior Painting',
      'Commercial Painting',
      'Cabinet Refinishing',
    ],
  }

  return (
    <section
      id="home-value-prop"
      aria-labelledby="home-value-prop-title"
      aria-describedby="home-value-prop-desc"
      className="py-10 px-6 bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="text-left flex flex-col justify-start items-start">
          <h2
            id="home-value-prop-title"
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[var(--text-100)]"
          >
            <span className="text-[var(--primary-100)]">Spec-Accurate</span> — Clean, On-Time.
          </h2>

          <p
            id="home-value-prop-desc"
            className="text-lg text-[var(--text-200)] mb-4"
          >
            <strong>Classic Contracting</strong> specializes in interior &amp; exterior
            painting for condos, rentals, and commercial spaces across Toronto &amp; the
            GTA—dust-controlled prep, crisp lines, and durable low/zero-VOC finishes that
            stand up to high traffic.
          </p>

          {/* Client component is fine inside a Server Component */}
          <HeroCta />

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--text-100)] shadow border border-[var(--bg-300)]">
              <ShieldCheck className="w-4 h-4 text-[var(--primary-100)]" aria-hidden="true" />
              WSIB Covered
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--text-100)] shadow border border-[var(--bg-300)]">
              <UserCheck className="w-4 h-4 text-[var(--primary-100)]" aria-hidden="true" />
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--text-100)] shadow border border-[var(--bg-300)]">
              <BadgeCheck className="w-4 h-4 text-[var(--primary-100)]" aria-hidden="true" />
              Low/Zero-VOC Options
            </div>
          </div>

          {/* Screen-reader helper */}
          <p className="sr-only">
            Professional interior and exterior painters serving condos, apartments, rentals,
            and commercial properties in Toronto and the Greater Toronto Area.
          </p>
        </div>

        {/* Right: image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--bg-300)] h-[400px] relative">
          <Image
            src="/valueprop-images/photo1.jpg"
            alt="Professional painters applying low-VOC coatings with floors masked and dust-controlled prep"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            decoding="async"
            className="object-cover"
          />
        </div>
      </div>

      {/* Deterministic JSON-LD (same on server & client) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </section>
  )
}
