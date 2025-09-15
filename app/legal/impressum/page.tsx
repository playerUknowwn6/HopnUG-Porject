import { Suspense } from "react"
import { ClientNavigation } from "@/components/client-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <ClientNavigation />
      </Suspense>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Impressum</h1>
            <p className="text-muted-foreground">Legal Information</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Institution Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">HOPn UG University</h3>
                    <p className="text-muted-foreground">
                      Universitätsstraße 1<br />
                      10117 Berlin, Germany
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Contact Information</h4>
                    <p className="text-muted-foreground">
                      Phone: +49 30 123 456 789
                      <br />
                      Fax: +49 30 123 456 790
                      <br />
                      Email: info@hopn-university.de
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Representatives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">President</h4>
                    <p className="text-muted-foreground">Prof. Dr. Maria Schneider</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Vice President for Academic Affairs</h4>
                    <p className="text-muted-foreground">Prof. Dr. Ahmed Al-Rashid</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Chief Financial Officer</h4>
                    <p className="text-muted-foreground">Dr. Sarah Johnson</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registration and Licensing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Commercial Register</h4>
                    <p className="text-muted-foreground">
                      Register Court: Amtsgericht Berlin-Charlottenburg
                      <br />
                      Registration Number: HRB 123456 B
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">VAT Identification Number</h4>
                    <p className="text-muted-foreground">DE123456789</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Educational License</h4>
                    <p className="text-muted-foreground">
                      Licensed by the Berlin Senate Department for Education, Youth and Family
                      <br />
                      License Number: EDU-2010-001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accreditation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Institutional Accreditation</h4>
                    <p className="text-muted-foreground">
                      Accredited by the German Council of Science and Humanities (Wissenschaftsrat)
                      <br />
                      Accreditation valid until: December 2029
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">International Recognition</h4>
                    <p className="text-muted-foreground">
                      Member of the European Association of Universities (EUA)
                      <br />
                      Recognized by the International Association of Universities (IAU)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Supervisory Authority</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Educational Oversight</h4>
                    <p className="text-muted-foreground">
                      Berlin Senate Department for Education, Youth and Family
                      <br />
                      Bernhard-Weiß-Straße 6<br />
                      10178 Berlin, Germany
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Data Protection Authority</h4>
                    <p className="text-muted-foreground">
                      Berlin Commissioner for Data Protection and Freedom of Information
                      <br />
                      Friedrichstraße 219
                      <br />
                      10969 Berlin, Germany
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  The content of our website has been compiled with meticulous care and to the best of our knowledge.
                  However, we cannot assume any liability for the up-to-dateness, completeness, or accuracy of any of
                  the pages.
                </p>
                <p>
                  Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele Media Act by German law), we as
                  service providers are liable for our own content on these pages in accordance with general laws.
                  However, pursuant to sections 8 to 10 of the TMG, we as service providers of the website are not under
                  obligation to monitor external information provided or stored on our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Copyright</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  The content and works on these pages created by the site operators are subject to German copyright
                  law. The duplication, processing, distribution, or any form of commercialization of such material
                  beyond the scope of copyright law shall require the prior written consent of the author or creator.
                </p>
                <p>
                  Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the
                  content on this site was not created by the operator, the copyrights of third parties are respected.
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
