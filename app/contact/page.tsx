"use client"

import { Suspense } from "react"
import Navbar from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { LocationSection } from "@/components/location-section"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

function ContactPageContent() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <Breadcrumbs
          items={[
            { label: t.nav.home, href: "/" },
            { label: t.nav.contact, href: "/contact" },
          ]}
        />

        <PageHeader
          title={t.nav.contact}
          description={
            language === "fr"
              ? "Contactez-nous pour toute demande d'information ou de devis"
              : language === "en"
              ? "Contact us for any information request or quote"
              : "اتصل بنا لأي طلب معلومات أو عرض سعر"
          }
          backgroundImage="/images/production-facility.jpg"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir={isRTL ? "rtl" : "ltr"}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900 dark:text-white">
                  {language === "fr" ? "Informations de contact" : language === "en" ? "Contact Information" : "معلومات الاتصال"}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {language === "fr" ? "Adresse" : language === "en" ? "Address" : "العنوان"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {language === "fr" 
                          ? "Zone Industrielle, Tozeur, Tunisie"
                          : language === "en"
                          ? "Industrial Zone, Tozeur, Tunisia"
                          : "المنطقة الصناعية، توزر، تونس"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {language === "fr" ? "Téléphone" : language === "en" ? "Phone" : "الهاتف"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">+216 76 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {language === "fr" ? "Email Direction" : language === "en" ? "Management Email" : "البريد الإلكتروني للإدارة"}
                      </h3>
                      <p className="text-gray-300">direction@bestdatesandfruits.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {language === "fr" ? "Email Commercial" : language === "en" ? "Sales Email" : "البريد الإلكتروني التجاري"}
                      </h3>
                      <p className="text-gray-300">commercial@bestdatesandfruits.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {language === "fr" ? "Horaires" : language === "en" ? "Business Hours" : "ساعات العمل"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {language === "fr" 
                          ? "Lun - Ven: 8h00 - 17h00"
                          : language === "en"
                          ? "Mon - Fri: 8:00 AM - 5:00 PM"
                          : "الإثنين - الجمعة: 8:00 ص - 5:00 م"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6">
                <h3 className="font-semibold text-amber-800 dark:text-amber-400 mb-3">
                  {language === "fr" ? "Informations importantes" : language === "en" ? "Important Information" : "معلومات مهمة"}
                </h3>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>
                    {language === "fr" 
                      ? "• Réponse garantie sous 24h"
                      : language === "en"
                      ? "• Guaranteed response within 24h"
                      : "• رد مضمون خلال 24 ساعة"}
                  </li>
                  <li>
                    {language === "fr" 
                      ? "• Devis gratuit et personnalisé"
                      : language === "en"
                      ? "• Free and personalized quote"
                      : "• عرض سعر مجاني ومخصص"}
                  </li>
                  <li>
                    {language === "fr" 
                      ? "• Support multilingue disponible"
                      : language === "en"
                      ? "• Multilingual support available"
                      : "• دعم متعدد اللغات متاح"}
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-2xl h-96"></div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <LocationSection />
      </div>
    </main>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900"></div>}>
      <ContactPageContent />
    </Suspense>
  )
}
