'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [secondsPerLoop, setSecondsPerLoop] = useState(12); // mobile default; desktop set below

  // Match desktop vs mobile for speed
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setSecondsPerLoop(mq.matches ? 25 : 12);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // Auto-scroll with RAF (works with swipe; seamless loop)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const distance = el.scrollWidth / 2; // width of one set of logos
    lastTs.current = 0;

    const tick = (ts) => {
      if (paused || dragging) {
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
    setPaused(false);
  };

  // Duplicate logos for seamless loop
  const logos = [...trustedLogos, ...trustedLogos];

  return (
    <section className="py-8 overflow-hidden">
      <h2 className="text-center text-2xl font-medium text-[var(--text-100)] mb-6">
        Trusted by property managers &amp; owners
      </h2>

      <div
        ref={containerRef}
        className="relative overflow-x-auto hide-scrollbar rounded-3xl ring-1 ring-[color:var(--bg-300)]"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={endDrag}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <ul className="flex items-center gap-16 px-6 py-6 min-w-max">
          {logos.map((logo, idx) => (
            <li key={`${logo.name}-${idx}`} className="shrink-0">
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
                className="block"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-20 w-auto object-contain opacity-90 transition hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
