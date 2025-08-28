'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';

const trustedLogos = [
  { name: 'Delinda Team', href: 'https://30oldmill.com/', src: '/trusted-badges/trust1.png' },
  { name: 'La Salle Park Retirement', href: 'https://www.lasalleparkretirement.com/', src: '/trusted-badges/trust2.png' },
  { name: 'Houseful', href: 'https://www.houseful.ca/', src: '/trusted-badges/trust3.png' },
  { name: 'Beau Soleil Condos', href: 'https://beausoleilcondos.com/', src: '/trusted-badges/trust4.png' },
];

// how many times to repeat the logo set (3 is safer on wide screens)
const DUP_SETS = 3;

export default function TrustedBy() {
  const containerRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const startScroll = useRef(0);
  const raf = useRef(0);
  const lastTs = useRef(0);
  const distanceRef = useRef(0); // dynamic distance (one set width)

  const reduceMotion = useRef(false);
  const [secondsPerLoop, setSecondsPerLoop] = useState(12); // mobile default

  // repeat logos DUP_SETS times (only the first set is focusable/accessible)
  const logos = useMemo(() => {
    return Array.from({ length: DUP_SETS }, (_, setIndex) =>
      trustedLogos.map((l) => ({ ...l, duplicate: setIndex > 0 }))
    ).flat();
  }, []);

  // desktop vs mobile speed + prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const mqr = window.matchMedia('(prefers-reduced-motion: reduce)');

    const applyWidth = () => setSecondsPerLoop(mq.matches ? 25 : 12);
    const applyMotion = () => {
      reduceMotion.current = mqr.matches;
      if (reduceMotion.current) setPaused(true);
      else setPaused(false);
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

  // observe content width (scrollWidth) and recalc distance whenever it changes
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateDistance = () => {
      // width of *one* set of logos
      distanceRef.current = el.scrollWidth / DUP_SETS;
    };

    // ResizeObserver picks up image loads, font swaps, and resizes
    const ro = new ResizeObserver(updateDistance);
    ro.observe(el);

    // also listen for image loads just in case
    const imgs = el.querySelectorAll('img');
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', updateDistance, { once: true });
    });

    // initial compute (after a tick to allow layout)
    const id = requestAnimationFrame(updateDistance);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(id);
    };
  }, []);

  // Auto-scroll with RAF
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

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

      const distance = distanceRef.current || 0;
      if (distance > 0) {
        const pxPerSec = distance / secondsPerLoop;
        el.scrollLeft += pxPerSec * dt;

        // wrap forward
        if (el.scrollLeft >= distance) {
          el.scrollLeft -= distance;
        }
        // (optional) wrap backwards if ever negative
        if (el.scrollLeft < 0) {
          el.scrollLeft += distance;
        }
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [paused, dragging, secondsPerLoop]);

  // drag-to-scroll
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

    const distance = distanceRef.current || 0;
    if (distance > 0) {
      if (el.scrollLeft >= distance) el.scrollLeft -= distance;
      if (el.scrollLeft < 0) el.scrollLeft += distance;
    }
  };
  const endDrag = () => {
    setDragging(false);
    if (!reduceMotion.current) setPaused(false);
  };

  // JSON-LD (unchanged)
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trusted by Property Managers & Owners',
    itemListElement: trustedLogos.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Organization', name: l.name, url: l.href },
    })),
  };

  return (
    <section id="trusted-by" aria-labelledby="trusted-by-title" className="py-8 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="trusted-by-title" className="text-center text-2xl font-medium text-[var(--text-100)] mb-6">
          Trusted by Property Managers &amp; Owners in the GTA
        </h2>

        <p className="sr-only">
          Classic Contracting is trusted by leading residential and commercial property managers and owners in Toronto and the GTA.
        </p>

        <div
          ref={containerRef}
          className="relative overflow-x-auto hide-scrollbar rounded-3xl ring-1 ring-[color:var(--bg-300)]"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
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
          {/* w-[max-content] ensures the list expands to its content width */}
          <ul className="flex items-center gap-16 px-6 py-6 w-[max-content]" role="list">
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
                  {/* Next/Image warning-free: both dimensions auto; cap with max-h-* */}
                  <Image
                    src={logo.src}
                    alt={logo.duplicate ? '' : `Client logo: ${logo.name}`}
                    width={160}
                    height={80}
                    className="h-auto w-auto max-h-20 object-contain opacity-90 transition hover:opacity-100"
                    sizes="(max-width: 768px) 120px, 160px"
                    loading={logo.duplicate ? 'lazy' : undefined}
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

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
