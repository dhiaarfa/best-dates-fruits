"use client"

import Image from "next/image"
import { withBasePath } from "@/lib/paths"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Package, CheckCircle, Globe } from "lucide-react"

const ProductionSection = () => {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const productionFeatures = [
    {
      id: 1,
      title: getTranslation(language, "modernProcessing"),
      description: getTranslation(language, "modernProcessingDesc"),
      icon: <Factory className="h-8 w-8 text-bdf-gold" />,
    },
    {
      id: 2,
      title: getTranslation(language, "qualityPackaging"),
      description: getTranslation(language, "qualityPackagingDesc"),
      icon: <Package className="h-8 w-8 text-bdf-gold" />,
    },
    {
      id: 3,
      title: getTranslation(language, "qualityControl"),
      description: getTranslation(language, "qualityControlDesc"),
      icon: <CheckCircle className="h-8 w-8 text-bdf-gold" />,
    },
    {
      id: 4,
      title: getTranslation(language, "globalDistribution"),
      description: getTranslation(language, "globalDistributionDesc"),
      icon: <Globe className="h-8 w-8 text-bdf-gold" />,
    },
  ]

  return (
    <section className="py-16 bg-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-serif">
            {getTranslation(language, "productionLine")}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{getTranslation(language, "productionLineDesc")}</p>
        </div>

        {/* Production Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image src={withBasePath("images/date-processing.jpg")} alt="Date Processing" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h4 className="font-semibold text-sm">
                {language === "en" ? "Date Processing" : language === "fr" ? "Traitement des Dattes" : "معالجة التمور"}
              </h4>
            </div>
          </div>

          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image src={withBasePath("images/production-packaging.jpg")} alt="Packaging Line" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h4 className="font-semibold text-sm">
                {language === "en" ? "Packaging Line" : language === "fr" ? "Ligne d'Emballage" : "خط التعبئة"}
              </h4>
            </div>
          </div>

          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image src={withBasePath("images/storage-warehouse.jpg")} alt="Storage Warehouse" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h4 className="font-semibold text-sm">
                {language === "en"
                  ? "Storage Warehouse"
                  : language === "fr"
                    ? "Entrepôt de Stockage"
                    : "مستودع التخزين"}
              </h4>
            </div>
          </div>

          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image src={withBasePath("images/warehouse-zabeel.jpg")} alt="Product Distribution" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h4 className="font-semibold text-sm">
                {language === "en"
                  ? "Product Distribution"
                  : language === "fr"
                    ? "Distribution des Produits"
                    : "توزيع المنتجات"}
              </h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productionFeatures.map((feature) => (
            <Card key={feature.id} className="border-none shadow-md">
              <CardContent className="p-5 flex flex-col items-center text-center">
                <div className="mb-4 mt-2">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-bdf-darkgold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductionSection
