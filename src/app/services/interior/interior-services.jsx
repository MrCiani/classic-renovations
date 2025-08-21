'use client';

import { CheckCircle2, Paintbrush, DoorClosed, PanelsTopLeft, SquareStack, Ruler, Brush, ShieldCheck, Wind } from 'lucide-react';
import HeroCta2 from '@/app/components/cta-folder/call-to-action2';

export default function InteriorServicesMenu() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20" aria-label="Interior painting scopes and services">


      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-100)]">
            Professional <span className="text-[var(--primary-100)]">Interior Painting</span> Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[var(--text-200)]">
            Dust-controlled prep, low-VOC systems, and crisp, durable finishes for offices, clinics, retail, and multi-unit properties.
          </p>
        </header>

        {/* 4-column service matrix on desktop */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Walls & Ceilings */}
          <ServiceBlock
            title="Walls & Ceilings"
            icon={Paintbrush}
            items={[
              'Smooth, uniform coverage',
              'Crisp cut lines at ceilings',
              'Accent walls & feature colours',
              'Low/zero-VOC options',
              'Matte to semi-gloss sheens',
            ]}
          />

          {/* Doors, Frames & Trim */}
          <ServiceBlock
            title="Doors, Frames & Trim"
            icon={DoorClosed}
            items={[
              'Scuff-resistant enamels',
              'Metal & wood frames',
              'Baseboards, casings, chair rails',
              'Spray, brush, or rolled finishes',
              'Uniform sheen control',
            ]}
          />

          {/* Corridors & Common Areas */}
          <ServiceBlock
            title="Corridors & Reception"
            icon={PanelsTopLeft}
            items={[
              'Washable high-durability coatings',
              'Corner/edge protection touch-ups',
              'Wayfinding & subtle accents',
              'Night & weekend scheduling',
              'Minimal disruption to staff/tenants',
            ]}
          />

          {/* Suites & Offices */}
          <ServiceBlock
            title="Suites & Offices"
            icon={SquareStack}
            items={[
              'Full unit/office turnovers',
              'Boardrooms & meeting spaces',
              'Colour standardization',
              'Punch-list closeout',
              'Before/after documentation',
            ]}
          />

          {/* Prep & Repairs */}
          <ServiceBlock
            title="Prep & Repairs"
            icon={Ruler}
            items={[
              'Drywall patching & skim coats',
              'Feathered sanding & spot prime',
              'Caulking & gap filling',
              'Stain blocking & odour sealers',
              'Surface testing & adhesion checks',
            ]}
          />

          {/* Staining & Clear Finishes */}
          <ServiceBlock
            title="Staining & Clear Coats"
            icon={Brush}
            items={[
              'Doors, handrails, and millwork',
              'Oil-/water-based stains',
              'Polyurethane & waterborne clears',
              'Tone matching & samples',
              'Fine‐finish spray options',
            ]}
          />

          {/* Specialty & Protective */}
          <ServiceBlock
            title="Specialty & Protective"
            icon={ShieldCheck}
            items={[
              'Epoxy/urethane systems',
              'Antimicrobial coatings',
              'Moisture & abrasion resistance',
              'Block fillers on masonry',
              'Facility-safe specifications',
            ]}
          />

          {/* Air & Odour Control / Compliance */}
          <ServiceBlock
            title="Air, Odour & Compliance"
            icon={Wind}
            items={[
              'Low-odour, fast-cure products',
              'Negative air & dust control',
              'Site protection & clean containment',
              'WSIB & insured crews',
              'Safety & building rules adherence',
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-14">
          <HeroCta2 />
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({ title, items, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl border border-[var(--bg-300)] bg-[var(--bg-100)] p-3">
          <Icon className="h-6 w-6 text-[var(--primary-100)]" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--text-100)]">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2 text-[var(--text-100)] ">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-200)]" />
            <span className="text-sm">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
