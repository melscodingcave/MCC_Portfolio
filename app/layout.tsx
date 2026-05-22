import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { ScrollToTop } from '@/components/ScrollToTop'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Melanie Basso | SDET & Software Engineer',
  description: 'Portfolio of Melanie Basso — test automation, API development, and engineering philosophy.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A1628]">
        <Navigation />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}