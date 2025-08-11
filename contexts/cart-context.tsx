"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

export interface CartItem {
  id: string
  name: { fr: string; en?: string; ar?: string }
  price: { fr: string; en?: string; ar?: string }
  numericPrice: number
  image: string
  quantity: number
  category: string
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isOpen: boolean
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
        const newTotal = updatedItems.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0)
        const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0)

        return {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount,
        }
      } else {
        const newItem = { ...action.payload, quantity: 1 }
        const updatedItems = [...state.items, newItem]
        const newTotal = updatedItems.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0)
        const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0)

        return {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount,
        }
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.payload)
      const newTotal = updatedItems.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0)
      const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      }
    }

    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_ITEM", payload: action.payload.id })
      }

      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
      )
      const newTotal = updatedItems.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0)
      const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      }
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        total: 0,
        itemCount: 0,
      }

    case "LOAD_CART":
      return {
        ...action.payload,
        isOpen: state.isOpen, // Preserve the current open state
      }

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      }

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false,
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
              const savedCart = localStorage.getItem("best-dates-fruits-cart")
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        // Ensure the parsed cart has all required properties
        if (parsedCart && typeof parsedCart === "object" && Array.isArray(parsedCart.items)) {
          dispatch({
            type: "LOAD_CART",
            payload: {
              items: parsedCart.items || [],
              total: parsedCart.total || 0,
              itemCount: parsedCart.itemCount || 0,
              isOpen: false, // Always start with cart closed
            },
          })
        }
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      // Reset to initial state if there's an error
      dispatch({ type: "CLEAR_CART" })
    }
  }, [])

  // Save cart to localStorage whenever it changes (but not the isOpen state)
  useEffect(() => {
    try {
      const cartToSave = {
        items: state.items,
        total: state.total,
        itemCount: state.itemCount,
      }
              localStorage.setItem("best-dates-fruits-cart", JSON.stringify(cartToSave))
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }, [state.items, state.total, state.itemCount])

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
