"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"

const ExhibitionsSection = () => {
  const { language } = useLanguage()

  const exhibitions = [
    {
      id: 1,
      name: {
        en: "SIAL Paris",
        fr: "SIAL Paris",
        ar: "سيال باريس",
      },
      date: {
        en: "October 19-23, 2024",
        fr: "19-23 Octobre 2024",
        ar: "١٩-٢٣ أكتوبر ٢٠٢٤",
      },
      location: {
        en: "Paris, France",
        fr: "Paris, France",
        ar: "باريس، فرنسا",
      },
      image: "images/hero-dates-1.jpg",
    },
    {
      id: 2,
      name: {
        en: "Gulfood Dubai",
        fr: "Gulfood Dubaï",
        ar: "جلفود دبي",
      },
      date: {
        en: "February 10-14, 2025",
        fr: "10-14 Février 2025",
        ar: "١٠-١٤ فبراير ٢٠٢٥",
      },
      location: {
        en: "Dubai, UAE",
        fr: "Dubaï, EAU",
        ar: "دبي، الإمارات العربية المتحدة",
      },
      image: "images/hero-dates-2.jpg",
    },
    {
      id: 3,
      name: {
        en: "Anuga Cologne",
        fr: "Anuga Cologne",
        ar: "أنوجا كولون",
      },
      date: {
        en: "October 4-8, 2025",
        fr: "4-8 Octobre 2025",
        ar: "٤-٨ أكتوبر ٢٠٢٥",
      },
      location: {
        en: "Cologne, Germany",
        fr: "Cologne, Allemagne",
        ar: "كولون، ألمانيا",
      },
      image: "images/hero-dates-3.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-serif">
            {getTranslation(language, "findUsAt")}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{getTranslation(language, "findUsAtDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exhibitions.map((exhibition) => (
            <Card key={exhibition.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48 w-full">
                <Image
                  src={exhibition.image || "/placeholder.svg"}
                  alt={exhibition.name[language]}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-3 text-bdf-darkgold">{exhibition.name[language]}</h3>
                <div className="flex items-center mb-2">
                  <CalendarDays className="h-4 w-4 text-bdf-gold mr-2" />
                  <span className="text-sm text-gray-600">{exhibition.date[language]}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-bdf-gold mr-2" />
                  <span className="text-sm text-gray-600">{exhibition.location[language]}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExhibitionsSection
