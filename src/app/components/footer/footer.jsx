'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function SiteFooter({
  brand = 'Classic Contracting',
  phone = '+1 (647) 863-4562',
  phoneHref = 'tel:+16478634562',
  email = 'hello@classiccontracting.ca',
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
          <div>
            <div className="h-20 rounded-2xl  flex items-center">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={`${brand} logo`}
                  width={160}
                  height={40}
                  className="h-40 w-full"
                  priority
                />
              ) : (
                <div className="h-10 w-40 rounded-md ring-1 ring-white/20 bg-white grid place-items-center text-white/80 text-sm">
                  
                </div>
              )}
            </div>

            <p className="mt-4 text-white/80 leading-relaxed">
              Spec-driven interior & exterior painting and cabinet refinishing for condos, homes,
              and apartments—clean sites, predictable schedules, professional finishes.
            </p>

            {/* Socials */}
            {/* <div className="mt-4 flex items-center gap-3">
              <Link aria-label="Instagram" href="#" className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white/10">
                <Instagram className="h-4 w-4 text-white" />
              </Link>
              <Link aria-label="Facebook" href="#" className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white/10">
                <Facebook className="h-4 w-4 text-white" />
              </Link>
              <Link aria-label="LinkedIn" href="#" className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white/10">
                <Linkedin className="h-4 w-4 text-white" />
              </Link>
            </div> */}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              {/* <li><Link href="/" className="hover:text-white">Home</Link></li> */}
              {/* <li><Link href="/services" className="hover:text-white">Painting Services</Link></li> */}
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

            {/* <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium
                         bg-[var(--accent-100)]  shadow-sm hover:bg-white/90 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-white"
            >
            <span className='text-[var(--text-100)]'>Request Proposal</span>  
            </Link> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[13px] text-white/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {year} {brand}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
