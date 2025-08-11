"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"

const Newsletter = () => {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      // In a real application, you would make an API call to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError(
        language === "en"
          ? "Something went wrong. Please try again."
          : language === "fr"
            ? "Une erreur s'est produite. Veuillez réessayer."
            : "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gold-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-serif">
            {getTranslation(language, "newsletterTitle")}
          </h2>
          <p className="text-gray-700 mb-8">{getTranslation(language, "newsletterDesc")}</p>

          {isSuccess ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-md">
              {language === "en"
                ? "Thank you for subscribing to our newsletter!"
                : language === "fr"
                  ? "Merci de vous être abonné à notre newsletter !"
                  : "شكرا لاشتراكك في نشرتنا الإخبارية!"}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder={getTranslation(language, "emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-bdf-gold/30 focus:border-bdf-gold focus:ring-bdf-gold"
                  dir={language === "ar" ? "rtl" : "ltr"}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 bg-bdf-gold text-white hover:bg-bdf-darkgold"
              >
                {isSubmitting ? getTranslation(language, "subscribing") : getTranslation(language, "subscribe")}
              </Button>
            </form>
          )}

          {error && <div className="mt-4 text-red-600">{error}</div>}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
