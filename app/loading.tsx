import { Skeleton } from '@/components/ui/Skeleton'

export default function GlobalLoading() {
  return (
    <div className="space-y-8 py-10">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton className="h-56 w-full" key={index} />
        ))}
      </div>
    </div>
  )
}
