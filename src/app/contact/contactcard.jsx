'use client'

import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

export default function ContactIntro() {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

 async function handleSubmit(e) {
  e.preventDefault()
  setMsg(null)

  const form = e.currentTarget
  const data = Object.fromEntries(new FormData(form).entries())

  if (!data.name || !data.email || !data.message) {
    setMsg('Please fill in your name, email, and message.')
    return
  }

  try {
    setLoading(true)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    // Try to parse JSON, but don't crash if body is empty/non-JSON
    let payload = null
    let rawText = ''
    try {
      rawText = await res.clone().text() // read for debugging
      payload = rawText ? JSON.parse(rawText) : null
    } catch {}

    if (!res.ok) {
      const msg = payload?.error || `Request failed (${res.status})`
      console.error('API error:', { status: res.status, payload, rawText })
      throw new Error(msg)
    }

    form.reset()
    setMsg("Thanks! We'll get back to you shortly.")
  } catch (err) {
    console.error('submit error:', err)
    setMsg(`Error: ${err.message}`)
  } finally {
    setLoading(false)
  }
}


  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--hero-gradient)' }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16 grid gap-12 lg:grid-cols-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-[var(--primary-100)]">Book Your Free Estimate</span><br /> or Call Us Today
          </h1>

          <p className="text-lg text-[var(--text-200)] max-w-xl">
            We respond within 24 hours. Fully licensed, fully insured, 5-star rated.
          </p>

          {/* Trust bullets */}
          <ul className="mt-6 space-y-4 text-[var(--text-100)]">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-100)]/10 text-[var(--accent-200)]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              Licensed & Insured Professionals
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-100)]/10 text-[var(--accent-200)]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              5-Star Rated Across the GTA
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-100)]/10 text-[var(--accent-200)]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              Satisfaction Guarantee on Every Project
            </li>
          </ul>

          {/* Contact chips (optional) */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="tel:+1-000-000-0000" className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1 shadow-sm">
              <Phone className="h-4 w-4" /> +1 (000) 000-0000
            </a>
            <a href="mailto:hello@classiccontracting.ca" className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1 shadow-sm">
              <Mail className="h-4 w-4" /> hello@classiccontracting.ca
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-300)] bg-white px-3 py-1 shadow-sm">
              <Clock className="h-4 w-4" /> Mon–Fri 8–6
            </span>
          </div>

          {/* Location blurb (optional) */}
          <div className="mt-3 flex items-start gap-3 text-sm text-[var(--text-200)]">
            <MapPin className="h-5 w-5 mt-0.5" />
            <p>205 – 1100 Finch Ave W, North York, ON M3J 2E2</p>
          </div>
        </div>

        {/* Right Column (Inquiry card) */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-[var(--bg-300)] bg-white/90 backdrop-blur p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Request a Quote</h2>
            <p className="mt-1 text-sm text-[var(--text-200)]">We'll reply within one business day.</p>

            <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Honeypot (anti-spam) */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input name="name" type="text" className="w-full rounded-xl border border-[var(--bg-300)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-100)]" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input name="email" type="email" className="w-full rounded-xl border border-[var(--bg-300)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-100)]" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input name="phone" type="tel" className="w-full rounded-xl border border-[var(--bg-300)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-100)]" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium mb-1">Property Type</label>
                <select name="property" className="w-full rounded-xl border border-[var(--bg-300)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-100)]">
                  <option value="">Select</option>
                  <option>Multi-Unit / Condo</option>
                  <option>Commercial</option>
                  <option>Residential</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-[var(--bg-300)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-100)]"
                  placeholder="Tell us about the scope, timing, and location"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm bg-[var(--primary-100)] hover:bg-[var(--primary-200)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-100)] focus:ring-offset-2 disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Send Request'}
                </button>
                <p className="text-xs text-[var(--text-300)]">
                  By sending, you agree to our privacy policy.
                </p>
              </div>

              {msg && (
                <div className="sm:col-span-2 text-sm mt-1 text-[var(--text-200)]">{msg}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
