import React from 'react'
import Link from 'next/link'

export default function HeroCta({
  buttontext = "Get My Free Estimate →",
  bgColor = "var(--accent-100)",
  textColor = "var(--text-100)"
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-2">
      {/* Main CTA – always visible */}
      <Link href="/contact">
        <button
          className="px-6 py-3 rounded-md hover:bg-[var(--primary-200)] transition font-semibold cursor-pointer duration-200 ease-in text-lg"
          style={{
            backgroundColor: bgColor,
            color: textColor
          }}
        >
          {buttontext}
        </button>
      </Link>
    </div>
  )
}
