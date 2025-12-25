import Link from "next/link"
import { ArrowRight, CheckCircle2, ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function FreelancingPage() {
  const benefits = [
    "Fast and reliable communication",
    "Clean, well-documented code",
    "Professional project management",
    "Flexible working arrangements",
    "Competitive pricing",
    "100% satisfaction guarantee",
  ]

  const platforms = [
    {
      name: "Fiverr",
      description: "Find my professional Unity development services on Fiverr",
      url: "https://fiverr.com",
    },
    {
      name: "Itch.io",
      description: "Check out my published games and game jams",
      url: "https://itch.io",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Freelance Game Development</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional Unity development services for studios, startups, and entrepreneurs
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Work With Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Find Me On</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platforms.map((platform) => (
                  <Card
                    key={platform.name}
                    className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        {platform.name}
                        <ExternalLink className="h-5 w-5" />
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{platform.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          Visit Profile
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center border-primary/50">
                <CardHeader>
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-3xl">Direct Contact</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Prefer to work directly? Let's discuss your project requirements and timeline.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Send a Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
