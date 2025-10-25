"use client"

import { useState } from "react"
import { Eye, Download, Search } from "lucide-react"
import { Card } from "@/components/ui/card"

export function OrderManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const orders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      email: "john@example.com",
      date: "2025-10-24",
      amount: "₦7,500",
      items: 3,
      status: "Delivered",
      farmer: "Ade's Farm",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      date: "2025-10-23",
      amount: "₦5,200",
      items: 2,
      status: "Processing",
      farmer: "Green Valley Farm",
    },
    {
      id: "ORD-003",
      customer: "Mike Johnson",
      email: "mike@example.com",
      date: "2025-10-22",
      amount: "₦9,800",
      items: 5,
      status: "Pending",
      farmer: "Sunshine Farm",
    },
    {
      id: "ORD-004",
      customer: "Sarah Williams",
      email: "sarah@example.com",
      date: "2025-10-21",
      amount: "₦6,300",
      items: 4,
      status: "Delivered",
      farmer: "Fresh Harvest Farm",
    },
    {
      id: "ORD-005",
      customer: "David Brown",
      email: "david@example.com",
      date: "2025-10-20",
      amount: "₦4,100",
      items: 2,
      status: "Shipped",
      farmer: "Ade's Farm",
    },
  ]

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "Pending").length,
    processing: orders.filter((o) => o.status === "Processing").length,
    shipped: orders.filter((o) => o.status === "Shipped").length,
    delivered: orders.filter((o) => o.status === "Delivered").length,
  }

  return (
    <div className="p-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Orders Management</h2>
        <p className="text-muted-foreground mt-1">Track and manage all customer orders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-6">
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Total Orders</div>
          <div className="text-2xl font-bold text-primary mt-1">{stats.total}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Pending</div>
          <div className="text-2xl font-bold text-yellow-600 mt-1">{stats.pending}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Processing</div>
          <div className="text-2xl font-bold text-blue-600 mt-1">{stats.processing}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Shipped</div>
          <div className="text-2xl font-bold text-purple-600 mt-1">{stats.shipped}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Delivered</div>
          <div className="text-2xl font-bold text-green-600 mt-1">{stats.delivered}</div>
        </Card>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by order ID, customer name, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>

      <div className="bg-white border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Items</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Farmer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{order.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="font-medium text-foreground">{order.customer}</div>
                    <div className="text-xs text-muted-foreground">{order.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{order.items} items</td>
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{order.amount}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{order.farmer}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "Shipped"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="View order details">
                      <Eye className="w-4 h-4 text-primary" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Download invoice">
                      <Download className="w-4 h-4 text-primary" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No orders found matching your criteria</p>
        </div>
      )}
    </div>
  )
}
