import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">About Oja'ya</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              Oja'ya is dedicated to connecting consumers with fresh farm produce directly from local farmers in
              Ogbomoso. We believe in supporting our farming community while providing you with the freshest,
              highest-quality produce at fair prices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why We Started</h2>
            <p className="leading-relaxed">
              We recognized a gap in the market where consumers wanted fresh, locally-sourced produce, and farmers
              needed a direct channel to reach customers. Oja'ya bridges this gap, eliminating unnecessary middlemen and
              ensuring fair compensation for farmers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Freshness:</strong> We guarantee produce is delivered within 24 hours of harvest
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Fairness:</strong> We ensure farmers receive fair prices for their hard work
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Community:</strong> We support local farming communities in Ogbomoso
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Quality:</strong> Every product is verified for quality and freshness
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
