'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  Paintbrush,
  DoorClosed,
  PanelsTopLeft,
  SquareStack,
  Ruler,
  Brush,
  ShieldCheck,
  Wind,
  Droplets,
  ChevronDown,
} from 'lucide-react';
import HeroCta2 from '@/app/components/cta-folder/call-to-action2';

const SERVICES = [
  {
    title: 'Siding & Trim',
    icon: Paintbrush,
    items: [
      'Spray & back-roll for even coverage',
      'Crisp lines at soffits & fascias',
      'Wood, aluminum & vinyl substrates',
      'Colour updates & sheen matching',
      'Low/zero-VOC exterior acrylics',
    ],
  },
  {
    title: 'Doors & Garage Doors',
    icon: DoorClosed,
    items: [
      'Smooth, durable enamel finishes',
      'Proper de-gloss & adhesion prime',
      'Weather-rated urethane/acrylic',
      'Brush, roll or fine-finish spray',
      'Hardware masked & protected',
    ],
  },
  {
    title: 'Stucco, Brick & Masonry',
    icon: PanelsTopLeft,
    items: [
      'Elastomeric systems for hairline cracks',
      'Mineral/masonry primers & sealers',
      'Limewash & breathable coatings',
      'Efflorescence treatment as needed',
      'Uniform colour & texture control',
    ],
  },
  {
    title: 'Decks, Fences & Railings',
    icon: SquareStack,
    items: [
      'Transparent, semi-transparent & solid stains',
      'Back-brush for penetration & uniformity',
      'Rust-inhibitive primers on metal',
      'UV & moisture-resistant systems',
      'Seasonal maintenance programs',
    ],
  },
  {
    title: 'Prep & Exterior Repairs',
    icon: Ruler,
    items: [
      'Power wash & surface decontamination',
      'Scrape, sand, spot-prime bare areas',
      'Caulking & gap filling at joints',
      'Wood filler & minor carpentry fixes',
      'Masking of windows, brick & landscaping',
    ],
  },
  {
    title: 'Staining & Clear Coats',
    icon: Brush,
    items: [
      'Entry doors & natural wood accents',
      'Oil-/water-based stains & toners',
      'Polyurethane & exterior clears',
      'Tone samples for approval',
      'Fine-finish spray options',
    ],
  },
  {
    title: 'Specialty & Protective',
    icon: ShieldCheck,
    items: [
      'High-build elastomerics',
      'Anti-graffiti & sacrificial coats',
      'Epoxy/urethane for high-wear areas',
      'Moisture & corrosion resistance',
      'Manufacturer-approved specs',
    ],
  },
  {
    title: 'Weather, Safety & Compliance',
    icon: Wind,
    items: [
      'Work within temp & wind windows',
      'Rain delay protocols',
      'Ladder/scaffold & fall protection',
      'WSIB & liability insured crews',
      'Neighbour & site protection',
    ],
  },
];

export default function ExteriorServicesMenu() {
  const [openIndex, setOpenIndex] = useState(0); // first item open on mobile
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      aria-label="Exterior painting scopes and services"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-100)]">
            Professional <span className="text-[var(--primary-100)]">Exterior Painting</span> Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[var(--text-200)] text-lg">
            Clean prep, weather-rated coatings, and crisp, durable finishes for homes, condos, and multi-unit properties.
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
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--primary-300)]/30 text-[var(--primary-100)]">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="flex-1 font-semibold text-[var(--text-100)]">
                  {title}
                </span>

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
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-200)]" />
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop: 4-col grid cards */}
        <div className="hidden md:grid md:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(({ title, items, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl border border-[var(--bg-300)] bg-[var(--bg-100)] p-3">
                  <Icon className="h-6 w-6 text-[var(--primary-100)]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-100)]">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[var(--text-100)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-200)]" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <HeroCta2 buttontext="Get Exterior Painting Estimate →" />
        </div>
      </div>
    </section>
  );
}
