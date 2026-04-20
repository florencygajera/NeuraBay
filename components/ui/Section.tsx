import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  eyebrow?: string
  className?: string
  contentClassName?: string
}

export default function Section({
  children,
  title,
  subtitle,
  eyebrow,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section className={cn('py-14 sm:py-18', className)}>
      {(eyebrow || title || subtitle) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          {title ? <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2> : null}
          {subtitle ? <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p> : null}
        </div>
      )}
      <div className={cn(contentClassName)}>{children}</div>
    </section>
  )
}
