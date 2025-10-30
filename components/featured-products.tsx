"use client"

import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/components/language-provider"

export function FeaturedProducts() {
  const { language } = useLanguage()

  const featuredProducts = [
    {
      id: "deglet-nour-premium",
      name: {
        en: "Premium Deglet Nour Dates",
        fr: "Dattes Deglet Nour Premium",
        ar: "تمور دقلة نور الفاخرة",
      },
      description: {
        en: "The world's finest dates, translucent and sweet with a delicate flavor.",
        fr: "Les meilleures dattes du monde, translucides et sucrées avec une saveur délicate.",
        ar: "أجود التمور في العالم، شفافة وحلوة بنكهة رقيقة.",
      },
      image: "images/deglet-nour-natural.jpeg",
      price: {
        en: "$12.99",
        fr: "12,99 €",
        ar: "١٢٫٩٩ $",
      },
      numericPrice: 12.99,
      link: "/products/deglet-nour-premium",
      isNew: true,
      isFeatured: true,
      category: "dates",
    },
    {
      id: "date-syrup-organic",
      name: {
        en: "Organic Date Syrup",
        fr: "Sirop de Dattes Bio",
        ar: "شراب التمر العضوي",
      },
      description: {
        en: "Pure, natural sweetener made from premium dates. Perfect for desserts and beverages.",
        fr: "Édulcorant naturel pur fait à partir de dattes premium. Parfait pour les desserts et boissons.",
        ar: "محلي طبيعي خالص مصنوع من التمور الفاخرة. مثالي للحلويات والمشروبات.",
      },
      image: "images/date-syrup-bowl.jpeg",
      price: {
        en: "$8.99",
        fr: "8,99 €",
        ar: "٨٫٩٩ $",
      },
      numericPrice: 8.99,
      link: "/products/date-syrup-organic",
      isNew: false,
      isFeatured: true,
      category: "syrups",
    },
    {
      id: "stuffed-dates-luxury",
      name: {
        en: "Luxury Stuffed Dates",
        fr: "Dattes Fourrées de Luxe",
        ar: "التمور المحشوة الفاخرة",
      },
      description: {
        en: "Premium dates stuffed with almonds and pistachios. A gourmet treat.",
        fr: "Dattes premium fourrées aux amandes et pistaches. Un délice gastronomique.",
        ar: "تمور فاخرة محشوة باللوز والفستق. متعة للذواقة.",
      },
      image: "images/stuffed-dates-variety.jpeg",
      price: {
        en: "$18.99",
        fr: "18,99 €",
        ar: "١٨٫٩٩ $",
      },
      numericPrice: 18.99,
      link: "/products/stuffed-dates-luxury",
      isNew: true,
      isFeatured: true,
      category: "stuffed-dates",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bdf-darkgold mb-4">
            {language === "en" ? "Featured Products" : language === "fr" ? "Produits Vedettes" : "المنتجات المميزة"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Discover our premium selection of dates and date-based products, carefully crafted for the finest taste experience."
              : language === "fr"
                ? "Découvrez notre sélection premium de dattes et produits à base de dattes, soigneusement élaborés pour une expérience gustative exceptionnelle."
                : "اكتشف مجموعتنا المميزة من التمور والمنتجات المصنوعة من التمور، المصنوعة بعناية لتجربة طعم استثنائية."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              numericPrice={product.numericPrice}
              link={product.link}
              isNew={product.isNew}
              isFeatured={product.isFeatured}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
