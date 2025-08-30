// app/layout.jsx
import { Inter } from 'next/font/google'
import './globals.css'
import CallNowButton from './components/callnow'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Classic Contracting',
  description:
    'High-rise, mid-rise, and commercial painting solutions for builders, project managers, and estimators.',
  icons: {
    icon: '/cc-fav5.png', 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen overflow-x-clip bg-[var(--bg-100)] text-[var(--text-100)]`}>
        {children}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <CallNowButton />
      </body>
    </html>
  )
}
