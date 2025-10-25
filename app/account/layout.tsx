import type React from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute requiredRole="consumer">{children}</ProtectedRoute>
}
