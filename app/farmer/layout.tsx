import type React from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute requiredRole="farmer">{children}</ProtectedRoute>
}
