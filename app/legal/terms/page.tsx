import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Terms and Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By accessing and using the HOPn UG University website and services, you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                  use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Educational Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>HOPn UG University provides educational services including:</p>
                <ul>
                  <li>Academic programs and courses</li>
                  <li>Student support services</li>
                  <li>Online learning platforms and resources</li>
                  <li>Assessment and certification services</li>
                </ul>
                <p>
                  All educational services are subject to our academic policies and procedures, which are incorporated
                  by reference into these terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Admission and Enrollment</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Admission to HOPn UG University is competitive and based on academic merit, program requirements, and
                  available capacity. By submitting an application, you agree to:
                </p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Submit all required documentation</li>
                  <li>Pay applicable application and enrollment fees</li>
                  <li>Comply with all academic and conduct policies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Tuition and Fees</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Students are responsible for payment of all tuition, fees, and other charges. Key points include:</p>
                <ul>
                  <li>Tuition and fees are subject to change with appropriate notice</li>
                  <li>Payment is due according to published schedules</li>
                  <li>Late payments may result in additional charges</li>
                  <li>Refund policies apply as outlined in our financial policies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Academic Integrity</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  All students must maintain the highest standards of academic integrity. Prohibited conduct includes:
                </p>
                <ul>
                  <li>Plagiarism and unauthorized collaboration</li>
                  <li>Cheating on examinations or assignments</li>
                  <li>Falsification of academic records</li>
                  <li>Unauthorized use of technology during assessments</li>
                </ul>
                <p>Violations may result in academic penalties up to and including dismissal from the university.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion,
                  and other matters related to the site are protected under applicable copyrights, trademarks, and other
                  proprietary rights.
                </p>
                <p>
                  Students retain ownership of their original work but grant the university certain rights for
                  educational and administrative purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>All members of the university community are expected to:</p>
                <ul>
                  <li>Treat others with respect and dignity</li>
                  <li>Maintain a safe and inclusive environment</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect university property and resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  HOPn UG University shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any
                  loss of data, use, goodwill, or other intangible losses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Germany. Any
                  disputes arising under these terms shall be subject to the exclusive jurisdiction of the German
                  courts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>For questions regarding these terms and conditions, please contact:</p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p>
                    <strong>Legal Department</strong>
                    <br />
                    HOPn UG University
                    <br />
                    Universitätsstraße 1, 10117 Berlin, Germany
                    <br />
                    Email: legal@hopn-university.de
                    <br />
                    Phone: +49 30 123 456 789
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
