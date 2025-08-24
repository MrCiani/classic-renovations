'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Home, Building2, Building, Factory } from 'lucide-react'

const projectTypes = [
  { label: 'Homes',       href: '/projects/homes',       icon: <Home size={18} /> },
  { label: 'Condos & Apartments',      href: '/projects/condos',      icon: <Building2 size={18} /> },
  { label: 'Commercial',  href: '/projects/commercial',  icon: <Factory size={18} /> },
]

export default function ProjectsMegaMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const timeoutRef = useRef(null)
  const router = useRouter()
  const pathname = usePathname()

  const isActive =
    pathname === '/projects' || projectTypes.some(p => pathname.startsWith(p.href))

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(false), 180)
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
        // onClick={() => router.push('/projects')}
        onFocus={handleMouseEnter}
        className={`cursor-pointer text-md px-4 transition ${
          isActive
            ? 'text-[var(--primary-100)] font-semibold'
            : 'text-[var(--text-100)] hover:text-[var(--primary-100)]'
        }`}
      >
        Project Gallery
      </button>

      {open && (
        <div
          className="
            absolute left-0 top-full mt-3
            w-[320px] rounded-2xl border border-[var(--border)]
            bg-[var(--bg-100)] shadow-2xl z-50
          "
        >
          <div className="p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-200)] mb-4">
              By Property Type
            </p>
            <ul className="space-y-2">
              {projectTypes.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      flex items-center gap-3 rounded-lg px-2 py-2
                      text-[var(--text-100)] hover:text-[var(--primary-100)]
                      hover:bg-white/5 transition
                    "
                  >
                    <span className="shrink-0" style={{ color: 'var(--primary-100)' }}>
                      {icon}
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
