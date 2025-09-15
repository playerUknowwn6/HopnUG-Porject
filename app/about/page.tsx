import { Suspense } from "react"
import { ClientNavigation } from "@/components/client-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Globe, Award, Target, Eye, Heart } from "lucide-react"
import faculty from "@/data/faculty.json"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <ClientNavigation />
      </Suspense>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">About HOPn UG University</h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed text-pretty">
              Pioneering excellence in higher education since 2010, we are committed to shaping global leaders and
              innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality education that empowers students from diverse backgrounds to
                  achieve their academic and professional goals while contributing positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading global university recognized for innovation in education, research excellence, and
                  preparing graduates who drive positive change in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence, Integrity, Diversity, Innovation, and Social Responsibility guide everything we do, from
                  curriculum design to student support services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">HOPn UG by the Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our achievements reflect our commitment to educational excellence and student success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-muted-foreground font-medium">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Academic Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground font-medium">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">85+</div>
              <div className="text-muted-foreground font-medium">Countries Represented</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">95% Graduate Employment</h3>
                <p className="text-sm text-muted-foreground">Within 6 months of graduation</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">International Accreditation</h3>
                <p className="text-sm text-muted-foreground">Recognized globally</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">3 Languages</h3>
                <p className="text-sm text-muted-foreground">English, German, Arabic</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">15:1 Student-Faculty Ratio</h3>
                <p className="text-sm text-muted-foreground">Personalized attention</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Meet Our Distinguished Faculty
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Learn from world-class educators and researchers who bring real-world experience to the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                    <p className="text-sm text-secondary font-medium">{member.department}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{member.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specializations.slice(0, 2).map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Accreditation & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our programs are internationally recognized and meet the highest academic standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">European Quality Assurance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Accredited by the European Association for Quality Assurance in Higher Education (ENQA)
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">International Recognition</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Member of the International Association of Universities (IAU) and recognized globally
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Professional Bodies</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Programs accredited by relevant professional bodies ensuring industry relevance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
