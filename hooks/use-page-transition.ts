"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function usePageTransition() {
  const pathname = usePathname()

  useEffect(() => {
    // Add a class to the body when the page changes
    document.body.classList.add("page-transitioning")

    // Scroll to top on page change
    window.scrollTo(0, 0)

    // Remove the class after the transition is complete
    const timeout = setTimeout(() => {
      document.body.classList.remove("page-transitioning")
    }, 300)

    return () => clearTimeout(timeout)
  }, [pathname])
}
