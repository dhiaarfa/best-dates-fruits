"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function FruitsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const fruitImages = [
    "/images/fresh-peaches-display.jpeg",
    "/images/ramy-pomegranate.jpeg",
    "/images/strawberry-field.jpeg",
    "/images/prickly-pear-crates.jpeg",
    "/images/prickly-pear-peeling.jpeg",
    "/images/melon-market.jpeg",
    "/images/strawberries-packaged.jpeg",
    "/images/pomegranates-fresh.jpeg",
    "/images/peaches-display.jpeg",
    "/images/peaches-hand-quality.jpeg",
    "/images/strawberry-single.jpeg",
    "/images/apples-bulk.jpeg",
    "/images/red-apples-crate.jpeg",
    "/images/apples-pyramid-display.jpeg",
    "/images/dates-palm-branches.jpeg",
    "/images/flat-peaches-crate.jpeg",
    "/images/single-watermelon.jpeg",
    "/images/strawberries-field-flowers.jpeg",
    "/images/prickly-pear-colorful.jpeg",
    "/images/apples-crates-storage.jpeg",
    "/images/strawberry-field-harvest.jpeg",
    "/images/cantaloupe-field.jpeg",
    "/images/prickly-pear-variety.jpeg"
  ]

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({})

  const handleImageLoad = (src: string) => {
    setImageLoadStates(prev => ({ ...prev, [src]: true }))
  }

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : fruitImages.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(fruitImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex < fruitImages.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(fruitImages[newIndex])
  }

  const handleRequestQuote = () => {
    const subject = encodeURIComponent(
      language === "fr"
        ? "Demande de devis - Fruits frais"
        : language === "en"
          ? "Quote Request - Fresh Fruits"
          : "طلب عرض سعر - فواكه طازجة",
    )
    const body = encodeURIComponent(
      language === "fr"
        ? "Bonjour, je souhaiterais obtenir des informations détaillées et un devis pour vos fruits frais.\n\nMerci de me contacter avec vos meilleures conditions."
        : language === "en"
          ? "Hello, I would like to get detailed information and a quote for your fresh fruits.\n\nPlease contact me with your best terms."
          : "مرحباً، أود الحصول على معلومات مفصلة وعرض سعر للفواكه الطازجة الخاصة بكم.\n\nيرجى التواصل معي بأفضل شروطكم.",
    )
    window.location.href = `/contact?subject=${subject}&message=${body}`
  }

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <Breadcrumbs
          items={[
            { label: t.nav.home, href: "/" },
            { label: t.nav.fruits, href: "/fruits" },
          ]}
        />

        <PageHeader
          title={t.nav.fruits}
          description={
            language === "fr"
              ? "Découvrez notre sélection de fruits frais de saison"
              : language === "en"
              ? "Discover our selection of fresh seasonal fruits"
              : "اكتشف مجموعتنا من الفواكه الطازجة الموسمية"
          }
          backgroundImage="/images/deglet-nour-dates.jpeg"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir={isRTL ? "rtl" : "ltr"}>
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
              {language === "fr" ? "Fruits de qualité premium" : language === "en" ? "Premium quality fruits" : "فواكه عالية الجودة"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "fr"
                ? "Notre sélection de fruits frais provient directement de nos producteurs partenaires. Chaque fruit est soigneusement choisi pour sa fraîcheur, sa saveur et sa qualité nutritionnelle exceptionnelle."
                : language === "en"
                  ? "Our selection of fresh fruits comes directly from our partner producers. Each fruit is carefully chosen for its freshness, flavor and exceptional nutritional quality."
                  : "تأتي مجموعتنا من الفواكه الطازجة مباشرة من منتجينا الشركاء. كل فاكهة مختارة بعناية لنضارتها ونكهتها وجودتها الغذائية الاستثنائية."}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {fruitImages.map((src, index) => (
              <div
                key={src}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openLightbox(src, index)}
              >
                {!imageLoadStates[src] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
                )}
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`${language === "fr" ? "Fruit" : language === "en" ? "Fruit" : "فاكهة"} ${index + 1}`}
                  fill
                  className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                    imageLoadStates[src] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(src)}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 8}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8">
            <h2 className="text-3xl font-playfair font-bold mb-4 text-amber-700 dark:text-amber-400">
              {language === "fr" ? "Approvisionnement saisonnier" : language === "en" ? "Seasonal sourcing" : "التوريد الموسمي"}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {language === "fr"
                ? "Nous proposons un approvisionnement régulier en fruits de saison pour les professionnels de la restauration et de la distribution."
                : language === "en"
                  ? "We offer regular supply of seasonal fruits for catering and distribution professionals."
                  : "نقدم إمداداً منتظماً من الفواكه الموسمية لمحترفي المطاعم والتوزيع."}
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
              onClick={handleRequestQuote}
            >
              {language === "fr" ? "Demander un partenariat" : language === "en" ? "Request partnership" : "طلب شراكة"}
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={`${language === "fr" ? "Fruit" : language === "en" ? "Fruit" : "فاكهة"} ${currentIndex + 1}`}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-center mt-4 text-white">
              <p className="text-sm opacity-75">
                {currentIndex + 1} / {fruitImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
