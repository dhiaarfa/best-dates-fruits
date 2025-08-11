"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { Leaf, Award, Shield, Truck } from 'lucide-react'

export default function IngredientsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const ingredients = [
    {
      id: 1,
      name: language === "fr" ? "Sirop de Dattes Liquide" : language === "en" ? "Liquid Date Syrup" : "شراب التمر السائل",
      description: language === "fr"
        ? "Sirop naturel extrait de dattes premium, riche en saveurs et parfait pour la pâtisserie et les boissons."
        : language === "en"
        ? "Natural syrup extracted from premium dates, rich in flavors and perfect for pastry and beverages."
        : "شراب طبيعي مستخرج من التمور الفاخرة، غني بالنكهات ومثالي للحلويات والمشروبات.",
      image: "/images/date-syrup-plate.jpeg",
      category: language === "fr" ? "Sirops" : language === "en" ? "Syrups" : "شراب",
      features: [
        language === "fr" ? "100% Naturel" : language === "en" ? "100% Natural" : "100% طبيعي",
        language === "fr" ? "Sans additifs" : language === "en" ? "No additives" : "بدون إضافات",
        language === "fr" ? "Riche en minéraux" : language === "en" ? "Rich in minerals" : "غني بالمعادن"
      ]
    },
    {
      id: 2,
      name: language === "fr" ? "Dattes à usage industriel" : language === "en" ? "Industrial Use Dates" : "تمور للاستخدام الصناعي",
      description: language === "fr"
        ? "Dattes de qualité industrielle, parfaites pour la transformation et les préparations culinaires à grande échelle."
        : language === "en"
        ? "Industrial quality dates, perfect for large-scale processing and culinary preparations."
        : "تمور بجودة صناعية، مثالية للمعالجة والتحضيرات الطهوية على نطاق واسع.",
      image: "/images/deglet-nour-standard.jpeg",
      category: language === "fr" ? "Dattes" : language === "en" ? "Dates" : "تمور",
      features: [
        language === "fr" ? "Calibrage uniforme" : language === "en" ? "Uniform sizing" : "معايرة موحدة",
        language === "fr" ? "Prêt à transformer" : language === "en" ? "Ready to process" : "جاهز للمعالجة",
        language === "fr" ? "Rapport qualité-prix" : language === "en" ? "Value for money" : "قيمة مقابل المال"
      ]
    },
    {
      id: 3,
      name: language === "fr" ? "Pâte de Dattes" : language === "en" ? "Date Paste" : "معجون التمر",
      description: language === "fr"
        ? "Pâte onctueuse de dattes, idéale pour la fabrication de confiseries et produits de boulangerie."
        : language === "en"
        ? "Smooth date paste, ideal for manufacturing confectionery and bakery products."
        : "معجون تمر ناعم، مثالي لتصنيع الحلويات ومنتجات المخابز.",
      image: "/images/date-paste-blocks.jpeg",
      category: language === "fr" ? "Pâtes" : language === "en" ? "Pastes" : "معجون",
      features: [
        language === "fr" ? "Texture homogène" : language === "en" ? "Homogeneous texture" : "قوام متجانس",
        language === "fr" ? "Longue conservation" : language === "en" ? "Long shelf life" : "مدة صلاحية طويلة",
        language === "fr" ? "Facile à utiliser" : language === "en" ? "Easy to use" : "سهل الاستخدام"
      ]
    },
    {
      id: 4,
      name: language === "fr" ? "Poudre de Dattes" : language === "en" ? "Date Powder" : "مسحوق التمر",
      description: language === "fr"
        ? "Poudre fine de dattes déshydratées, parfaite comme édulcorant naturel et exhausteur de goût."
        : language === "en"
        ? "Fine powder from dehydrated dates, perfect as natural sweetener and flavor enhancer."
        : "مسحوق ناعم من التمور المجففة، مثالي كمحلي طبيعي ومعزز للنكهة.",
      image: "/images/date-powder.jpeg",
      category: language === "fr" ? "Poudres" : language === "en" ? "Powders" : "مسحوق",
      features: [
        language === "fr" ? "Soluble instantané" : language === "en" ? "Instant soluble" : "قابل للذوبان فوراً",
        language === "fr" ? "Goût concentré" : language === "en" ? "Concentrated taste" : "طعم مركز",
        language === "fr" ? "Polyvalent" : language === "en" ? "Versatile" : "متعدد الاستخدامات"
      ]
    },
    {
      id: 5,
      name: language === "fr" ? "Dattes Hachées" : language === "en" ? "Chopped Dates" : "تمور مقطعة",
      description: language === "fr"
        ? "Dattes coupées en morceaux uniformes, idéales pour l'incorporation dans les produits alimentaires."
        : language === "en"
        ? "Dates cut into uniform pieces, ideal for incorporation into food products."
        : "تمور مقطعة إلى قطع موحدة، مثالية للدمج في المنتجات الغذائية.",
      image: "/images/stuffed-dates-variety.jpeg",
      category: language === "fr" ? "Dattes" : language === "en" ? "Dates" : "تمور",
      features: [
        language === "fr" ? "Taille standardisée" : language === "en" ? "Standardized size" : "حجم موحد",
        language === "fr" ? "Prêt à l'emploi" : language === "en" ? "Ready to use" : "جاهز للاستخدام",
        language === "fr" ? "Mélange facile" : language === "en" ? "Easy mixing" : "خلط سهل"
      ]
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({})

  const categories = [
    { id: "all", name: language === "fr" ? "Tous" : language === "en" ? "All" : "الكل" },
    { id: "syrups", name: language === "fr" ? "Sirops" : language === "en" ? "Syrups" : "شراب" },
    { id: "pastes", name: language === "fr" ? "Pâtes" : language === "en" ? "Pastes" : "معجون" },
    { id: "dates", name: language === "fr" ? "Dattes" : language === "en" ? "Dates" : "تمور" },
    { id: "powders", name: language === "fr" ? "Poudres" : language === "en" ? "Powders" : "مسحوق" }
  ]

  const certifications = [
    { icon: Shield, name: "ISO 22000", color: "text-blue-600" },
    { icon: Award, name: "Halal", color: "text-green-600" },
    { icon: Leaf, name: "Organic", color: "text-emerald-600" },
    { icon: Truck, name: "Export", color: "text-amber-600" }
  ]

  const filteredIngredients = selectedCategory === "all" 
    ? ingredients 
    : ingredients.filter(ingredient => {
        const categoryLower = ingredient.category?.toLowerCase() || ""
        if (selectedCategory === "syrups") return categoryLower.includes("sirops") || categoryLower.includes("syrups") || categoryLower.includes("شراب")
        if (selectedCategory === "pastes") return categoryLower.includes("pâtes") || categoryLower.includes("pastes") || categoryLower.includes("معجون")
        if (selectedCategory === "dates") return categoryLower.includes("dattes") || categoryLower.includes("dates") || categoryLower.includes("تمور")
        if (selectedCategory === "powders") return categoryLower.includes("poudres") || categoryLower.includes("powders") || categoryLower.includes("مسحوق")
        return true
      })

  const handleImageLoad = (id: number) => {
    setImageLoadStates(prev => ({ ...prev, [id]: true }))
  }

  const handleRequestQuote = (ingredientName: string) => {
    const subject = encodeURIComponent(
      language === "fr"
        ? `Demande de devis - ${ingredientName}`
        : language === "en"
          ? `Quote Request - ${ingredientName}`
          : `طلب عرض سعر - ${ingredientName}`,
    )
    const body = encodeURIComponent(
      language === "fr"
        ? `Bonjour, je souhaiterais obtenir des informations détaillées et un devis pour l'ingrédient suivant : ${ingredientName}.\n\nMerci de me contacter avec vos meilleures conditions.`
        : language === "en"
          ? `Hello, I would like to get detailed information and a quote for the following ingredient: ${ingredientName}.\n\nPlease contact me with your best terms.`
          : `مرحباً، أود الحصول على معلومات مفصلة وعرض سعر للمكون التالي: ${ingredientName}.\n\nيرجى التواصل معي بأفضل شروطكم.`,
    )
    window.location.href = `/contact?subject=${subject}&message=${body}`
  }

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <Breadcrumbs
          items={[
            { label: t.nav.home, href: "/" },
            { label: t.nav.ingredients, href: "/ingredients" },
          ]}
        />

        <PageHeader
          title={t.nav.ingredients}
          description={t.ingredients.description}
          backgroundImage="/images/deglet-nour-quality.jpeg"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir={isRTL ? "rtl" : "ltr"}>
          {/* Certifications */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${cert.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIngredients.map((ingredient) => (
              <Card key={ingredient.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {!imageLoadStates[ingredient.id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
                  )}
                  <Image
                    src={ingredient.image || "/placeholder.svg"}
                    alt={ingredient.name}
                    fill
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      imageLoadStates[ingredient.id] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(ingredient.id)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge
                      variant="outline"
                      className="text-xs bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800"
                    >
                      {ingredient.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-playfair font-bold mb-3 text-amber-700 dark:text-amber-400">
                    {ingredient.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {ingredient.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {ingredient.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all duration-200"
                    onClick={() => handleRequestQuote(ingredient.name)}
                  >
                    {language === "fr" ? "Demander un devis" : language === "en" ? "Request Quote" : "طلب عرض أسعار"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredIngredients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {language === "fr" ? "Aucun ingrédient trouvé dans cette catégorie" : language === "en" ? "No ingredients found in this category" : "لم يتم العثور على مكونات في هذه الفئة"}
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8">
            <h2 className="text-3xl font-playfair font-bold mb-4 text-amber-700 dark:text-amber-400">
              {t.ingredients.cta_title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t.ingredients.cta_description}
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              {t.ingredients.cta_button}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
