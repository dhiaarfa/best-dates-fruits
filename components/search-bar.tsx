"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { language } = useLanguage()
  const router = useRouter()

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
        setQuery("")
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsSearching(true)

    // Navigate to search page with query
    const searchPath = `/${language === "fr" ? "" : language + "/"}search?q=${encodeURIComponent(query.trim())}`
    router.push(searchPath)

    setIsSearching(false)
    setIsOpen(false)
    setQuery("")
  }

  const toggleSearch = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setQuery("")
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleSearch}
        className="rounded-2xl hover:bg-bdf-gold/10 transition-all duration-200 transform hover:scale-105"
        aria-label={getTranslation(language, "common.search_placeholder")}
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Search Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 w-full max-w-2xl mx-4 animate-fade-in">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <Input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={getTranslation(language, "common.search_placeholder")}
                  className="w-full pl-12 pr-12 py-4 text-lg rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-bdf-gold focus:ring-2 focus:ring-bdf-gold/20 transition-all duration-200"
                  disabled={isSearching}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                {query && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{getTranslation(language, "common.search_placeholder")}</p>
                <div className="flex space-x-2">
                  <Button type="button" variant="outline" onClick={toggleSearch} className="rounded-2xl bg-transparent">
                    {language === "fr" ? "Annuler" : language === "en" ? "Cancel" : "إلغاء"}
                  </Button>
                  <Button
                    type="submit"
                    disabled={!query.trim() || isSearching}
                    className="bg-bdf-gold text-black hover:bg-bdf-darkgold rounded-2xl transition-all duration-200"
                  >
                    {isSearching ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                    ) : (
                      <Search className="h-4 w-4 mr-2" />
                    )}
                    {isSearching
                      ? language === "fr"
                        ? "Recherche..."
                        : language === "en"
                          ? "Searching..."
                          : "جاري البحث..."
                      : language === "fr"
                        ? "Rechercher"
                        : language === "en"
                          ? "Search"
                          : "بحث"}
                  </Button>
                </div>
              </div>
            </form>

            {/* Quick suggestions */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 mb-3">
                {language === "fr" ? "Suggestions:" : language === "en" ? "Suggestions:" : "اقتراحات:"}
              </p>
              <div className="flex flex-wrap gap-2">
                {["Deglet Nour", "Dattes", "Pâtisseries", "Sirop"].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="rounded-full text-xs hover:bg-bdf-gold/10 hover:border-bdf-gold transition-all duration-200"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
