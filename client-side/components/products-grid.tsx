"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { ProductCard } from "@/components/product-card"

export function ProductsGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 2500,
      originalPrice: 3000,
      image: "/fresh-red-tomatoes.jpg",
      rating: 4.8,
      reviews: 124,
      farmer: "Ade's Farm",
      inStock: true,
    },
    {
      id: 2,
      name: "Organic Spinach",
      category: "Vegetables",
      price: 1800,
      originalPrice: 2200,
      image: "/fresh-green-spinach-leaves.jpg",
      rating: 4.9,
      reviews: 89,
      farmer: "Green Valley Farm",
      inStock: true,
    },
    {
      id: 3,
      name: "Sweet Mangoes",
      category: "Fruits",
      price: 4500,
      originalPrice: 5500,
      image: "/ripe-yellow-mangoes.jpg",
      rating: 4.7,
      reviews: 156,
      farmer: "Tropical Harvest",
      inStock: true,
    },
    {
      id: 4,
      name: "Fresh Carrots",
      category: "Vegetables",
      price: 2000,
      originalPrice: 2500,
      image: "/orange-fresh-carrots.jpg",
      rating: 4.6,
      reviews: 98,
      farmer: "Root Vegetables Co.",
      inStock: true,
    },
    {
      id: 5,
      name: "Bananas (Bunch)",
      category: "Fruits",
      price: 3500,
      originalPrice: 4200,
      image: "/yellow-ripe-bananas-bunch.jpg",
      rating: 4.8,
      reviews: 203,
      farmer: "Fruit Paradise",
      inStock: true,
    },
    {
      id: 6,
      name: "Bell Peppers Mix",
      category: "Vegetables",
      price: 3200,
      originalPrice: 4000,
      image: "/colorful-bell-peppers-red-yellow-green.jpg",
      rating: 4.7,
      reviews: 112,
      farmer: "Pepper Patch Farm",
      inStock: true,
    },
    {
      id: 7,
      name: "Watermelon",
      category: "Fruits",
      price: 5000,
      originalPrice: 6500,
      image: "/fresh-red-watermelon.jpg",
      rating: 4.9,
      reviews: 178,
      farmer: "Summer Harvest",
      inStock: true,
    },
    {
      id: 8,
      name: "Lettuce Head",
      category: "Vegetables",
      price: 1500,
      originalPrice: 2000,
      image: "/fresh-green-lettuce-head.jpg",
      rating: 4.5,
      reviews: 67,
      farmer: "Green Valley Farm",
      inStock: true,
    },
  ]

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-6">
      {/* Search and Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">Showing {filteredProducts.length} products</div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No products found matching your search.</p>
        </div>
      )}
    </div>
  )
}
