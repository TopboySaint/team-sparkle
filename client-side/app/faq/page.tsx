import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQAccordion } from "@/components/faq-accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "How fresh is the produce?",
      answer:
        "All our produce is delivered within 24 hours of harvest, ensuring maximum freshness and nutritional value.",
    },
    {
      question: "What areas do you deliver to?",
      answer:
        "We currently deliver within Ogbomoso and surrounding areas. Check our delivery map for your specific location.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Simply browse our products, add items to your cart, and proceed to checkout. You can pay with card or cash on delivery.",
    },
    {
      question: "Can I return products?",
      answer:
        "Yes, if you receive any product that doesn't meet our quality standards, we offer full refunds or replacements.",
    },
    {
      question: "Do you offer bulk orders?",
      answer: "Yes! We offer special pricing for bulk orders. Contact us for more information about wholesale options.",
    },
    {
      question: "How can I become a farmer partner?",
      answer:
        "We're always looking for quality farmers. Visit our farmer signup page or contact us directly to learn more.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-12">Find answers to common questions about Oja'ya</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
