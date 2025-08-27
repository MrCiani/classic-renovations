'use client'

import { MapPin, ExternalLink } from 'lucide-react'

export default function ContactMap() {
  // From your Google Maps link
  const lat = 43.7697249
  const lng = -79.4736475
  const placeLabel = 'Classic Contracting Office'
  const address = 'Unit 205, 1100 Finch Ave W, North York, ON M3J 2E2'

  // Embed the exact coordinates with a label
  const mapSrc = `https://www.google.com/maps?hl=en&q=${lat},${lng}(${encodeURIComponent(
    placeLabel
  )})&z=16&output=embed`

  // Best-practice directions link
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

  return (
    <section className="px-4 lg:px-8 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-2 text-[var(--text-100)]">
          <MapPin className="h-5 w-5 text-[var(--primary-100)]" />
          <h2 className="text-xl font-semibold">Our Location</h2>
        </div>

        <div className="rounded-2xl border border-[var(--bg-300)] overflow-hidden shadow-sm bg-white">
          <div className="relative h-[480px] w-full">
            <iframe
              title={`Map to ${placeLabel}`}
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
              <span className="text-white">Get Directions</span>
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
