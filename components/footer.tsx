"use client"

import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/paths"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]
  const isRTL = language === "ar"

  return (
    <footer className="bg-gray-900 text-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="bg-white/70 rounded px-0 py-0.5 shadow-sm">
                <Image
                  src={withBasePath("/images/new-bdf-logo.png")}
                  alt="Best Dates & Fruits - D&F Logo"
                  width={200}
                  height={70}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Ramis Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse mt-4">
              <Image
                src={withBasePath("/images/ramis logo.jpeg")}
                alt="Ramis Dattes & Fruits"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {language === "fr" &&
                "Spécialiste du conditionnement et de l'export des dattes tunisiennes premium depuis plus de 20 ans."}
              {language === "en" &&
                "Specialist in packaging and export of premium Tunisian dates for over 20 years."}
              {language === "ar" &&
                "متخصص في تعبئة وتصدير التمور التونسية الممتازة لأكثر من 20 عاماً."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-bdf-gold">
              {language === "fr" && "Liens Rapides"}
              {language === "en" && "Quick Links"}
              {language === "ar" && "روابط سريعة"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-bdf-gold transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-bdf-gold transition-colors text-sm">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/pastries" className="text-gray-300 hover:text-bdf-gold transition-colors text-sm">
                  {t.nav.pastries}
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="text-gray-300 hover:text-bdf-gold transition-colors text-sm">
                  {t.nav.ingredients}
                </Link>
              </li>
              <li>
                <Link href="/fruits" className="text-gray-300 hover:text-bdf-gold transition-colors text-sm">
                  {t.nav.fruits}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-bdf-gold transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-bdf-gold">
              {language === "fr" && "Contact"}
              {language === "en" && "Contact"}
              {language === "ar" && "اتصل بنا"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-bdf-gold mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Zone Industrielle Castilia</p>
                  <p>2200 Tozeur, Tunisie</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-bdf-gold flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+216 56 54 19 50</p>
                  <p>+216 58 16 86 41</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-bdf-gold flex-shrink-0" />
                <p className="text-sm text-gray-300">direction@bestdatesandfruits.com</p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-bdf-gold flex-shrink-0" />
                <p className="text-sm text-gray-300">commercial@bestdatesandfruits.com</p>
              </div>
            </div>
          </div>

          {/* Social Media & Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-bdf-gold">
              {language === "fr" && "Suivez-nous"}
              {language === "en" && "Follow Us"}
              {language === "ar" && "تابعنا"}
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://www.facebook.com/share/1F2YhjL74A/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-bdf-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/best_dattes_and_fruits?igsh=OWFxaDAzazUxdnE0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-bdf-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramzi-benabdallah-82727411b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-bdf-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>


            <div className="mt-6">
              <h4 className="text-sm font-semibold text-bdf-gold mb-2">
                {language === "fr" && "Certifications"}
                {language === "en" && "Certifications"}
                {language === "ar" && "الشهادات"}
              </h4>
              <div className="space-y-1 text-xs text-gray-400">
                <p>ISO 22000</p>
                <p>
                  {language === "fr" && "Certifié Halal"}
                  {language === "en" && "Halal Certified"}
                  {language === "ar" && "معتمد حلال"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Best Dates & Fruits. 
              {language === "fr" && " Tous droits réservés."}
              {language === "en" && " All rights reserved."}
              {language === "ar" && " جميع الحقوق محفوظة."}
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-bdf-gold transition-colors"
              >
                {language === "fr" && "Politique de confidentialité"}
                {language === "en" && "Privacy Policy"}
                {language === "ar" && "سياسة الخصوصية"}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-bdf-gold transition-colors"
              >
                {language === "fr" && "Conditions d'utilisation"}
                {language === "en" && "Terms of Service"}
                {language === "ar" && "شروط الخدمة"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
