"use client"

import { TrendingUp, Package, ShoppingCart, Users } from "lucide-react"
import { RecentOrders } from "@/components/admin/recent-orders"
import { TopProducts } from "@/components/admin/top-products"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Revenue",
      value: "₦2,450,000",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-500",
    },
    {
      title: "Products",
      value: "456",
      change: "+5.1%",
      icon: Package,
      color: "text-purple-500",
    },
    {
      title: "Active Farmers",
      value: "52",
      change: "+2.3%",
      icon: Users,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                <div className={`p-2 bg-muted rounded-lg ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-sm text-green-500 font-semibold">{stat.change} from last month</p>
            </div>
          )
        })}
      </div>

      {/* Charts and Tables */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div className="lg:col-span-1">
          <TopProducts />
        </div>
      </div>
    </div>
  )
}
