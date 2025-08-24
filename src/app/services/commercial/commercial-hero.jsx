'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Building2, ShieldCheck, Clock3, Star } from 'lucide-react'
import HeroCta from '@/app/components/cta-folder/Call-to-action'

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.5, ease: 'easeOut' } },
})

export default function HeroCommercial() {
  const reduce = useReducedMotion()

  return (
    <section
      aria-label="Commercial painting hero"
      className="relative overflow-hidden py-12 lg:py-16 px-4"
    >
      {/* Soft gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--hero-gradient)' }}
      />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-start">
        {/* LEFT: Media spotlight (tall image) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.figure
            variants={fade(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[var(--bg-300)] shadow bg-white"
          >
            <Image
              src="/commercial/hero.jpg"
              alt="Commercial lobby repaint with low-odor coatings"
              width={1600}
              height={2000}
              className="h-[480px] w-full object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 40vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-xs text-white/90 bg-gradient-to-t from-black/50 to-transparent">
              Lobby upgrade • Low-odor, fast-cure systems • Minimal disruption
            </figcaption>
          </motion.figure>

{/* Mini testimonial card (replaces the paint-can block) */}
<motion.blockquote
  variants={fade(0.1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="hidden lg:flex flex-col justify-between rounded-2xl border border-[var(--bg-300)] bg-white shadow p-6 min-h-[200px]"
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
    “This team was amazing. They kept our lobby spotless with Zero complaints from customers.”
  </p>

  {/* Author + reviews chip */}
  <footer className="mt-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <Image
        src="/avatars/johnny_wagner.jpg"
        alt="Alexi Krustovski"
        width={40}
        height={40}
        className="h-11 w-11 rounded-full border border-[var(--bg-300)] object-cover"
      />
      <div>
        <div className="text-sm font-semibold text-[var(--text-100)]">Johnny Wagner</div>
        <div className="text-xs text-[var(--text-200)]">Property Manager (ScotiaBank) </div>
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

        {/* RIGHT: Copy + stacked tiles */}
        <div className="lg:col-span-7 grid gap-6">
          {/* Headline + conversion stack */}
          <motion.div
            variants={fade(0.08)}
            initial="hidden"
            whileInView="show"
            className="text-center lg:text-left"
          >
            <p className="text-xs font-semibold tracking-wider text-[var(--primary-100)] uppercase">
              Serving the GTA • Offices • Retail • Multi-Unit • Facilities
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-[var(--primary-100)]">Commercial Painting</span>
              <br /> Clean, Compliant & On-Schedule
            </h1>
            <p className="mt-5 text-lg text-[var(--text-200)] max-w-2xl mx-auto lg:mx-0">
              Dust-controlled prep, low-VOC systems, and professional finishes for occupied buildings —
              delivered with night/weekend scheduling and clear communication.
            </p>

            {/* Trust chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1.5 text-sm text-[var(--text-100)] shadow-sm">
                <Star className="h-4 w-4 text-yellow-400" />
                4.9★ vendor rating
              </span>
 
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1.5 text-sm text-[var(--text-100)] shadow-sm">
                <ShieldCheck className="h-4 w-4 text-[var(--primary-100)]" />
                WSIB Insured
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1.5 text-sm text-[var(--text-100)] shadow-sm">
  <Building2 className="h-4 w-4 text-[var(--primary-100)]" />
  Multi-Unit & Common Area Expertise
</span>
            </div>

            {/* Primary CTA + secondary phone CTA */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <HeroCta />

            </div>
          </motion.div>

          {/* Stacked media tiles */}
          <div className="grid grid-cols-2 gap-6">
            <motion.figure
              variants={fade(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-[var(--bg-300)] bg-white shadow"
            >
              <Image
                src="/commercial/hero2.jpg"
                alt="Common-area corridor repaint with scuff-resistant coatings"
                width={1200}
                height={800}
                className="h-48 w-full object-cover"
                sizes="(max-width:1024px) 50vw, 25vw"
              />
              <figcaption className="p-3 text-sm text-[var(--text-200)]">
                Corridors & lobbies • Scuff-resistant systems
              </figcaption>
            </motion.figure>

            <motion.figure
              variants={fade(0.16)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-[var(--bg-300)] bg-white shadow"
            >
              <Image
                src="/commercial/hero3.jpg"
                alt="Warehouse walls and back-of-house epoxy/urethane upgrade"
                width={1200}
                height={800}
                className="h-48 w-full object-cover"
                sizes="(max-width:1024px) 50vw, 25vw"
              />
              <figcaption className="p-3 text-sm text-[var(--text-200)]">
                BOH & warehouses • Epoxy/urethane durability
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
              <p className="text-4xl font-extrabold text-[var(--accent-100)]">98%</p>
              <p className="text-sm text-white/95">Repeat & referral clients (commercial)</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/25" />
            <ul className="hidden sm:grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-white/95">
              <li>40+ buildings maintained</li>
              <li>Night & weekend windows</li>
              <li>Clear daily updates</li>
              <li>COI on request</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
