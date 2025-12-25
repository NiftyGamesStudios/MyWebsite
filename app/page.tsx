import Link from "next/link"
import { ArrowRight, Code, Gamepad2, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const projects = [
    {
      title: "Pixel Dungeon Runner",
      description: "Fast-paced 2D platformer with procedural level generation and smooth animations",
      tech: ["Unity", "C#", "DOTween"],
      image: "/pixel-art-dungeon-game.jpg",
    },
    {
      title: "Math Quest Adventure",
      description: "Educational puzzle game that makes learning mathematics fun and engaging",
      tech: ["Unity", "C#", "UI Toolkit"],
      image: "/colorful-math-puzzle-game.jpg",
    },
    {
      title: "Casual Match-3",
      description: "Polished match-3 game with juicy effects and satisfying gameplay",
      tech: ["Unity", "C#", "Particle System"],
      image: "/match-three-puzzle-game.jpg",
    },
  ]

  const skills = [
    { name: "Unity 2D", icon: Gamepad2 },
    { name: "C# Programming", icon: Code },
    { name: "Game Mechanics", icon: Zap },
    { name: "UI Animation", icon: Sparkles },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                Indie Game Developer & Unity Specialist
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I build engaging 2D & casual games with clean code and polished gameplay
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#projects">
                    View My Games
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Hire Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 px-4 bg-card/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="pt-6 pb-6">
                    <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="font-semibold">{skill.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "Excellent work on our mobile game. The code was clean, and the animations were incredibly smooth.
                    Highly recommend!"
                  </p>
                  <p className="font-semibold">— Sarah Chen, Studio Director</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "Fast turnaround and professional quality. Helped us optimize our game performance significantly."
                  </p>
                  <p className="font-semibold">— Mike Rodriguez, Lead Developer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's bring your game ideas to life with professional development services
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
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
