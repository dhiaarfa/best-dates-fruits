"use client"

import Image from "next/image"
import { Award, Leaf, Shield, Check, Factory, Users, Truck, BadgeIcon as Certificate } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import { useState, useEffect } from "react"

export default function Home() {
  const { language } = useLanguage()
  const isRTL = language === "ar"
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: <Award className="w-8 h-8 text-bdf-gold" />,
      title: {
        fr: "Qualité Premium",
        en: "Premium Quality",
        ar: "جودة فاخرة",
      },
      description: {
        fr: "Dattes Deglet Nour sélectionnées des meilleures oasis",
        en: "Deglet Nour dates selected from the finest oases",
        ar: "تمور دقلة نور مختارة من أفضل الواحات",
      },
    },
    {
      icon: <Shield className="w-8 h-8 text-bdf-gold" />,
      title: {
        fr: "Certifié ISO 22000",
        en: "ISO 22000 Certified",
        ar: "معتمد ISO 22000",
      },
      description: {
        fr: "Standards internationaux de sécurité alimentaire",
        en: "International food safety standards",
        ar: "معايير السلامة الغذائية الدولية",
      },
    },
    {
      icon: <Leaf className="w-8 h-8 text-bdf-gold" />,
      title: {
        fr: "100% Naturel",
        en: "100% Natural",
        ar: "100٪ طبيعي",
      },
      description: {
        fr: "Sans additifs ni conservateurs artificiels",
        en: "No artificial additives or preservatives",
        ar: "بدون إضافات أو مواد حافظة اصطناعية",
      },
    },
  ]

  const productionImages = [
    {
      id: 1,
      src: "/images/patisserie-production-1.jpeg",
      alt: "Production de pâtisseries",
    },
    {
      id: 2,
      src: "/images/patisserie-production-2.jpeg",
      alt: "Chaîne de production",
    },
    {
      id: 3,
      src: "/images/patisserie-production-3.jpeg",
      alt: "Emballage des produits",
    },
    {
      id: 4,
      src: "/images/production-line.jpeg",
      alt: "Ligne de production",
    },
    {
      id: 5,
      src: "/images/packaging-station.jpeg",
      alt: "Station d'emballage",
    },
  ]

  return (
    <main className={`min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar />

      {/* Hero Section with full-width image and centered text overlay */}
      <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/natural-dates-hero.jpeg"
            alt="Dattes naturelles Best Dates & Fruits"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Centered content overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-block">
                <Image
                  src="/images/best-dates-fruits-logo.png"
                  alt="Best Dates & Fruits"
                  width={500}
                  height={200}
                  className="h-32 w-auto filter brightness-0 contrast-100 invert"
                  priority
                />
              </div>
            </div>

            {/* Main slogan */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 font-playfair drop-shadow-2xl">
              {language === "fr"
                ? "LES MEILLEURES DES DATTES TUNISIENNES"
                : language === "en"
                  ? "THE FINEST TUNISIAN DATES"
                  : "أفضل التمور التونسية"}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-bdf-gold to-bdf-darkgold mx-auto rounded-full mb-8" />

            {/* Description text */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto font-inter drop-shadow-lg">
              {language === "fr"
                ? "Best Dates and Fruits en pleine zone industrielle de Castilia entourée par les oasis de Tozeur et Kebili, spécialiste du conditionnement et de l'export des dattes Tunisiennes Deglet Nour, Aligue, Khouet Alique et Kenta. Certifiée ISO 22000 et Halal, des dattes naturelles branchées, standards et conditionnées dans les meilleures conditions selon les exigences et les normes internationales."
                : language === "en"
                  ? "Best Dates and Fruits in the heart of Castilia industrial zone surrounded by the oases of Tozeur and Kebili, specialist in packaging and export of Tunisian dates Deglet Nour, Aligue, Khouet Aligue and Kenta. ISO 22000 and Halal certified, natural branched dates, standards and packaged in the best conditions according to international requirements and standards."
                  : "بست دايتس آند فروتس في قلب المنطقة الصناعية كاستيليا محاطة بواحات توزر وقبلي، متخصصة في تعبئة وتصدير التمور التونسية دقلة نور وعليق وخوت عليق وكنتة. معتمدة ISO 22000 وحلال، تمور طبيعية متفرعة ومعيارية ومعبأة في أفضل الظروف وفقاً للمتطلبات والمعايير الدولية."}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bdf-darkgold mb-6 font-playfair">Notre Histoire</h2>
              <div className="text-lg mb-6 leading-relaxed font-inter">
                <p className="mb-4">
                  Best Dates & Fruits est située dans la zone industrielle de Castilia, au cœur des oasis de Tozeur et
                  de Kébili, les régions les plus réputées de Tunisie pour la culture des dattes.
                </p>
                <p className="mb-4">
                  Nous sommes spécialisés dans le conditionnement et l'exportation de dattes tunisiennes premium:{" "}
                  <strong>Deglet Nour, Aligue, Khouet Aligue et Kenta</strong>. Notre entreprise est certifiée{" "}
                  <strong>ISO 22000</strong> et <strong>Halal</strong>, garantissant les plus hauts standards de
                  sécurité alimentaire et de qualité.
                </p>
                <p className="mb-4">
                  Nos dattes sont proposées sous trois formes: naturelles branchées, standards détachées, et
                  conditionnées (avec possibilité de dénoyautage), toutes emballées dans des conditions optimales, selon
                  les exigences et normes internationales.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-bdf-gold rounded-3xl p-8 shadow-xl px-5 py-5 leading-4">
                <Image
                  src="/images/best-dates-fruits-logo.png"
                  alt="Best Dates & Fruits Logo"
                  width={500}
                  height={200}
                  className="w-full h-auto object-contain max-w-md mx-auto filter brightness-0 contrast-100 invert"
                  priority
                />
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-bdf-gold mb-2 font-playfair">Best Dates & Fruits</h3>
                  <p className="text-bdf-gold font-semibold font-inter">Les Meilleures des Dattes Tunisiennes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 bg-gold-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-playfair">Nos Atouts</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-inter">
              Une entreprise moderne alliant tradition tunisienne et standards internationaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <Factory className="h-12 w-12 text-bdf-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-4 font-playfair">
                Installation Moderne
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                Installations de pointe dans la Zone Industrielle de Castilia
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <Certificate className="h-12 w-12 text-bdf-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-4 font-playfair">
                Certifications
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                ISO 22000 et Halal pour garantir sécurité alimentaire et conformité
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-bdf-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-4 font-playfair">
                Expertise Locale
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                Équipe experte dans la culture et le traitement des dattes tunisiennes
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <Truck className="h-12 w-12 text-bdf-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-4 font-playfair">
                Export International
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                Distribution mondiale vers les marchés les plus exigeants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-4 font-playfair">
              Nos Spécialités
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-inter">
              Une gamme complète de dattes tunisiennes authentiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Check className="h-6 w-6 text-bdf-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-2 font-playfair">
                  Deglet Nour
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  La variété la plus prestigieuse, appelée "fruit de lumière" pour sa translucidité unique. Goût délicat
                  et texture moelleuse incomparables.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="h-6 w-6 text-bdf-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-2 font-playfair">Aligue</h3>
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  Variété robuste à la texture ferme et au goût prononcé. Excellente conservation naturelle et
                  résistance au transport.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="h-6 w-6 text-bdf-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-2 font-playfair">
                  Khouet Alique
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  Sous-variété de l'Aligue aux caractéristiques spécifiques, traditionnellement cultivée dans nos oasis
                  locales.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="h-6 w-6 text-bdf-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-bdf-darkgold dark:text-bdf-gold mb-2 font-playfair">Kenta</h3>
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  Variété précoce aux dattes claires, première de la saison. Texture tendre et fraîcheur exceptionnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-playfair">
              {language === "fr"
                ? "Pourquoi Choisir Best Dates & Fruits ?"
                : language === "en"
                  ? "Why Choose Best Dates & Fruits?"
                  : "لماذا تختار بست دايتس آند فروتس؟"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
              {language === "fr"
                ? "Découvrez ce qui fait de nos dattes un choix d'exception"
                : language === "en"
                  ? "Discover what makes our dates an exceptional choice"
                  : "اكتشف ما يجعل تمورنا خياراً استثنائياً"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="bg-bdf-gold/10 rounded-2xl p-4">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-playfair">
                    {feature.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-inter">{feature.description[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Excellence Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-playfair">
              {language === "fr" && "Excellence Artisanale"}
              {language === "en" && "Artisanal Excellence"}
              {language === "ar" && "التميز الحرفي"}
            </h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {productionImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto font-inter">
              {language === "fr" &&
                "Chaque création reflète notre engagement envers la qualité et le respect des traditions tunisiennes"}
              {language === "en" &&
                "Each creation reflects our commitment to quality and respect for Tunisian traditions"}
              {language === "ar" && "كل إبداع يعكس التزامنا بالجودة واحترام التقاليد التونسية"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
