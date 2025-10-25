"use client"

import { useState } from "react"

export function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState(5000)

  const categories = [
    { id: "all", label: "All Products" },
    { id: "vegetables", label: "Vegetables" },
    { id: "fruits", label: "Fruits" },
    { id: "leafy", label: "Leafy Greens" },
    { id: "roots", label: "Root Vegetables" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <span className="text-muted-foreground hover:text-foreground transition-colors">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-foreground mb-4">Price Range</h3>
        <input
          type="range"
          min="0"
          max="10000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>₦0</span>
          <span>₦{priceRange.toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold">
        Apply Filters
      </button>
    </div>
  )
}
