"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ProductFilters() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("category")

  const categories = [
    { id: "vegetables", label: "Vegetables", count: 45 },
    { id: "fruits", label: "Fruits", count: 38 },
    { id: "grains", label: "Grains & Cereals", count: 22 },
    { id: "herbs", label: "Herbs & Spices", count: 18 },
    { id: "dairy", label: "Dairy Products", count: 12 },
  ]

  const priceRanges = [
    { id: "under-1000", label: "Under ₦1,000", min: 0, max: 1000 },
    { id: "1000-5000", label: "₦1,000 - ₦5,000", min: 1000, max: 5000 },
    { id: "5000-10000", label: "₦5,000 - ₦10,000", min: 5000, max: 10000 },
    { id: "over-10000", label: "Over ₦10,000", min: 10000, max: Number.POSITIVE_INFINITY },
  ]

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="border border-border rounded-lg p-4">
        <button
          onClick={() => setExpandedCategory(expandedCategory === "category" ? null : "category")}
          className="w-full flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors"
        >
          Categories
          <ChevronDown
            className={`w-5 h-5 transition-transform ${expandedCategory === "category" ? "rotate-180" : ""}`}
          />
        </button>
        {expandedCategory === "category" && (
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary cursor-pointer"
                  defaultChecked={false}
                />
                <span className="text-muted-foreground hover:text-foreground transition-colors">{category.label}</span>
                <span className="text-xs text-muted-foreground ml-auto">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border border-border rounded-lg p-4">
        <button
          onClick={() => setExpandedCategory(expandedCategory === "price" ? null : "price")}
          className="w-full flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors"
        >
          Price Range
          <ChevronDown className={`w-5 h-5 transition-transform ${expandedCategory === "price" ? "rotate-180" : ""}`} />
        </button>
        {expandedCategory === "price" && (
          <div className="mt-4 space-y-3">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  className="w-4 h-4 border-border text-primary cursor-pointer"
                  defaultChecked={false}
                />
                <span className="text-muted-foreground hover:text-foreground transition-colors">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Availability Filter */}
      <div className="border border-border rounded-lg p-4">
        <button
          onClick={() => setExpandedCategory(expandedCategory === "availability" ? null : "availability")}
          className="w-full flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors"
        >
          Availability
          <ChevronDown
            className={`w-5 h-5 transition-transform ${expandedCategory === "availability" ? "rotate-180" : ""}`}
          />
        </button>
        {expandedCategory === "availability" && (
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border text-primary cursor-pointer"
                defaultChecked={true}
              />
              <span className="text-muted-foreground hover:text-foreground transition-colors">In Stock</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border text-primary cursor-pointer"
                defaultChecked={false}
              />
              <span className="text-muted-foreground hover:text-foreground transition-colors">Pre-Order</span>
            </label>
          </div>
        )}
      </div>

      {/* Clear Filters Button */}
      <button className="w-full px-4 py-2 border border-border rounded-lg text-primary hover:bg-primary-light transition-colors font-semibold">
        Clear Filters
      </button>
    </div>
  )
}
