import { ShieldCheck, Timer, Sparkles, Leaf, ThumbsUp, ClipboardCheck, Building2 } from 'lucide-react'
import Link from 'next/link'
import HeroCta2 from '../cta-folder/call-to-action2'

const points = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    blurb: 'Fully insured painting crews with WSIB coverage and professional supervision on every job across the GTA.'
  },
  {
    icon: Timer,
    title: 'On-Time & On-Schedule',
    blurb: 'Reliable scheduling for suites, corridors, and common areas—coordinated with site supers to avoid delays.'
  },
  {
    icon: Sparkles,
    title: 'Quality That Lasts',
    blurb: 'Spec-driven surface prep, crisp lines, and durable coatings designed for high-traffic residential and commercial spaces.'
  },
  {
    icon: Leaf,
    title: 'Low/Zero-VOC Options',
    blurb: 'Health-conscious paint systems and clean sites to keep buildings safe and tidy during and after work.'
  },
  {
    icon: ClipboardCheck,
    title: 'Clear Scope & Pricing',
    blurb: 'Transparent quotes, documented warranties, and site sign-off checklists—no surprises.'
  },
  {
    icon: ThumbsUp,
    title: 'Responsive Service',
    blurb: 'Fast communication, photo updates, and punch-list close-out for a smooth project experience.'
  },
]

export default function WhyChooseUs() {
  // JSON-LD: ItemList of benefits
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Why Choose Classic Contracting',
    itemListElement: points.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.title,
      description: p.blurb,
    })),
  }

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-title"
      className="py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 flex flex-col items-start sm:items-center gap-3 text-left sm:text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-[var(--bg-300)] text-[var(--text-200)]">
            <Building2 className="w-4 h-4" aria-hidden="true" />
            Why choose Classic Contracting
          </span>
          <h2
            id="why-choose-us-title"
            className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)] leading-tight"
          >
            Reliable crews. Professional finishes. Zero drama.
          </h2>
          <p className="text-[var(--text-200)] max-w-2xl">
            We hit schedules, coordinate with trades, and deliver clean, long-lasting interior and exterior painting across residential,
            multi-unit, and commercial properties.
          </p>
        </div>

        {/* Feature grid (semantic list) */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {points.map((p, i) => (
            <li
              key={i}
              className="rounded-2xl border border-[var(--bg-300)] bg-white/80 shadow-sm hover:shadow transition p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl p-3 bg-[var(--primary-100)]" aria-hidden="true">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-100)]">{p.title}</h3>
                  <p className="mt-1 text-[var(--text-200)]">{p.blurb}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Stats + CTA bar */}
        <HeroCta2
          title="Reliable Crews. Professional Finishes."
          subtitle="Licensed & Insured • Clean Sites • On-Time Delivery"
          buttontext="Request a Proposal →"
          bgColor="var(--accent-100)"
          textColor="var(--text-100)"
        />

        {/* JSON-LD for rich understanding of benefits */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </div>
    </section>
  )
}
