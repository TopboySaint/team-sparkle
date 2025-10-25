"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Search } from "lucide-react"
import { Card } from "@/components/ui/card"

export function FarmerManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const farmers = [
    {
      id: 1,
      name: "Ade's Farm",
      owner: "Adekunle Okafor",
      email: "ade@farm.com",
      phone: "+234 801 234 5678",
      products: 12,
      revenue: "₦450,000",
      status: "Active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Green Valley Farm",
      owner: "Folake Adeyemi",
      email: "folake@farm.com",
      phone: "+234 802 345 6789",
      products: 18,
      revenue: "₦680,000",
      status: "Active",
      joinDate: "2024-02-20",
    },
    {
      id: 3,
      name: "Sunshine Farm",
      owner: "Tunde Oluwaseun",
      email: "tunde@farm.com",
      phone: "+234 803 456 7890",
      products: 8,
      revenue: "₦220,000",
      status: "Pending",
      joinDate: "2024-10-01",
    },
    {
      id: 4,
      name: "Fresh Harvest Farm",
      owner: "Chioma Nwankwo",
      email: "chioma@farm.com",
      phone: "+234 804 567 8901",
      products: 15,
      revenue: "₦520,000",
      status: "Active",
      joinDate: "2024-03-10",
    },
  ]

  const filteredFarmers = farmers.filter((farmer) => {
    const matchesSearch =
      farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || farmer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Farmers Management</h2>
          <p className="text-muted-foreground mt-1">Manage and monitor farmer accounts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
          <Plus className="w-5 h-5" />
          Add Farmer
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by farm name, owner, or email..."
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
          <option>Active</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Total Farmers</div>
          <div className="text-2xl font-bold text-primary mt-1">45</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Active Farmers</div>
          <div className="text-2xl font-bold text-green-600 mt-1">38</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Pending Approval</div>
          <div className="text-2xl font-bold text-yellow-600 mt-1">7</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Total Revenue</div>
          <div className="text-2xl font-bold text-primary mt-1">₦2.4M</div>
        </Card>
      </div>

      {/* Farmers Table */}
      <div className="bg-white border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Farm Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Owner</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Contact</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Products</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Revenue</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFarmers.map((farmer) => (
                <tr key={farmer.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{farmer.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{farmer.owner}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    <div>{farmer.email}</div>
                    <div className="text-xs">{farmer.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{farmer.products} products</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{farmer.revenue}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        farmer.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {farmer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Edit farmer">
                      <Edit2 className="w-4 h-4 text-primary" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Delete farmer">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredFarmers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No farmers found matching your criteria</p>
        </div>
      )}
    </div>
  )
}
