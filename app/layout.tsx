import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/components/providers/language-provider"
import { CartProvider } from "@/contexts/cart-context"
import { PageTransition } from "@/components/page-transition"
import { BackToTop } from "@/components/layout/back-to-top"
import { CookieConsent } from "@/components/cookie-consent"
import { withBasePath } from "@/lib/paths"

const SITE_URL = "https://dhiaarfa.github.io/best-dates-fruits"

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
      { url: "images/logo-icon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "images/logo-icon.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "images/logo-icon.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "images/logo-icon.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [{ url: "images/logo-icon.svg", sizes: "180x180", type: "image/svg+xml" }],
    shortcut: "images/logo-icon.svg",
  },
  manifest: "/manifest.json",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Best Dates & Fruits - Premium Tunisian Dates",
    description: "Premium Tunisian dates and date products from the heart of Tozeur oasis",
    url: SITE_URL,
    siteName: "Best Dates & Fruits",
    images: [
      {
        url: "images/logo-full.svg",
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
    images: ["images/logo-full.svg"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon and other icons */}
        <link rel="icon" href={withBasePath("images/logo-icon.svg")} sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href={withBasePath("images/logo-icon.svg")} sizes="16x16" type="image/svg+xml" />
        <link rel="icon" href={withBasePath("images/logo-icon.svg")} sizes="192x192" type="image/svg+xml" />
        <link rel="icon" href={withBasePath("images/logo-icon.svg")} sizes="512x512" type="image/svg+xml" />
        <link rel="apple-touch-icon" href={withBasePath("images/logo-icon.svg")} sizes="180x180" />
        <link rel="manifest" href={withBasePath("manifest.json")} />
        <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-TileColor" content="#8B4513" />
        <meta name="msapplication-config" content={withBasePath("browserconfig.xml")} />
      </head>
      <body className="font-inter antialiased">
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
