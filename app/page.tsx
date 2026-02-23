"use client"

import HeroSection from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { FeaturedProducts } from "@/components/sections/featured-products"
import ProductionSection from "@/components/sections/production-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <ProductionSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  )
}
