'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroCta2 from '../cta-folder/call-to-action2'
import Link from 'next/link'
import { Building2, Home, Paintbrush, PanelsTopLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Commercial & Multi-Unit',
    image: '/Service-Images/commercial.jpg',
    path: '/services/commercial-painting',
    icon: Building2,
    points: [
      'Spec-driven systems',

      'Coordinated with GCs/supers',
      'Clean, safe sites'
    ]
  },
  {
    title: 'Exterior Painting',
    image: '/Service-Images/exterior.jpg',
    path: '/services/exterior-painting',
    icon: Home,
    points: [
      'Stucco/EIFS, metal, masonry',
      'Weatherproof coatings',
      'Low/zero-VOC options',
      // 'Detailed trims & railings'
    ]
  },
  {
    title: 'Interior Painting',
    image: '/Service-Images/interior.jpg',
    path: '/services/interior-painting',
    icon: Paintbrush,
    points: [
      'Dust-controlled prep',
      'Crisp lines & coverage',
      'Suites, corridors, amenities',
      // 'Efficient turnovers'
    ]
  },
  {
    title: 'Cabinet Refinishing',
    image: '/Service-Images/cabinet.jpg',
    path: '/services/cabinet-refinishing',
    icon: PanelsTopLeft,
    points: [
      'Factory-smooth spraying',
      'Durable, wipe-clean enamel',
      // 'Pro prep & priming',
      'Kitchen + vanity'
    ]
  }
]

export default function ServicesOffered() {
  return (
    <section className="py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
<h2 className="text-4xl md:text-5xl font-bold text-[var(--text-100)] mb-4">
  Builder-Grade Results, Schedule-Safe Crews
</h2>
<p className="text-lg text-[var(--text-200)] mb-4 max-w-3xl mx-auto">
  High-rise/mid-rise suites, corridors & amenities — spec-driven, safety-first, turnover-ready.
</p>


        {/* Services Grid */}
        <div className="grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
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
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={i === 0}
                  />
                </div>

                <div className="p-6 text-left flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-grid place-items-center w-10 h-10 rounded-xl
                                 bg-[var(--primary-300)]/50 text-[var(--primary-100)]
                                 ring-1 ring-[var(--primary-100)]/20"
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-[var(--text-100)]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Primary checkmarks (3–4 key points) */}
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
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span className="text-white">Learn More</span>
                    <ArrowRight className="text-white text-sm" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <HeroCta2 />
      </motion.div>
    </section>
  )
}
