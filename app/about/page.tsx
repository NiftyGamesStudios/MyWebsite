import React from "react"
import Link from "next/link"
import { ArrowRight, Code, Gamepad2, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const experience = [
    {
      title: "Unity 2D Development",
      description: "5+ years of experience building engaging 2D games",
      icon: Gamepad2,
    },
    {
      title: "Casual & Educational Games",
      description: "Specialized in games that are both fun and accessible",
      icon: Heart,
    },
    {
      title: "Clean Code Practices",
      description: "Focus on maintainable, well-documented codebases",
      icon: Code,
    },
    {
      title: "Client Collaboration",
      description: "Strong communication and project management skills",
      icon: Users,
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About NiftyGames</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate indie game developer creating polished, engaging experiences
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">My Journey</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm an indie game developer with a passion for creating games that feel great to play. My journey
                  started with a fascination for how game mechanics and player feedback come together to create engaging
                  experiences.
                </p>
                <p>
                  Over the years, I've specialized in Unity 2D development, focusing on casual and educational games
                  that prioritize polished movement, responsive controls, and satisfying player interactions. I believe
                  that great games come from attention to detail and a deep understanding of what makes gameplay feel
                  good.
                </p>
                <p>
                  When I'm not coding, I'm constantly exploring new games, analyzing mechanics, and finding inspiration
                  for my next project. I love the challenge of taking a simple concept and polishing it until every
                  interaction feels intentional and rewarding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Cards */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience & Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {experience.map((item) => (
                <Card
                  key={item.title}
                  className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="pt-6">
                    {React.createElement(item.icon, { className: "h-10 w-10 text-primary mb-4" })}
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Development Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I believe in creating games that respect the player's time and intelligence. Every mechanic should be
                intuitive, every animation should have purpose, and every line of code should be maintainable. Quality
                over quantity, always.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Let's Create Something Amazing</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you need help with a new project or want to improve an existing game, I'd love to hear from you.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
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
