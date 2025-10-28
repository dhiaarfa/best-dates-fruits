import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { CartProvider } from "@/contexts/cart-context"
import { PageTransition } from "@/components/page-transition"
import { BackToTop } from "@/components/back-to-top"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Best Dates & Fruits - Premium Tunisian Dates | Les Meilleures Dattes Tunisiennes",
  description:
    "Discover premium Tunisian dates from Best Dates & Fruits. Specializing in Deglet Nour dates, date syrups, and traditional date products. Direct from Tozeur oasis.",
  keywords: "dates, Tunisian dates, Deglet Nour, date syrup, premium dates, Best Dates Fruits, Tozeur",
  authors: [{ name: "Best Dates & Fruits" }],
  creator: "Best Dates & Fruits",
  publisher: "Best Dates & Fruits",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/images/original-bdf-favicon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/images/original-bdf-favicon.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/images/original-bdf-favicon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/images/original-bdf-favicon.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/images/original-bdf-favicon.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [{ url: "/images/original-bdf-favicon.svg", sizes: "180x180", type: "image/svg+xml" }],
    shortcut: "/images/original-bdf-favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Best Dates & Fruits - Premium Tunisian Dates",
    description: "Premium Tunisian dates and date products from the heart of Tozeur oasis",
    url: "https://best-dates-fruits.com",
    siteName: "Best Dates & Fruits",
    images: [
      {
        url: "/images/new-bdf-logo.png", // Updated to use the new logo image
        width: 1200,
        height: 630,
        alt: "Best Dates & Fruits Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dates & Fruits - Premium Tunisian Dates",
    description: "Premium Tunisian dates and date products from the heart of Tozeur oasis",
    images: ["/images/new-bdf-logo.png"], // Updated to use the new logo image
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon and other icons */}
        <link rel="icon" href="/images/original-bdf-favicon.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href="/images/original-bdf-favicon.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="icon" href="/images/original-bdf-favicon.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href="/images/original-bdf-favicon.svg" sizes="192x192" type="image/svg+xml" />
        <link rel="icon" href="/images/original-bdf-favicon.svg" sizes="512x512" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/original-bdf-favicon.svg" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-TileColor" content="#8B4513" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} font-inter antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>
            <CartProvider>
              <div className="min-h-screen bg-background">
                <Navbar />
                <PageTransition>
                  <main className="pt-20">{children}</main>
                </PageTransition>
                <Footer />
                <BackToTop />
                <CookieConsent />
              </div>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
