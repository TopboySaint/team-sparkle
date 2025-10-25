"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const salesData = [
  { month: "Jan", sales: 4000, orders: 240 },
  { month: "Feb", sales: 3000, orders: 221 },
  { month: "Mar", sales: 2000, orders: 229 },
  { month: "Apr", sales: 2780, orders: 200 },
  { month: "May", sales: 1890, orders: 229 },
  { month: "Jun", sales: 2390, orders: 200 },
]

const categoryData = [
  { name: "Vegetables", value: 35 },
  { name: "Fruits", value: 25 },
  { name: "Grains", value: 20 },
  { name: "Dairy", value: 20 },
]

const farmerPerformance = [
  { name: "Farmer A", sales: 4000, products: 12 },
  { name: "Farmer B", sales: 3000, products: 8 },
  { name: "Farmer C", sales: 2000, products: 15 },
  { name: "Farmer D", sales: 2780, products: 10 },
  { name: "Farmer E", sales: 1890, products: 7 },
]

const COLORS = ["#10b981", "#059669", "#d1fae5", "#6ee7b7"]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Track sales, orders, and farmer performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Total Revenue</div>
          <div className="text-3xl font-bold text-primary mt-2">₦2.4M</div>
          <div className="text-xs text-green-600 mt-2">+12% from last month</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Total Orders</div>
          <div className="text-3xl font-bold text-primary mt-2">1,234</div>
          <div className="text-xs text-green-600 mt-2">+8% from last month</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Active Farmers</div>
          <div className="text-3xl font-bold text-primary mt-2">45</div>
          <div className="text-xs text-green-600 mt-2">+3 new farmers</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Avg Order Value</div>
          <div className="text-3xl font-bold text-primary mt-2">₦1,950</div>
          <div className="text-xs text-green-600 mt-2">+5% from last month</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sales Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="orders" stroke="#059669" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Distribution */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Product Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Farmer Performance */}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-foreground mb-4">Top Farmer Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={farmerPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#10b981" />
              <Bar dataKey="products" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
