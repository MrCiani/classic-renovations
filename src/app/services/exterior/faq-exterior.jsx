'use client';

import { useState } from 'react';
import {
  Clock3,
  Wind,
  Shield,
  ClipboardCheck,
  ShieldCheck,
  Palette,
  ReceiptText,
  CheckCircle2,
  FlaskConical,
  ChevronDown,
  Droplets,
  Paintbrush,
} from 'lucide-react';
import HeroCta2 from '@/app/components/cta-folder/call-to-action2';

const FAQS = [
  {
    q: 'Do you work around weather and seasonal conditions?',
    a: 'Yes. We schedule exterior work within manufacturer temperature ranges and watch rain/wind windows closely. If conditions change, we pause and return so coatings cure properly.',
    icon: Wind,
  },
  {
    q: 'How do you prepare exterior surfaces?',
    a: 'We start with power washing (where appropriate), scrape and sand failing paint, spot-prime bare areas, repair/caulk gaps, and mask windows, brick, landscaping, and fixtures for a clean site.',
    icon: ClipboardCheck,
  },
  {
    q: 'What exterior paints and systems do you use?',
    a: 'We specify premium exterior acrylic/urethane systems matched to substrate—wood, fiber-cement, stucco, brick, metal, aluminum/vinyl. Low/zero-VOC and elastomeric options available.',
    icon: Droplets,
  },
  {
    q: 'Do you spray or brush/roll?',
    a: 'Both. We spray for even coverage on siding, fences, and large areas, then back-roll where needed. Trim, doors, and detail work are brushed/rolled for crisp lines and control.',
    icon: Paintbrush,
  },
  {
    q: 'Are you insured and WSIB covered?',
    a: 'Yes. Our crews are fully insured and covered by WSIB. We follow ladder/scaffold and fall-protection protocols and can provide a clearance certificate on request.',
    icon: CheckCircle2,
  },
  {
    q: 'Can you help choose exterior colours?',
    a: 'Absolutely. We offer guidance on durable, UV-stable colour palettes and sheen selection for siding, stucco, brick accents, trim, doors, and railings.',
    icon: Palette,
  },
  {
    q: 'How is exterior painting priced?',
    a: 'Pricing depends on access (heights, scaffolding/lifts), substrate condition and prep, number of colours, and total surface area. You’ll get a detailed written proposal with no surprises.',
    icon: ReceiptText,
  },
  {
    q: 'What warranty do you provide?',
    a: 'We stand behind our workmanship. If there’s a coverage or adhesion issue within the warranty term, we’ll return and make it right.',
    icon: ShieldCheck,
  },
  {
    q: 'How long does a typical exterior project take?',
    a: 'A standard single-family exterior is usually 2–4 days depending on prep and weather. Multi-unit or complex substrates may require phased scheduling.',
    icon: Clock3,
  },
  {
    q: 'Do you apply specialty or protective exterior coatings?',
    a: 'Yes. We apply rust-inhibitive primers on metal, masonry sealers, deck and fence coatings, and high-build elastomerics for hairline stucco cracks.',
    icon: FlaskConical,
  },
];

export default function ExteriorFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 lg:py-20" aria-label="Exterior Painting FAQ">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Exterior Painting — Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[var(--text-200)]">
            Clear answers to common questions about our exterior prep, products, safety, and scheduling.
          </p>
        </header>

        <ul className="space-y-4">
          {FAQS.map(({ q, a, icon: Icon }, i) => (
            <li
              key={i}
              className="rounded-2xl border border-[var(--bg-300)] bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
              >
                {/* Icon bubble */}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--primary-300)]/30 text-[var(--primary-100)]">
                  <Icon className="h-5 w-5" />
                </span>

                {/* Question */}
                <span className="flex-1 font-semibold text-[var(--text-100)]">
                  {q}
                </span>

                {/* Chevron */}
                <ChevronDown
                  className={`h-5 w-5 text-[var(--text-200)] transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180 text-[var(--primary-100)]' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out px-5 ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[var(--text-200)] leading-relaxed">{a}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <HeroCta2 buttontext="Get Exterior Painting Estimate →" />
        </div>
      </div>
    </section>
  );
}
