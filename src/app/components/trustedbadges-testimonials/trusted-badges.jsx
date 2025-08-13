

import Link from 'next/link'
import {
  ShieldCheck, BadgeCheck, HardHat, Leaf, Timer, SprayCan, ClipboardCheck, Construction
} from 'lucide-react'

// minimal icon map so you can swap labels without editing the component
const ICONS = {
  ShieldCheck,
  BadgeCheck,
  HardHat,
  Leaf,
  Timer,
  SprayCan,
  ClipboardCheck,
  Construction,
}

/**
 * TrustedBadges
 * Props:
 * - badges: [{ label, sublabel?, icon, href?, tooltip? }]
 * - variant: "row" | "grid"
 * - size: "sm" | "md" (controls padding/text)
 * - subtle: boolean (adds faint glass/gradient chip)
 */
export default function TrustedBadges({
  badges = DEFAULT_BADGES,
  variant = 'row',
  size = 'md',
  subtle = true,
}) {
  const base =
    'inline-flex items-center gap-2 rounded-xl border border-[var(--bg-300)] text-[var(--text-100)]';
  const pad = size === 'sm' ? 'px-3 py-2 text-xs' : 'px-3.5 py-2.5 text-sm';
  const tone = subtle
    ? 'bg-white/70 backdrop-blur ring-1 ring-black/5'
    : 'bg-[var(--background)]';

  const Wrapper = ({ children }) => (
    <div className={
      variant === 'grid'
        ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3'
        : 'flex flex-wrap items-center gap-3'
    }>
      {children}
    </div>
  );

  return (
    <Wrapper>
      {badges.map(({ label, sublabel, icon = 'BadgeCheck', href, tooltip }, i) => {
        const Icon = ICONS[icon] || BadgeCheck
        const content = (
          <span
            title={tooltip || label}
            className={`${base} ${pad} ${tone} shadow-sm`}
          >
            <span className="inline-grid place-items-center w-7 h-7 rounded-lg
                             bg-[var(--primary-300)]/50 text-[var(--primary-100)]
                             ring-1 ring-[var(--primary-100)]/20 shrink-0">
              <Icon className="w-4 h-4" />
            </span>
            <span className="leading-tight">
              <span className="font-medium">{label}</span>
              {sublabel && (
                <span className="block text-[var(--text-200)] text-[11px] -mt-0.5">
                  {sublabel}
                </span>
              )}
            </span>
          </span>
        )

        return href ? (
          <Link
            key={i}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener"
            className="group"
            aria-label={`${label}${sublabel ? ` – ${sublabel}` : ''}`}
          >
            {content}
          </Link>
        ) : (
          <div key={i} aria-label={label}>
            {content}
          </div>
        )
      })}
    </Wrapper>
  )
}

// sensible painter-focused defaults (edit to your actual credentials)
export const DEFAULT_BADGES = [
  { label: 'Licensed & Insured', icon: 'ShieldCheck', tooltip: 'Proof of insurance available on request' },
  { label: 'WSIB Covered', icon: 'HardHat', tooltip: 'Ontario WSIB coverage' , href: '/docs/wsib.pdf' }, // example doc
  { label: 'On‑Schedule Delivery', icon: 'Timer', tooltip: 'Coordinated with GCs & PMs' },
]
