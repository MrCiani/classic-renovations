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

export default function MultiUnitPMFAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const FAQS = [
    {
      q: 'Can you handle suite turnovers on short timelines and after-hours?',
      a: 'Yes. We regularly schedule night/weekend windows and coordinate keys/access to meet move-in dates. Floors/sections are phased to minimize disruption.',
      icon: Clock3,
    },
    {
      q: 'How do you control dust, odor, and noise around residents?',
      a: 'Dust containment, HEPA sanding, and low/zero-VOC systems are standard. Noisy tasks are planned for off-peak hours. Ventilation and negative-air are used where specified.',
      icon: Wind,
    },
    {
      q: 'What compliance and documentation do you provide for PM sites?',
      a: 'WSIB clearance, $2M liability, COI on request, JSAs, site orientations, WHMIS/SDS, and lift/scaffold certifications. We follow building permits and fire/life-safety rules.',
      icon: Shield,
    },
    {
      q: 'What is your prep process for corridors and common areas?',
      a: 'Protect floors/elevators/finishes, maintain clear egress, dust control, scrape/sand/patch, prime repairs, mask adjacent surfaces, and tidy daily for tenant re-entry.',
      icon: ClipboardCheck,
    },
    {
      q: 'Which coatings are best for high-traffic hallways and doors?',
      a: 'Scuff-resistant acrylics (eggshell/satin) for corridors, urethane enamels for doors/frames/railings, and anti-graffiti systems where needed.',
      icon: Droplets,
    },
    {
      q: 'Do you spray or roll in occupied multi-unit buildings?',
      a: 'Both. We spray where containment allows for speed and uniformity, and brush/roll in detail zones or areas with overspray risk.',
      icon: Paintbrush,
    },
    {
      q: 'Can you match our building standards and provide samples?',
      a: 'Absolutely. We standardize colors across units/floors, provide drawdowns/mockups, and get written approvals before full production.',
      icon: Palette,
    },
    {
      q: 'How are multi-unit projects priced?',
      a: 'Scope accounts for access/heights, substrate condition, protection needs, working hours, floor-by-floor phasing, and total surface area. We provide clear, itemized proposals.',
      icon: ReceiptText,
    },
    {
      q: 'Are you insured and covered by WSIB?',
      a: 'Yes. Crews are WSIB-covered with $2M liability insurance. Safety plans, orientations, and fall protection are standard; COI available on request.',
      icon: CheckCircle2,
    },
    {
      q: 'What warranty do you offer on PM work?',
      a: 'We stand behind our workmanship. If coverage or adhesion issues arise within the warranty term, we schedule remediation promptly with minimal tenant disruption.',
      icon: ShieldCheck,
    },
    {
      q: 'Do you handle specialty or protective systems?',
      a: 'Yes. Anti-graffiti, elastomeric crack-bridging, corrosion-inhibitive primers, moisture/vapor barriers, and epoxy/urethane systems for service areas/stairwells.',
      icon: FlaskConical,
    },
  ]

  return (
    <section className="py-16 lg:py-20" aria-label="Multi-Unit / Property Management Painting FAQ">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Multi-Unit / PM — Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[var(--text-200)]">
            Clear answers on turnovers, containment, compliance, coatings, and warranty for occupied multi-unit buildings.
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
                aria-expanded={openIndex === i}
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
          <HeroCta2 buttontext="Get Multi-Unit / PM Estimate →" />
        </div>
      </div>
    </section>
  )
}
