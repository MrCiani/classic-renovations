import { Inter } from 'next/font/google'
import CallNowButton from './components/callnow'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Classic Renovations',
  description:
    'High-rise, mid-rise, and commercial painting solutions for builders, project managers, and estimators.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen overflow-x-clip bg-[var(--bg-100)] text-[var(--text-100)]`}
      >
        {children}
        <CallNowButton/>
      </body>
    </html>
  )
}
