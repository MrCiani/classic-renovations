'use client';

import { CheckCircle2 } from 'lucide-react';

export default function WhatToExpectCC() {
  const ITEMS = [
    {
      title: 'Clean & Respectful Sites',
      desc: 'Dust-controlled prep, tidy workspaces, and minimal disruption to staff or tenants.',
    },
    {
      title: 'Professional Crews',
      desc: 'Trained, insured, and safety-certified employees — never subcontractors.',
    },
    {
      title: 'On-Schedule Delivery',
      desc: 'Evening, weekend, and phased scheduling to keep operations running smoothly.',
    },
    {
      title: 'Spec-Accurate Finishes',
      desc: 'Crisp lines, consistent coverage, and manufacturer-approved systems.',
    },
    {
      title: 'Fully Insured & Certified',
      desc: 'WSIB coverage, liability insurance, and safety compliance for peace of mind.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear updates before, during, and after the project.',
    },
  ];

  return (
    <section
      className="py-16 lg:py-20"
      aria-label="What to expect from Classic Contracting"
    >
      <div className="mx-auto max-w-5xl px-4">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            What to Expect from Classic Contracting
          </h2>
          <p className="mt-3 text-[var(--text-200)] max-w-2xl mx-auto">
            More than just paint—professional, spec-accurate finishes with minimal disruption.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--primary-100)]/90 text-white shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-[var(--text-100)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-200)]">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
