'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import HeroCta from '../cta-folder/Call-to-action';

export default function HomeHero() {
  const reduce = useReducedMotion();
  const fadeInUp = (d = 0) => ({
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.45, ease: 'easeOut' } },
  });

  const testimonials = useMemo(
    () => [
      { name: 'Phillip Mason', location: 'Toronto', avatar: '/avatars/phillipMason.jpg', quote: 'Professional, fast, and flawless results. Highly recommend.', rating: 5 },
      { name: 'Jeremy J.', location: 'Mississauga', avatar: '/avatars/jeremyj.jpg', quote: 'Hit our tight schedule with clean lines and zero dust issues.', rating: 5 },
      { name: 'Phillipe G.', location: 'Burlington', avatar: '/avatars/phillipe.jpg', quote: 'Super tidy, well-coordinated with other trades, and on budget.', rating: 5 },
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
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* DESKTOP/TABLET background image */}
      <div className="absolute inset-0 hidden md:block">
        <Image src="/g1.svg" alt="" fill priority className="object-cover" sizes="100vw" />
        {/* readability overlays */}
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="min-h-[70vh] md:min-h-[78vh] py-12 sm:py-16 md:py-20 flex items-center">
          <div className="w-full max-w-2xl">
            {/* Copy */}
            <motion.div
              variants={fadeInUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[28px] p-5 sm:p-8 md:p-0 md:bg-transparent"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--text-100)]">
                Commercial & Multi-Residential
              </p>

              <h1
                id="hero-heading"
                className="text-3xl sm:text-5xl text-[var(--primary-100)] font-extrabold leading-[1.05]"
              >
                HIGH-RISE. MID-RISE.
                <br />
                COMMERCIAL PAINTING.
              </h1>

              <p className="mt-4 max-w-prose text-[var(--text-100)] leading-relaxed">
                Large crews, sharp lines, and durable low-VOC finishes. We hit schedules,
                coordinate with trades, and keep sites safe and tidy.
              </p>

              <div className="mt-6 flex flex-col items-start gap-3">
                <motion.div
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  whileTap={reduce ? {} : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <HeroCta buttontext="Request a call back" />
                </motion.div>

                {/* Stats */}
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--text-100)]">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[var(--text-100)]/70" />
                    <strong>25+ years</strong>
                    <span className="opacity-80">experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[var(--text-100)]/70" />
                    <strong>300+ clients</strong>
                    <span className="opacity-80">served GTA-wide</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* MOBILE stand-alone image (stacked) */}
            <div className="mt-5 md:hidden">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-black/10">
                <Image
                  src="/g1.svg"
                  alt="Classic Contracting crew on site"
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Testimonial */}
            <motion.figure
              variants={fadeInUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 rounded-[20px] text-[var(--text-100)]"
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
                      className="h-11 w-11 rounded-full ring-2 ring-black/10 object-cover"
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

                  <blockquote className="mt-1 text-xs sm:text-[15px] italic">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-1 text-[13px] text-[var(--text-200)]">
                    — <span className="font-semibold text-[var(--text-100)]">{t.name}</span>, {t.location}
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
