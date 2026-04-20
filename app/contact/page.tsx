import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { siteConfig } from '@/lib/site-config'

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  loading: () => <div className="surface-card h-[520px] animate-pulse" />,
})

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell NeuraBay about your product goals and get a practical delivery plan.',
}

export default function ContactPage() {
  return (
    <Section
      eyebrow="Let’s talk"
      subtitle="Share your goals, timeline, and constraints. We will reply with a practical plan within 1 business day."
      title="Start a thoughtful conversation about your next product."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <aside className="section-shell space-y-6 p-6 sm:p-8">
          <div>
            <p className="eyebrow">What we offer</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Thoughtful delivery, not generic agency output.</h3>
          </div>
          <div className="space-y-4">
            {[
              'Senior-led product squads aligned to outcomes, not just tasks.',
              'Transparent delivery workflow with weekly milestones.',
              'Architecture built for speed now and scale later.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-brand p-5 text-brand-foreground">
            <p className="text-xs uppercase tracking-[0.22em] text-white/70">Direct contact</p>
            <p className="mt-2 text-lg font-semibold">{siteConfig.email}</p>
            <p className="text-sm text-white/75">{siteConfig.phone}</p>
          </div>
        </aside>

        <ContactForm />
      </div>
    </Section>
  )
}
