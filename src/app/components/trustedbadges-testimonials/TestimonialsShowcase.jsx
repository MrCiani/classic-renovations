'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import HeroCta from '../cta-folder/Call-to-action';

const TESTIMONIALS = [
  {
    name: 'Johnny Wagner',
    role: 'Project Manager — General Contractor',
    quote:
      'Classic handled our interior/exterior scopes per spec—dust-controlled prep and consistent coverage across corridors and suites. Daily coordination with the site super kept the schedule intact.',
    avatar: '/avatars/johnny_wagner.jpg',
    rating: 5,
  },
  {
    name: 'Rhea S',
    role: 'Condo Property Manager',
    quote:
      'Lobby, amenity rooms, and hallways were repainted with low/zero-VOC systems. The crew respected quiet hours, kept the building tidy, and residents complimented the finish.',
    avatar: '/avatars/rhea.jpg',
    rating: 5,
  },
  {
    name: 'Penny',
    role: 'Homeowner — Kitchen Cabinet Refinishing',
    quote:
      'Factory-smooth cabinet spraying and crisp walls. Floors protected, clean site every day, and a brand-new kitchen look without replacing the boxes.',
    avatar: '/avatars/penny.jpg',
    rating: 5,
  },
];

export default function TestimonialsCards({
  title = 'Painting That Protects Schedules—and Reputation',
  subtitle = 'Spec-driven interiors, exteriors, and cabinet refinishing for condos, homes, and apartments—clean sites and on-schedule delivery.',
  testimonials = TESTIMONIALS,
}) {
  return (
    <section className="py-10">
      <header className="text-center mb-6 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-100)]">{title}</h2>
        <p className="mt-2 text-[var(--text-200)]">{subtitle}</p>
        <p className="mt-1 text-sm text-[var(--text-200)] md:hidden">Swipe for more →</p>
      </header>

      {/* Mobile: swipeable row */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4">
        <ul className="flex gap-4 w-max">
          {testimonials.map((t) => (
            <li key={t.name} className="snap-start shrink-0 w-[86vw] max-w-[360px]">
              <Card t={t} />
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: static 3-up (stretched to equal height) */}
      <div className="hidden md:grid grid-cols-3 gap-10 px-4 max-w-6xl mx-auto items-stretch">
        {testimonials.map((t) => (
          <Card key={t.name} t={t} />
        ))}
      </div>

      <div className="mt-10 px-4 max-w-6xl mx-auto">
        <HeroCta buttontext="Schedule a Site Walk" />
      </div>

      <style jsx>{`
        .hide-scrollbar { scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

function Card({ t }) {
  return (
    <article className="h-full flex flex-col rounded-2xl bg-white ring-1 ring-[color:var(--bg-300)] shadow-sm p-6 text-center">
      {/* Avatar */}
      <Image
        src={t.avatar}
        alt={t.name}
        width={64}
        height={64}
        className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white shadow"
      />

      {/* Name + Role */}
      <h4 className="mt-3 text-lg font-semibold text-[var(--text-100)]">{t.name}</h4>
      <p className="text-sm text-[var(--text-200)]">{t.role}</p>

      {/* Stars */}
      <div className="mt-3 flex justify-center gap-1 text-[#F5C451]">
        {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#F5C451] text-[#F5C451]" />
        ))}
      </div>

      {/* Quote (flex-grow keeps bottoms aligned) */}
      <p className="mt-3 text-[var(--text-100)] text-sm italic leading-relaxed flex-grow">
        “{t.quote}”
      </p>
    </article>
  );
}
