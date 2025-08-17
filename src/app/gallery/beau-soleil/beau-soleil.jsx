'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const IMAGES = [
  {
    src: '/beau-soleil/photo1.jpg',
    alt: 'BeauSoleil Condos lobby with modern chandelier and welcoming reception area'
  },
  {
    src: '/beau-soleil/photo2.jpg',
    alt: 'Communal lounge or dining space with elegant lighting and furnished ambiance'
  },
  {
    src: '/beau-soleil/photo3.jpg',
    alt: 'Suite living area with balcony access and natural light'
  },
  {
    src: '/beau-soleil/photo4.jpg',
    alt: 'Stylish amenity bar or lounge with seating and scenic feature wall'
  }
];




export default function BeauSoleil() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const startX = useRef(0);
  const deltaX = useRef(0);
  const isSwiping = useRef(false);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % IMAGES.length), []);

  // keyboard controls + scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  // touch handlers (swipe left/right)
  const onTouchStart = (e) => {
    if (!open) return;
    const touch = e.touches[0];
    startX.current = touch.clientX;
    deltaX.current = 0;
    isSwiping.current = true;
  };

const onTouchMove = (e) => {
  if (!isSwiping.current) return;
  const touch = e.touches[0];
  deltaX.current = touch.clientX - startX.current;

  if (Math.abs(deltaX.current) > 8 && e.cancelable) {
    e.preventDefault();
  }
};


  const onTouchEnd = () => {
    if (!isSwiping.current) return;
    const threshold = 50; // px to trigger swipe
    if (deltaX.current <= -threshold) {
      next();
    } else if (deltaX.current >= threshold) {
      prev();
    }
    isSwiping.current = false;
    deltaX.current = 0;
  };

  return (
    <>
      <Head>
        <title>Beau Soleil Condos – Gallery | Classic Contracting</title>
        <meta
          name="description"
          content="Photos from Venvi Birkdale Place (Cogir Senior Living): suites, corridors, and amenity space painting by Classic Contracting."
        />
      </Head>

      <main className="mx-auto max-w-6xl px-4 lg:px-6 py-10">
        {/* Breadcrumb / back link */}
        <div className="mb-6">
          <Link
            href="/projects/condos"
            className="text-[var(--primary-100)] underline hover:text-[var(--primary-200)]"
          >
            ← Back to Condos & Apartments
          </Link>
        </div>

        {/* Heading */}
        <header className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-100)]">
            Beau Soleil Condos — Gallery
          </h1>
          <p className="text-[var(--text-200)] mt-2">
            Burlington, ON • Suites &amp; common areas repaint
          </p>
        </header>

        {/* Grid */}
        <section aria-label="Project photos">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.map((img, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => openAt(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-[var(--bg-300)] bg-[var(--bg-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-200)]"
                  aria-label={`Open image ${i + 1}`}
                >
                  <div className="aspect-square">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Lightbox (swipe enabled) */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
          // Allow vertical pan to close space, but capture horizontal swipes
          style={{ touchAction: 'pan-y' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="absolute inset-0 mx-auto my-0 flex max-w-6xl items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <figure className="relative w-full">
              <img
                src={IMAGES[index].src}
                alt={IMAGES[index].alt}
                className="mx-auto max-h-[80vh] w-auto rounded-2xl border border-[var(--bg-300)] object-contain shadow-lg"
                // Visual feedback: small translate following swipe
                style={{
                  transform:
                    isSwiping.current && Math.abs(deltaX.current) > 0
                      ? `translateX(${deltaX.current * 0.25}px)`
                      : 'translateX(0)',
                  transition: isSwiping.current ? 'none' : 'transform 180ms ease-out',
                }}
              />
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {IMAGES[index].alt}
              </figcaption>

              {/* Controls */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-2 top-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[var(--text-100)] shadow hover:bg-white"
              >
                Close
              </button>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-[var(--text-100)] shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-[var(--text-100)] shadow hover:bg-white"
              >
                ›
              </button>
            </figure>
          </div>
        </div>
      )}
    </>
  );
}
