'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl"
      aria-label="Main"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-slate-900">
          <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-700 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                )}
              >
                {item.name}
              </Link>
            )
          })}
          <Button size="sm">Get Started</Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                  pathname === item.href
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-2 w-full" size="sm" type="button">
              Get Started
            </Button>
          </div>
        </motion.div>
      ) : null}
    </motion.nav>
  )
}
