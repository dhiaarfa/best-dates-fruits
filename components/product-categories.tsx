"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"

const ProductCategories = () => {
  const { language } = useLanguage()

  const categories = [
    {
      id: 1,
      name: {
        en: "Chocolate Covered Dates",
        fr: "Dattes Enrobées de Chocolat",
        ar: "تمور مغطاة بالشوكولاتة",
      },
      description: {
        en: "Premium dates covered in rich chocolate with decorative toppings and garnishes.",
        fr: "Dattes premium enrobées de chocolat riche avec garnitures décoratives.",
        ar: "تمور فاخرة مغطاة بالشوكولاتة الغنية مع زينة وزخارف.",
      },
      image: "/images/chocolate-dates.jpg",
      link: `/${language === "en" ? "" : language + "/"}products/chocolate-dates`,
    },
    {
      id: 2,
      name: {
        en: "Stuffed Dates",
        fr: "Dattes Farcies",
        ar: "تمور محشوة",
      },
      description: {
        en: "Luxury dates stuffed with nuts, creating the perfect balance of sweetness and crunch.",
        fr: "Dattes de luxe farcies aux noix, créant l'équilibre parfait entre douceur et croquant.",
        ar: "تمور فاخرة محشوة بالمكسرات، تخلق التوازن المثالي بين الحلاوة والقرمشة.",
      },
      image: "/images/walnut-stuffed-dates.jpg",
      link: `/${language === "en" ? "" : language + "/"}products/stuffed-dates`,
    },
    {
      id: 3,
      name: {
        en: "Energy Date Balls",
        fr: "Boules de Dattes Énergétiques",
        ar: "كرات التمر الطاقة",
      },
      description: {
        en: "Natural energy balls made with dates, nuts, and seeds for a healthy snack option.",
        fr: "Boules d'énergie naturelles faites avec des dattes, noix et graines pour une collation saine.",
        ar: "كرات طاقة طبيعية مصنوعة من التمر والمكسرات والبذور لخيار وجبة خفيفة صحية.",
      },
      image: "/images/pistachio-date-balls.jpg",
      link: `/${language === "en" ? "" : language + "/"}products/energy-balls`,
    },
    {
      id: 4,
      name: {
        en: "Elegant Gift Boxes",
        fr: "Coffrets Cadeaux Élégants",
        ar: "علب هدايا أنيقة",
      },
      description: {
        en: "Beautifully presented gift boxes with assorted premium dates, perfect for special occasions.",
        fr: "Coffrets cadeaux magnifiquement présentés avec des dattes premium assorties, parfaits pour les occasions spéciales.",
        ar: "علب هدايا مقدمة بشكل جميل مع تشكيلة من التمور الفاخرة، مثالية للمناسبات الخاصة.",
      },
      image: "/images/elegant-gift-box.jpg",
      link: `/${language === "en" ? "" : language + "/"}pastries`,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-serif">
            {getTranslation(language, "productCategories")}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{getTranslation(language, "productCategoriesDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name[language]}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-bdf-darkgold">{category.name[language]}</h3>
                  <p className="text-sm text-gray-600">{category.description[language]}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
