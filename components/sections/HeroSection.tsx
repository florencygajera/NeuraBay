import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { siteConfig } from '@/lib/site-config'

export default function HeroSection() {
  return (
    <section className="grid gap-8 pb-8 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <FadeIn>
        <p className="eyebrow">Premium Product Engineering</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
          Elegant digital products for teams that want clarity, momentum, and measurable outcomes.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          NeuraBay partners with founders and product teams to design, build, and scale web platforms, mobile apps,
          and AI-powered workflows with calm execution and strong taste.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-base font-semibold tracking-tight text-brand-foreground shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-600"
            href="/contact"
          >
            Book a Strategy Call
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 px-6 py-3 text-base font-semibold tracking-tight text-slate-900 transition hover:bg-white"
            href="/services"
          >
            View Services
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {['Web', 'Mobile', 'AI', 'Design Systems', 'Cloud'].map((item) => (
            <span key={item} className="metric-chip text-sm font-medium text-slate-700">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            'Senior-led delivery with direct communication',
            'Polished design systems and scalable UI architecture',
            'Fast iterations without losing product quality',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-brand-foreground">
                <Check className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm leading-6 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="hero-panel p-4 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">Studio Snapshot</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">A steady delivery rhythm.</h2>
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
              Available now
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">What we optimize</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                <li>Product strategy that aligns stakeholders quickly</li>
                <li>Premium UX that feels calm, deliberate, and modern</li>
                <li>Engineering systems designed to scale cleanly</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Delivery cadence</p>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Discovery</span>
                  <span className="text-slate-400">1 week</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span>Design</span>
                  <span className="text-slate-400">2-3 weeks</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span>Build & launch</span>
                  <span className="text-slate-400">4-8 weeks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Core promise</p>
                <p className="mt-2 text-lg font-semibold text-white">{siteConfig.tagline}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
