"use client"

import { Eye } from "lucide-react"

export function RecentOrders() {
  const orders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      amount: 12500,
      status: "completed",
      date: "2024-10-20",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      amount: 8900,
      status: "processing",
      date: "2024-10-19",
    },
    {
      id: "ORD-003",
      customer: "Mike Johnson",
      amount: 15300,
      status: "pending",
      date: "2024-10-18",
    },
    {
      id: "ORD-004",
      customer: "Sarah Williams",
      amount: 6700,
      status: "completed",
      date: "2024-10-17",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
        <button className="text-primary hover:text-primary-dark font-medium text-sm">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm">Order ID</th>
              <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm">Customer</th>
              <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm">Date</th>
              <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-border hover:bg-muted transition-colors">
                <td className="py-4 px-4 font-medium text-foreground">{order.id}</td>
                <td className="py-4 px-4 text-foreground">{order.customer}</td>
                <td className="py-4 px-4 font-semibold text-foreground">₦{order.amount.toLocaleString()}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4 text-muted-foreground">{order.date}</td>
                <td className="py-4 px-4">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
