import Link from "next/link"
import { ArrowRight, Bug, Code2, Palette, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Unity Game Development",
      description:
        "Full game development from concept to completion. Specializing in 2D platformers, casual games, and mobile titles.",
      icon: Code2,
      features: ["Custom gameplay mechanics", "Level design", "Mobile optimization", "Cross-platform support"],
    },
    {
      title: "Game Prototyping",
      description:
        "Rapid prototyping to validate your game concepts quickly. Perfect for testing mechanics and getting early feedback.",
      icon: Sparkles,
      features: ["Quick turnaround", "Playable demos", "Mechanic testing", "Iteration support"],
    },
    {
      title: "Bug Fixing & Optimization",
      description: "Debug and optimize existing games. Improve performance, fix issues, and enhance user experience.",
      icon: Bug,
      features: ["Performance profiling", "Memory optimization", "Bug fixes", "Code refactoring"],
    },
    {
      title: "UI Animation & Polish",
      description: "Add juicy animations and polish to make your game feel responsive and satisfying to play.",
      icon: Palette,
      features: ["UI animations", "Particle effects", "DOTween integration", "Visual feedback"],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Professional Game Development Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                High-quality Unity development for indie studios and entrepreneurs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button className="flex-1" asChild>
                        <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
                          Order on Fiverr
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href="/contact">Contact Me</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Need a Custom Solution?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every project is unique. Let's discuss your specific requirements and find the perfect solution.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
