'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function ServicesError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="surface-card my-10 p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Couldn&apos;t load services right now</h2>
      <p className="mt-3 text-sm text-slate-600">Please retry in a moment. If this persists, contact support.</p>
      <Button className="mt-6" onClick={reset} type="button">
        Try Again
      </Button>
    </div>
  )
}
