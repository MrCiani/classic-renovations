'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Paintbrush, Home, PanelsTopLeft, Layers, Hammer, Droplet, SprayCan, Palette, ArrowRight
} from 'lucide-react'

const services = [
  { title: 'Interior Painting', image: '/Service-Images/interior.jpg', path: '/services/interior-painting', icon: Paintbrush, blurb: 'Flawless walls, ceilings & trim — meticulous prep and cleanup' },
  { title: 'Exterior Painting', image: '/Service-Images/exterior.jpg', path: '/services/exterior-painting', icon: Home, blurb: 'Weatherproof finishes for siding, brick, stucco & soffits — curb appeal that lasts' },
  { title: 'Cabinet Refinishing', image: '/Service-Images/cabinet.jpg', path: '/services/cabinet-refinishing', icon: PanelsTopLeft, blurb: 'Factory-smooth kitchen & vanity spraying with durable, wipe-clean finishes' },
  { title: 'Trim & Doors', image: '/Service-Images/trim.jpg', path: '/services/trim-doors', icon: Layers, blurb: 'Crisp baseboards, casings, rails & doors with sharp, clean lines' },
  { title: 'Drywall & Patching', image: '/Service-Images/drywall.jpg', path: '/services/drywall-patching', icon: Hammer, blurb: 'Seamless repairs, skim coats & texture removal — paint-ready surfaces' },
  { title: 'Deck & Fence Staining', image: '/Service-Images/deck.jpg', path: '/services/deck-fence-staining', icon: Droplet, blurb: 'UV-protected, even coverage — transparent to solid stains for lasting protection' },
  { title: 'Spray Finishes', image: '/Service-Images/spray.jpg', path: '/services/spray-finishes', icon: SprayCan, blurb: 'Airless & HVLP application — glass-smooth, consistent coats' },
  { title: 'Colour Consultation', image: '/Service-Images/colour.jpg', path: '/services/colour-consultation', icon: Palette, blurb: 'Tailored palettes, large samples & room-by-room coordination' }
]

export default function PaintingServices() {
  return (
    <section className="py-24 px-6">
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
        <p className="text-lg text-[var(--text-200)] mb-6 max-w-3xl">
          Built for builders, Project Managers, and estimators — spec-accurate systems, clean sites, reliable schedules.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 mb-10 items-stretch">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative h-full overflow-hidden rounded-3xl border border-[var(--bg-300)] bg-white
                           shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_18px_50px_-16px_rgba(0,0,0,0.22)]
                           transition-all flex flex-col"
              >
                {/* Top content row */}
                <div className="p-6 md:p-7 pb-3 flex-1">
                  <div className="flex items-start gap-4">
                    {/* LEFT: icon + text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="inline-grid place-items-center w-10 h-10 rounded-xl
                                         bg-[var(--primary-300)]/50 text-[var(--primary-100)]
                                         ring-1 ring-[var(--primary-100)]/20">
                          <Icon className="w-5 h-5" />
                        </span>
                        <h3 className="text-xl font-semibold text-[var(--text-100)] tracking-tight">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-[var(--text-200)] leading-relaxed">
                        {s.blurb}
                      </p>
                    </div>

                    {/* RIGHT: thumbnail chip */}
                    <div className="relative shrink-0 rounded-2xl overflow-hidden ring-1 ring-black/5
                                    bg-white/70 backdrop-blur-md p-1 w-20 h-20 sm:w-24 sm:h-24">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={s.image}
                          alt=""  // decorative preview
                          fill
                          sizes="96px"
                          className="object-cover"
                          priority={i < 2}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA row: consistent & right-aligned */}
                <div className="px-6 md:px-7 pb-6 pt-0 mt-auto flex justify-end">
                  <Link
                    href={s.path}
                    aria-label={`Learn more about ${s.title}`}
                    className="group inline-flex items-center gap-1.5 rounded-full
                               px-4 py-2 text-sm font-medium
                               bg-[var(--primary-100)] text-white shadow-sm
                               hover:opacity-90 focus:outline-none
                               focus-visible:ring-2 focus-visible:ring-[var(--primary-100)]/40"
                  >
                    <span className='text-white'>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
