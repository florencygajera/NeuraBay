import { Metadata } from 'next'
import PlaceholderPage from '@/components/sections/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Career',
  description: 'Explore open positions and growth opportunities at NeuraBay.',
}

export default function CareerPage() {
  return (
    <PlaceholderPage
      description="Join a team that values technical depth, ownership, and strong product thinking. We are always looking for builders."
      title="Build Your Career at NeuraBay"
    />
  )
}
