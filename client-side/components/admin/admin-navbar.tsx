import { Bell, Settings, User } from "lucide-react"

export function AdminNavbar() {
  return (
    <nav className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <User className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </nav>
  )
}
