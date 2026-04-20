import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { getServices } from '@/lib/repositories/services'
import ServiceCard from '@/components/services/ServiceCard'
import { StaggerGroup, StaggerItem } from '@/components/animations/StaggerGroup'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore NeuraBay service offerings across product design, engineering, and growth.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <Section
      eyebrow="Capabilities"
      subtitle="Flexible engagement models for startup, scale-up, and enterprise product teams."
      title="A focused menu of services that feels polished and specific."
    >
      <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  )
}
