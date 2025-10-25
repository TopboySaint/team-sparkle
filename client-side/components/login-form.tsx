"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [userType, setUserType] = useState<"consumer" | "farmer" | "admin">("consumer")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await login(formData.email, formData.password, userType)
      // Redirect based on user type
      if (userType === "admin") {
        router.push("/admin")
      } else if (userType === "farmer") {
        router.push("/farmer/dashboard")
      } else {
        router.push("/products")
      }
    } catch (err) {
      setError("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
        <p className="text-muted-foreground mb-8">Sign in to your Oja'ya account</p>

        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setUserType("consumer")}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
              userType === "consumer" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            Consumer
          </button>
          <button
            type="button"
            onClick={() => setUserType("farmer")}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
              userType === "farmer" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            Farmer
          </button>
          <button
            type="button"
            onClick={() => setUserType("admin")}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
              userType === "admin" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            Admin
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
