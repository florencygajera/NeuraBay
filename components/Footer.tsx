import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h3>
          <p className="mt-4 max-w-sm text-sm text-slate-300">
            AI-powered product delivery for ambitious teams. Fast execution, clean architecture, and measurable growth.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              aria-label="Github"
              className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
              href={siteConfig.socialLinks.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="Twitter"
              className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
              href={siteConfig.socialLinks.twitter}
              rel="noreferrer"
              target="_blank"
            >
              <Twitter size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
              href={siteConfig.socialLinks.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Core Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Web Engineering</li>
            <li>Mobile Apps</li>
            <li>Product Design</li>
            <li>AI Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
