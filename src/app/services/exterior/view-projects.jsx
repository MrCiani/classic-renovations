'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroCta2 from '@/app/components/cta-folder/call-to-action2';
import ExteriorBeforeAfter from './beforeafter';

const PROJECTS = [
  {
    src: '/exterior/photo1.jpg',
    alt: 'Modern painted home with fresh siding and trim',
    title: 'Home Facade Refresh',
    description: 'Complete siding and trim repaint with weather-rated coatings, giving the home a fresh, modern look and lasting curb appeal.',
  },
  {
    src: '/exterior/photo2.jpg',
    alt: 'Front entrance repainted with durable finish',
    title: 'Entryway Upgrade',
    description: 'Front door and trim refinished with durable, fade-resistant paint — creating a welcoming entrance that stands out.',
  },
  {
    src:  '/exterior/photo3.jpg',
    alt: 'Professional repaint of a commercial building exterior',
    title: 'Commercial Exterior Painting',
    description: 'Professional-grade coatings applied to commercial façades, delivering uniform coverage, crisp edges, and a polished corporate image.',
  },
  {
    src:  '/exterior/photo4.jpg',
    alt: 'Industrial and multi-unit building repaint',
    title: 'Industrial & Multi-Unit Refresh',
    description: 'Durable elastomeric and masonry systems protect and modernize multi-unit or industrial properties, enhancing both looks and longevity.',
  },
    {
    src: '/exterior/photo5.jpg',
    alt: 'Contemporary office building building exterior freshly coated',
    title: 'Corporate Exterior Upgrade',
    description: 'Sleek repaint of a modern commercial building, elevating professional appearance and architectural clarity.',
  },
    {
    src: '/exterior/photo6.jpg',
    alt: 'Mid-century bungalow before and after repaint',
    title: 'Bungalow Refresh',
    description: 'Mid-century bungalow exterior updated with fresh gray paint and sharp trim, enhancing character and clarity.',
  },
];

export default function ExteriorProjectHighlights() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scroll: 0 });

  const snapTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector('[data-slide]');
    const slideWidth = slide ? slide.getBoundingClientRect().width : 0;
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, i));
    track.scrollTo({ left: clamped * slideWidth, behavior: 'smooth' });
    setIndex(clamped);
  };

  const next = () => snapTo(index + 1);
  const prev = () => snapTo(index - 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slide = track.querySelector('[data-slide]');
      const slideWidth = slide ? slide.getBoundingClientRect().width : 1;
      const i = Math.round(track.scrollLeft / slideWidth);
      if (i !== index) setIndex(i);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  const onPointerDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    track.setPointerCapture?.(e.pointerId);
    dragStart.current = { x: e.clientX, scroll: track.scrollLeft };
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - dragStart.current.x;
    track.scrollLeft = dragStart.current.scroll - dx;
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector('[data-slide]');
    const slideWidth = slide ? slide.getBoundingClientRect().width : 1;
    const i = Math.round(track.scrollLeft / slideWidth);
    snapTo(i);
  };

  return (
    <section className="py-16 lg:py-20" aria-label="Exterior Project Highlights">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">Recent Exterior Projects</h2>
          <p className="mt-3 text-[var(--text-200)]">
            A few examples of durable, weather-rated finishes we’ve delivered across the GTA.
          </p>
        </header>

        <div className="relative">
          <div
            ref={trackRef}
            className="group flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onMouseLeave={endDrag}
            aria-roledescription="carousel"
            aria-label="Recent exterior project images"
          >
            <style jsx>{`.group::-webkit-scrollbar{display:none}`}</style>

            {PROJECTS.map((p, i) => (
              <figure
                key={i}
                data-slide
                className="relative w-[85%] sm:w-[60%] lg:w-[40%] xl:w-[33.333%] mr-4 last:mr-0 snap-center shrink-0 overflow-hidden rounded-2xl border border-[var(--bg-300)] bg-white shadow-sm transition-transform duration-300 hover:shadow-md"
                aria-label={`${p.title || 'Project'} (${i + 1} of ${PROJECTS.length})`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={1200}
                  height={800}
                  className="h-64 sm:h-72 lg:h-80 w-full object-cover select-none"
                  draggable={false}
                  priority={i === 0}
                />
                {(p.title || p.description) && (
                  <figcaption className="p-4">
                    {p.title && <div className="text-[var(--primary-100)] font-semibold">{p.title}</div>}
                    {p.description && <p className="mt-1 text-sm text-[var(--text-200)]">{p.description}</p>}
                  </figcaption>
                )}
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </figure>
            ))}
          </div>

          {/* Arrows (hidden on mobile, shown md+) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--bg-300)] bg-white/90 p-2 shadow hover:shadow-md"
          >
            <ChevronLeft className="h-5 w-5 text-[var(--text-100)]" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--bg-300)] bg-white/90 p-2 shadow hover:shadow-md"
          >
            <ChevronRight className="h-5 w-5 text-[var(--text-100)]" />
          </button>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => snapTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-[var(--primary-100)]' : 'w-2.5 bg-[var(--bg-300)] hover:bg-[var(--bg-300)]/80'
                }`}
              />
            ))}
          </div>
        </div>
        <ExteriorBeforeAfter/>

        <div className="mt-10 text-center">
          <HeroCta2
            title="Exterior Painting, Done Right"
            subtitle="Siding • Stucco • Brick • Decks & Fences"
            buttontext="Get Exterior Estimate →"
            bgColor="var(--accent-100)"
            textColor="var(--text-100)"
          />
        </div>
      </div>
    </section>
  );
}
