'use client'

import { useState, useRef, useEffect, useId } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import HeroCta from '../cta-folder/Call-to-action'
import Link from 'next/link'
import { Paintbrush, Home, Layers, SquareStack, Sparkles, Brush } from 'lucide-react'

// Services: keep component refs, not JSX elements
const paintingServices = [
  { label: 'Interior Painting', href: '/services/interior', icon: Paintbrush, desc: 'Walls, ceilings, trim, feature walls' },
  { label: 'Exterior Painting', href: '/services/exterior', icon: Home, desc: 'Siding, brick, stucco, soffits' },
  { label: 'Commercial', href: '/services/commercial', icon: Layers, desc: 'Retail, offices, common areas' },
  { label: 'Multi-Unit / PM', href: '/services/multi-unit-pm', icon: SquareStack, desc: 'Turns, corridors, hallways' },
  { label: 'Cabinet Refinishing', href: '/services/cabinets', icon: Sparkles, desc: 'Kitchen & vanity spraying, factory‑smooth finish' },
]

// Optional: audiences also as component refs (if you use them here later)
const paintingAudiences = [
  { label: 'Residential', href: '/painting/residential', icon: Paintbrush, desc: 'Condos, homes, apartments' },
  { label: 'Commercial', href: '/painting/commercial', icon: Layers, desc: 'Retail, offices, common areas' },
  { label: 'Multi‑Unit / PM', href: '/painting/multi-unit', icon: SquareStack, desc: 'Turns, corridors, hallways' },
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
        // onClick={() => router.push('/painting')}
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
            absolute left-0 top-full mt-2 w-[960px]
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
              {paintingServices.map(({ label, href, icon: Icon, desc }) => (
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
                      mt-0.5 inline-grid place-items-center h-9 w-9 aspect-square shrink-0
                      rounded-xl border border-[var(--border)] bg-white/70
                    "
                    aria-hidden
                  >
                    <Icon className="w-5 h-5 text-[var(--primary-100)]" />
                  </span>

                  <div className="text-sm min-w-0">
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
                <Brush className="w-3.5 h-3.5" />
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
              <HeroCta buttontext="Get a Quote" bgColor="var(--primary-100)" textColor="white" />
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
