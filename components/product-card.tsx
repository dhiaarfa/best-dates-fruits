"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

interface ProductCardProps {
  product: {
    id: number | string
    name: string
    description: string
    image: string
    category?: string
    price?: string
    inStock?: boolean
    isNew?: boolean
    isFeatured?: boolean
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage()
  const [imageLoaded, setImageLoaded] = useState(false)

  // Parse packaging information from description
  const parsePackaging = (description: string) => {
    const lines = description.split('\n')
    const packagingIndex = lines.findIndex(line => 
      line.toLowerCase().includes('emballage') || 
      line.toLowerCase().includes('packaging') || 
      line.toLowerCase().includes('التعبئة')
    )
    
    if (packagingIndex !== -1) {
      const packagingLines = lines.slice(packagingIndex + 1)
      return packagingLines.filter(line => line.trim() !== '')
    }
    return []
  }

  const packagingInfo = parsePackaging(product.description)
  const descriptionWithoutPackaging = product.description.split('\n\nEmballage')[0].split('\n\nPackaging')[0].split('\n\nالتعبئة')[0]

  const handleRequestQuote = () => {
    const subject = encodeURIComponent(
      language === "fr"
        ? `Demande de devis - ${product.name}`
        : language === "en"
          ? `Quote Request - ${product.name}`
          : `طلب عرض سعر - ${product.name}`,
    )
    const body = encodeURIComponent(
      language === "fr"
        ? `Bonjour, je souhaiterais obtenir des informations détaillées et un devis pour le produit suivant : ${product.name}.\n\nMerci de me contacter avec vos meilleures conditions.`
        : language === "en"
          ? `Hello, I would like to get detailed information and a quote for the following product: ${product.name}.\n\nPlease contact me with your best terms.`
          : `مرحباً، أود الحصول على معلومات مفصلة وعرض سعر للمنتج التالي: ${product.name}.\n\nيرجى التواصل معي بأفضل شروطكم.`,
    )
    window.location.href = `/contact?subject=${subject}&message=${body}`
  }

  return (
    <Card className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-green-500 text-white">
              {language === "fr" ? "Nouveau" : language === "en" ? "New" : "جديد"}
            </Badge>
          )}
          {product.inStock === false && (
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
              {language === "fr" ? "Bientôt disponible" : language === "en" ? "Coming Soon" : "قريباً"}
            </Badge>
          )}
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        {product.category && (
          <div className="mb-3">
            <Badge
              variant="outline"
              className="text-xs bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800"
            >
              {product.category}
            </Badge>
          </div>
        )}

        {/* Title */}
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors font-playfair line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <div className="flex-1 mb-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-inter">{descriptionWithoutPackaging}</p>

          {packagingInfo.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{language === "fr" ? "Emballage" : language === "en" ? "Packaging" : "التعبئة"}:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                {packagingInfo.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Price */}
        {product.price && (
          <div className="mb-4">
            <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {product.price}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-center pt-4 border-t border-gray-100 dark:border-gray-700">
          <Button
            onClick={handleRequestQuote}
            size="sm"
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl px-6 py-2 font-medium transition-all duration-200 hover:scale-105 font-inter w-full"
          >
            {language === "fr" ? "Demander un devis" : language === "en" ? "Request quote" : "طلب عرض سعر"}
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
