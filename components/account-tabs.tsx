"use client"

import { useState } from "react"
import { ProfileTab } from "@/components/account/profile-tab"
import { OrdersTab } from "@/components/account/orders-tab"
import { AddressesTab } from "@/components/account/addresses-tab"
import { PreferencesTab } from "@/components/account/preferences-tab"

export function AccountTabs() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "orders", label: "Orders" },
    { id: "addresses", label: "Addresses" },
    { id: "preferences", label: "Preferences" },
  ]

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1">
        <div className="border border-border rounded-lg overflow-hidden bg-white">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full px-6 py-4 text-left font-medium transition-colors border-b border-border last:border-b-0 ${
                activeTab === tab.id
                  ? "bg-primary-light text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="lg:col-span-3">
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "orders" && <OrdersTab />}
        {activeTab === "addresses" && <AddressesTab />}
        {activeTab === "preferences" && <PreferencesTab />}
      </div>
    </div>
  )
}
