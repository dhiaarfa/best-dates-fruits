"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { language } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              {/* Logo with gold background and white logo */}
              <div className="bg-bdf-gold p-6 rounded-lg inline-block mb-6">
                <Image
                  src="/images/best-dates-fruits-logo.png"
                  alt="Best Dates & Fruits Logo"
                  width={200}
                  height={80}
                  className="filter brightness-0 invert" // Makes the logo white
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-bdf-darkgold mb-6">
              {language === "en"
                ? "About Best Dates & Fruits"
                : language === "fr"
                  ? "À Propos de Best Dates & Fruits"
                  : "حول بست دايتس آند فروتس"}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {language === "en"
                  ? "Best Dates & Fruits is a leading Tunisian company specializing in the production and export of premium dates and date-based products."
                  : language === "fr"
                    ? "Best Dates & Fruits est une entreprise tunisienne leader spécialisée dans la production et l'exportation de dattes premium et de produits à base de dattes."
                    : "بست دايتس آند فروتس هي شركة تونسية رائدة متخصصة في إنتاج وتصدير التمور الفاخرة والمنتجات المصنوعة من التمور."}
              </p>
              <p>
                {language === "en"
                  ? "Located in the heart of Tozeur's oasis, we have been cultivating the finest Deglet Nour dates for generations, maintaining traditional methods while embracing modern quality standards."
                  : language === "fr"
                    ? "Située au cœur de l'oasis de Tozeur, nous cultivons les meilleures dattes Deglet Nour depuis des générations, en maintenant les méthodes traditionnelles tout en adoptant les normes de qualité modernes."
                    : "تقع في قلب واحة توزر، نحن نزرع أجود تمور دقلة نور منذ أجيال، مع الحفاظ على الطرق التقليدية واعتماد معايير الجودة الحديثة."}
              </p>
              <p>
                {language === "en"
                  ? "Our commitment to excellence has earned us ISO 22000 and Halal certifications, ensuring that our products meet the highest international standards for food safety and quality."
                  : language === "fr"
                    ? "Notre engagement envers l'excellence nous a valu les certifications ISO 22000 et Halal, garantissant que nos produits répondent aux plus hauts standards internationaux de sécurité alimentaire et de qualité."
                    : "التزامنا بالتميز حصل على شهادات ISO 22000 والحلال، مما يضمن أن منتجاتنا تلبي أعلى المعايير الدولية لسلامة الأغذية والجودة."}
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/production-facility.jpg"
                              alt="Best Dates & Fruits Production Facility"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-bdf-gold/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
