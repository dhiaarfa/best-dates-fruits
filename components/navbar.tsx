"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ChevronDown, Globe, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search-bar"
import { ShoppingCart } from "@/components/shopping-cart"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/components/language-provider"

const Navbar = () => {
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const isRTL = language === "ar"

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    {
      name: {
        fr: "Accueil",
        en: "Home",
        ar: "الرئيسية",
      },
      href: `/${language === "fr" ? "" : language}`,
    },
    {
      name: {
        fr: "Produits",
        en: "Products",
        ar: "المنتجات",
      },
      href: `/${language === "fr" ? "" : language + "/"}products`,
    },
    {
      name: {
        fr: "Ingrédients",
        en: "Ingredients",
        ar: "المكونات",
      },
      href: `/${language === "fr" ? "" : language + "/"}ingredients`,
    },
    {
      name: {
        fr: "Pâtisseries",
        en: "Pastries",
        ar: "المعجنات",
      },
      href: `/${language === "fr" ? "" : language + "/"}pastries`,
    },
    {
      name: {
        fr: "Fruits",
        en: "Fruits",
        ar: "الفواكه",
      },
      href: `/${language === "fr" ? "" : language + "/"}fruits`,
    },
    {
      name: {
        fr: "Contact",
        en: "Contact",
        ar: "اتصل بنا",
      },
      href: `/${language === "fr" ? "" : language + "/"}contact`,
    },
  ]

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇹🇳" },
  ]

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/best_dattes_and_fruits?igsh=OWFxaDAzazUxdnE0&utm_source=qr",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1F2YhjL74A/?mibextid=wwXIfr",
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/best-dates-fruits",
      color: "hover:text-blue-700",
    },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleNavigation = async (href: string) => {
    setIsLoading(true)
    setIsMenuOpen(false)

    // Add a small delay for smooth transition
    await new Promise((resolve) => setTimeout(resolve, 100))
    router.push(href)
    setIsLoading(false)
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as any)
    setIsLanguageOpen(false)

    // Smooth transition when changing language
    document.body.style.opacity = "0.8"
    setTimeout(() => {
      document.body.style.opacity = "1"
    }, 200)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "navbar-glass shadow-lg backdrop-blur-xl" : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${language === "fr" ? "" : language}`}
            className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
          >
            <div className="bg-white/80 rounded px-0.5 py-1 shadow-sm group-hover:shadow-md transition-all duration-200">
              <Image
                src="/images/new-bdf-logo.png"
                alt="Best Dates & Fruits - D&F Logo"
                width={280}
                height={100}
                className="h-14 w-auto transition-all duration-200 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`text-sm font-medium transition-colors hover:text-bdf-gold relative py-2 font-inter ${
                  pathname === item.href
                    ? "text-bdf-gold"
                    : "text-gray-700 dark:text-gray-300 hover:text-bdf-gold dark:hover:text-bdf-gold"
                }`}
                disabled={isLoading}
              >
                {item.name[language as keyof typeof item.name]}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-bdf-gold rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl transition-colors ${social.color} text-gray-600 dark:text-gray-400`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                )
              })}
            </div>

            {/* Search */}
            <SearchBar />

            {/* Shopping Cart */}
            <ShoppingCart />

            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 rounded-2xl hover:bg-bdf-gold/10 transition-all duration-200"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{currentLanguage?.flag}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${isLanguageOpen ? "rotate-180" : ""}`}
                />
              </Button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3 transition-all duration-200 font-inter ${
                        language === lang.code ? "bg-bdf-gold/10 text-bdf-gold" : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && <span className="ml-auto text-bdf-gold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden rounded-2xl hover:bg-bdf-gold/10 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-sm font-medium py-3 px-4 rounded-2xl transition-all duration-200 text-left animate-slide-in-right font-inter ${
                    pathname === item.href
                      ? "bg-bdf-gold/10 text-bdf-gold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  disabled={isLoading}
                >
                  {item.name[language as keyof typeof item.name]}
                </button>
              ))}

              {/* Social Links - Mobile */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-2xl transition-colors ${social.color} bg-gray-100 dark:bg-gray-800 hover:shadow-md animate-fade-in`}
                      style={{ animationDelay: `${(navItems.length + index) * 0.1}s` }}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for language dropdown */}
      {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />}

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bdf-gold to-bdf-darkgold animate-pulse"></div>
      )}
    </nav>
  )
}

export default Navbar
