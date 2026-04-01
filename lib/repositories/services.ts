import { cache } from 'react'
import servicesData from '@/data/services.json'
import { apiClient } from '@/lib/api'
import { Service } from '@/types/service'

export const getServices = cache(async (): Promise<Service[]> => {
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
