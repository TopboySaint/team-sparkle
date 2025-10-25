"use client"

import type React from "react"

import { useState } from "react"
import { Save } from "lucide-react"

export function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: "Oja'ya",
    email: "admin@ojaya.ng",
    phone: "+234 XXX XXX XXXX",
    address: "Ogbomoso, Nigeria",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Settings saved:", settings)
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-foreground mb-8">Settings</h2>

      <div className="max-w-2xl bg-white border border-border rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Site Name</label>
            <input
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            <Save className="w-5 h-5" />
            Save Settings
          </button>
        </form>
      </div>
    </div>
  )
}
