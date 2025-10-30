"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useLanguage } from "@/components/language-provider"

// Sample product data (in a real app, this would come from an API or database)
const allProducts = [
  {
    id: 1,
    name: {
      en: "Premium Deglet Nour Dates",
      fr: "Dattes Deglet Nour Premium",
      ar: "تمور دقلة نور الفاخرة",
    },
    description: {
      en: "Our signature premium Deglet Nour dates, known for their honey-like taste and soft texture.",
      fr: "Nos dattes Deglet Nour premium signature, connues pour leur goût mielleux et leur texture moelleuse.",
      ar: "تمور دقلة نور الفاخرة المميزة، المعروفة بمذاقها العسلي وقوامها الناعم.",
    },
    image: "images/hero-dates-1.jpg",
    price: {
      en: "$12.99",
      fr: "12,99 €",
      ar: "١٢٫٩٩ $",
    },
    link: "/products/deglet-nour",
    isNew: true,
  },
  {
    id: 2,
    name: {
      en: "Organic Date Gift Box",
      fr: "Coffret Cadeau de Dattes Bio",
      ar: "علبة هدايا التمور العضوية",
    },
    description: {
      en: "Assorted organic dates presented in an elegant gift box, perfect for special occasions.",
      fr: "Assortiment de dattes biologiques présentées dans un élégant coffret cadeau, parfait pour les occasions spéciales.",
      ar: "تشكيلة متنوعة من التمور العضوية مقدمة في علبة هدايا أنيقة، مثالية للمناسبات الخاصة.",
    },
    image: "images/hero-dates-2.jpg",
    price: {
      en: "$24.99",
      fr: "24,99 €",
      ar: "٢٤٫٩٩ $",
    },
    link: "/products/gift-box",
    isFeatured: true,
  },
  {
    id: 3,
    name: {
      en: "Stuffed Dates Selection",
      fr: "Sélection de Dattes Farcies",
      ar: "تشكيلة من التمور المحشوة",
    },
    description: {
      en: "Luxury dates stuffed with nuts, chocolate, and other premium fillings.",
      fr: "Dattes de luxe farcies aux noix, chocolat et autres garnitures premium.",
      ar: "تمور فاخرة محشوة بالمكسرات والشوكولاتة وحشوات فاخرة أخرى.",
    },
    image: "images/hero-dates-3.jpg",
    price: {
      en: "$18.99",
      fr: "18,99 €",
      ar: "١٨٫٩٩ $",
    },
    link: "/products/stuffed-dates",
  },
  {
    id: 4,
    name: {
      en: "Date Syrup",
      fr: "Sirop de Dattes",
      ar: "شراب التمر",
    },
    description: {
      en: "Natural date syrup, perfect as a sweetener for desserts, pancakes, or as a topping.",
      fr: "Sirop de dattes naturel, parfait comme édulcorant pour les desserts, les crêpes ou comme garniture.",
      ar: "شراب التمر الطبيعي، مثالي كمحلي للحلويات أو الفطائر أو كإضافة.",
    },
    image: "images/date-syrup.jpg",
    price: {
      en: "$9.99",
      fr: "9,99 €",
      ar: "٩٫٩٩ $",
    },
    link: "/products/date-syrup",
  },
  {
    id: 5,
    name: {
      en: "Date Paste",
      fr: "Pâte de Dattes",
      ar: "عجينة التمر",
    },
    description: {
      en: "100% natural date paste, perfect for baking or as a spread.",
      fr: "Pâte de dattes 100% naturelle, parfaite pour la pâtisserie ou comme tartinade.",
      ar: "عجينة تمر طبيعية 100٪، مثالية للخبز أو كمنتشر.",
    },
    image: "images/date-paste.jpg",
    price: {
      en: "$8.99",
      fr: "8,99 €",
      ar: "٨٫٩٩ $",
    },
    link: "/products/date-paste",
  },
  {
    id: 6,
    name: {
      en: "Chocolate Covered Dates",
      fr: "Dattes Enrobées de Chocolat",
      ar: "تمور مغطاة بالشوكولاتة",
    },
    description: {
      en: "Premium dates covered in rich dark, milk, or white chocolate.",
      fr: "Dattes premium enrobées de chocolat noir, au lait ou blanc.",
      ar: "تمور فاخرة مغطاة بالشوكولاتة الداكنة الغنية أو بالحليب أو البيضاء.",
    },
    image: "images/chocolate-dates.jpg",
    price: {
      en: "$15.99",
      fr: "15,99 €",
      ar: "١٥٫٩٩ $",
    },
    link: "/products/chocolate-dates",
    isNew: true,
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate search API call
    setIsLoading(true)

    setTimeout(() => {
      if (!query) {
        setSearchResults([])
        setIsLoading(false)
        return
      }

      // Filter products based on search query
      const results = allProducts.filter((product) => {
        const name = product.name[language].toLowerCase()
        const description = product.description[language].toLowerCase()
        const searchQuery = query.toLowerCase()

        return name.includes(searchQuery) || description.includes(searchQuery)
      })

      setSearchResults(results)
      setIsLoading(false)
    }, 500) // Simulate API delay
  }, [query, language])

  const getTitle = () => {
    if (!query) {
      return language === "en" ? "Search Products" : language === "fr" ? "Rechercher des Produits" : "البحث عن المنتجات"
    }

    return language === "en"
      ? `Search Results for "${query}"`
      : language === "fr"
        ? `Résultats de Recherche pour "${query}"`
        : `نتائج البحث عن "${query}"`
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-24 pb-16">
        <PageHeader
          title={getTitle()}
          description={
            language === "en"
              ? "Browse our selection of premium Tunisian dates and date products"
              : language === "fr"
                ? "Parcourez notre sélection de dattes tunisiennes premium et de produits à base de dattes"
                : "تصفح مجموعتنا من التمور التونسية الفاخرة ومنتجات التمور"
          }
        />

        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              {
                label: language === "en" ? "Search" : language === "fr" ? "Recherche" : "بحث",
                href: `/${language === "en" ? "" : language + "/"}search`,
              },
              ...(query
                ? [
                    {
                      label: query,
                      href: `/${language === "en" ? "" : language + "/"}search?q=${encodeURIComponent(query)}`,
                    },
                  ]
                : []),
            ]}
          />

          <div className="py-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-bdf-gold border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4 text-gray-600">
                  {language === "en" ? "Searching..." : language === "fr" ? "Recherche en cours..." : "جاري البحث..."}
                </p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-12">
                {!query ? (
                  <p className="text-gray-600">
                    {language === "en"
                      ? "Please enter a search term to find products."
                      : language === "fr"
                        ? "Veuillez saisir un terme de recherche pour trouver des produits."
                        : "الرجاء إدخال مصطلح البحث للعثور على المنتجات."}
                  </p>
                ) : (
                  <>
                    <p className="text-xl font-bold text-gray-700 mb-2">
                      {language === "en"
                        ? "No results found"
                        : language === "fr"
                          ? "Aucun résultat trouvé"
                          : "لم يتم العثور على نتائج"}
                    </p>
                    <p className="text-gray-600">
                      {language === "en"
                        ? `We couldn't find any products matching "${query}".`
                        : language === "fr"
                          ? `Nous n'avons trouvé aucun produit correspondant à "${query}".`
                          : `لم نتمكن من العثور على أي منتجات تطابق "${query}".`}
                    </p>
                  </>
                )}
              </div>
            ) : (
              <>
                <p className="mb-6 text-gray-600">
                  {language === "en"
                    ? `Found ${searchResults.length} product${searchResults.length === 1 ? "" : "s"} matching "${query}"`
                    : language === "fr"
                      ? `${searchResults.length} produit${searchResults.length === 1 ? "" : "s"} trouvé${searchResults.length === 1 ? "" : "s"} correspondant à "${query}"`
                      : `تم العثور على ${searchResults.length} منتج${searchResults.length === 1 ? "" : "ات"} تطابق "${query}"`}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      image={product.image}
                      price={product.price}
                      link={product.link}
                      isNew={product.isNew}
                      isFeatured={product.isFeatured}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
