"use client"

export function TopProducts() {
  const products = [
    { id: 1, name: "Fresh Tomatoes", sales: 234, revenue: 585000 },
    { id: 2, name: "Organic Spinach", sales: 189, revenue: 340200 },
    { id: 3, name: "Sweet Mangoes", sales: 156, revenue: 702000 },
    { id: 4, name: "Fresh Carrots", sales: 142, revenue: 284000 },
    { id: 5, name: "Bell Peppers", sales: 128, revenue: 409600 },
  ]

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Top Products</h3>
        <button className="text-primary hover:text-primary-dark font-medium text-sm">View All</button>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors"
          >
            <div className="flex-1">
              <p className="font-medium text-foreground text-sm">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.sales} sales</p>
            </div>
            <p className="font-semibold text-primary">₦{(product.revenue / 1000).toFixed(0)}K</p>
          </div>
        ))}
      </div>
    </div>
  )
}
