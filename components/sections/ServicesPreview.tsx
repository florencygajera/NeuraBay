import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getServices } from '@/lib/repositories/services'
import Section from '@/components/ui/Section'
import ServiceCard from '@/components/services/ServiceCard'
import { StaggerGroup, StaggerItem } from '@/components/animations/StaggerGroup'

export default async function ServicesPreview() {
  const services = await getServices()

  return (
    <Section
      eyebrow="Selected capabilities"
      subtitle="The site should feel premium, but it should also be specific. These are the service areas where NeuraBay can make the biggest difference."
      title="A concise service menu, built for credibility."
    >
      <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-8">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-600"
          href="/services"
        >
          View all services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
