"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function CookieConsent() {
  const { language } = useLanguage()
  const isRTL = language === "ar"
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookieConsent") === "accepted"
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 transition-transform duration-500 transform-gpu">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4" dir={isRTL ? "rtl" : "ltr"}>
          <div className="text-sm text-gray-700 md:pr-8">
            {language === "en" ? (
              <p>
                We use cookies to enhance your experience on our website. By continuing to browse, you agree to our{" "}
                <a href="/privacy-policy" className="text-bdf-gold hover:text-bdf-darkgold underline">
                  Privacy Policy
                </a>
                .
              </p>
            ) : language === "fr" ? (
              <p>
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer,
                vous acceptez notre{" "}
                <a href="/privacy-policy" className="text-bdf-gold hover:text-bdf-darkgold underline">
                  Politique de Confidentialité
                </a>
                .
              </p>
            ) : (
              <p>
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. من خلال متابعة التصفح، فإنك توافق على{" "}
                <a href="/privacy-policy" className="text-bdf-gold hover:text-bdf-darkgold underline">
                  سياسة الخصوصية
                </a>
                الخاصة بنا.
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="border-bdf-gold text-bdf-gold hover:bg-bdf-gold hover:text-white bg-transparent"
              onClick={acceptCookies}
            >
              {language === "en" ? "Accept" : language === "fr" ? "Accepter" : "قبول"}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700" onClick={acceptCookies}>
              {language === "en" ? "Decline" : language === "fr" ? "Refuser" : "رفض"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
