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
      subtitle="From product strategy to production delivery, we partner with teams that need reliable velocity."
      title="What We Build"
    >
      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-7">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
          href="/services"
        >
          View all services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
