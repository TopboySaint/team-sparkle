import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"
import { DevelopmentCredentials } from "@/components/development-credentials"

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-16">
        <LoginForm />
        <DevelopmentCredentials />
      </div>
      <Footer />
    </main>
  )
}
