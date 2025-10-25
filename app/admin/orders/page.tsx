import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminNavbar } from "@/components/admin/admin-navbar"
import { OrderManagement } from "@/components/admin/order-management"

export default function AdminOrdersPage() {
  return (
    <div className="flex h-screen bg-muted">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        <main className="flex-1 overflow-auto">
          <OrderManagement />
        </main>
      </div>
    </div>
  )
}
