"use client"

import Navbar from "@/components/navbar"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { Play, Calendar, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    title: {
      fr: "Visite de nos Installations",
      en: "Tour of Our Facilities",
      ar: "جولة في منشآتنا",
    },
    description: {
      fr: "Découvrez nos installations modernes de 1500m² dans la zone industrielle de Castilia et notre processus de production.",
      en: "Discover our modern 1500m² facilities in the Castilia industrial zone and our production process.",
      ar: "اكتشف منشآتنا الحديثة البالغة 1500 متر مربع في المنطقة الصناعية كاستيليا وعملية الإنتاج لدينا.",
    },
    thumbnail: "/placeholder.svg?height=300&width=400&text=Installations+Modernes",
    duration: "8:45",
    views: "2.3K",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: {
      fr: "Processus de Conditionnement des Dattes",
      en: "Date Packaging Process",
      ar: "عملية تعبئة التمور",
    },
    description: {
      fr: "Suivez étape par étape notre processus de conditionnement des dattes Deglet Nour selon les normes ISO 22000.",
      en: "Follow step by step our Deglet Nour date packaging process according to ISO 22000 standards.",
      ar: "تابع خطوة بخطوة عملية تعبئة تمور دقلة نور وفقاً لمعايير ISO 22000.",
    },
    thumbnail: "/placeholder.svg?height=300&width=400&text=Conditionnement+Dattes",
    duration: "12:30",
    views: "1.8K",
    date: "2024-01-10",
  },
  {
    id: 3,
    title: {
      fr: "Récolte dans les Oasis de Tozeur",
      en: "Harvest in Tozeur Oases",
      ar: "الحصاد في واحات توزر",
    },
    description: {
      fr: "Immersion dans les oasis de Tozeur pendant la saison de récolte des dattes. Découvrez les méthodes traditionnelles.",
      en: "Immersion in the Tozeur oases during the date harvest season. Discover traditional methods.",
      ar: "انغماس في واحات توزر خلال موسم حصاد التمور. اكتشف الطرق التقليدية.",
    },
    thumbnail: "/placeholder.svg?height=300&width=400&text=Récolte+Oasis+Tozeur",
    duration: "15:20",
    views: "3.1K",
    date: "2023-12-20",
  },
  {
    id: 4,
    title: {
      fr: "Contrôle Qualité et Certifications",
      en: "Quality Control and Certifications",
      ar: "مراقبة الجودة والشهادات",
    },
    description: {
      fr: "Présentation de nos processus de contrôle qualité et de nos certifications ISO 22000 et Halal.",
      en: "Presentation of our quality control processes and our ISO 22000 and Halal certifications.",
      ar: "عرض عمليات مراقبة الجودة لدينا وشهاداتنا ISO 22000 وحلال.",
    },
    thumbnail: "/placeholder.svg?height=300&width=400&text=Contrôle+Qualité",
    duration: "6:15",
    views: "1.5K",
    date: "2024-01-05",
  },
  {
    id: 5,
    title: {
      fr: "Équipe Best Dates & Fruits",
      en: "Best Dates & Fruits Team",
      ar: "فريق بست دايتس آند فروتس",
    },
    description: {
      fr: "Rencontrez notre équipe passionnée et découvrez l'expertise qui fait la différence dans nos produits.",
      en: "Meet our passionate team and discover the expertise that makes the difference in our products.",
      ar: "تعرف على فريقنا المتحمس واكتشف الخبرة التي تصنع الفرق في منتجاتنا.",
    },
    thumbnail: "/placeholder.svg?height=300&width=400&text=Équipe+BDF",
    duration: "10:45",
    views: "2.7K",
    date: "2023-12-15",
  },
  {
    id: 6,
    title: {
      fr: "Innovation et Développement",
      en: "Innovation and Development",
      ar: "الابتكار والتطوير",
    },
    description: {
      fr: "Découvrez nos projets d'innovation et notre vision pour l'avenir de l'industrie des dattes en Tunisie.",
      en: "Discover our innovation projects and our vision for the future of the date industry in Tunisia.",
      ar: "اكتشف مشاريع الابتكار لدينا ورؤيتنا لمستقبل صناعة التمور في تونس.",
    },
    thumbnail: "/placeholder.svg?height=300&width=400&text=Innovation+Développement",
    duration: "9:30",
    views: "1.9K",
    date: "2024-01-01",
  },
]

export default function LivePage() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-24 pb-16">
        <PageHeader
          title={language === "fr" ? "Best Dates Live" : language === "en" ? "Best Dates Live" : "بست دايتس لايف"}
          description={
            language === "fr"
              ? "Découvrez l'univers de Best Dates & Fruits à travers nos vidéos exclusives"
              : language === "en"
                ? "Discover the world of Best Dates & Fruits through our exclusive videos"
                : "اكتشف عالم بست دايتس آند فروتس من خلال فيديوهاتنا الحصرية"
          }
          backgroundImage="/placeholder.svg?height=600&width=1200&text=Best+Dates+Live"
        />

        <div className="container mx-auto px-4">
          <Breadcrumbs />

          {/* Introduction */}
          <div className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="text-lg leading-relaxed text-gray-700 bg-gold-50 p-8 rounded-lg"
                dir={isRTL ? "rtl" : "ltr"}
              >
                <p className="mb-4">
                  <strong>Best Dates Live</strong> vous invite dans les coulisses de notre entreprise. Découvrez nos
                  installations modernes, notre processus de production, et rencontrez l'équipe passionnée qui fait de
                  Best Dates & Fruits un leader dans l'industrie des dattes tunisiennes.
                </p>
                <p>
                  Nos vidéos vous offrent une transparence totale sur nos méthodes de travail, notre engagement envers
                  la qualité et notre respect des traditions tunisiennes.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-bdf-darkgold mb-6 text-center">
                {language === "fr" ? "Vidéo à la Une" : language === "en" ? "Featured Video" : "الفيديو المميز"}
              </h2>
              <Card className="overflow-hidden shadow-xl">
                <div className="relative h-96 w-full bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-20 h-20 mx-auto mb-4 text-bdf-gold" />
                    <h3 className="text-xl font-bold mb-2">Visite Complète de nos Installations</h3>
                    <p className="text-gray-300">Durée: 15:30 • 4.2K vues</p>
                  </div>
                  <div className="absolute inset-0 bg-black/50"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=800&text=Visite+Installations+Complète"
                    alt="Featured Video"
                    fill
                    className="object-cover -z-10"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="py-12">
            <h2 className="text-2xl font-bold text-bdf-darkgold mb-8 text-center">
              {language === "fr" ? "Toutes nos Vidéos" : language === "en" ? "All Our Videos" : "جميع فيديوهاتنا"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 w-full bg-gray-900">
                    <Image
                      src={video.thumbnail || "/placeholder.svg?height=300&width=400"}
                      alt={video.title[language]}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">
                        <Play className="w-3 h-3 mr-1" />
                        Live
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-black/70 text-white">{video.duration}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-bdf-darkgold" dir={isRTL ? "rtl" : "ltr"}>
                      {video.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed" dir={isRTL ? "rtl" : "ltr"}>
                      {video.description[language]}
                    </p>

                    {/* Video Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{video.views} vues</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(video.date).toLocaleDateString("fr-FR")}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-bdf-gold text-black hover:bg-bdf-darkgold">
                      <Play className="w-4 h-4 mr-2" />
                      {language === "fr" ? "Regarder" : language === "en" ? "Watch" : "مشاهدة"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="py-12 bg-gradient-to-r from-bdf-gold to-bdf-darkgold rounded-lg text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                {language === "fr" ? "Restez Connectés" : language === "en" ? "Stay Connected" : "ابقوا على تواصل"}
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-6" dir={isRTL ? "rtl" : "ltr"}>
                {language === "fr"
                  ? "Abonnez-vous à notre chaîne pour ne manquer aucune de nos nouvelles vidéos et découvrir en exclusivité nos dernières innovations."
                  : language === "en"
                    ? "Subscribe to our channel to not miss any of our new videos and discover exclusively our latest innovations."
                    : "اشترك في قناتنا لعدم تفويت أي من فيديوهاتنا الجديدة واكتشف حصرياً أحدث ابتكاراتنا."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-bdf-gold hover:bg-gray-100 px-8 py-4 rounded-2xl">
                  {language === "fr" ? "S'abonner" : language === "en" ? "Subscribe" : "اشتراك"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-bdf-gold px-8 py-4 bg-transparent rounded-2xl"
                >
                  {language === "fr" ? "Notifications" : language === "en" ? "Notifications" : "الإشعارات"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
