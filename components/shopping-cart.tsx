"use client"

import { useState, useEffect } from "react"
import { ShoppingCartIcon as CartIcon, X, Plus, Minus, Trash2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function ShoppingCart() {
  const [isAnimating, setIsAnimating] = useState(false)
  const { state, dispatch } = useCart()
  const { language } = useLanguage()

  // Safety check to ensure state is properly initialized
  const safeState = {
    items: state?.items || [],
    total: state?.total || 0,
    itemCount: state?.itemCount || 0,
    isOpen: state?.isOpen || false,
  }

  // Smooth cart opening/closing animation
  const toggleCart = () => {
    if (safeState.isOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        dispatch({ type: "CLOSE_CART" })
        setIsAnimating(false)
      }, 200)
    } else {
      dispatch({ type: "OPEN_CART" })
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const handleCheckout = () => {
    const message =
      language === "fr"
        ? "Merci pour votre intérêt ! Notre équipe vous contactera bientôt pour finaliser votre commande."
        : language === "en"
          ? "Thank you for your interest! Our team will contact you soon to finalize your order."
          : "شكراً لاهتمامك! سيتصل بك فريقنا قريباً لإنهاء طلبك."

    alert(message)
    dispatch({ type: "CLOSE_CART" })
  }

  const formatPrice = (price: number) => {
    return `${price.toFixed(2)} TND`
  }

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (safeState.isOpen && !(event.target as Element).closest(".cart-container")) {
        toggleCart()
      }
    }

    if (safeState.isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [safeState.isOpen])

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="relative rounded-2xl hover:bg-bdf-gold/10 transition-all duration-200 transform hover:scale-105"
        onClick={toggleCart}
        aria-label="Shopping cart"
      >
        <CartIcon className="h-5 w-5" />
        {safeState.itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-bdf-gold text-black text-xs animate-pulse">
            {safeState.itemCount}
          </Badge>
        )}
      </Button>

      {/* Cart Overlay */}
      {safeState.isOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className={`cart-container fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out ${
              isAnimating ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-4 bg-gradient-to-r from-bdf-gold/10 to-orange-100/20">
                <h2 className="text-lg font-semibold text-bdf-darkgold flex items-center">
                  <CartIcon className="h-5 w-5 mr-2" />
                  {language === "fr" ? "Panier" : language === "en" ? "Cart" : "السلة"}
                  {safeState.itemCount > 0 && (
                    <Badge className="ml-2 bg-bdf-gold text-black">{safeState.itemCount}</Badge>
                  )}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleCart}
                  className="rounded-full hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {safeState.items.length === 0 ? (
                  <div className="flex h-full items-center justify-center text-center">
                    <div className="animate-fade-in">
                      <CartIcon className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500 mb-4 text-lg">
                        {language === "fr"
                          ? "Votre panier est vide"
                          : language === "en"
                            ? "Your cart is empty"
                            : "سلتك فارغة"}
                      </p>
                      <p className="text-gray-400 text-sm mb-6">
                        {language === "fr"
                          ? "Découvrez nos délicieuses dattes tunisiennes"
                          : language === "en"
                            ? "Discover our delicious Tunisian dates"
                            : "اكتشف تمورنا التونسية اللذيذة"}
                      </p>
                      <Button
                        onClick={toggleCart}
                        className="bg-bdf-gold text-black hover:bg-bdf-darkgold transition-all duration-200 transform hover:scale-105"
                      >
                        {language === "fr"
                          ? "Parcourir les Produits"
                          : language === "en"
                            ? "Browse Products"
                            : "تصفح المنتجات"}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {safeState.items.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 rounded-2xl border border-gray-200 dark:border-gray-700 p-3 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name?.fr || "Product"}
                            fill
                            className="object-cover transition-transform duration-200 hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium truncate text-bdf-darkgold">
                            {item.name?.fr || "Product"}
                          </h3>
                          <p className="text-sm text-gray-500">{item.price?.fr || "Price"}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 bg-transparent hover:bg-bdf-gold/20 border-bdf-gold/30 transition-all duration-200"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium bg-bdf-gold/10 rounded px-2 py-1">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 bg-transparent hover:bg-bdf-gold/20 border-bdf-gold/30 transition-all duration-200"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {safeState.items.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>{language === "fr" ? "Total:" : language === "en" ? "Total:" : "المجموع:"}</span>
                    <span className="text-bdf-gold">{formatPrice(safeState.total)}</span>
                  </div>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-bdf-gold text-black hover:bg-bdf-darkgold transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                      onClick={handleCheckout}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {language === "fr" ? "Commander" : language === "en" ? "Checkout" : "الطلب"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-gray-300 hover:bg-gray-100 transition-all duration-200"
                      onClick={clearCart}
                    >
                      {language === "fr" ? "Vider le panier" : language === "en" ? "Clear cart" : "إفراغ السلة"}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    {language === "fr"
                      ? "Notre équipe vous contactera pour finaliser votre commande"
                      : language === "en"
                        ? "Our team will contact you to finalize your order"
                        : "سيتصل بك فريقنا لإنهاء طلبك"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
