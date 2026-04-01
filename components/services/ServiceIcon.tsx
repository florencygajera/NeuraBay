import type { ComponentType } from 'react'
import {
  Globe,
  LineChart,
  Palette,
  ShoppingCart,
  Smartphone,
  Users,
  type LucideProps,
} from 'lucide-react'
import { Service } from '@/types/service'

const iconMap: Record<Service['icon'], ComponentType<LucideProps>> = {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  LineChart,
  Users,
}

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service['icon']
  className?: string
}) {
  const IconComponent = iconMap[icon]

  return <IconComponent className={className} />
}
