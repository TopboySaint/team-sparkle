"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2 } from "lucide-react"

export function ProductManagement() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: "₦2,500",
      stock: 150,
      farmer: "Ade's Farm",
    },
    {
      id: 2,
      name: "Organic Lettuce",
      category: "Leafy Greens",
      price: "₦1,800",
      stock: 200,
      farmer: "Green Valley Farm",
    },
  ])

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">Products</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <div className="bg-white border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Product Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Farmer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-border hover:bg-muted">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-foreground font-semibold">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{product.stock} units</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{product.farmer}</td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-primary" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
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
