"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"

const CTASection = () => {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  return (
    <section className="py-16 bg-bdf-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            {getTranslation(language, "ctaTitle")}
          </h2>
          <p className="text-white/90 mb-8 text-lg">{getTranslation(language, "ctaDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-bdf-gold hover:bg-white/90 hover:text-bdf-darkgold">
              <Link href={`/${language === "en" ? "" : language + "/"}products`} className="flex items-center">
                {getTranslation(language, "exploreProducts")}
                <ArrowRight className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-bdf-gold bg-transparent"
            >
              <Link href={`/${language === "en" ? "" : language + "/"}contact`} className="flex items-center">
                {getTranslation(language, "contactUs")}
                <ArrowRight className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
