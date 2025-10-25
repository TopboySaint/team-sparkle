"use client"

import { useState } from "react"
import { Eye, EyeOff, Copy, Check } from "lucide-react"
import { DUMMY_USERS } from "@/lib/dummy-data"

export function DevelopmentCredentials() {
  const [isVisible, setIsVisible] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // Only show in development
  if (process.env.NODE_ENV === "production") {
    return null
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const CredentialRow = ({ label, email, password, role }: { label: string; email: string; password: string; role: string }) => (
    <div className="bg-muted/50 rounded-lg p-3 space-y-2">
      <div className="font-semibold text-sm text-foreground">{label}</div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center justify-between gap-2">
          <span className="text-muted-foreground">Email:</span>
          <div className="flex items-center gap-1">
            <code className="bg-background px-2 py-1 rounded">{email}</code>
            <button
              onClick={() => copyToClipboard(email, `${role}-email`)}
              className="p-1 hover:bg-background rounded"
              title="Copy email"
            >
              {copiedField === `${role}-email` ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-muted-foreground">Password:</span>
          <div className="flex items-center gap-1">
            <code className="bg-background px-2 py-1 rounded">{password}</code>
            <button
              onClick={() => copyToClipboard(password, `${role}-password`)}
              className="p-1 hover:bg-background rounded"
              title="Copy password"
            >
              {copiedField === `${role}-password` ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mt-8 w-full max-w-md">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm text-yellow-900 flex items-center gap-2">
            🔧 Development Credentials
          </h3>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="p-1 hover:bg-yellow-100 rounded"
            title={isVisible ? "Hide credentials" : "Show credentials"}
          >
            {isVisible ? (
              <EyeOff className="h-4 w-4 text-yellow-700" />
            ) : (
              <Eye className="h-4 w-4 text-yellow-700" />
            )}
          </button>
        </div>
        
        {isVisible ? (
          <div className="space-y-3">
            <CredentialRow
              label="👤 Admin Account"
              email={DUMMY_USERS.admin.email}
              password={DUMMY_USERS.admin.password}
              role="admin"
            />
            <CredentialRow
              label="🌾 Farmer Account"
              email={DUMMY_USERS.farmer.email}
              password={DUMMY_USERS.farmer.password}
              role="farmer"
            />
            <CredentialRow
              label="🛒 Consumer Account"
              email={DUMMY_USERS.consumer.email}
              password={DUMMY_USERS.consumer.password}
              role="consumer"
            />
            <p className="text-xs text-yellow-800 mt-3 italic">
              Click the copy icons to copy credentials. Select the matching role above before logging in.
            </p>
          </div>
        ) : (
          <p className="text-xs text-yellow-800">
            Click the eye icon to view test credentials
          </p>
        )}
      </div>
    </div>
  )
}
