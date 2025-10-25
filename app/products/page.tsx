import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-light via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Fresh Farm Products</h1>
          <p className="text-lg text-muted-foreground">Browse our selection of fresh, locally-sourced produce</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ProductFilters />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductsGrid />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
