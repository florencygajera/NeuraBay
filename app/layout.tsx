import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/animations/PageTransition'

const fontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontDisplay = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://neurabay.com'),
  title: {
    default: 'NeuraBay | AI-Powered Product Engineering',
    template: '%s | NeuraBay',
  },
  description:
    'NeuraBay designs and builds premium web, mobile, and AI products for modern teams. Calm execution, strong taste, and measurable outcomes.',
  openGraph: {
    title: 'NeuraBay | AI-Powered Product Engineering',
    description: 'Scale your product roadmap with NeuraBay across web, mobile, and AI delivery.',
    url: 'https://neurabay.com',
    siteName: 'NeuraBay',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuraBay | AI-Powered Product Engineering',
    description: 'Scale your product roadmap with NeuraBay.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${fontSans.variable} ${fontDisplay.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-hero-glow">
          <Navbar />
          <PageTransition>
            <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  )
}
