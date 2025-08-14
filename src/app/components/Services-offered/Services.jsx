'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroCta2 from '../cta-folder/call-to-action2'
import Link from 'next/link'
import { Paintbrush, Home as HomeIcon, Layers, SquareStack, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Interior Painting',
    image: '/Service-Images/interior.jpg',
    path: '/painting/interior',
    icon: Paintbrush,
    points: [
      'Walls, ceilings, trim, feature walls',
      'Dust-controlled prep & surface repair',
      'Crisp lines & even coverage'
    ],
    alt: 'Interior painting example showing crisp wall lines, smooth ceilings, and detailed trim'
  },
  {
    title: 'Exterior Painting',
    image: '/Service-Images/exterior.jpg',
    path: '/painting/exterior',
    icon: HomeIcon,
    points: [
      'Siding, brick, stucco, soffits',
      'Weatherproof coatings & sealants',
      'Low/zero-VOC options available'
    ],
    alt: 'Exterior painting of siding and stucco with weatherproof coatings and clean edges'
  },
  {
    title: 'Commercial',
    image: '/Service-Images/commercial.jpg',
    path: '/painting/commercial',
    icon: Layers,
    points: [
      'Retail, offices, common areas',
      'Spec-driven systems & materials',
      'Coordinated with GCs/supers'
    ],
    alt: 'Commercial office painting with clean walls, ceilings, and trim to specification'
  },
  {
    title: 'Multi-Unit / PM',
    image: '/Service-Images/multi-unit.jpg',
    path: '/painting/multi-unit',
    icon: SquareStack,
    points: [
      'Turns, corridors, hallways',
      'Efficient scheduling for minimal downtime',
      'Consistent quality across multiple units'
    ],
    alt: 'Multi-unit corridor repaint with durable finishes and consistent coverage'
  },
  {
    title: 'Cabinet Refinishing',
    image: '/Service-Images/cabinet.jpg',
    path: '/painting/cabinets',
    icon: Paintbrush,
    points: [
      'Kitchen & vanity spraying',
      'Factory-smooth finish',
      'Durable, wipe-clean enamel surfaces'
    ],
    alt: 'Cabinet refinishing with factory-smooth sprayed enamel finish'
  },
]

export default function ServicesOffered() {
  // Build absolute URLs for JSON-LD when running in the browser
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Painting Services in Toronto & the GTA',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        serviceType: s.title,
        areaServed: { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
        provider: { '@type': 'Organization', name: 'Classic Contracting' },
        url: baseUrl ? `${baseUrl}${s.path}` : s.path,
      },
    })),
  }

  return (
    <section
      id="painting-services"
      aria-labelledby="painting-services-title"
      className="py-24 px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* SEO-friendly heading + your original headline as subtitle */}
        <h2
          id="painting-services-title"
          className="text-4xl md:text-5xl font-bold text-[var(--text-100)] mb-2"
        >
          Painting Services in Toronto & the GTA
        </h2>
        <p className="text-lg text-[var(--text-200)] mb-4 max-w-3xl mx-auto">
          Builder-grade results from schedule-safe crews. High-rise/mid-rise suites, corridors & amenities — spec-driven, safety-first, turnover-ready.
        </p>

        {/* Services Grid as a semantic list */}
        <ul
          className="grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 text-left"
          role="list"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white border border-[var(--bg-300)] rounded-2xl shadow-sm hover:shadow-lg overflow-hidden group transition-all flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={i === 0}
                    loading={i === 0 ? undefined : 'lazy'}
                    decoding="async"
                    fetchPriority={i === 0 ? 'high' : undefined}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-grid place-items-center w-10 h-10 rounded-xl
                                 bg-[var(--primary-300)]/50 text-[var(--primary-100)]
                                 ring-1 ring-[var(--primary-100)]/20"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-[var(--text-100)]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Key points */}
                  <ul className="mb-5 flex-1 space-y-2">
                    {service.points.slice(0, 4).map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[var(--text-200)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--primary-100)] flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.path}
                    className="group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium
                               bg-[var(--primary-100)] text-white shadow-sm hover:opacity-90 focus:outline-none
                               focus-visible:ring-2 focus-visible:ring-[var(--primary-100)] mt-auto gap-2"
                    aria-label={`Learn more about ${service.title} in Toronto & the GTA`}
                  >
                    <span className="text-white">Learn More</span>
                    <ArrowRight className="text-white text-sm" />
                  </Link>
                </div>
              </motion.li>
            )
          })}
        </ul>

        <HeroCta2 />

        {/* JSON-LD for services list */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </motion.div>
    </section>
  )
}
