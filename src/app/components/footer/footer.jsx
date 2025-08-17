'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function SiteFooter({
  brand = 'Classic Contracting',
  phone = '+1 (437) 555-5555',
  phoneHref = 'tel:+14375555555',
  email = 'hello@classiccontracting.ca',
  emailHref = 'mailto:hello@classiccontracting.ca',
  address = '205 - 1100 Finch Ave W, North York, ON M3J 2E2',
  logoSrc, // e.g. '/logo.svg'
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-[var(--primary-100)] text-white">
      {/* Top grid */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / blurb */}
          <div>
            <div className="h-10 flex items-center">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={`${brand} logo`}
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              ) : (
                <div className="h-10 w-40 rounded-md ring-1 ring-white/20 bg-white/10 grid place-items-center text-white/80 text-sm">
                  Your Logo
                </div>
              )}
            </div>

            <p className="mt-4 text-white/80 leading-relaxed">
              Spec-driven interior & exterior painting and cabinet refinishing for condos, homes,
              and apartments—clean sites, predictable schedules, professional finishes.
            </p>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3">
              <Link aria-label="Instagram" href="#" className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white/10">
                <Instagram className="h-4 w-4 text-white" />
              </Link>
              <Link aria-label="Facebook" href="#" className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white/10">
                <Facebook className="h-4 w-4 text-white" />
              </Link>
              <Link aria-label="LinkedIn" href="#" className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white/10">
                <Linkedin className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/painting" className="hover:text-white">Painting Services</Link></li>
              <li><Link href="/project-gallery" className="hover:text-white">Project Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
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

          {/* Contact / CTA */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Get in Touch</h3>
            <ul className="mt-3 space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white" />
                <a href={phoneHref} className="hover:text-white">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white" />
                <a href={emailHref} className="hover:text-white">{email} </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-white" />
                <span>{address}</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium
                         bg-white text-[var(--primary-100)] shadow-sm hover:bg-white/90 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-white"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[13px] text-white/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {year} {brand}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
