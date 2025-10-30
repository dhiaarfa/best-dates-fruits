"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export default function ProductsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const products = [
    {
      id: 1,
      name: language === "fr" ? "Deglet Nour Branchée" : language === "en" ? "Deglet Nour Branchée" : "دقلة نور متفرعة",
      description: language === "fr" 
        ? "La couronne des dattes tunisiennes, souvent appelée 'reine des dattes', désigne la variété Deglet Nour. Cette variété est très appréciée pour sa qualité supérieure, sa chair fondante et son goût mielleux unique.\n\nEmballage :\nSelon le choix et les marques de nos clients, toujours dans le respect des normes et standards internationaux.\n\nBoite cartonnée : 5, 2, 1 et 0.5 kg\nBoite cristale : 500 et 200gr\nCoffret cartonnée : de 2, 1 et 0.5 kg\nLes Bouquets : 2 et 0.1 kg"
        : language === "en"
        ? "The crown of Tunisian dates, often called 'queen of dates', refers to the Deglet Nour variety. This variety is highly appreciated for its superior quality, melting flesh and unique honey taste.\n\nPackaging:\nAccording to the choice and brands of our customers, always respecting international norms and standards.\n\nCardboard box: 5, 2, 1 and 0.5 kg\nCrystal box: 500 and 200gr\nCardboard box: 2, 1 and 0.5 kg\nThe Bouquets: 2 and 0.1 kg"
        : "تاج التمور التونسية، غالباً ما يسمى 'ملكة التمور'، يشير إلى صنف دقلة نور. هذا الصنف محبوب جداً لجودته العالية ولحمه الذائب وطعمه العسلي الفريد.\n\nالتعبئة:\nحسب اختيار وعلامات عملائنا، دائماً في احترام المعايير والمواصفات الدولية.\n\nصندوق كرتوني: 5، 2، 1 و 0.5 كغ\nعلبة كريستال: 500 و 200 غرام\nعلبة كرتونية: 2، 1 و 0.5 كغ\nالباقات: 2 و 0.1 كغ",
      image: "images/deglet-nour-branch-natural.jpeg",
      category: language === "fr" ? "Branchée" : language === "en" ? "Branchée" : "متفرعة",
      inStock: true
    },
    {
      id: 2,
      name: language === "fr" ? "Deglet Nour Standard" : language === "en" ? "Deglet Nour Standard" : "دقلة نور عادية",
      description: language === "fr" 
        ? "La couronne des dattes tunisiennes, souvent appelée 'reine des dattes', désigne la variété Deglet Nour. Cette variété est très appréciée pour sa qualité supérieure, sa chair fondante et son goût mielleux unique.\n\nEmballage :\nSelon le choix et les marques de nos clients, toujours dans le respect des normes et standards internationaux.\n\nBoîte cartonnée : 10 kg, 5 kg\nCoffret cartonné : 2 kg, 1 kg et 0,5 kg"
        : language === "en"
        ? "The crown of Tunisian dates, often called 'queen of dates', refers to the Deglet Nour variety. This variety is highly appreciated for its superior quality, melting flesh and unique honey taste.\n\nPackaging:\nAccording to the choice and brands of our customers, always respecting international norms and standards.\n\nCardboard box: 10 kg, 5 kg\nCardboard box: 2 kg, 1 kg and 0.5 kg"
        : "تاج التمور التونسية، غالباً ما يسمى 'ملكة التمور'، يشير إلى صنف دقلة نور. هذا الصنف محبوب جداً لجودته العالية ولحمه الذائب وطعمه العسلي الفريد.\n\nالتعبئة:\nحسب اختيار وعلامات عملائنا، دائماً في احترام المعايير والمواصفات الدولية.\n\nصندوق كرتوني: 10 كغ، 5 كغ\nعلبة كرتونية: 2 كغ، 1 كغ و 0.5 كغ",
      image: "images/deglet-nour-standard.jpeg",
      category: language === "fr" ? "Standard" : language === "en" ? "Standard" : "عادي",
      inStock: true
    },
    {
      id: 3,
      name: language === "fr" ? "Deglet Nour Conditionnées" : language === "en" ? "Packaged Deglet Nour" : "دقلة نور معبأة",
      description: language === "fr"
        ? "La couronne des dattes tunisiennes, souvent appelée 'reine des dattes', désigne la variété Deglet Nour. Cette variété est très appréciée pour sa qualité supérieure, sa chair fondante et son goût mielleux unique.\n\nEmballage :\nSelon le choix et les marques de nos clients, toujours dans le respect des normes et standards internationaux.\n\nGodet : 500 g et 250 g\nRavier en bois, cartons ou en polystyrène : 200 g, 250 g, 400 g et 500 g"
        : language === "en"
        ? "The crown of Tunisian dates, often called 'queen of dates', refers to the Deglet Nour variety. This variety is highly appreciated for its superior quality, melting flesh and unique honey taste.\n\nPackaging:\nAccording to the choice and brands of our customers, always respecting international norms and standards.\n\nCup: 500 g and 250 g\nWooden, cardboard or polystyrene tray: 200 g, 250 g, 400 g and 500 g"
        : "تاج التمور التونسية، غالباً ما يسمى 'ملكة التمور'، يشير إلى صنف دقلة نور. هذا الصنف محبوب جداً لجودته العالية ولحمه الذائب وطعمه العسلي الفريد.\n\nالتعبئة:\nحسب اختيار وعلامات عملائنا، دائماً في احترام المعايير والمواصفات الدولية.\n\nكوب: 500 غ و 250 غ\nصينية خشبية أو كرتونية أو بوليسترين: 200 غ، 250 غ، 400 غ و 500 غ",
      image: "images/dates-conditioned.jpeg",
      category: language === "fr" ? "Conditionnées" : language === "en" ? "Packaged" : "معبأة",
      inStock: true
    },
    {
      id: 4,
      name: language === "fr" ? "Alig et Khouet Alig" : language === "en" ? "Alig and Khouet Alig" : "عليق وخوت عليق",
      description: language === "fr"
        ? "La variété Alig est la « grande sœur » de la petite variété Khouet Alig, à laquelle elle s'apparente par la couleur, le goût et la teneur en sucre. Elle ne s'en différencie que par sa taille.\n\nEmballage :\nBoîte cartonnée : 10 kg\nRavier polystyrène : 500 g, 400 g, 250 g et 200 g\nBarquette en carton : 200 g"
        : language === "en"
        ? "The Alig variety is the 'big sister' of the small Khouet Alig variety, to which it is similar in color, taste and sugar content. It only differs from it by its size.\n\nPackaging:\nCardboard box: 10 kg\nPolystyrene tray: 500 g, 400 g, 250 g and 200 g\nCardboard tray: 200 g"
        : "صنف عليق هو 'الأخت الكبرى' للصنف الصغير خوت عليق، الذي يشبهه في اللون والطعم ومحتوى السكر. لا يختلف عنه إلا في الحجم.\n\nالتعبئة:\nصندوق كرتوني: 10 كغ\nصينية بوليسترين: 500 غ، 400 غ، 250 غ و 200 غ\nصينية كرتونية: 200 غ",
      image: "images/aligue-dates.jpeg",
      category: language === "fr" ? "Variétés Locales" : language === "en" ? "Local Varieties" : "أصناف محلية",
      inStock: true
    },
    {
      id: 5,
      name: language === "fr" ? "Kenta" : language === "en" ? "Kenta" : "كنتا",
      description: language === "fr"
        ? "Les dattes Kenta mûrissent un peu plus tôt que les autres variétés. Il est possible d'en commencer la récolte dès la fin septembre ou le début octobre. Les dattes dorées et claires possèdent une teneur en eau légèrement supérieure et elles sont un peu moins sucrées.\n\nEmballage :\nRavier polystyrène : 500 g, 400 g, 250 g et 200 g"
        : language === "en"
        ? "Kenta dates ripen a little earlier than other varieties. It is possible to start harvesting them from the end of September or early October. The golden and light dates have a slightly higher water content and are a little less sweet.\n\nPackaging:\nPolystyrene tray: 500 g, 400 g, 250 g and 200 g"
        : "تمور كنتا تنضج قليلاً قبل الأصناف الأخرى. من الممكن البدء في حصادها من نهاية سبتمبر أو بداية أكتوبر. التمور الذهبية والفاتحة لها محتوى مائي أعلى قليلاً وهي أقل حلاوة قليلاً.\n\nالتعبئة:\nصينية بوليسترين: 500 غ، 400 غ، 250 غ و 200 غ",
      image: "images/kenta-dates.jpeg",
      category: language === "fr" ? "Variétés Locales" : language === "en" ? "Local Varieties" : "أصناف محلية",
      inStock: true
    },
    {
      id: 6,
      name: language === "fr" ? "Dattes dénoyautées" : language === "en" ? "Pitted Dates" : "تمور منزوعة النوى",
      description: language === "fr"
        ? "Dattes dénoyautées prêtes à consommer, pratiques et savoureuses. Idéales pour les préparations culinaires et industrielles.\n\nEmballage :\nSelon le choix et les marques de nos clients, toujours dans le respect des normes et standards internationaux.\n\nBoîte cartonnée : 10 kg\nCup : 1 kg et 500 g\nRavier : 500 g, 400 g et 250 g"
        : language === "en"
        ? "Pitted dates ready to eat, convenient and delicious. Ideal for culinary and industrial preparations.\n\nPackaging:\nAccording to the choice and brands of our customers, always respecting international norms and standards.\n\nCardboard box: 10 kg\nCup: 1 kg and 500 g\nTray: 500 g, 400 g and 250 g"
        : "تمور منزوعة النوى جاهزة للأكل، عملية ولذيذة. مثالية للتحضيرات الطهوية والصناعية.\n\nالتعبئة:\nحسب اختيار وعلامات عملائنا، دائماً في احترام المعايير والمواصفات الدولية.\n\nصندوق كرتوني: 10 كغ\nكوب: 1 كغ و 500 غ\nصينية: 500 غ، 400 غ و 250 غ",
      image: "images/dattes dénoyautées.jpg",
      category: language === "fr" ? "Transformées" : language === "en" ? "Processed" : "معالجة",
      inStock: true
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: language === "fr" ? "Tous" : language === "en" ? "All" : "الكل" },
    { id: "branchee", name: language === "fr" ? "Branchée" : language === "en" ? "Branchée" : "متفرعة" },
    { id: "standard", name: language === "fr" ? "Standard" : language === "en" ? "Standard" : "عادي" },
    { id: "packaged", name: language === "fr" ? "Conditionnées" : language === "en" ? "Packaged" : "معبأة" },
    { id: "local", name: language === "fr" ? "Variétés Locales" : language === "en" ? "Local Varieties" : "أصناف محلية" },
    { id: "processed", name: language === "fr" ? "Transformées" : language === "en" ? "Processed" : "معالجة" }
  ]

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => {
        const categoryLower = product.category?.toLowerCase() || ""
        if (selectedCategory === "branchee") return categoryLower.includes("branchée") || categoryLower.includes("branchee") || categoryLower.includes("متفرعة")
        if (selectedCategory === "standard") return categoryLower.includes("standard") || categoryLower.includes("عادي")
        if (selectedCategory === "packaged") return categoryLower.includes("conditionnées") || categoryLower.includes("packaged") || categoryLower.includes("معبأة")
        if (selectedCategory === "local") return categoryLower.includes("variétés locales") || categoryLower.includes("local varieties") || categoryLower.includes("أصناف محلية")
        if (selectedCategory === "processed") return categoryLower.includes("transformées") || categoryLower.includes("processed") || categoryLower.includes("معالجة")
        return true
      })

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <Breadcrumbs
          items={[
            { label: t.nav.home, href: "/" },
            { label: t.nav.products, href: "/products" },
          ]}
        />

        <PageHeader
          title={t.nav.products}
          description={
            language === "fr"
              ? "Découvrez notre gamme complète de dattes tunisiennes de qualité premium"
              : language === "en"
              ? "Discover our complete range of premium quality Tunisian dates"
              : "اكتشف مجموعتنا الكاملة من التمور التونسية عالية الجودة"
          }
          backgroundImage="images/deglet-nour-pile.jpeg"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir={isRTL ? "rtl" : "ltr"}>
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {language === "fr" ? "Aucun produit trouvé dans cette catégorie" : language === "en" ? "No products found in this category" : "لم يتم العثور على منتجات في هذه الفئة"}
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8">
            <h2 className="text-3xl font-playfair font-bold mb-4 text-amber-700 dark:text-amber-400">
              {language === "fr" ? "Besoin de quantités importantes ?" : language === "en" ? "Need large quantities?" : "تحتاج كميات كبيرة؟"}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {language === "fr"
                ? "Nous proposons des tarifs préférentiels pour les commandes en gros et les partenariats à long terme."
                : language === "en"
                  ? "We offer preferential rates for bulk orders and long-term partnerships."
                  : "نقدم أسعاراً تفضيلية للطلبات بالجملة والشراكات طويلة المدى."}
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              {language === "fr" ? "Contactez notre équipe commerciale" : language === "en" ? "Contact our sales team" : "اتصل بفريق المبيعات"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
