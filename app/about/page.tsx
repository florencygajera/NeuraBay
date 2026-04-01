import { Metadata } from 'next'
import PlaceholderPage from '@/components/sections/PlaceholderPage'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the NeuraBay team and delivery philosophy.',
}

export default function AboutPage() {
  return (
    <PlaceholderPage
      description="We are a multidisciplinary product studio helping teams launch and scale digital products without sacrificing quality."
      title="About NeuraBay"
    />
  )
}
