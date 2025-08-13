'use client'

import { useState, useRef, useEffect, useId } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import HeroCta from '../cta-folder/Call-to-action'
import Link from 'next/link'
import { Paintbrush, SprayCan, Sparkles, Layers, Home, Droplet, SquareStack, Palette, Brush } from 'lucide-react'

const paintingServices = [
  { label: 'Interior Painting', href: '/painting/interior', icon: <Paintbrush size={18} />, desc: 'Walls, ceilings, trim, feature walls' },
  { label: 'Exterior Painting', href: '/painting/exterior', icon: <Home size={18} />, desc: 'Siding, brick, stucco, soffits' },
  { label: 'Cabinet Refinishing', href: '/painting/cabinets', icon: <Sparkles size={18} />, desc: 'Kitchen & vanity spraying' },
  { label: 'Trim & Doors', href: '/painting/trim-doors', icon: <Layers size={18} />, desc: 'Baseboards, casings, doors, rails' },
  { label: 'Drywall & Patching', href: '/painting/drywall', icon: <SquareStack size={18} />, desc: 'Repairs, skim coat, texture removal' },
  { label: 'Deck & Fence Staining', href: '/painting/deck-fence-staining', icon: <Droplet size={18} />, desc: 'Transparent to solid stains' },
  { label: 'Spray Finishes', href: '/painting/spray-finishes', icon: <SprayCan size={18} />, desc: 'Airless & HVLP flawless coats' },
  { label: 'Colour Consultation', href: '/painting/colour-consultation', icon: <Palette size={18} />, desc: 'Palettes, samples, coordination' },
]

const paintingAudiences = [
  { label: 'Residential', href: '/painting/residential', icon: <Paintbrush size={16} />, desc: 'Condos, homes, apartments' },
  { label: 'Commercial', href: '/painting/commercial', icon: <Layers size={16} />, desc: 'Retail, offices, common areas' },
  { label: 'Multi‑Unit / PM', href: '/painting/multi-unit', icon: <SquareStack size={16} />, desc: 'Turns, corridors, hallways' },
]

export default function ServicesMegaMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const timeoutRef = useRef(null)
  const router = useRouter()
  const pathname = usePathname()
  const menuId = useId()

  const isActive =
    pathname === '/painting' ||
    paintingServices.some(s => pathname.startsWith(s.href)) ||
    paintingAudiences.some(a => pathname.startsWith(a.href))

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(false), 200)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  useEffect(() => {
    const clickAway = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', clickAway)
    return () => {
      document.removeEventListener('mousedown', clickAway)
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => router.push('/painting')}
        onFocus={handleMouseEnter}
        onKeyDown={handleKeyDown}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className={`cursor-pointer text-md px-4 transition ${
          isActive ? 'text-[var(--primary-100)] font-semibold' : 'text-[var(--text-100)] hover:text-[var(--primary-100)]'
        }`}
      >
        Painting
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="
            absolute left-0 top-full mt-2 w-[980px]
            rounded-2xl border border-[var(--border)] bg-[var(--bg-100)] shadow-xl z-50
            grid grid-cols-[1.4fr_1fr] gap-6 p-6
          "
        >
          {/* Left: Services grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-200)]">
                Painting Services
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {paintingServices.map(({ label, href, icon, desc }) => (
                <Link
                  key={label}
                  href={href}
                  role="menuitem"
                  className="
                    group flex items-start gap-3 rounded-xl px-3 py-3
                    border border-transparent hover:border-[var(--border)]
                    hover:bg-white/50 transition
                  "
                >
                  <span
                    className="
                      mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl
                      border border-[var(--border)] bg-white/70
                    "
                    style={{ color: 'var(--primary-100)' }}
                    aria-hidden
                  >
                    {icon}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-[var(--text-100)] group-hover:text-[var(--primary-100)]">
                      {label}
                    </p>
                    <p className="text-xs text-[var(--text-200)] leading-snug">
                      {desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Featured panel */}
          <aside
            className="
              relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white
              p-5 flex flex-col justify-between
            "
          >
            {/* subtle paint stroke accent */}
            <div
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full"
              style={{ opacity: 0.2, background: 'radial-gradient(circle at center, var(--primary-100), transparent 60%)' }}
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary-100)]">
                <Brush size={14} />
                Premium Finishes
              </div>
              <h3 className="mt-2 text-base font-semibold text-[var(--text-100)]">
                Durable, Clean, High‑Coverage Results
              </h3>
              <ul className="mt-3 space-y-2 text-[13px] text-[var(--text-200)]">
                <li>• Low‑VOC & washable paints</li>
                <li>• Clean edges, dust‑controlled prep</li>
                <li>• Flexible scheduling for occupied units</li>
              </ul>
            </div>

            <div className="relative mt-4 flex flex-col">
              <HeroCta buttontext='Get a Quote'  bgColor = "var(--primary-100)"
  textColor = 'white'/>
              {/* <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium
                  bg-[var(--primary-200)] text-white hover:opacity-90 transition
                "
              >
                Get a free quote
              </Link> */}
              <p className="mt-2 text-[11px] text-[var(--text-200)]">
                Serving condos, rentals, and commercial units across the GTA.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
