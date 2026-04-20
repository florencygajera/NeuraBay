import FadeIn from '@/components/animations/FadeIn'
import Section from '@/components/ui/Section'

const steps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We align on goals, users, constraints, and the technical shape of the project before any execution starts.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We turn the strategy into a polished interface system, content structure, and clear conversion paths.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We ship in small, visible increments with clean engineering, QA discipline, and regular stakeholder check-ins.',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'We harden the product, measure the launch, and leave behind an architecture that can grow without friction.',
  },
]

export default function ProcessSection() {
  return (
    <Section
      eyebrow="Delivery approach"
      subtitle="A premium result is not just a nicer interface. It comes from a process that keeps decisions clear and execution calm."
      title="The NeuraBay process is simple, visible, and accountable."
    >
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {steps.map((item, index) => (
          <FadeIn delay={index * 0.05} key={item.step}>
            <article className="surface-card h-full p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
