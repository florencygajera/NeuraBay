import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  contentClassName?: string
}

export default function Section({
  children,
  title,
  subtitle,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section className={cn('py-12 sm:py-16', className)}>
      {(title || subtitle) && (
        <div className="mb-8 max-w-3xl">
          {title ? <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2> : null}
          {subtitle ? <p className="mt-3 text-base text-slate-600 sm:text-lg">{subtitle}</p> : null}
        </div>
      )}
      <div className={cn(contentClassName)}>{children}</div>
    </section>
  )
}
