'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HeroCta2 from '@/app/components/cta-folder/call-to-action2'
import MultiUnitPMBeforeAfter from './beforeafter'

const PROJECTS = [
  {
    src: '/multiunit/project1.jpg',
    alt: 'Suite turnover repaint with quick-dry systems',
    title: 'Suite Turnover Repaint',
    description:
      'Walls, ceilings, and trim refreshed between tenants — standardized colors and fast re-entry.',
  },
  {
    src: '/multiunit/project2.jpg',
    alt: 'Residential condo corridor repaint',
    title: 'Condo Corridor Refresh',
    description:
      'Dust-controlled prep and durable, scuff-resistant coatings for high-traffic corridors.',
  },
  {
    src: '/multiunit/project3.jpg',
    alt: 'Amenity space repaint',
    title: 'Amenity & Lobby Upgrade',
    description:
      'Modern finishes applied in amenity lounges and lobbies — minimal disruption to residents.',
  },
  {
    src: '/multiunit/project4.jpg',
    alt: 'Stairwell repaint project',
    title: 'Stairwells & Service Areas',
    description:
      'Anti-slip coatings, numbering, and durable paints for safe, compliant common areas.',
  },
  {
    src: '/multiunit/project5.jpg',
    alt: 'Retirement residence repaint',
    title: 'Senior Living Facility Repaint',
    description:
      'Low-VOC, washable coatings specified for healthcare and retirement environments.',
  },
]

export default function MultiUnitPMProjectHighlights() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, scroll: 0 })

  const snapTo = (i) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector('[data-slide]')
    const slideWidth = slide ? slide.getBoundingClientRect().width : 0
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, i))
    track.scrollTo({ left: clamped * slideWidth, behavior: 'smooth' })
    setIndex(clamped)
  }

  const next = () => snapTo(index + 1)
  const prev = () => snapTo(index - 1)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const slide = track.querySelector('[data-slide]')
      const slideWidth = slide ? slide.getBoundingClientRect().width : 1
      const i = Math.round(track.scrollLeft / slideWidth)
      if (i !== index) setIndex(i)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [index])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  const onPointerDown = (e) => {
    const track = trackRef.current
    if (!track) return
    setIsDragging(true)
    track.setPointerCapture?.(e.pointerId)
    dragStart.current = { x: e.clientX, scroll: track.scrollLeft }
  }

  const onPointerMove = (e) => {
    if (!isDragging) return
    const track = trackRef.current
    if (!track) return
    const dx = e.clientX - dragStart.current.x
    track.scrollLeft = dragStart.current.scroll - dx
  }

  const endDrag = () => {
    if (!isDragging) return
    setIsDragging(false)
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector('[data-slide]')
    const slideWidth = slide ? slide.getBoundingClientRect().width : 1
    const i = Math.round(track.scrollLeft / slideWidth)
    snapTo(i)
  }

  return (
    <section className="py-16 lg:py-20" aria-label="Multi-Unit / PM Project Highlights">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Recent Multi-Unit / PM Projects
          </h2>
          <p className="mt-3 text-[var(--text-200)]">
            Examples of turnovers, corridors, and amenity spaces delivered across condos, rentals, and retirement residences in the GTA.
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
            aria-label="Recent multi-unit project images"
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
                    {p.title && (
                      <div className="text-[var(--primary-100)] font-semibold">{p.title}</div>
                    )}
                    {p.description && (
                      <p className="mt-1 text-sm text-[var(--text-200)]">{p.description}</p>
                    )}
                  </figcaption>
                )}
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </figure>
            ))}
          </div>

          {/* Arrows */}
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
                  i === index
                    ? 'w-6 bg-[var(--primary-100)]'
                    : 'w-2.5 bg-[var(--bg-300)] hover:bg-[var(--bg-300)]/80'
                }`}
              />
            ))}
          </div>
        </div>
        <MultiUnitPMBeforeAfter/>

        <div className="mt-10 text-center">
          <HeroCta2
            title="Multi-Unit Projects, Done Right"
            subtitle="Condos • Rentals • Senior Living • Student Housing"
            buttontext="Get Multi-Unit Estimate →"
            bgColor="var(--accent-100)"
            textColor="var(--text-100)"
          />
        </div>
      </div>
    </section>
  )
}
