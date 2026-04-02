import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/animations/PageTransition'

const fontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://neurabay.com'),
  title: {
    default: 'NeuraBay | AI-Powered Product Engineering',
    template: '%s | NeuraBay',
  },
  description: 'NeuraBay builds high-performance web, mobile, and AI products for modern teams. Scalable engineering, clean design, and measurable outcomes.',
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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${fontSans.variable} ${fontDisplay.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-hero-glow">
          <Navbar />
          <PageTransition>
            <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  )
}

