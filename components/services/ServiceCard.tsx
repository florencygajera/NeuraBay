import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Service } from '@/types/service'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { ServiceIcon } from '@/components/services/ServiceIcon'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-4 inline-flex rounded-xl bg-sky-100 p-3 text-sky-700">
        <ServiceIcon className="h-5 w-5" icon={service.icon} />
      </div>
      <CardHeader title={service.title} />
      <CardContent>
        <p className="mb-5 text-sm leading-relaxed text-slate-600">{service.description}</p>
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
          href="/contact"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
