"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "./language-provider"
import { translations } from "@/lib/translations"
import { Send, User, Mail, MessageSquare, Package } from "lucide-react"

export function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [hasPrefilledData, setHasPrefilledData] = useState(false)

  // Pre-fill form data from URL parameters
  useEffect(() => {
    if (!hasPrefilledData && searchParams) {
      const subject = searchParams.get("subject")
      const product = searchParams.get("product")

      if (subject || product) {
        setFormData((prev) => ({
          ...prev,
          subject: subject || prev.subject,
          message: product
            ? language === "fr"
              ? `Je souhaite obtenir un devis pour : ${product}`
              : language === "en"
                ? `I would like to get a quote for: ${product}`
                : `أرغب في الحصول على عرض أسعار لـ: ${product}`
            : prev.message,
        }))
        setHasPrefilledData(true)
      }
    }
  }, [searchParams, language, hasPrefilledData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setHasPrefilledData(false)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mb-6">
        <h2 className="text-2xl font-playfair font-bold mb-2 text-bdf-darkgold">{t.contact.form_title}</h2>
        <p className="text-gray-600 dark:text-gray-300">
          {language === "fr" && "Remplissez le formulaire ci-dessous et nous vous répondrons rapidement."}
          {language === "en" && "Fill out the form below and we will get back to you quickly."}
          {language === "ar" && "املأ النموذج أدناه وسنعاود الاتصال بك بسرعة."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="inline h-4 w-4 mr-2" />
              {t.contact.name}
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full"
              placeholder={
                language === "fr" ? "Votre nom complet" : language === "en" ? "Your full name" : "اسمك الكامل"
              }
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail className="inline h-4 w-4 mr-2" />
              {t.contact.email}
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full"
              placeholder={
                language === "fr"
                  ? "votre.email@exemple.com"
                  : language === "en"
                    ? "your.email@example.com"
                    : "your.email@example.com"
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Package className="inline h-4 w-4 mr-2" />
            {t.contact.subject}
          </label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full"
            placeholder={
              language === "fr"
                ? "Sujet de votre message"
                : language === "en"
                  ? "Subject of your message"
                  : "موضوع رسالتك"
            }
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <MessageSquare className="inline h-4 w-4 mr-2" />
            {t.contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-bdf-gold focus:border-bdf-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder={
              language === "fr"
                ? "Décrivez votre demande en détail..."
                : language === "en"
                  ? "Describe your request in detail..."
                  : "اوصف طلبك بالتفصيل..."
            }
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-bdf-gold hover:bg-bdf-darkgold text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              {language === "fr" && "Envoi en cours..."}
              {language === "en" && "Sending..."}
              {language === "ar" && "جاري الإرسال..."}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              {t.contact.send}
            </>
          )}
        </Button>

        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
            {language === "fr" && "Votre message a été envoyé avec succès ! Nous vous répondrons bientôt."}
            {language === "en" && "Your message has been sent successfully! We will get back to you soon."}
            {language === "ar" && "تم إرسال رسالتك بنجاح! سنعاود الاتصال بك قريباً."}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
            {language === "fr" && "Une erreur s'est produite. Veuillez réessayer."}
            {language === "en" && "An error occurred. Please try again."}
            {language === "ar" && "حدث خطأ. يرجى المحاولة مرة أخرى."}
          </div>
        )}
      </form>
    </div>
  )
}
