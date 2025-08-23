"use client";

import Image from "next/image";
import HeroCta from "@/app/components/cta-folder/Call-to-action";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Classic Contracting — Hero (Exterior Split with Social Proof Overlay)
 */

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.5, ease: "easeOut" } },
});

export default function HeroExterior() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Exterior painting hero" className="relative overflow-hidden py-12 lg:py-16 px-4">
      {/* Gradient background overlay */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--hero-gradient)" }} />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
        {/* LEFT: Messaging */}
        <motion.div
          variants={fade(.05)}
          initial="hidden"
          whileInView="show"
          className="lg:col-span-6 text-center lg:text-left self-start"
        >
          <p className="text-sm font-semibold tracking-wide text-[var(--primary-100)] uppercase">
            Trusted by Homeowners & Property Managers Across the GTA
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-[var(--primary-100)]">Exterior Finishes</span>
            <br /> Clean Prep. Crisp Lines.
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            From siding, brick, and stucco to decks, fences, and railings — our team delivers clean prep, crisp lines, and
            weather-rated systems that stand up to the Canadian climate.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <HeroCta />
          </div>
        </motion.div>

        {/* RIGHT: Visual grid */}
        <motion.div
          variants={fade(.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-6 grid grid-cols-2 gap-4 relative"
        >
          {/* Social proof badge for the WHOLE right block */}
          <div className="absolute -top-14 right-0 flex items-center gap-3  px-3 py-2 rounded-xl ">
            <span className="text-sm font-medium text-[var(--text-200)]">120+ happy clients</span>
            <div className="flex -space-x-2">
              <img src="/avatars/gerome.jpg" alt="Gerome" className="h-11 w-11 rounded-full border-2 border-white" />
              <img src="/avatars/merna.jpg" alt="Merna" className="h-11 w-11 rounded-full border-2 border-white" />
              <img src="/avatars/alexi.jpg" alt="Alexi" className="h-11 w-11 rounded-full border-2 border-white" />
            </div>
            
          </div>

          {/* Top wide image */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden border border-gray-200 shadow aspect-[17/8]">
            <Image
              src="/exterior/01-hero.jpg"
              alt="Fresh exterior repaint"
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>

          {/* Bottom-left image */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow h-40">
            <Image
              src="/exterior/02-hero.jpg"
              alt="Deck and railing refinishing"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 50vw, 25vw"
            />
          </div>

          {/* Bottom-right stat container */}
          <div className="relative rounded-2xl border border-gray-200 shadow bg-white p-6 flex flex-col justify-center h-40">
            <p className="text-3xl font-bold text-[var(--primary-100)]">98%</p>
            <p className="text-sm text-gray-600">Client satisfaction across 120+ exterior jobs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
