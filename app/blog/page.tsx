import { Metadata } from 'next'
import PlaceholderPage from '@/components/sections/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on product engineering, UX strategy, and AI integration from NeuraBay.',
}

export default function BlogPage() {
  return (
    <PlaceholderPage
      description="Our editorial team shares practical guides, implementation notes, and lessons learned from shipping production software."
      title="NeuraBay Insights"
    />
  )
}
