import { Skeleton } from "./ui/skeleton";

export default function PreviewCardSkeleton() {

  return (
    <div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
      <div className="flex items-center gap-2 order-2 md:order-none">
        <div className="flex items-center justify-center rounded-md h-14 w-16 bg-muted">
          <Skeleton />
        </div>
        <div className="flex flex-col h-full justify-between">
          <Skeleton className="h-4 w-24 mb-4 rounded-xs" />
          <Skeleton className="h-2 w-20 rounded-xs" />
        </div>
      </div>
      <div className="order-1 md:order-none md:col-span-2">
        <Skeleton className="h-8 w-full rounded-xs" />
      </div>
      <div className="order-3 md:order-none inline-flex items-center shrink-0 justify-center sm:justify-end">
        <Skeleton className="h-8 w-35 rounded-sm" />
      </div>
    </div>
  )
}