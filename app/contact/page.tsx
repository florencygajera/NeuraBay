import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Section from '@/components/ui/Section'

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
      subtitle="Share your goals, timeline, and constraints. We will reply with a practical plan within 1 business day."
      title="Let&apos;s Build Something Great"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <aside className="surface-card space-y-4 p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slate-900">Why Teams Work With NeuraBay</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>Senior-led product squads aligned to outcomes, not just tasks.</li>
            <li>Transparent delivery workflow with weekly milestones.</li>
            <li>Architecture built for speed now and scale later.</li>
          </ul>
        </aside>

        <ContactForm />
      </div>
    </Section>
  )
}
