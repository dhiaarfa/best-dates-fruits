import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add page transition utility
export function pageTransition(element: HTMLElement, done: () => void) {
  // Save the current scroll position
  const scrollY = window.scrollY

  // Add transition class
  element.classList.add("page-transition")

  // Animate out
  element.style.opacity = "0"
  element.style.transform = "translateY(10px)"

  // After animation completes
  setTimeout(() => {
    // Reset scroll position
    window.scrollTo(0, 0)

    // Remove transition class
    element.classList.remove("page-transition")

    // Reset styles for next page
    element.style.opacity = ""
    element.style.transform = ""

    // Complete transition
    done()
  }, 300)
}

// Add image optimization utility
export function getOptimizedImageSrc(src: string, width: number, quality = 75) {
  return `${src}?w=${width}&q=${quality}`
}

// Add debounce utility for performance optimization
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
  }
}

// Add throttle utility for performance optimization
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true

      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// Add preload images utility
export function preloadImages(sources: string[]): void {
  sources.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}
