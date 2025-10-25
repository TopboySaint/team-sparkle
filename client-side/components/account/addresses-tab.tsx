"use client"

import { useState } from "react"
import { MapPin, Plus, Trash2, Edit2 } from "lucide-react"

export function AddressesTab() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      address: "123 Main Street",
      city: "Ogbomoso",
      state: "Oyo",
      zipCode: "210001",
      phone: "+234 801 234 5678",
      isDefault: true,
    },
    {
      id: 2,
      label: "Office",
      address: "456 Business Avenue",
      city: "Ogbomoso",
      state: "Oyo",
      zipCode: "210002",
      phone: "+234 802 345 6789",
      isDefault: false,
    },
  ])

  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      {/* Add Address Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
      >
        <Plus className="w-5 h-5" />
        Add New Address
      </button>

      {/* Add Address Form */}
      {showForm && (
        <div className="border border-border rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold text-foreground mb-4">Add New Address</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Address Label (e.g., Home, Office)"
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="City"
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="State"
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold">
              Save Address
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Addresses List */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="border border-border rounded-lg p-6 bg-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{address.label}</p>
                  {address.isDefault && (
                    <span className="text-xs bg-primary-light text-primary px-2 py-1 rounded">Default</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Edit2 className="w-5 h-5 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
            <p className="text-muted-foreground">{address.address}</p>
            <p className="text-muted-foreground">
              {address.city}, {address.state} {address.zipCode}
            </p>
            <p className="text-muted-foreground">{address.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
