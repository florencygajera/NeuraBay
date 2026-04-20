import { cache } from 'react'
import servicesData from '@/data/services.json'
import { apiClient } from '@/lib/api'
import { Service } from '@/types/service'

export const getServices = cache(async (): Promise<Service[]> => {
  // When no backend URL is configured, use the local dataset directly.
  // This avoids a same-route fetch during SSR that can slow or stall page compilation.
  if (!process.env.NEXT_PUBLIC_API_URL && !process.env.API_URL) {
    return servicesData as Service[]
  }

  try {
    return await apiClient.request<Service[]>('/services', {
      method: 'GET',
      next: {
        revalidate: 300,
        tags: ['services'],
      },
    })
  } catch {
    return servicesData as Service[]
  }
})
