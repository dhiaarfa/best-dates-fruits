import { Card, CardContent } from "@/components/ui/card"

export default function FruitsLoading() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header Skeleton */}
      <div className="pt-24 pb-16">
        <div className="relative h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="h-12 bg-white/20 rounded-lg w-64 mx-auto animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded-lg w-96 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Breadcrumbs Skeleton */}
          <div className="py-4">
            <div className="flex items-center space-x-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
            </div>
          </div>

          {/* Filters Skeleton */}
          <div className="py-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded-full w-24 animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Products Grid Skeleton */}
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  {/* Image Skeleton */}
                  <div className="aspect-square bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse"></div>

                  <CardContent className="p-6 space-y-4">
                    {/* Category Badge Skeleton */}
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20 animate-pulse"></div>

                    {/* Title Skeleton */}
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>

                    {/* Description Skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
                    </div>

                    {/* Price and Button Skeleton */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="space-y-1">
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
                      </div>
                      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-2xl w-24 animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section Skeleton */}
          <div className="py-12">
            <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg p-8 text-center animate-pulse">
              <div className="space-y-4">
                <div className="h-8 bg-white/20 rounded w-64 mx-auto animate-pulse"></div>
                <div className="h-6 bg-white/20 rounded w-96 mx-auto animate-pulse"></div>
                <div className="h-12 bg-white/20 rounded-lg w-40 mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
