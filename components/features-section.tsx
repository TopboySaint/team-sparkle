import { Leaf, Truck, Shield, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Leaf,
      title: "100% Fresh",
      description: "Directly from local farms to your table within 24 hours",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available in Ogbomoso and surrounding areas",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every product is verified for freshness and quality",
    },
    {
      icon: Users,
      title: "Support Farmers",
      description: "Fair prices that directly benefit local farming communities",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Oja'ya?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to connecting you with the freshest produce while supporting local farmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
