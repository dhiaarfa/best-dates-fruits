"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TestimonialsSection() {
  const { language } = useLanguage()
  const isRTL = language === "ar"
  const [currentIndex, setCurrentIndex] = useState(0)

  // TUNISIAN CUSTOMERS WITHOUT PHOTOS
  const testimonials = [
    {
      id: 1,
      name: {
        en: "Amira Ben Salem",
        fr: "Amira Ben Salem",
        ar: "أميرة بن سالم",
      },
      location: {
        en: "Tunis, Tunisia",
        fr: "Tunis, Tunisie",
        ar: "تونس، تونس",
      },
      role: {
        en: "Food Enthusiast",
        fr: "Passionnée de Cuisine",
        ar: "عاشقة الطعام",
      },
      content: {
        en: "Best Dates & Fruits dates are simply the best I've ever tasted. The Deglet Nour variety has a perfect balance of sweetness and a honey-like flavor that's unmatched. Every bite is pure perfection.",
        fr: "Les dattes Best Dates & Fruits sont simplement les meilleures que j'ai jamais goûtées. La variété Deglet Nour offre un équilibre parfait de douceur et une saveur de miel inégalée. Chaque bouchée est une pure perfection.",
        ar: "تمور بست دايتس آند فروتس هي ببساطة أفضل ما تذوقته على الإطلاق. تتمتع دقلة نور بتوازن مثالي من الحلاوة ونكهة تشبه العسل لا مثيل لها. كل قضمة هي كمال خالص.",
      },
    },
    {
      id: 2,
      name: {
        en: "Mohamed Trabelsi",
        fr: "Mohamed Trabelsi",
        ar: "محمد الطرابلسي",
      },
      location: {
        en: "Sousse, Tunisia",
        fr: "Sousse, Tunisie",
        ar: "سوسة، تونس",
      },
      role: {
        en: "Pastry Chef",
        fr: "Chef Pâtissier",
        ar: "شيف حلويات",
      },
      content: {
        en: "As a pastry chef in Sousse, I'm very particular about ingredients. Best Dates & Fruits dates have become essential in my desserts. Their consistent quality and natural sweetness elevate every creation I make.",
        fr: "En tant que chef pâtissier à Sousse, je suis très pointilleux sur les ingrédients. Les dattes Best Dates & Fruits sont devenues essentielles dans mes desserts. Leur qualité constante et leur douceur naturelle élèvent chaque création que je fais.",
        ar: "بصفتي طاهي حلويات في سوسة، أنا دقيق جدًا بشأن المكونات. أصبحت تمور بست دايتس آند فروتس أساسية في حلوياتي. جودتها المتسقة وحلاوتها الطبيعية ترفع من مستوى كل إبداع أصنعه.",
      },
    },
    {
      id: 3,
      name: {
        en: "Leila Khediri",
        fr: "Leila Khediri",
        ar: "ليلى الخضيري",
      },
      location: {
        en: "Sfax, Tunisia",
        fr: "Sfax, Tunisie",
        ar: "صفاقس، تونس",
      },
      role: {
        en: "Family Customer",
        fr: "Cliente Familiale",
        ar: "عميلة عائلية",
      },
      content: {
        en: "I've been buying dates for my family for years, and Best Dates & Fruits stands out for their exceptional quality and elegant packaging. The gift boxes are perfect for special occasions. Highly recommended!",
        fr: "J'achète des dattes pour ma famille depuis des années, et Best Dates & Fruits se distingue par sa qualité exceptionnelle et son emballage élégant. Les coffrets cadeaux sont parfaits pour les occasions spéciales. Hautement recommandé!",
        ar: "لقد كنت أشتري التمور لعائلتي لسنوات، وتتميز بست دايتس آند فروتس بجودتها الاستثنائية وتغليفها الأنيق. علب الهدايا مثالية للمناسبات الخاصة. موصى به بشدة!",
      },
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-4 font-serif flex items-center justify-center gap-4">
            <Quote className="w-10 h-10 text-bdf-gold" />
            {language === "en"
              ? "What Our Customers Say"
              : language === "fr"
                ? "Ce Que Disent Nos Clients"
                : "ما يقوله عملاؤنا"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {language === "en"
              ? "Discover what our valued customers have to say about Best Dates & Fruits and their experience with our products."
              : language === "fr"
                ? "Découvrez ce que nos clients fidèles ont à dire sur les dattes Best Dates & Fruits et leur expérience avec nos produits."
                : "اكتشف ما يقوله عملاؤنا المخلصون عن تمور بست دايتس آند فروتس وتجربتهم مع منتجاتنا."}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-bdf-gold opacity-30 mx-auto mb-6" />
                <p className="text-xl mb-8 italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  {testimonials[currentIndex].content[language]}
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="text-2xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-2">
                    {testimonials[currentIndex].name[language]}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {testimonials[currentIndex].location[language]}
                  </p>
                  <p className="text-bdf-gold font-semibold">{testimonials[currentIndex].role[language]}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-bdf-gold hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-bdf-gold hover:text-white transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-bdf-gold" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
