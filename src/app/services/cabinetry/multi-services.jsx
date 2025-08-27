'use client'

import { useState } from 'react'
import {
  Check,
  Paintbrush,
  DoorClosed,
  PanelsTopLeft,
  SquareStack,
  Ruler,
  Brush,
  ShieldCheck,
  Wind,
  ChevronDown,
} from 'lucide-react'
import HeroCta2 from '@/app/components/cta-folder/call-to-action2'

// ---- Multi-Unit / PM Scopes ----
const SERVICES = [
  {
    title: 'Suite Turnovers & Touch-Ups',
    icon: Paintbrush,
    items: [
      'Low-odor, fast-cure systems for quick re-entry',
      'Standardized color packages across units',
      'Walls/ceilings/trim + door & frame touch-ups',
      'Punch-list closeout before move-in',
      'Night/weekend windows as needed',
    ],
  },
  {
    title: 'Doors, Frames & Railings (Metal)',
    icon: DoorClosed,
    items: [
      'Durable enamel/urethane systems',
      'De-gloss + adhesion primers for lasting hold',
      'Fine-finish spray or roll as specified',
      'Hardware masked and protected',
      'High-touch scuff resistance',
    ],
  },
  {
    title: 'Common Areas: Corridors & Lobbies',
    icon: PanelsTopLeft,
    items: [
      'Dust-controlled prep and containment',
      'Scuff-resistant eggshell/satin systems',
      'Baseboards, trims, elevator surrounds',
      'Wayfinding/signage coordination',
      'Clean turnovers with minimal downtime',
    ],
  },
  {
    title: 'Stairwells, Service Areas & Parkades',
    icon: SquareStack,
    items: [
      'Anti-slip treads & line marking',
      'Concrete, CMU, steel & galvanized metal',
      'Rust-inhibitive primers on metal',
      'Numbering, stencils & safety markings',
      'Fast re-open protocols',
    ],
  },
  {
    title: 'Surface Prep, Drywall & Sealants',
    icon: Ruler,
    items: [
      'Scrape, sand, patch & spot-prime',
      'Skim/feather blends to Level 4/5',
      'Stain blocking (water, smoke, tannin)',
      'Caulking/sealants at gaps & joints',
      'Full masking, hoarding & floor protection',
    ],
  },
  {
    title: 'Cabinets, Millwork & Feature Walls',
    icon: Brush,
    items: [
      'Built-ins & reception/amenity millwork',
      'Wood stains, toners & clear coats',
      'Fine-finish spray where specified',
      'Mockups/samples for approvals',
      'Building brand colors matched',
    ],
  },
  {
    title: 'Protective & Hygienic Coatings',
    icon: ShieldCheck,
    items: [
      'Epoxy/urethane for high-wear areas',
      'Washable, scuff-resistant paints',
      'Anti-graffiti & sacrificial coats',
      'Moisture & corrosion resistance',
      'Manufacturer-approved specs',
    ],
  },
]

export default function MultiUnitPmServicesMenu() {
  const [openIndex, setOpenIndex] = useState(0) // mobile: first open
  const [active, setActive] = useState(0) // desktop: active tab
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ background: 'var(--hero-gradient)' }}
      aria-label="Multi-Unit / Property Management painting scopes and services"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-100)]">
            Professional <span className="text-[var(--primary-100)]">Multi-Unit / PM</span> Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[var(--text-200)] text-lg">
            Suite turnovers, corridors, stairwells, and common areas—tenant-friendly scheduling, dust-controlled prep,
            and standardized finishes delivered with minimal disruption.
          </p>
        </header>

        {/* Mobile: animated accordions */}
        <ul className="space-y-4 md:hidden">
          {SERVICES.map(({ title, items, icon: Icon }, i) => (
            <li
              key={title}
              className="rounded-2xl border border-[var(--bg-300)] bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--primary-300)]/30 text-[var(--primary-100)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex-1 font-semibold text-[var(--text-100)]">{title}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[var(--text-200)] transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180 text-[var(--primary-100)]' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out px-5 ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2">
                    {items.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[var(--text-100)]">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-200)]" />
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop: Side tabs (equal-height columns) */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-stretch">
          {/* Tabs */}
          <aside className="md:col-span-5 lg:col-span-4">
            <div className="h-full rounded-3xl border border-[var(--bg-300)] bg-white p-2 shadow-sm flex flex-col">
              <ul className="flex-1">
                {SERVICES.map(({ title, icon: Icon }, i) => {
                  const isActive = i === active
                  return (
                    <li key={title} className="p-1">
                      <button
                        onClick={() => setActive(i)}
                        className={`w-full cursor-pointer flex items-center gap-3 rounded-2xl px-3 py-3 text-left transition
                          ${
                            isActive
                              ? 'bg-[var(--primary-300)]/20 ring-1 ring-[var(--primary-200)]'
                              : 'hover:bg-[var(--bg-100)]'
                          }`}
                        aria-current={isActive ? 'true' : 'false'}
                      >
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border 
                          ${
                            isActive
                              ? 'border-[var(--primary-200)] bg-[var(--primary-300)]/30'
                              : 'border-[var(--bg-300)] bg-[var(--bg-100)]'
                          }
                          text-[var(--primary-100)]`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-medium text-[var(--text-100)]">{title}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* Detail panel */}
          <section className="md:col-span-7 lg:col-span-8">
            <div className="h-full rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm flex flex-col">
              <header className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center  justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--bg-100)] text-[var(--primary-100)]">
                  {(() => {
                    const Icon = SERVICES[active].icon
                    return <Icon className="h-5 w-5" />
                  })()}
                </span>
                <h3 className="text-xl font-semibold text-[var(--text-100)]">{SERVICES[active].title}</h3>
              </header>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {SERVICES[active].items.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[var(--text-100)]">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-200)]" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 md:mt-auto">
                <HeroCta2 buttontext="Get Multi-Unit / PM Estimate →" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
