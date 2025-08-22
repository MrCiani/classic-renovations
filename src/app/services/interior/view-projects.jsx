'use client';

import Image from 'next/image';
import HeroCta2 from '@/app/components/cta-folder/call-to-action2';

const PROJECTS = [
  {
    src: '/services-image-teasers/interior1.jpg',
    alt: 'Rental unit turnover with light neutral repaint, fresh trim, and clean finish',
    title: 'Rental Unit Turnover',
    description:
      'Full-unit repaint with light, neutral tones that maximize natural light and create a move-in ready appeal.',
  },
  {
    src: '/services-image-teasers/interior2.jpg',
    alt: 'Reception feature wall in bold professional blue',
    title: 'Office Reception Feature Wall',
    description:
      'Bold blue feature wall in a reception area, adding sophistication and contrast. Clean edges and durable finish for high-traffic spaces.',
  },
  {
    src: '/services-image-teasers/interior3.jpg',
    alt: 'Modern office repaint in neutral gray tones',
    title: 'Private Office Refresh',
    description:
      'Neutral gray repaint for a private office, delivering a professional, modern environment with scuff-resistant finishes.',
  },
  {
    src: '/services-image-teasers/interior4.jpg',
    alt: 'Modern kitchen and living repaint with crisp trim',
    title: 'Modern Kitchen & Living Space',
    description:
      'Open-concept kitchen and living repaint with crisp white cabinetry, smooth wall finishes, and clean trim details.',
  },
   {
    src: '/services-image-teasers/interior5.jpg',
    alt: 'Bright neutral living space with smooth wall paint and soft trim.',
    title: 'Neutral Living Area Refresh',
  },
  {
    src: '/services-image-teasers/interior6.jpg',
    alt: 'Bold blue-gray accent wall creating dramatic focal point.',
    title: 'Bold Feature Wall',
  },
  {
    src: '/services-image-teasers/interior7.jpg',
    alt: 'Warm, neutral hallway with crisp trim detailing.',
    title: 'Hallway Transformation',
  },
  {
    src: '/services-image-teasers/interior8.jpg',
    alt: 'Contemporary office in gray with precise wall lines.',
    title: 'Modern Office Repaint',
  },
];


export default function ProjectHighlights() {
  return (
    <section
      className="py-16 lg:py-20 "
      aria-label="Project Highlights"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Recent Projects
          </h2>
          <p className="mt-3 text-[var(--text-200)]">
            A few examples of the interiors we’ve delivered for property managers,
            offices, and multi-unit properties.
          </p>
        </header>

        {/* Image grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[var(--bg-300)] bg-white shadow-sm"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={500}
                height={350}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{p.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
<HeroCta2
  title="Interior Painting, Done Right the First Time"
  subtitle="Condo corridors • Unit turnovers • Office interiors"
  buttontext="Request a Proposal →"
  bgColor="var(--accent-100)"
  textColor="var(--text-100)"
/>



        </div>
      </div>
    </section>
  );
}
