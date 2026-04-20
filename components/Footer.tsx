import Link from 'next/link'
import type { Route } from 'next'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const quickLinks = [
  { label: 'Home', href: '/' as Route },
  { label: 'Services', href: '/services' as Route },
  { label: 'Technologies', href: '/technologies' as Route },
  { label: 'About', href: '/about' as Route },
]

export default function Footer() {
  return (
    <footer className="mt-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="hero-panel overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr]">
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight">
                <span className="text-white">{siteConfig.name}</span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">{siteConfig.tagline}</p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  aria-label="Github"
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  href={siteConfig.socialLinks.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github size={18} />
                </a>
                <a
                  aria-label="Twitter"
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  href={siteConfig.socialLinks.twitter}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Twitter size={18} />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  href={siteConfig.socialLinks.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Quick Links</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link className="inline-flex items-center gap-2 transition hover:text-white" href={item.href}>
                      {item.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Core Services</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Product Strategy</li>
                <li>Web Engineering</li>
                <li>AI Integrations</li>
                <li>Cloud Delivery</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Contact</h4>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="mt-2 sm:mt-0">Premium product engineering, designed to scale with confidence.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
