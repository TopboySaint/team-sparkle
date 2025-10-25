"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQAccordionProps {
  question: string
  answer: string
}

export function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
      >
        <span className="font-semibold text-foreground text-left">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="px-6 py-4 bg-muted border-t border-border text-muted-foreground">{answer}</div>}
    </div>
  )
}
