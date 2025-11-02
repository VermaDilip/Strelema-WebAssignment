export default function TableSkeleton() {
  return (
    <div className="rounded-[10px] border border-gray-500/20 p-5">
      {/* Table Header Skeleton */}
      <div className="mb-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
      </div>

      {/* Table Rows Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-6 flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
        <div className="flex space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
      </div>
    </div>
  );
}