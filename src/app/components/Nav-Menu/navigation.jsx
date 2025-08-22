'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ServicesMegaMenu from './navigation-megamenu'
import ProjectsMegaMenu from './navigation-projects-megamenu'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const navlink = [
    { id: 1, title: 'Home', to: '/' },
    {
      id: 2,
      title: 'Painting',
      children: [
        { label: 'Interior Painting', to: '/services/interior' },
        { label: 'Exterior Painting', to: '/services/exterior' },
        // { label: 'Cabinet Refinishing', to: '/painting/cabinets' },
        // { label: 'Trim & Doors', to: '/painting/trim-doors' },
        // { label: 'Drywall & Patching', to: '/painting/drywall' },
        // { label: 'Deck & Fence Staining', to: '/painting/deck-fence-staining' },
        // { label: 'Spray Finishes', to: '/painting/spray-finishes' },
        // { label: 'Colour Consultation', to: '/painting/colour-consultation' },
        // { label: 'Residential', to: '/painting/residential' },
        { label: 'Commercial', to: '/painting/commercial' },
        { label: 'Multi-Unit / PM', to: '/painting/multi-unit' },
      ],
    },
    {
      id: 5,
      title: 'Project Gallery',
      children: [
        { label: 'Homes', to: '/projects/homes' },
        { label: 'Condos', to: '/projects/condos' },
        { label: 'Apartments', to: '/projects/apartments' },
        { label: 'Commercial', to: '/projects/commercial' },
      ],
    },
    { id: 7, title: 'Contact', to: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-100)] border-b border-[var(--border)]">
    <div className="max-w-screen-xl mx-auto h-[80px] px-4 sm:px-6 flex items-center">

        {/* LEFT GROUP: logo + nav */}
        <div className="flex items-center gap-6">
          {/* CHANGED: make logo taller so it’s readable */}
<Link href="/" className="block h-full shrink-0">
  <Image
    src="/logo/cc-logo-f.svg"
    alt="Classic Contracting Logo"
    width={260}
    height={90}
    priority
    
  />
</Link>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-md font-medium">
            {navlink.map(link => {
              const groupActive =
                (link.children && link.children.some(c => pathname.startsWith(c.to))) ||
                (link.title === 'Painting' && pathname.startsWith('/painting')) ||
                (link.title === 'Project Gallery' && pathname.startsWith('/projects'))

              return (
                <li key={link.id} className="list-none">
                  {link.children ? (
                    link.title === 'Painting' ? (
                      <ServicesMegaMenu />
                    ) : link.title === 'Project Gallery' ? (
                      <ProjectsMegaMenu />
                    ) : (
                      <span
                        className={`transition ${
                          groupActive
                            ? 'text-[var(--primary-100)] font-semibold'
                            : 'text-[var(--text-100)] hover:text-[var(--primary-100)]'
                        }`}
                      >
                        {link.title}
                      </span>
                    )
                  ) : (
                    <Link
                      href={link.to}
                      className={`transition hover:text-[var(--primary-100)] ${
                        pathname === link.to
                          ? 'text-[var(--primary-100)] font-semibold'
                          : 'text-[var(--text-100)]'
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              )
            })}
          </nav>
        </div>

        {/* Spacer keeps nav left-aligned */}
        <div className="flex-1" />

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[var(--text-100)] p-2 rounded-md hover:bg-[var(--primary-100)] hover:text-white"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <aside
          className={`fixed top-0 right-0 w-72 h-full bg-[var(--bg-100)] border-l border-[var(--border)] shadow-lg p-6 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <button className="mb-6 text-[var(--text-100)]" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>

          <ul className="flex flex-col gap-4">
            {navlink.map(link => {
              const groupActive =
                (link.children && link.children.some(c => pathname.startsWith(c.to))) ||
                (link.title === 'Painting' && pathname.startsWith('/painting')) ||
                (link.title === 'Project Gallery' && pathname.startsWith('/projects'))

              return (
                <li key={link.id}>
                  {link.children ? (
                    <details className="group" open={groupActive}>
                      <summary className="cursor-pointer text-base font-medium flex justify-between items-center">
                        <span className={groupActive ? 'text-[var(--primary-100)] font-bold' : 'text-[var(--text-100)]'}>
                          {link.title}
                        </span>
                        <span className="text-sm text-[var(--text-200)] group-open:rotate-90 transition-transform">›</span>
                      </summary>
                      <ul className="pl-4 mt-2 flex flex-col gap-2">
                        {link.children.map((sublink, idx) => {
                          const activeChild = pathname.startsWith(sublink.to)
                          return (
                            <li key={idx}>
                              <Link
                                href={sublink.to}
                                onClick={() => setMobileOpen(false)}
                                className={`text-sm transition ${
                                  activeChild
                                    ? 'text-[var(--primary-100)] font-semibold'
                                    : 'text-[var(--text-100)] hover:text-[var(--primary-100)]'
                                }`}
                              >
                                {sublink.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`text-base transition ${
                        pathname === link.to
                          ? 'text-[var(--primary-100)] font-semibold'
                          : 'text-[var(--text-100)] hover:text-[var(--primary-100)]'
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    </header>
  )
}
