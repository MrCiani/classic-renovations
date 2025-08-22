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
} from 'lucide-react';
import HeroCta2 from '@/app/components/cta-folder/call-to-action2';

const FAQS = [
  {
    q: 'Do you work evenings or weekends to minimize disruption?',
    a: 'Yes. We offer flexible scheduling including nights and weekends so offices, clinics, and multi-unit properties can stay operational during the day.',
    icon: Clock3,
  },
  {
    q: 'How do you control dust and keep the job site clean?',
    a: 'We use HEPA sanding systems, plastic containment, and daily clean-ups. Corridors, reception areas, and suites are kept neat and safe throughout the project.',
    icon: Wind,
  },
  {
    q: 'Are the paints you use safe for tenants, staff, and pets?',
    a: 'We prioritize low-VOC and zero-VOC paints to minimize odors and health risks. Fast-cure systems are available so spaces can be re-occupied quickly.',
    icon: Shield,
  },
  {
    q: 'Do you handle prep work like drywall repairs or caulking?',
    a: 'Absolutely. We patch, skim coat, sand, caulk, and prime as needed to ensure smooth, long-lasting finishes. Proper prep is included in every job.',
    icon: ClipboardCheck,
  },
  {
    q: 'What kind of warranty or guarantee do you provide?',
    a: 'We stand behind our work with a workmanship guarantee. If there’s an issue with coverage or finish, we’ll return and make it right.',
    icon: ShieldCheck,
  },
  {
    q: 'Can you match existing colors or create custom schemes?',
    a: 'Yes. We offer color matching for touch-ups and full design consultation for new schemes—accent walls, corporate branding colors, or neutral unit turnovers.',
    icon: Palette,
  },
  {
    q: 'How do you price interior painting jobs?',
    a: 'Pricing depends on scope (sq. footage, prep required, coatings used). We provide detailed written proposals with no hidden fees, aligned to spec and schedule.',
    icon: ReceiptText,
  },
  {
    q: 'Do you carry insurance and WSIB coverage?',
    a: 'Yes. Our crews are licensed, insured, and covered by WSIB. We can provide a clearance certificate on request.',
    icon: CheckCircle2,
  },
  {
    q: 'How long does a typical interior job take?',
    a: 'A standard 2-bedroom unit can be turned over in 1–2 days. Larger offices or multi-unit corridors depend on scope but are always scheduled for minimal disruption.',
    icon: Clock3,
  },
  {
    q: 'Do you apply specialty or protective coatings?',
    a: 'Yes. We apply epoxy, urethane, antimicrobial, and moisture-resistant systems for high-traffic or sensitive environments such as clinics and corridors.',
    icon: FlaskConical,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="py-16 lg:py-20 "
      aria-label="Interior Painting FAQ"
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[var(--text-200)]">
            Clear answers to common questions about our interior painting process.
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
                  openIndex === i
                    ? 'grid-rows-[1fr] opacity-100 pb-5'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[var(--text-200)] leading-relaxed">{a}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-10'>
          <HeroCta2 buttontext='Contact us now'/>
        </div>
        
      </div>
    </section>
  );
}
