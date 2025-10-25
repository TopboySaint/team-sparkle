"use client"

import { useState } from "react"
import { Bell, Lock, Eye } from "lucide-react"

export function PreferencesTab() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    twoFactor: false,
  })

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <div className="border border-border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
        </div>

        <div className="space-y-4">
          {[
            { key: "emailNotifications", label: "Email Notifications", description: "Receive updates via email" },
            { key: "smsNotifications", label: "SMS Notifications", description: "Receive updates via SMS" },
            { key: "orderUpdates", label: "Order Updates", description: "Get notified about your orders" },
            { key: "promotions", label: "Promotions", description: "Receive promotional offers" },
            { key: "newsletter", label: "Newsletter", description: "Subscribe to our weekly newsletter" },
          ].map(({ key, label, description }) => (
            <div key={key} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <div>
                <p className="font-medium text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <button
                onClick={() => handleToggle(key as keyof typeof preferences)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  preferences[key as keyof typeof preferences] ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    preferences[key as keyof typeof preferences] ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="border border-border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Security</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <p className="font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <button
              onClick={() => handleToggle("twoFactor")}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                preferences.twoFactor ? "bg-primary" : "bg-muted"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  preferences.twoFactor ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <button className="w-full px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary-light transition-colors font-semibold">
            Change Password
          </button>
        </div>
      </div>

      {/* Privacy */}
      <div className="border border-border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Privacy</h3>
        </div>

        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-foreground">
            View Privacy Policy
          </button>
          <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-foreground">
            Download My Data
          </button>
          <button className="w-full text-left px-4 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-medium">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
