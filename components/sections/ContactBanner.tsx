import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function ContactBanner() {
  return (
    <section className="py-10 sm:py-14">
      <div className="hero-panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow border-white/10 bg-white/10 text-slate-200">Ready when you are</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s turn the next version of your product into something polished and dependable.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Whether you need a launchable MVP, a design refresh, or a better engineering rhythm, we can help you
            move with more clarity and less friction.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-tight text-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5 hover:bg-slate-100"
              href="/contact"
            >
              Start the conversation
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              href="/services"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Response window</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-white">Within 1 business day</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              We keep the first step simple and practical, so you get a clear next action instead of a vague pitch.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Mail className="h-5 w-5 text-slate-300" />
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">Email</p>
              <p className="mt-2 text-base font-medium text-white">{siteConfig.email}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Phone className="h-5 w-5 text-slate-300" />
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">Phone</p>
              <p className="mt-2 text-base font-medium text-white">{siteConfig.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
