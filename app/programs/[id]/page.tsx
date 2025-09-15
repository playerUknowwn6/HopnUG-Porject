import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Globe, GraduationCap, Euro, Calendar, CheckCircle, ArrowLeft } from "lucide-react"
import programs from "@/data/programs.json"

interface ProgramDetailPageProps {
  params: {
    id: string
  }
}

export default function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const program = programs.find((p) => p.id === params.id)

  if (!program) {
    notFound()
  }

  const levelColors = {
    bachelor: "bg-blue-100 text-blue-800",
    master: "bg-purple-100 text-purple-800",
    certificate: "bg-green-100 text-green-800",
  }

  const modeColors = {
    online: "bg-orange-100 text-orange-800",
    hybrid: "bg-yellow-100 text-yellow-800",
    "on-campus": "bg-gray-100 text-gray-800",
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <Link
              href="/programs"
              className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Programs</span>
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className={levelColors[program.level]}>
                {program.level.charAt(0).toUpperCase() + program.level.slice(1)}
              </Badge>
              <Badge className={modeColors[program.mode]}>
                {program.mode === "on-campus"
                  ? "On Campus"
                  : program.mode.charAt(0).toUpperCase() + program.mode.slice(1)}
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{program.title}</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty">{program.description}</p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Program Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Program Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{program.duration}</div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Globe className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Languages</div>
                      <div className="font-semibold">{program.language.join(", ")}</div>
                    </div>

                    {program.ects && (
                      <div className="text-center">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <GraduationCap className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="text-sm text-muted-foreground">ECTS Credits</div>
                        <div className="font-semibold">{program.ects}</div>
                      </div>
                    )}

                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Euro className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Tuition</div>
                      <div className="font-semibold">{program.tuition}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Learning Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Upon successful completion of this program, you will be able to:
                  </p>
                  <div className="space-y-3">
                    {program.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Admission Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Admission Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {program.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl">Program Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Next Start Date</div>
                        <div className="text-sm text-muted-foreground">{program.startDate}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Euro className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Tuition Fee</div>
                        <div className="text-sm text-muted-foreground">{program.tuition}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Study Mode</div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {program.mode === "on-campus" ? "On Campus" : program.mode}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/apply">Apply Now</Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/contact">Contact Admissions</Link>
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Need more information?{" "}
                      <Link href="/contact" className="text-secondary hover:underline">
                        Get in touch
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Financing Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Financing Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Payment Plans</span>
                      <span className="text-green-600">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scholarships</span>
                      <span className="text-green-600">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Student Loans</span>
                      <span className="text-green-600">Supported</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Early Bird Discount</span>
                      <span className="text-secondary">10% Off</span>
                    </div>
                  </div>
                  <Separator />
                  <p className="text-xs text-muted-foreground">
                    Contact our financial aid office for personalized assistance with funding your education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
