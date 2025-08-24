'use client'

import { MapPin, ExternalLink } from 'lucide-react'

/**
 * ContactMap
 * Responsive Google Maps embed with rounded corners and a "Get directions" CTA.
 * No API key required (uses Maps Embed via query string).
 */
export default function ContactMap() {
  const address = '89 Winges Rd, Woodbridge, ON L4L 6B8'
  const query = encodeURIComponent(address)
  const mapSrc = `https://www.google.com/maps?q=${query}&output=embed`
  const directionsHref = `https://www.google.com/maps?daddr=${query}`

  return (
    <section className="px-4 lg:px-8 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-2 text-[var(--text-100)]">
          <MapPin className="h-5 w-5 text-[var(--primary-100)]" />
          <h2 className="text-xl font-semibold">Our Location</h2>
        </div>

        <div className="rounded-2xl border border-[var(--bg-300)] overflow-hidden shadow-sm bg-white">
          {/* Keep a fixed height so the map is big & clear; adjust as needed */}
          <div className="relative h-[480px] w-full">
            <iframe
              title={`Map to ${address}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3 p-4">
            <p className="text-sm text-[var(--text-200)]">{address}</p>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white bg-[var(--primary-100)] hover:bg-[var(--primary-200)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-100)] focus:ring-offset-2"
            >
              <span className='text-white'>Get Directions</span> <ExternalLink className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
