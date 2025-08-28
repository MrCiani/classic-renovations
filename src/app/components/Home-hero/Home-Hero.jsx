'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import HeroCta from '../cta-folder/Call-to-action';

export default function HomeHero() {
  const reduce = useReducedMotion();

  // Motion presets
  const fadeInUp = (d = 0) => ({
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.45, ease: 'easeOut' } },
  });

  // Testimonial rotation
  const testimonials = useMemo(
    () => [
      {
        name: 'Phillip Mason',
        location: 'Toronto',
        avatar: '/avatars/phillipMason.jpg',
        quote: 'Professional, fast, and flawless results. Highly recommend.',
        rating: 5,
      },
      {
        name: 'Jeremy J.',
        location: 'Mississauga',
        avatar: '/avatars/jeremyj.jpg',
        quote: 'Hit our tight schedule with clean lines and zero dust issues.',
        rating: 5,
      },
      {
        name: 'Phillipe G.',
        location: 'Burlington',
        avatar: '/avatars/phillipe.jpg',
        quote: 'Super tidy, well-coordinated with other trades, and on budget.',
        rating: 5,
      },
    ],
    []
  );

  const [ti, setTi] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (!hoverRef.current) setTi((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [reduce, testimonials.length]);

  const t = testimonials[ti];

  return (
    <section aria-labelledby="hero-heading">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-12 sm:py-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col">
            <motion.div
              variants={fadeInUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-[28px] border border-[var(--bg-300)] p-7 sm:p-10 text-white shadow-md"
              style={{
                background: 'linear-gradient(135deg, var(--primary-100) 0%, var(--primary-200) 70%)',
              }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(120%_90%_at_10%_10%,rgba(255,255,255,.08)_0%,transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,.18),transparent_1.6px)]" />

              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/85">
                Commercial & Multi-Residential
              </p>

              <h1 id="hero-heading" className="text-4xl sm:text-5xl font-extrabold leading-[1.05]">
                HIGH-RISE. MID-RISE.
                <br />
                COMMERCIAL PAINTING.
              </h1>

              <p className="mt-4 max-w-prose text-white/95 leading-relaxed">
                Large crews, sharp lines, and durable low-VOC finishes. We hit schedules,
                coordinate with trades, and keep sites safe and tidy.
              </p>

              <div className="mt-7 flex flex-col items-start gap-3">
                {/* CTA micro-interaction */}
                <motion.div
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  whileTap={reduce ? {} : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <HeroCta buttontext="Request a call back" />
                </motion.div>

                {/* Stat strip */}
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
                    <strong className="text-white">25+ years</strong>
                    <span className="opacity-90">experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
                    <strong className="text-white">300+ clients</strong>
                    <span className="opacity-90">served GTA-wide</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Social proof (rotating) */}
            <motion.figure
              variants={fadeInUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 rounded-[28px] border border-[var(--bg-300)] bg-white/90 px-5 py-4 shadow-sm backdrop-blur transition hover:shadow-md"
              onMouseEnter={() => (hoverRef.current = true)}
              onMouseLeave={() => (hoverRef.current = false)}
            >
              <div className="flex items-start gap-3">
                <div className="flex -space-x-2 shrink-0 pt-1">
                  {[ti, (ti + 1) % testimonials.length, (ti + 2) % testimonials.length].map((idx) => (
                    <Image
                      key={idx}
                      src={testimonials[idx].avatar}
                      alt={testimonials[idx].name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full border border-[var(--bg-300)] object-cover"
                    />
                  ))}
                </div>

                <figcaption className="flex-1">
                  <div
                    className="flex items-center gap-1.5 text-[var(--accent-100)]"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: reduce ? 1 : 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.06, type: 'spring', stiffness: 240, damping: 18 }}
                      >
                        <Star size={16} aria-hidden fill="currentColor" />
                      </motion.span>
                    ))}
                  </div>

                  <blockquote className="mt-1 text-xs sm:text-[15px] italic text-[var(--text-100)]" aria-live="polite">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-1 text-[13px] text-[var(--text-200)]">
                    — <span className="font-semibold text-[var(--text-100)]">{t.name}</span>, {t.location}
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          </div>

          {/* RIGHT: large + two stacked small images */}
          <div className="relative">
            <div className="grid grid-cols-3 items-start gap-4">
              {/* Large image */}
              <motion.div
                variants={fadeInUp(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reduce ? {} : { scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                className="col-span-2"
              >
                <div className="group relative overflow-hidden rounded-[28px] border border-[var(--primary-100)] shadow-lg">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* IMPORTANT: make the immediate parent of <Image fill /> relative + sized */}
                  <div className="relative aspect-[4/5.2] sm:h-full">
                    <Image
                      src="/01-hero.jpg"
                      alt="Interior repaint in progress"
                      fill
                      priority
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width:1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Stacked small images */}
              <div className="col-span-1 flex flex-col items-stretch gap-4">
                <motion.div
                  variants={fadeInUp(0.12)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                  className="group relative overflow-hidden rounded-[24px] border border-[var(--primary-100)] shadow-md"
                >
                  {/* IMPORTANT: relative + aspect for fill image */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/02-detail.jpg"
                      alt="Detail: crisp lines and finishes"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width:1024px) 32vw, 25vw"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp(0.18)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                  className="group relative overflow-hidden rounded-[24px] border border-[var(--primary-100)] shadow-md"
                >
                  {/* IMPORTANT: relative + aspect for fill image */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/03-hero.jpg"
                      alt="Crew and prep work"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width:1024px) 32vw, 25vw"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
