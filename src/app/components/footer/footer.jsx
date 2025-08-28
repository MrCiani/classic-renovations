'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function SiteFooter({
  brand = 'Classic Contracting',
  phone = '+1 (647) 863-4562',
  phoneHref = 'tel:+16478634562',
  email = 'info@classic-contracting.ca',
  emailHref = 'mailto:Ukaraalp@gmail.com',
  address = '205 - 1100 Finch Ave W, North York, ON M3J 2E2',
  logoSrc = '/logo/cc-logo-f3.svg'
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-[var(--primary-100)] text-white">
      {/* Top grid */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / blurb */}
          <div className="text-left">
            {/* LOGO — bigger + left-aligned */}
            <div className="flex items-start justify-start">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={`${brand} logo`}
                  // Give the image a large intrinsic size; we’ll control display size with classes
                  width={800}
                  height={220}
                  // Responsive, left-aligned, aspect-ratio preserved
                  className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 h-auto object-contain"
                  priority
                />
              ) : (
                <div className="h-10 w-40 rounded-md ring-1 ring-white/20 bg-white grid place-items-center text-white/80 text-sm" />
              )}
            </div>

            <p className="mt-4 text-white/80 leading-relaxed">
              Spec-driven interior & exterior painting and cabinet refinishing for condos, homes,
              and apartments—clean sites, predictable schedules, professional finishes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="/services/interior" className="hover:text-white">Interior</Link></li>
              <li><Link href="/services/exterior" className="hover:text-white">Exterior</Link></li>
              <li><Link href="/services/commercial" className="hover:text-white">Commerical</Link></li>
              <li><Link href="/services/commercial" className="hover:text-white">Multi-Units</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Service Areas (GTA)</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-white/80">
              <li>Toronto</li><li>Mississauga</li>
              <li>Brampton</li><li>Etobicoke</li>
              <li>Oakville</li><li>Vaughan</li>
              <li>Milton</li><li>Hamilton</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Get in Touch</h3>
            <ul className="mt-3 space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white" />
                <a href={phoneHref} className="hover:text-white">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white" />
                <a href={emailHref} className="hover:text-white">{email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-white" />
                <span>{address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[13px] text-white/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {year} {brand}. All rights reserved.</p>
          <div className="flex items-center gap-4" />
        </div>
      </div>
    </footer>
  );
}
