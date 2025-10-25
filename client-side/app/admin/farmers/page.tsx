import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminNavbar } from "@/components/admin/admin-navbar"
import { FarmerManagement } from "@/components/admin/farmer-management"

export default function AdminFarmersPage() {
  return (
    <div className="flex h-screen bg-muted">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        <main className="flex-1 overflow-auto">
          <FarmerManagement />
        </main>
      </div>
    </div>
  )
}
