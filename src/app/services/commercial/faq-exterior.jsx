'use client'

import { useState } from 'react'
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
} from 'lucide-react'
import HeroCta2 from '@/app/components/cta-folder/call-to-action2'

export default function CommercialFAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const FAQS = [
    {
      q: 'Can you work after-hours or on weekends to avoid disruption?',
      a: 'Yes. We frequently schedule night and weekend shifts, phase areas floor-by-floor, and coordinate with facility teams to minimize impact on tenants and operations.',
      icon: Clock3,
    },
    {
      q: 'How do you control dust, odor, and noise in occupied buildings?',
      a: 'We use dust containment, HEPA sanding, low/zero-VOC systems, and plan noisy tasks outside business hours. Ventilation and negative-air strategies are used where specified.',
      icon: Wind,
    },
    {
      q: 'What safety and compliance documentation do you provide?',
      a: 'WSIB clearance, $2M liability insurance, JSAs, site orientations, WHMIS/SDS, and lift/scaffold certifications. We follow building permits and fire/life safety rules.',
      icon: Shield,
    },
    {
      q: 'What is your commercial surface prep process?',
      a: 'Protect floors, assets, and IT; dust control; scrape/sand/patch; prime repairs; and mask adjacent finishes. We maintain clean egress and daily tidy/turnover.',
      icon: ClipboardCheck,
    },
    {
      q: 'Which coatings do you recommend for high-traffic areas?',
      a: 'Scuff-resistant acrylics for corridors/lobbies, urethane-enamels for doors/frames/rails, epoxy/urethane for BOH and parkades, and anti-graffiti where needed.',
      icon: Droplets,
    },
    {
      q: 'Do you spray or roll in commercial spaces?',
      a: 'Both. We spray for even coverage and speed in suitable areas with proper containment, and brush/roll for detail zones or where overspray risk is unacceptable.',
      icon: Paintbrush,
    },
    {
      q: 'Can you match brand standards and provide samples?',
      a: 'Absolutely. We match brand palettes and sheens, provide drawdowns/mockups, and secure written approvals before proceeding to full production.',
      icon: Palette,
    },
    {
      q: 'How are commercial projects priced?',
      a: 'Scope is based on access (heights, lifts), substrate condition, protection requirements, working hours, phasing, and total surface area. We issue clear, itemized proposals.',
      icon: ReceiptText,
    },
    {
      q: 'Are you insured and covered by WSIB?',
      a: 'Yes. Crews are WSIB covered with $2M liability insurance. Safety plans, orientations, and fall protection are standard; COI available on request.',
      icon: CheckCircle2,
    },
    {
      q: 'What warranty do you offer on commercial work?',
      a: 'We stand behind our workmanship. If coverage or adhesion issues arise within the warranty term, we schedule remediation promptly with minimal disruption.',
      icon: ShieldCheck,
    },
    {
      q: 'Do you handle specialty or protective systems?',
      a: 'Yes. Epoxy/urethane floors, anti-graffiti, elastomeric crack-bridging, corrosion-inhibitive primers, and moisture/vapor barrier solutions as specified.',
      icon: FlaskConical,
    },
  ]

  return (
    <section className="py-16 lg:py-20" aria-label="Commercial Painting FAQ">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Commercial Painting — Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[var(--text-200)]">
            Clear answers on scheduling, containment, compliance, coatings, and warranty for occupied facilities.
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
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bg-300)] bg-[var(--primary-300)]/30 text-[var(--primary-100)]">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="flex-1 font-semibold text-[var(--text-100)]">
                  {q}
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
                  <p className="text-[var(--text-200)] leading-relaxed">{a}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <HeroCta2 buttontext="Get Commercial Painting Estimate →" />
        </div>
      </div>
    </section>
  )
}
