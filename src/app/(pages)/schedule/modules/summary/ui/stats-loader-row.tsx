import { LoadingSkeleton } from "@/components/atoms"

export function StatsLoaderRow() {
  return (
    <div className="flex justify-between">
      <LoadingSkeleton className="mt-1 w-24 h-4" />
      <LoadingSkeleton className="mt-1 w-8 h-4" />
    </div>
  )
}
