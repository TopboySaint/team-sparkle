"use client"

export function OrderSummary() {
  const items = [
    { id: 1, name: "Fresh Tomatoes", quantity: 2, price: 2500 },
    { id: 2, name: "Organic Spinach", quantity: 1, price: 1800 },
    { id: 3, name: "Sweet Mangoes", quantity: 3, price: 4500 },
  ]

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 1500
  const tax = Math.round(subtotal * 0.075)
  const total = subtotal + shipping + tax

  return (
    <div className="border border-border rounded-lg p-6 bg-white sticky top-20">
      <h3 className="text-lg font-semibold text-foreground mb-6">Order Summary</h3>

      {/* Items */}
      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-start">
            <div>
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold text-foreground">₦{(item.price * item.quantity).toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Shipping</span>
          <span>₦{shipping.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Tax (7.5%)</span>
          <span>₦{tax.toLocaleString()}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-primary">₦{total.toLocaleString()}</span>
      </div>

      {/* Promo Code */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter promo code"
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
      </div>

      {/* Security Info */}
      <div className="bg-primary-light p-4 rounded-lg text-sm text-primary">
        <p className="font-semibold mb-1">🔒 Secure Checkout</p>
        <p>Your payment information is encrypted and secure.</p>
      </div>
    </div>
  )
}
