import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary-light px-4 py-2 rounded-full">
              <span className="text-primary font-semibold text-sm">🌱 Fresh from Ogbomoso Farms</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Fresh Farm Produce, Delivered to Your Door
            </h1>

            <p className="text-lg text-muted-foreground">
              Connect directly with local farmers in Ogbomoso. Get the freshest produce at fair prices, supporting your
              community one harvest at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/signup"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-center"
              >
                Get Started
              </Link>
              <Link
                href="/products"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary-light transition-colors font-semibold text-center"
              >
                Browse Products
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Fresh Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Local Farmers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">2K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl"></div>
            <img
              src="/fresh-farm-produce-vegetables-basket.jpg"
              alt="Fresh produce"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
