"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/ojaya.png"
                alt="Oja'ya Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Oja'ya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-primary hover:bg-primary-light rounded-lg transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 text-center text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="flex-1 px-4 py-2 text-center bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
