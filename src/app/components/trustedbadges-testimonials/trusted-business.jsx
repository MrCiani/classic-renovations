'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const trustedLogos = [
  { name: 'Delinda Team', href: 'https://30oldmill.com/', src: '/trusted-badges/trust1.png' },
  { name: 'La Salle Park Retirement', href: 'https://www.lasalleparkretirement.com/', src: '/trusted-badges/trust2.png' },
  { name: 'Houseful', href: 'https://www.houseful.ca/', src: '/trusted-badges/trust3.png' },
  { name: 'Beau Soleil Condos', href: 'https://beausoleilcondos.com/', src: '/trusted-badges/trust4.png' },
];

export default function TrustedBy() {
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const raf = useRef(0);
  const lastTs = useRef(0);
  const [secondsPerLoop, setSecondsPerLoop] = useState(12); // mobile default
  const reduceMotion = useRef(false);

  // Desktop vs mobile speed + prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const mqr = window.matchMedia('(prefers-reduced-motion: reduce)');

    const applyWidth = () => setSecondsPerLoop(mq.matches ? 25 : 12);
    const applyMotion = () => {
      reduceMotion.current = mqr.matches;
      // Pause marquee entirely if user prefers reduced motion
      if (reduceMotion.current) setPaused(true);
    };

    applyWidth();
    applyMotion();

    mq.addEventListener('change', applyWidth);
    mqr.addEventListener('change', applyMotion);
    return () => {
      mq.removeEventListener('change', applyWidth);
      mqr.removeEventListener('change', applyMotion);
    };
  }, []);

  // Auto-scroll with RAF (works with swipe; seamless loop)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const distance = el.scrollWidth / 2; // width of one set of logos
    lastTs.current = 0;

    const tick = (ts) => {
      if (reduceMotion.current || paused || dragging) {
        lastTs.current = ts;
        raf.current = requestAnimationFrame(tick);
        return;
      }
      if (!lastTs.current) lastTs.current = ts;
      const dt = (ts - lastTs.current) / 1000; // seconds
      lastTs.current = ts;

      const pxPerSec = distance / secondsPerLoop;
      el.scrollLeft += pxPerSec * dt;

      // Seamless wrap
      if (el.scrollLeft >= distance) {
        el.scrollLeft -= distance;
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [paused, dragging, secondsPerLoop]);

  // Drag-to-scroll (mobile & desktop)
  const onPointerDown = (e) => {
    const el = containerRef.current;
    if (!el) return;
    setDragging(true);
    setPaused(true);
    startX.current = 'touches' in e ? e.touches[0].pageX : e.pageX;
    startScroll.current = el.scrollLeft;
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    const el = containerRef.current;
    if (!el) return;
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const walk = (startX.current - x) * 1.1;
    el.scrollLeft = startScroll.current + walk;

    // wrap both directions while dragging
    const distance = el.scrollWidth / 2;
    if (el.scrollLeft >= distance) el.scrollLeft -= distance;
    if (el.scrollLeft < 0) el.scrollLeft += distance;
  };
  const endDrag = () => {
    setDragging(false);
    if (!reduceMotion.current) setPaused(false);
  };

  // Duplicate for seamless loop, but mark duplicates as hidden from a11y/SEO
  const logos = [
    ...trustedLogos.map((l) => ({ ...l, duplicate: false })),
    ...trustedLogos.map((l) => ({ ...l, duplicate: true })),
  ];

  // JSON-LD: ItemList of organizations that trust you
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trusted by Property Managers & Owners',
    itemListElement: trustedLogos.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Organization',
        name: l.name,
        url: l.href,
        // If you have absolute image URLs, include them here:
        // logo: 'https://yourdomain.com' + l.src
      },
    })),
  };

  return (
    <section
      id="trusted-by"
      aria-labelledby="trusted-by-title"
      className="py-8 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="trusted-by-title"
          className="text-center text-2xl font-medium text-[var(--text-100)] mb-6"
        >
          Trusted by Property Managers &amp; Owners in the GTA
        </h2>
        {/* SR-only context to add relevant keywords without visual clutter */}
        <p className="sr-only">
          Classic Contracting is trusted by leading residential and commercial property managers and owners in Toronto and the GTA.
        </p>

        <div
          ref={containerRef}
          className="relative overflow-x-auto hide-scrollbar rounded-3xl ring-1 ring-[color:var(--bg-300)]"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
          onMouseEnter={() => !reduceMotion.current && setPaused(true)}
          onMouseLeave={() => !reduceMotion.current && setPaused(false)}
          onTouchStart={onPointerDown}
          onTouchMove={onPointerMove}
          onTouchEnd={endDrag}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-roledescription="logo carousel"
          aria-live="off"
        >
          <ul className="flex items-center gap-16 px-6 py-6 min-w-max" role="list">
            {logos.map((logo, idx) => (
              <li
                key={`${logo.name}-${idx}`}
                className="shrink-0"
                aria-hidden={logo.duplicate ? 'true' : undefined}
              >
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.name}
                  className="block"
                  tabIndex={logo.duplicate ? -1 : undefined}
                >
                  <Image
                    src={logo.src}
                    alt={logo.duplicate ? '' : `Client logo: ${logo.name}`}
                    width={160}
                    height={80}
                    className="h-20 w-auto object-contain opacity-90 transition hover:opacity-100"
                    sizes="(max-width: 768px) 120px, 160px"
                    loading={logo.duplicate ? 'lazy' : undefined}
                    decoding="async"
                    // priority could be set for the first *non-duplicate* logo if you like:
                    // priority={!logo.duplicate && idx === 0}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* JSON-LD for the primary (non-duplicate) list */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </section>
  );
}
