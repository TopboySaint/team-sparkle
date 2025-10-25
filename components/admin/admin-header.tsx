"use client"

import { Bell, Search, User } from "lucide-react"

export function AdminHeader() {
  return (
    <header className="bg-white border-b border-border px-6 md:px-8 py-4 flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-6">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <User className="w-6 h-6 text-white" />
        </div>
      </div>
    </header>
  )
}
