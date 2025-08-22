// components/CallNowBar.jsx
'use client';

import { Phone } from 'lucide-react';

export default function CallNowBar() {
  return (
    <a
      href="tel:+16478634562" // replace with your real number
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-[var(--accent-100)] p-6  font-semibold shadow-lg hover:bg-[var(--primary-200)] transition sm:hidden"
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
