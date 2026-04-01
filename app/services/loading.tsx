import { Skeleton } from '@/components/ui/Skeleton'

export default function ServicesLoading() {
  return (
    <div className="space-y-6 py-8">
      <Skeleton className="h-10 w-52" />
      <Skeleton className="h-4 w-2/3" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton className="h-72" key={index} />
        ))}
      </div>
    </div>
  )
}
