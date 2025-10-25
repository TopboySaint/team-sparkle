import type React from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute requiredRole="consumer">{children}</ProtectedRoute>
}
