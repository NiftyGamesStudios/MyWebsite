"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a project in mind? Let's discuss how I can help bring your game ideas to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Connect on Social</h2>
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Mail className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">Fiverr</h3>
                          <p className="text-sm text-muted-foreground">Find me on Fiverr for quick projects</p>
                        </div>
                      </div>
                      <Button variant="outline" asChild>
                        <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Mail className="h-8 w-8 text-accent" />
                        <div>
                          <h3 className="font-semibold">Itch.io</h3>
                          <p className="text-sm text-muted-foreground">Check out my published games</p>
                        </div>
                      </div>
                      <Button variant="outline" asChild>
                        <a href="https://itch.io" target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Mail className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <h3 className="font-semibold">GitHub</h3>
                          <p className="text-sm text-muted-foreground">View my open source work</p>
                        </div>
                      </div>
                      <Button variant="outline" asChild>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
