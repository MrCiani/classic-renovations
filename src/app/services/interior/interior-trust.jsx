'use client';

import { Sparkles, Quote, Star } from 'lucide-react';
import Image from 'next/image';

export default function TrustTestimonials() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      aria-label="Trust and testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Trusted by property managers, builders & operators
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[var(--text-200)]">
            Clean sites, respectful crews, and finishes that stand up to daily use.
          </p>
        </header>

        {/* Trusted logos strip */}
        <TrustedLogos
          items={[
            { src: '/trusted-badges/insured.png', alt: 'Licensed & Insured' },
             { src: '/trusted-badges/experiencebadge.png', alt: 'Experience Badge' },
            { src: '/trusted-badges/WSIB-removed.png', alt: 'WSIB' },
          ]}
        />

        {/* Testimonials */}
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial
            quote="Classic kept our corridors operational while repainting—clean edges and zero mess. Turned over on schedule."
            name="Johnny W."
            role="Project Manager, General Contractor"
            avatar="johnny.jpg"
          />
          <Testimonial
            quote="Professional prep and low-VOC systems made it easy to keep the clinic open during work. Highly recommend."
            name="Dr. A. Singh"
            role="Clinic Owner"
            avatar="singh.jpg"
            rating={5} 
          />
          <Testimonial
            quote="Fast unit turnovers, consistent colour standards, and great communication with our tenants."
            name="L. Martinez"
            role="Property Manager"
            avatar="martinez.jpg"
            rating={5} 
          />
        </ul>
      </div>
    </section>
  );
}

/* ——— Helpers ——— */

function TrustedLogos({ items = [] }) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex h-40 w-50 items-center justify-center rounded-xl"
          >
            <Image
              src={item.src} // files in /public/trusted/
              alt={item.alt}
              width={180}
              height={70}
              className="max-h-full h-full w-auto object-contain opacity-90 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}





function Testimonial({ quote, name, role, avatar, rating = 5 }) {
  return (
    <li className="relative rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm">
      {/* <div className="mb-3 flex items-center gap-2 text-[var(--primary-200)]">
        <Quote className="h-5 w-5" />
        <span className="text-sm font-semibold">Testimonial</span>
      </div> */}

      <p className="text-[var(--text-100)]">“{quote}”</p>

      {/* Star rating */}
      <div className="mt-3 flex gap-1 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {avatar ? (
          <div className="h-9 w-9 rounded-full overflow-hidden border border-[var(--bg-300)]">
            <Image
              src={`/avatars/${avatar}`} // files in /public/avatars/
              alt={`${name} avatar`}
              width={36}
              height={36}
              className="object-cover h-full w-full"
            />
          </div>
        ) : (
          <div className="h-9 w-9 rounded-full bg-[var(--bg-200)] border border-[var(--bg-300)] flex items-center justify-center text-[var(--primary-100)]">
            <Sparkles className="h-4 w-4" />
          </div>
        )}
        <div>
          <div className="text-sm font-semibold text-[var(--text-100)]">{name}</div>
          <div className="text-xs text-[var(--text-200)]">{role}</div>
        </div>
      </div>
    </li>
  );
}

