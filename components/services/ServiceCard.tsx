import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Service } from '@/types/service'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { ServiceIcon } from '@/components/services/ServiceIcon'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
      <div className="mb-5 inline-flex rounded-2xl bg-brand/5 p-3 text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
        <ServiceIcon className="h-5 w-5" icon={service.icon} />
      </div>
      <CardHeader title={service.title} />
      <CardContent>
        <p className="mb-6 text-sm leading-7 text-slate-600">{service.description}</p>
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-600"
          href="/contact"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
