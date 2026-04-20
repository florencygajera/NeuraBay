import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

interface PlaceholderPageProps {
  title: string
  description: string
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="py-10 sm:py-14">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="surface-card p-8 sm:p-10">
          <p className="eyebrow">NeuraBay</p>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold tracking-tight text-brand-foreground shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-600"
              href="/contact"
            >
              Talk to Our Team
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              href="/services"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="section-shell p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">What you can expect</p>
          <div className="mt-5 space-y-4">
            {[
              'A premium visual language with stronger hierarchy and calmer spacing.',
              'More specific service positioning and clearer conversion paths.',
              'A site that feels like a serious studio, not a generic template.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-brand p-5 text-brand-foreground">
            <p className="text-xs uppercase tracking-[0.24em] text-white/70">Contact</p>
            <p className="mt-2 text-lg font-semibold">{siteConfig.email}</p>
            <p className="text-sm text-white/75">{siteConfig.phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
