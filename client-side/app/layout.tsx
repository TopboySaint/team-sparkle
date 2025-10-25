import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oja'ya - Fresh Farm Produce",
  description: "Direct from farmers to your table in Ogbomoso",
  generator: 'v0.app',
  icons: {
    icon: '/ojaya.png',
    shortcut: '/ojaya.png',
    apple: '/ojaya.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ojaya.png" type="image/png" />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
