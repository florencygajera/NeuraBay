import FadeIn from '@/components/animations/FadeIn'
import Section from '@/components/ui/Section'

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Avg. Launch Time Reduced', value: '38%' },
  { label: 'Client Retention', value: '95%' },
  { label: 'Senior Specialists', value: '40+' },
]

export default function StatsSection() {
  return (
    <Section
      eyebrow="Why teams choose NeuraBay"
      className="pt-4"
      contentClassName="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
      subtitle="We combine studio-level polish with disciplined engineering so the product feels premium, the team stays aligned, and delivery keeps moving."
      title="Made for serious product teams."
    >
      <FadeIn>
        <div className="section-shell h-full p-6 sm:p-8">
          <div className="space-y-4">
            {[
              'Calm communication, transparent milestones, and direct access to the people doing the work.',
              'Interfaces designed with restraint, clarity, and strong hierarchy so users know exactly where to go.',
              'Architecture that supports launch speed today and clean iteration later.',
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((item, index) => (
          <FadeIn delay={index * 0.05} key={item.label}>
            <article className="metric-chip h-full p-5">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
