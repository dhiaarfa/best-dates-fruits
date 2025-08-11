"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function usePrefetch(paths: string[]) {
  const router = useRouter()

  useEffect(() => {
    // Prefetch all provided paths with a small delay to avoid blocking initial render
    const prefetchPaths = () => {
      paths.forEach((path, index) => {
        setTimeout(() => {
          router.prefetch(path)
        }, index * 100) // Stagger prefetching to avoid overwhelming the browser
      })
    }

    // Use requestIdleCallback if available, otherwise use setTimeout
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(prefetchPaths)
    } else {
      setTimeout(prefetchPaths, 1000)
    }
  }, [router, paths])
}
