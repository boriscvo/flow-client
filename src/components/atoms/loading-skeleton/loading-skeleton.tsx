import { LoadingSkeletonProps } from "./types"

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return <div className={`bg-muted/30 animate-pulse rounded ${className}`} />
}
