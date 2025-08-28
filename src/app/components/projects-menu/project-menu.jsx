'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="project-gallery" aria-labelledby="project-gallery-title" className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 id="project-gallery-title" className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
            Project Gallery
          </h2>
          <p className="mt-2 text-[var(--text-200)] max-w-2xl mx-auto text-sm sm:text-base">
            Explore our painting projects for homes, condos, and commercial spaces—each completed
            with precision, durability, and a clean finish.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16">
          {/* 1) Condos & Apartments — IMAGE LEFT */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-10">
            <div className="relative w-full lg:w-1/2 h-56 sm:h-64 lg:h-[22rem] rounded-2xl lg:rounded-3xl overflow-hidden">
              <Image
                src="/project-images/condo.jpg"
                alt="Condos & Apartments: corridor and lobby painting with clean lines and low-VOC finishes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[var(--accent-100)] text-white px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-medium">
                Condos & Apartments
              </span>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-100)] mb-3 sm:mb-4">
                Condo & Apartment Painting
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-200)] mb-5 sm:mb-6">
                Professional finishes for multi-residential properties.
              </p>
              <ul className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Corridor and lobby wall & trim painting
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Unit repaints including doors, frames & baseboards
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Durable, low-VOC coatings for high-traffic areas
                </li>
              </ul>
              <Link
                href="/projects/condos-apartments" /* change if your route is /projects/condos */
                aria-label="Learn more about Condos and Apartments painting projects"
                className="inline-block w-full sm:w-auto text-center bg-[var(--primary-100)] px-5 sm:px-6 py-3 rounded-xl hover:bg-[var(--primary-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-200)] transition"
              >
                <span className="text-white">learn more</span>
              </Link>
            </div>
          </div>

          {/* 2) Commercial — IMAGE RIGHT */}
          <div className="flex flex-col lg:flex-row-reverse items-stretch lg:items-center gap-6 lg:gap-10">
            <div className="relative w-full lg:w-1/2 h-56 sm:h-64 lg:h-[22rem] rounded-2xl lg:rounded-3xl overflow-hidden">
              <Image
                src="/project-images/commercial.jpg"
                alt="Commercial Painting: offices, retail spaces, ceilings and trims finished to spec"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[var(--bg-300)] text-[var(--text-100)] px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-medium">
                Commercial
              </span>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-100)] mb-3 sm:mb-4">
                Commercial Painting
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-200)] mb-5 sm:mb-6">
                High-quality finishes for business and retail spaces.
              </p>
              <ul className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Wall, trim & ceiling painting for offices and retail
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Durable coatings for doors, frames & baseboards
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Brand-specific colours for consistent identity
                </li>
              </ul>
              <Link
                href="/projects/commercial"
                aria-label="Learn more about Commercial painting projects"
                className="inline-block w-full sm:w-auto text-center bg-[var(--primary-100)] px-5 sm:px-6 py-3 rounded-xl hover:bg-[var(--primary-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-200)] transition"
              >
                <span className="text-white">learn more</span>
              </Link>
            </div>
          </div>

          {/* 3) Homes — IMAGE LEFT */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-10">
            <div className="relative w-full lg:w-1/2 h-56 sm:h-64 lg:h-[22rem] rounded-2xl lg:rounded-3xl overflow-hidden">
              <Image
                src="/project-images/home.jpg"
                alt="Homes: interior painting with crisp trim and baseboards and a smooth wall finish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                fetchPriority="high"
                decoding="async"
              />
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[var(--primary-100)] text-white px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-medium">
                Homes
              </span>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-100)] mb-3 sm:mb-4">
                Custom Home Painting
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-200)] mb-5 sm:mb-6">
                Detailed residential painting for interiors and exteriors.
              </p>
              <ul className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Precision painting for baseboards, trims, and doors
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Smooth, even coverage on walls & ceilings
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--primary-100)] h-5 w-5 flex-shrink-0 mt-0.5" />
                  Weather-resistant exterior finishes
                </li>
              </ul>
              <Link
                href="/projects/homes"
                aria-label="Learn more about Home painting projects"
                className="inline-block w-full sm:w-auto text-center bg-[var(--primary-100)] px-5 sm:px-6 py-3 rounded-xl hover:bg-[var(--primary-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-200)] transition"
              >
                <span className="text-white">learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
