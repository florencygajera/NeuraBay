import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'

export default function HeroSection() {
  return (
    <section className="grid gap-10 pb-8 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <FadeIn>
        <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
          Product Engineering for Fast-Growth Teams
        </p>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build Intelligent Digital Products With Speed and Confidence.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          NeuraBay helps teams ship modern SaaS experiences across web, mobile, and AI workflows with battle-tested
          architecture and premium UX.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact">
            <Button size="lg">Book a Free Strategy Call</Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="surface-card overflow-hidden p-3">
          <Image
            alt="NeuraBay team planning a product roadmap"
            className="h-auto w-full rounded-xl object-cover"
            height={950}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            width={1200}
          />
        </div>
      </FadeIn>
    </section>
  )
}
