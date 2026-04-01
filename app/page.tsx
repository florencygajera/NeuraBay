import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'

const ServicesPreview = dynamic(() => import('@/components/sections/ServicesPreview'))
const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), { ssr: false })

export const metadata: Metadata = {
  title: 'Home',
  description:
    'NeuraBay delivers premium digital products with modern web, mobile, and AI engineering services.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <ChatWidget />
    </>
  )
}
