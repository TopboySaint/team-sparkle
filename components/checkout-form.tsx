"use client"

import type React from "react"

import { useState } from "react"

export function CheckoutForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="border border-border rounded-lg p-6 bg-white">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                s <= step ? "bg-primary text-white" : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </div>
            {s < 3 && <div className={`w-12 h-1 mx-2 ${s < step ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8 text-sm">
        <span className={step >= 1 ? "text-foreground font-semibold" : "text-muted-foreground"}>Shipping</span>
        <span className={step >= 2 ? "text-foreground font-semibold" : "text-muted-foreground"}>Delivery</span>
        <span className={step >= 3 ? "text-foreground font-semibold" : "text-muted-foreground"}>Payment</span>
      </div>

      {/* Step 1: Shipping Information */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Shipping Information</h3>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 801 234 5678"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}

      {/* Step 2: Delivery Address */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Delivery Address</h3>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Street Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main Street"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Ogbomoso"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Oyo"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="210001"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Delivery Options */}
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">Delivery Options</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="delivery" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="font-medium text-foreground">Standard Delivery</p>
                  <p className="text-sm text-muted-foreground">2-3 business days - Free</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="delivery" className="w-4 h-4" />
                <div>
                  <p className="font-medium text-foreground">Express Delivery</p>
                  <p className="text-sm text-muted-foreground">Next day - ₦1,500</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="delivery" className="w-4 h-4" />
                <div>
                  <p className="font-medium text-foreground">Same Day Delivery</p>
                  <p className="text-sm text-muted-foreground">Same day - ₦3,000</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Payment Information</h3>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">Other Payment Methods</h4>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-foreground">
                Pay with Bank Transfer
              </button>
              <button className="w-full px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-foreground">
                Pay with Mobile Money
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8 pt-6 border-t border-border">
        <button
          onClick={handlePrev}
          disabled={step === 1}
          className="flex-1 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={step === 3}
          className="flex-1 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {step === 3 ? "Complete Order" : "Next"}
        </button>
      </div>
    </div>
  )
}
