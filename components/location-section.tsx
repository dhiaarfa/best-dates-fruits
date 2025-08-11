"use client"

import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function LocationSection() {
  const { language } = useLanguage()

  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-serif flex items-center justify-center gap-4">
            <MapPin className="w-10 h-10 text-bdf-gold" />
            {language === "en" ? "Our Location" : language === "fr" ? "Notre Emplacement" : "موقعنا"}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {language === "en"
              ? "Visit Best Dattes & Fruits in the heart of Tozeur oasis, Tunisia"
              : language === "fr"
                ? "Visitez Best Dattes & Fruits au cœur de l'oasis de Tozeur, Tunisie"
                : "زر بست دايتس آند فروتس في قلب واحة توزر، تونس"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-bdf-darkgold mb-6 flex items-center gap-3">
              <Building className="w-6 h-6" />
              {language === "en"
                ? "Visit Our Facility"
                : language === "fr"
                  ? "Visitez Notre Établissement"
                  : "زر منشأتنا"}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg">
                <MapPin className="w-6 h-6 text-bdf-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {language === "en" ? "Address" : language === "fr" ? "Adresse" : "العنوان"}
                  </h4>
                  <p className="text-gray-600">
                    Best Dates & Fruits
                    <br />
                    BP 73 2200 Tozeur, Tunisia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg">
                <Phone className="w-6 h-6 text-bdf-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {language === "en" ? "Phone" : language === "fr" ? "Téléphone" : "الهاتف"}
                  </h4>
                  <p className="text-gray-600">
                    +216 76 420 300
                    <br />
                    +216 56 541 950
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg">
                <Mail className="w-6 h-6 text-bdf-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {language === "en" ? "Email" : language === "fr" ? "Email" : "البريد الإلكتروني"}
                  </h4>
                  <p className="text-gray-600">direction@best-dattes-and-fruits.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg">
                <Clock className="w-6 h-6 text-bdf-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {language === "en" ? "Business Hours" : language === "fr" ? "Horaires" : "ساعات العمل"}
                  </h4>
                  <p className="text-gray-600">
                    {language === "en"
                      ? "Monday - Saturday: 8:00 AM - 6:00 PM"
                      : language === "fr"
                        ? "Lundi - Samedi: 8h00 - 18h00"
                        : "الإثنين - السبت: 8:00 ص - 6:00 م"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.1742818805!2d8.1227!3d33.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzEwLjkiTiA4wrAwNycyMS43IkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Best Dattes & Fruits Location - Tozeur, Tunisia"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
