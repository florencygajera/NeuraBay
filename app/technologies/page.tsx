import { Metadata } from 'next'
import PlaceholderPage from '@/components/sections/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Technologies',
  description: 'Technology stack and engineering capabilities used by NeuraBay.',
}

export default function TechnologiesPage() {
  return (
    <PlaceholderPage
      description="We build with modern, maintainable stacks including Next.js, TypeScript, cloud-native APIs, and AI-ready architectures."
      title="Technology Expertise"
    />
  )
}
