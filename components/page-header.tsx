"use client"

import { useLanguage } from "./language-provider"

interface PageHeaderProps {
  title: string
  description?: string
  backgroundImage?: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  return (
    <div className="relative py-24 bg-gradient-to-r from-bdf-gold to-bdf-darkgold overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir={isRTL ? "rtl" : "ltr"}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair drop-shadow-lg">{title}</h1>
        {description && (
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">{description}</p>
        )}
      </div>
    </div>
  )
}
