import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard"

export default function AdminAnalyticsPage() {
  return (
    <div className="flex h-screen bg-muted">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-auto">
          <div className="p-6 md:p-8">
            <AnalyticsDashboard />
          </div>
        </main>
      </div>
    </div>
  )
}
