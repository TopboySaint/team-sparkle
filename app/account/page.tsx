import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AccountTabs } from "@/components/account-tabs"

export default function AccountPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-light via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Account</h1>
          <p className="text-lg text-muted-foreground">Manage your profile, orders, and preferences</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AccountTabs />
        </div>
      </section>

      <Footer />
    </main>
  )
}
