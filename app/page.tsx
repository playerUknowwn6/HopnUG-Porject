import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProgramCard } from "@/components/program-card"
import { StructuredData } from "@/components/structured-data"
import { SkipLink } from "@/components/accessibility/skip-link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, Users, Globe, Award, Star, ArrowRight } from "lucide-react"
import programs from "@/data/programs.json"
import testimonials from "@/data/testimonials.json"

export default function HomePage() {
  const featuredPrograms = programs.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="university" />
      <SkipLink />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 id="hero-heading" className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                Excellence in Higher Education
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed text-pretty">
                Join thousands of students from around the world in our innovative programs designed for the future of
                work and society.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/diverse-university-campus.png"
                alt="HOPn UG University Campus"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">
            University Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2" aria-label="15,000 plus">
                15,000+
              </div>
              <div className="text-muted-foreground">Students Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2" aria-label="50 plus">
                50+
              </div>
              <div className="text-muted-foreground">Academic Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2" aria-label="95 percent">
                95%
              </div>
              <div className="text-muted-foreground">Graduate Employment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" aria-labelledby="why-choose-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="why-choose-us-heading" className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Why Choose HOPn UG University?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide world-class education with innovative teaching methods and global perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Multilingual Education</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Study in English, German, or Arabic with comprehensive language support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Expert Faculty</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learn from industry leaders and renowned academics with real-world experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Flexible Learning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Choose from online, hybrid, or on-campus programs that fit your lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Accredited Programs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All programs are internationally recognized and industry-aligned.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-20 bg-muted/30" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="programs-heading" className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Featured Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover our most popular programs designed to prepare you for tomorrow's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" role="list">
            {featuredPrograms.map((program) => (
              <div key={program.id} role="listitem">
                <ProgramCard {...program} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/programs">
                View All Programs <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Student Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Hear from our graduates who are making a difference in their fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6" role="listitem">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover"
                      role="presentation"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.program} Graduate, {testimonial.year}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Join thousands of students who have transformed their careers with our world-class education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
