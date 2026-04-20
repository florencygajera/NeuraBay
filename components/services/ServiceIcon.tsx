import type { ComponentType } from 'react'
import {
  BrainCircuit,
  CloudCog,
  FileCode2,
  Globe,
  LineChart,
  Palette,
  Rocket,
  ShoppingCart,
  Smartphone,
  ShieldCheck,
  Workflow,
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
  BrainCircuit,
  CloudCog,
  Rocket,
  ShieldCheck,
  Workflow,
  FileCode2,
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
