'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
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
      className="fixed inset-x-0 top-0 z-50"
      aria-label="Main"
    >
      <div className="mx-auto mt-4 flex w-full max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground shadow-lg shadow-brand/15">
            NB
          </span>
          <span>
            <span className="block font-display text-2xl font-bold tracking-tight text-slate-950">
              {siteConfig.name}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.24em] text-slate-500 sm:block">
              Product studio
            </span>
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
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand text-brand-foreground shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
                )}
              >
                {item.name}
              </Link>
            )
          })}
          <Link
            className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold tracking-tight text-brand-foreground shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-600"
            href="/contact"
          >
            Start a Project
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
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
          className="mx-auto mt-2 w-full max-w-7xl rounded-3xl border border-white/70 bg-white/90 px-4 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-brand text-brand-foreground'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              className="mt-2 block rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold tracking-tight text-brand-foreground shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:bg-brand-600"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      ) : null}
    </motion.nav>
  )
}
