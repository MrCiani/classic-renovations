'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Paintbrush,
  Home,
  PanelsTopLeft,
  Layers,
  Hammer,
  Droplet,
  SprayCan,
  Palette
} from 'lucide-react'

// Painting-focused services
const services = [
  {
    title: 'Interior Painting',
    image: '/services/interior.jpg',
    path: '/services/interior-painting',
    icon: Paintbrush,
    blurb: 'Walls, ceilings, trim, feature walls'
  },
  {
    title: 'Exterior Painting',
    image: '/services/exterior.jpg',
    path: '/services/exterior-painting',
    icon: Home,
    blurb: 'Siding, brick, stucco, soffits'
  },
  {
    title: 'Cabinet Refinishing',
    image: '/services/cabinet.jpg',
    path: '/services/cabinet-refinishing',
    icon: PanelsTopLeft,
    blurb: 'Kitchen & vanity spraying'
  },
  {
    title: 'Trim & Doors',
    image: '/services/trim.jpg',
    path: '/services/trim-doors',
    icon: Layers,
    blurb: 'Baseboards, casings, doors, rails'
  },
  {
    title: 'Drywall & Patching',
    image: '/services/drywall.jpg',
    path: '/services/drywall-patching',
    icon: Hammer,
    blurb: 'Repairs, skim coat, texture removal'
  },
  {
    title: 'Deck & Fence Staining',
    image: '/services/deck.jpg',
    path: '/services/deck-fence-staining',
    icon: Droplet,
    blurb: 'Transparent to solid stains'
  },
  {
    title: 'Spray Finishes',
    image: '/services/spray.jpg',
    path: '/services/spray-finishes',
    icon: SprayCan,
    blurb: 'Airless & HVLP flawless coats'
  },
  {
    title: 'Colour Consultation',
    image: '/services/colour.jpg',
    path: '/services/colour-consultation',
    icon: Palette,
    blurb: 'Palettes, samples, coordination'
  }
]

export default function PaintingServices() {
  return (
    <section className="py-24 px-6 text-center bg-[var(--bg-100)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-100)] mb-4">
          Professional Painting Services
        </h2>
        <p className="text-lg text-[var(--text-200)] mb-4 max-w-3xl mx-auto">
          From interiors to exteriors, we deliver flawless finishes, precise colour matching, and lasting results across the GTA.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-[var(--bg-300)] rounded-2xl shadow-sm hover:shadow-lg overflow-hidden group transition-all"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw,
                          (max-width: 768px) 50vw,
                          (max-width: 1024px) 33vw,
                          25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[var(--primary-100)]" />
                    <h3 className="text-xl font-semibold text-[var(--text-100)]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-200)] mb-3">
                    {service.blurb}
                  </p>
                  <Link
                    href={service.path}
                    className="text-[var(--primary-100)] hover:text-[var(--accent-100)] text-sm font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
