'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Building2, ShieldCheck, Clock3, Star } from "lucide-react"
import HeroCta from '@/app/components/cta-folder/Call-to-action'

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.5, ease: 'easeOut' } },
})

export default function HeroMultiUnitPM() {
  const reduce = useReducedMotion()

  return (
    <section
      aria-label="Multi-unit & Property Manager painting hero"
      className="relative overflow-hidden py-12 lg:py-16 px-4"
    >
      {/* Soft gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--hero-gradient)' }}
      />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-start">
        {/* LEFT: Copy + stacked tiles */}
        <div className="lg:col-span-7 grid gap-6">
          {/* Headline + CTA */}
          <motion.div
            variants={fade(0.08)}
            initial="hidden"
            whileInView="show"
            className="text-center lg:text-left"
          >
            <p className="text-xs font-semibold tracking-wider text-[var(--primary-100)] uppercase">
              Serving the GTA • Condos • Apartments • HOAs • Facility Mgmt
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-[var(--primary-100)]">Multi-Unit Painting</span>
              <br /> Built for Property Managers
            </h1>

            <p className="mt-5 text-lg text-[var(--text-200)] max-w-2xl mx-auto lg:mx-0">
              Tenant-safe systems, and dust-controlled prep for occupied buildings.
              We coordinate notices, protection, and spotless turnover—so your residents and boards stay happy.
            </p>

 <div className="mt-6 flex sm:flex-row gap-3 justify-center lg:justify-start items-center ">
  <HeroCta buttontext="Request a Building Quote" />

  {/* Badge stack */}
  <div className="flex flex-wrap gap-2 mt-3 sm:mt-0 sm:ml-3">

  <span className="inline-flex items-center gap-2 rounded-full  border-[var(--bg-300)] bg-[var(--bg-100)] px-3 py-1 text-md font-medium text-[var(--text-100)] ">
      <Clock3 className="h-8 w-8 text-[var(--primary-100)]" />
      On-Time Delivery & On-Schedule
    </span>


  </div>
</div>

          </motion.div>

          {/* Stacked media tiles — equal heights */}
          <div className="grid grid-cols-2 gap-6 items-stretch">
            <motion.figure
              variants={fade(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-[var(--bg-300)] bg-white shadow"
            >
              {/* fixed-ratio media box so cards match height */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <Image
                  src="/multiunit/hero1.jpg"
                  alt="Condo corridor repaint with scuff-resistant coatings and clean protection"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
              {/* fixed caption height for consistency */}
              <figcaption className="p-3 text-sm text-[var(--text-200)] min-h-12 flex items-center">
                Corridors & lobbies • Scuff-resistant systems • Clean containment
              </figcaption>
            </motion.figure>

            <motion.figure
              variants={fade(0.16)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-[var(--bg-300)] bg-white shadow"
            >
              <div className="w-full aspect-[16/9] overflow-hidden">
                <Image
                  src="/multiunit/hero2.jpg"
                  alt="Amenity and BOH repaint with durable epoxy/urethane for high-traffic areas"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
              <figcaption className="p-3 text-sm text-[var(--text-200)] min-h-12 flex items-center">
                Durable Finishes for Amenities & BOH • Designed for Daily Wear
              </figcaption>
            </motion.figure>
          </div>

          {/* Stat card */}
          <motion.div
            variants={fade(0.2)}
            initial="hidden"
            whileInView="show"
            className="relative rounded-2xl border border-gray-200 shadow p-6 flex items-center justify-between"
            style={{ background: 'var(--hero-gradient2)' }}
          >
            <div>
              <p className="text-4xl font-extrabold text-[var(--accent-100)]">95%+</p>
              <p className="text-sm text-white/95">PM retention & repeat projects</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/25" />
            <ul className="hidden sm:grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-white/95">
              <li>40+ buildings maintained</li>
              <li>Tenant notice coordination</li>
              <li>Daily progress updates</li>
              <li>Flexible phasing by floor/stack</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT: Main media + testimonial — evenly distributed */}
        <div className="lg:col-span-5 grid gap-6 lg:grid-rows-[480px_1fr]">
          {/* Main image (fixed height row) */}
          <motion.figure
            variants={fade(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[var(--bg-300)] shadow bg-white h-full"
          >
            <Image
              src="/multiunit/hero3.jpg"
              alt="High-rise lobby repaint completed after hours with tenant-safe coatings"
              width={1600}
              height={2000}
              className="h-full w-full object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 40vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-xs text-white/90 bg-gradient-to-t from-black/50 to-transparent">
              High-rise lobby • Low-odor, fast-cure systems • Minimal disruption
            </figcaption>
          </motion.figure>

          {/* Testimonial fills remaining space */}
          <motion.blockquote
            variants={fade(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden lg:flex flex-col justify-between rounded-2xl border border-[var(--bg-300)] bg-white shadow p-6 h-full"
            aria-label="Client testimonial"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-yellow-400" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="mt-2 text-[var(--text-100)] text-base leading-snug">
              “Zero tenant complaints and spotless protection. Their night crews kept our schedules on track
              and our board was impressed with the finish.”
            </p>

            {/* Author + reviews chip */}
            <footer className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/avatars/johnny_wagner.jpg"
                  alt="Property Manager avatar"
                  width={40}
                  height={40}
                  className="h-11 w-11 rounded-full border border-[var(--bg-300)] object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-[var(--text-100)]">Johnny Wagner</div>
                  <div className="text-xs text-[var(--text-200)]">Property Manager, High-Rise Portfolio</div>
                </div>
              </div>

              <a
                href="#reviews"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-[var(--bg-100)] px-3 py-1 text-xs text-[var(--text-100)] hover:shadow transition"
                aria-label="Read more reviews"
                title="Read more reviews"
              >
                <span className="text-yellow-400">★</span> 4.9/5 • 120+ reviews
              </a>
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
