// src/app/components/contact/ContactCards.jsx
'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactCards() {
  // ✏️ Update these if needed
  const CONTACT = {
    phoneDisplay: '+1 (647) 863-4562', // TODO: replace with your real number
    phoneHref: '+16478634562',         // digits only for tel: link
    emaildisplay: 'info@classic-contracting.ca', 
    email: 'Ukaraalp@gmail.com',
    addressLine1: '205 – 1100 Finch Ave W',
    addressLine2: 'North York, ON M3J 2E2',
    mapsQuery:
      'https://maps.google.com/?q=205%20%E2%80%93%201100%20Finch%20Ave%20W%2C%20North%20York%2C%20ON%20M3J%202E2',
  }

  const Card = ({ icon: Icon, title, children, href }) => {
    const Wrapper = href ? 'a' : 'div'
    return (
      <Wrapper
        href={href}
        className="group block rounded-2xl bg-white border border-[var(--bg-300)] shadow-sm hover:shadow-md transition-shadow p-6"
      >
        <div className="mx-auto h-14 w-14 rounded-full grid place-items-center bg-[var(--primary-100)] text-white shadow-inner">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-center text-[var(--text-100)]">
          {title}
        </h3>
        <p className="mt-1 text-center text-[var(--text-200)] leading-relaxed">
          {children}
        </p>
      </Wrapper>
    )
  }

  return (
    <section className="py-12 lg:py-16 bg-[var(--bg-100)]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]">
          Get in Touch — <span className="text-[var(--primary-100)]">We’re Here to Help!</span>
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={Phone}
            title="Call Us"
            href={`tel:${CONTACT.phoneHref}`}
          >
            {CONTACT.phoneDisplay}
          </Card>

          <Card
            icon={Mail}
            title="Email Us"
            href={`mailto:${CONTACT.email}`}
          >
            {CONTACT.emaildisplay}
          </Card>

          <Card
            icon={MapPin}
            title="Address"
            href={CONTACT.mapsQuery}
          >
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </Card>
        </div>
      </div>
    </section>
  )
}
