import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  header?: string
  subheader?: string
}

export function Card({ children, className, header, subheader }: CardProps) {
  return (
    <div className={cn(
      'group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-blue-200',
      className
    )}>
      {header && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{header}</h3>
          {subheader && <p className="text-gray-600">{subheader}</p>}
        </div>
      )}
      {children}
    </div>
  )
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

