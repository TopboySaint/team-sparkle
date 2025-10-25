"use client"

import { useState } from "react"
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react"
import { ProductForm } from "@/components/admin/product-form"

export function ProductsManagement() {
  const [showForm, setShowForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 2500,
      stock: 145,
      farmer: "Ade's Farm",
      status: "active",
    },
    {
      id: 2,
      name: "Organic Spinach",
      category: "Vegetables",
      price: 1800,
      stock: 89,
      farmer: "Green Valley Farm",
      status: "active",
    },
    {
      id: 3,
      name: "Sweet Mangoes",
      category: "Fruits",
      price: 4500,
      stock: 0,
      farmer: "Tropical Harvest",
      status: "out-of-stock",
    },
  ])

  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {/* Add Product Form */}
      {showForm && <ProductForm onClose={() => setShowForm(false)} />}

      {/* Search and Filter */}
      <div className="flex gap-4">
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
        <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white">
          <option>All Categories</option>
          <option>Vegetables</option>
          <option>Fruits</option>
          <option>Grains</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground text-sm">Product Name</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground text-sm">Category</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground text-sm">Price</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground text-sm">Stock</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground text-sm">Farmer</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground text-sm">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-6 font-medium text-foreground">{product.name}</td>
                  <td className="py-4 px-6 text-foreground">{product.category}</td>
                  <td className="py-4 px-6 font-semibold text-foreground">₦{product.price.toLocaleString()}</td>
                  <td className="py-4 px-6 text-foreground">{product.stock} units</td>
                  <td className="py-4 px-6 text-muted-foreground">{product.farmer}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.status === "active" ? "Active" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
