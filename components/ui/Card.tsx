import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
}

interface CardHeaderProps {
  title: string
  description?: string
  className?: string
}

export function Card({ children, className }: CardProps) {
  return <article className={cn('surface-card p-6 sm:p-7', className)}>{children}</article>
}

export function CardHeader({ title, description, className }: CardHeaderProps) {
  return (
    <header className={cn('mb-4', className)}>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
    </header>
  )
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('text-slate-700', className)}>{children}</div>
}
