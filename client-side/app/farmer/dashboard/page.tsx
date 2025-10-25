import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function FarmerDashboardPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Farmer Dashboard</h1>
          <p className="text-muted-foreground mb-8">Manage your products and track your sales</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground">Total Products</div>
              <div className="text-3xl font-bold text-primary mt-2">12</div>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground">Total Sales</div>
              <div className="text-3xl font-bold text-primary mt-2">₦450,000</div>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground">Orders This Month</div>
              <div className="text-3xl font-bold text-primary mt-2">28</div>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground">Avg Rating</div>
              <div className="text-3xl font-bold text-primary mt-2">4.8/5</div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Recent Orders</h2>
            <p className="text-muted-foreground">Your recent orders will appear here</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
