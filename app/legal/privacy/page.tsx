import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We collect information you provide directly to us, such as when you create an account, apply for
                  admission, or contact us. This may include:
                </p>
                <ul>
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Educational background and academic records</li>
                  <li>Application materials and supporting documents</li>
                  <li>Payment information for tuition and fees</li>
                  <li>Communication preferences and correspondence</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Process your application and provide educational services</li>
                  <li>Communicate with you about your application and enrollment</li>
                  <li>Provide student support services and academic resources</li>
                  <li>Process payments and maintain financial records</li>
                  <li>Improve our services and develop new programs</li>
                  <li>Comply with legal obligations and institutional requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect the rights, property, or safety of our institution or others</li>
                  <li>With accreditation bodies and educational partners as required</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul>
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Staff training on data protection practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Under applicable data protection laws, you have the right to:</p>
                <ul>
                  <li>Access and receive a copy of your personal information</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability where technically feasible</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can
                  control cookie settings through your browser preferences. Our cookie policy provides detailed
                  information about the types of cookies we use and how to manage them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  As an international institution, we may transfer your personal information to countries outside your
                  residence. We ensure appropriate safeguards are in place to protect your information in accordance
                  with applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact our
                  Data Protection Officer:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p>
                    <strong>Data Protection Officer</strong>
                    <br />
                    HOPn UG University
                    <br />
                    Universitätsstraße 1, 10117 Berlin, Germany
                    <br />
                    Email: privacy@hopn-university.de
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
