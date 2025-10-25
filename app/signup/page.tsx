import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center py-16">
        <SignupForm />
      </div>
      <Footer />
    </main>
  )
}
