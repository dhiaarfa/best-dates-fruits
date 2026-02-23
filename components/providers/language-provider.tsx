"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import type { Language } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr")
  const pathname = usePathname()

  useEffect(() => {
    // Detect language from URL path
    if (pathname.startsWith("/en")) {
      setLanguage("en")
    } else if (pathname.startsWith("/ar")) {
      setLanguage("ar")
    } else {
      setLanguage("fr")
    }
  }, [pathname])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
