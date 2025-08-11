"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"

interface BreadcrumbsProps {
  homeLabel?: string
  items?: { label: string; href: string }[]
}

export function Breadcrumbs({ homeLabel, items }: BreadcrumbsProps) {
  const pathname = usePathname()
  const { language } = useLanguage()
  const isRTL = language === "ar"

  // If no items are provided, generate them from the pathname
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname, language)

  return (
    <nav className="py-4 px-4" aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center text-sm text-gray-500 ${isRTL ? "flex-row-reverse" : ""}`}>
        <li className="flex items-center">
          <Link href={`/${language === "en" ? "" : language}`} className="hover:text-bdf-gold transition-colors">
            {homeLabel || getTranslation(language, "home")}
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className={`mx-2 h-4 w-4 text-gray-400 ${isRTL ? "rotate-180" : ""}`} />
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-bdf-darkgold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-bdf-gold transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Helper function to generate breadcrumbs from the current path
function generateBreadcrumbsFromPath(pathname: string, language: string) {
  const segments = pathname.split("/").filter(Boolean)
  const items = []

  // Skip language segment if present
  const startIndex = ["en", "fr", "ar"].includes(segments[0]) ? 1 : 0

  for (let i = startIndex; i < segments.length; i++) {
    const segment = segments[i]
    const href = `/${segments.slice(0, i + 1).join("/")}`

    // Convert segment to label (capitalize first letter)
    let label = segment.charAt(0).toUpperCase() + segment.slice(1)

    // Try to get translation if available
    if (segment === "about") {
      label = getTranslation(language, "about")
    } else if (segment === "products") {
      label = getTranslation(language, "products")
    } else if (segment === "pastries") {
      label = getTranslation(language, "pastries")
    } else if (segment === "contact") {
      label = getTranslation(language, "contact")
    }

    items.push({ label, href })
  }

  return items
}
