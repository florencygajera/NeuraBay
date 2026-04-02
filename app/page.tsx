import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ChatWidgetClient from '@/components/chat/ChatWidgetClient'

const ServicesPreview = dynamic(() => import('@/components/sections/ServicesPreview'))

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
      <ChatWidgetClient />
    </>
  )
}
