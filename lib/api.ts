import { sleep } from '@/lib/utils'

export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message)
    this.name = 'APIError'
  }
}

interface RequestConfig {
  retries?: number
  retryDelay?: number
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || ''

async function request<T>(
  path: string,
  init?: RequestInit & { next?: { revalidate?: number; tags?: string[] } },
  config: RequestConfig = {},
): Promise<T> {
  const retries = config.retries ?? 1
  const retryDelay = config.retryDelay ?? 450

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(`${API_BASE_URL}${path}`, {
        ...init,
        headers: {
          'Content-Type': 'application/json',
          ...(init?.headers ?? {}),
        },
      })

      if (!response.ok) {
        throw new APIError(`Request failed (${response.status})`, response.status)
      }

      return (await response.json()) as T
    } catch (error) {
      if (attempt === retries) {
        throw error
      }

      await sleep(retryDelay * (attempt + 1))
    }
  }

  throw new APIError('Unexpected API error')
}

export const apiClient = {
  request,
}

