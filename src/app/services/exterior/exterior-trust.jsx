'use client';

import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';

export default function ExteriorTrustSection() {
  const logos = [
    { src: '/trusted-badges/trust3.png', alt: 'Logo 1', href: 'https://www.houseful.ca/' },
 { src: '/trusted-badges/trust2.png', alt: 'Logo 1', href: 'https://www.lasalleparkretirement.com/' },
    // { src: '/logos/logo3.png', alt: 'Logo 3' },
  ];

  const testimonials = [
    {
      quote: 'The team was professional and the site was spotless after work was done.',
      name: 'Martinez Santos.',
      role: 'Project Manager',
      avatar: 'martinez.jpg',
      rating: 5,
    },
    {
      quote: 'Reliable, respectful crew and top-notch results.',
      name: 'Alexi Krustovski.',
      role: 'Houseful Property & Sales Manager',
      avatar: 'tyrell.jpg',
      rating: 5,
    },
    ,
    {
      quote: 'Reliable, respectful crew and top-notch results.',
      name: 'Steven Fernandez.',
      role: 'Property & Sales Manager',
      avatar: 'steven.jpg',
      rating: 5,
    }
  ];

  return (
    <section
      className="relative overflow-hidden py-12 lg:py-16"
      aria-label="Trust and testimonials"
    >
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center gap-5 px-4 lg:px-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-100)]">
            Trusted by property managers, builders & operators
          </h2>
          <p className="mt-3 text-[var(--text-200)] max-w-2xl mx-auto">
            Clean sites, respectful crews, and finishes that stand up to daily use.
          </p>
        </header>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
  {logos.map((item, i) => (
    <a
      key={i}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-90 hover:opacity-100 transition h-20 "
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={200}
        height={80}
        className="h-full w-full object-contain"
      />
    </a>
  ))}
</div>

        {/* Testimonials */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="relative flex flex-col justify-between rounded-3xl border border-[var(--bg-300)] bg-white p-6 shadow-sm h-full"
            >
              <div>
                <p className="text-[var(--text-100)]">“{t.quote}”</p>
                <div className="mt-3 flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < t.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-[var(--bg-300)]">
                    <Image
                      src={`/avatars/${t.avatar}`}
                      alt={`${t.name} avatar`}
                      width={36}
                      height={36}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-9 w-9 rounded-full bg-[var(--bg-200)] border border-[var(--bg-300)] flex items-center justify-center text-[var(--primary-100)]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-[var(--text-100)]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[var(--text-200)]">{t.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
