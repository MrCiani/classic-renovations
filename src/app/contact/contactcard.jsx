'use client'

import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { supabase } from '@/app/lib/supabaseClient'
import toast from 'react-hot-toast'

export default function ContactIntro() {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (loading) return
    setMsg(null)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const { name = '', email = '', message = '' } = data

    if (!name || !email || !message) {
      setMsg('Please fill in your name, email, and message.')
      toast.error('Please fill in your name, email, and message.')
      return
    }

    if (data.company) {
      form.reset()
      toast.success('Thanks! We’ll get back to you shortly.')
      return
    }

    try {
      setLoading(true)

      const user_agent =
        typeof navigator !== 'undefined' ? navigator.userAgent : null

      // Show a loading toast and resolve it automatically
      await toast.promise(
        supabase.from('contact_messages').insert([{
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          property: data.property || null,
          message: data.message,
          user_agent,
        }]),
        {
          loading: 'Sending…',
          success: 'Message sent! We’ll reply within a business day.',
          error: (err) => err?.message || 'Something went wrong.',
        }
      )

      form.reset()
      setMsg(null) // optional since toast already confirms
    } catch (err) {
      console.error('supabase insert error:', err)
      // toast.promise already showed an error; keep a fallback just in case
      toast.error(err?.message || 'Something went wrong.')
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
          <ul className="mt-6 space-y-4 gap-10 text-[var(--text-100)]">
            <li className="flex items-center text-lg gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-100)]/10 text-[var(--accent-200)]">
                <ShieldCheck className="h-8 w-8" />
              </span>
              Licensed & Insured Professionals
            </li>
            <li className="flex text-lg items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-100)]/10 text-[var(--accent-200)]">
                <ShieldCheck className="h-8 w-8" />
              </span>
              5-Star Rated Across the GTA
            </li>
            <li className="flex items-center text-lg gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-100)]/10 text-[var(--accent-200)]">
                <ShieldCheck className="h-8 w-8" />
              </span>
              Satisfaction Guarantee on Every Project
            </li>
          </ul>

        </div>

        {/* Right Column (Inquiry card) */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-[var(--bg-300)] bg-white/90 backdrop-blur p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Request a Quote</h2>
            <p className="mt-1 text-sm text-[var(--text-200)]">We'll reply within one business day.</p>

            <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Honeypot */}
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
                {/* <p className="text-xs text-[var(--text-300)]">
                  By sending, you agree to our privacy policy.
                </p> */}
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
