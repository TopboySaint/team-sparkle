"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice: number
  image: string
  rating: number
  reviews: number
  farmer: string
  inStock: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-48">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 left-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-md"
          aria-label="Add to favorites"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
        </button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <p className="text-xs text-primary font-semibold uppercase">{product.category}</p>

        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Farmer */}
        <p className="text-sm text-muted-foreground">by {product.farmer}</p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-foreground">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">
              ₦{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!product.inStock}
          className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
