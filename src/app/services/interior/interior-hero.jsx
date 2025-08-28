'use client';

import Image from 'next/image';

import HeroCta from '@/app/components/cta-folder/Call-to-action';
import { motion } from 'framer-motion';
import { Paintbrush, DoorClosed, Ruler, Wind, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroInterior() {
  return (
    <section className="relative overflow-hidden" aria-label="Interior painting services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-[var(--bg-200)] px-3 py-1 text-xs font-medium text-[var(--text-200)]">
              <Paintbrush className="h-4 w-4" />
              Interior Painting
            </span>

            <h1 className="mt-4 text-4xl/tight font-extrabold text-[var(--text-100)] sm:text-5xl">
              Flawless interiors—<span className="text-[var(--primary-100)]">walls, ceilings, trim</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-[var(--text-100)]">
              Professional interior repainting for offices, clinics, retail, and multi-unit spaces.
              Clean edges and dust-controlled prep—done on your schedule.
            </p>

            {/* Feature bullets */}
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 text-[var(--text-100)]">
              <li className="flex items-center gap-3 rounded-xl border border-[var(--bg-300)] bg-white px-3 py-2 shadow-sm">
                <Ruler className="h-5 w-5 text-[var(--primary-100)]" />
                Crisp lines & edge detailing
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-[var(--bg-300)] bg-white px-3 py-2 shadow-sm">
                <DoorClosed className="h-5 w-5 text-[var(--primary-100)]" />
                Doors, frames & trim finishing
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-[var(--bg-300)] bg-white px-3 py-2 shadow-sm">
                <Wind className="h-5 w-5 text-[var(--primary-100)]" />
                Low-VOC, fast-cure options
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <HeroCta buttontext="Request a Proposal →" />
 
            </div>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--text-200)]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--primary-100)]" />
                WSIB & insured
              </div>
              <span className="hidden h-3 w-px bg-[var(--bg-300)] sm:block" />
              <div>Clean site, minimal disruption</div>
            </div>
          </motion.div>

          {/* Visual + floating callout */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-3xl border border-[var(--bg-300)] bg-[var(--bg-200)] shadow-lg">
              <Image
                src="/hero1.jpg"
                alt="Freshly painted interior with neutral walls, crisp trim, and clean ceiling lines"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating pill callout (bottom-right) */}
              <div className="pointer-events-auto absolute bottom-4 right-4">
                <div className="flex max-w-xs items-start gap-3 rounded-2xl border border-[var(--bg-300)] bg-white/95 p-3 text-sm text-[var(--text-100)] shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/80">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--bg-200)]">
                    <Sparkles className="h-5 w-5 text-[var(--primary-100)]" />
                  </span>
                  <div>
                    <div className="font-semibold">Dust-Controlled Prep</div>
                    <div className="text-[var(--text-200)]">
                      HEPA sanding & clean containment for a spotless finish.
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle top gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
