import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface PlaceholderPageProps {
  title: string
  description: string
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="py-12">
      <div className="surface-card max-w-3xl p-8 sm:p-10">
        <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
        <p className="mt-4 text-base text-slate-600">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact">
            <Button>Talk to Our Team</Button>
          </Link>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700" href="/services">
            Explore services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
