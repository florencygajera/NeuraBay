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
    <Section className="pt-4" contentClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <FadeIn delay={index * 0.04} key={item.label}>
          <article className="surface-card p-6">
            <p className="text-3xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </article>
        </FadeIn>
      ))}
    </Section>
  )
}
