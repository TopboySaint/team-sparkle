"use client"

import { Package, Clock, CheckCircle, Truck } from "lucide-react"

export function OrdersTab() {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-10-20",
      total: 12500,
      status: "delivered",
      items: 3,
      image: "/fresh-red-tomatoes.jpg",
    },
    {
      id: "ORD-002",
      date: "2024-10-15",
      total: 8900,
      status: "in-transit",
      items: 2,
      image: "/ripe-yellow-mangoes.jpg",
    },
    {
      id: "ORD-003",
      date: "2024-10-10",
      total: 15300,
      status: "processing",
      items: 5,
      image: "/colorful-bell-peppers-red-yellow-green.jpg",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "in-transit":
        return <Truck className="w-5 h-5 text-blue-500" />
      case "processing":
        return <Clock className="w-5 h-5 text-yellow-500" />
      default:
        return <Package className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="border border-border rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Order Info */}
            <div className="flex gap-4">
              <img src={order.image || "/placeholder.svg"} alt="Order" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <p className="font-semibold text-foreground">{order.id}</p>
                <p className="text-sm text-muted-foreground">{new Date(order.date).toLocaleDateString()}</p>
                <p className="text-sm text-muted-foreground">{order.items} items</p>
              </div>
            </div>

            {/* Status and Total */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                {getStatusIcon(order.status)}
                <span className="text-sm font-medium text-foreground">{getStatusLabel(order.status)}</span>
              </div>
              <p className="font-bold text-lg text-primary">₦{order.total.toLocaleString()}</p>
              <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary-light transition-colors font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
