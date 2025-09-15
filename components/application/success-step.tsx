import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Mail, Calendar, FileText, Home } from "lucide-react"
import type { ApplicationData } from "@/app/apply/page"

interface SuccessStepProps {
  applicationData: ApplicationData
}

export function SuccessStep({ applicationData }: SuccessStepProps) {
  const applicationId = `APP-${Date.now().toString().slice(-6)}`

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Application Submitted Successfully!</h1>
          <p className="text-xl text-muted-foreground">
            Thank you for applying to HOPn UG University. We have received your application.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Application Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application ID:</span>
                    <span className="font-mono font-medium">{applicationId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Applicant:</span>
                    <span className="font-medium">
                      {applicationData.firstName} {applicationData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">{applicationData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Submission Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Program Applied For</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Program:</span>
                    <span className="font-medium">Selected Program</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date:</span>
                    <span className="font-medium">{applicationData.preferredStartDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Study Mode:</span>
                    <span className="font-medium capitalize">{applicationData.studyMode}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Confirmation Email</h3>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to {applicationData.email}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Review Process</h3>
              <p className="text-sm text-muted-foreground">Applications are typically reviewed within 2-3 weeks</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold">Application Status</h3>
              <p className="text-sm text-muted-foreground">Track your application status in the student portal</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-blue-900 mb-3">What Happens Next?</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <div className="flex items-start space-x-2">
              <span className="font-medium">1.</span>
              <span>You will receive a confirmation email with your application details</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-medium">2.</span>
              <span>Our admissions team will review your application and documents</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-medium">3.</span>
              <span>You may be contacted for additional information or an interview</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-medium">4.</span>
              <span>You will receive an admission decision via email</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-medium">5.</span>
              <span>If accepted, you will receive enrollment instructions</span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Questions about your application? Contact our admissions team at{" "}
            <a href="mailto:admissions@hopn-university.de" className="text-primary hover:underline">
              admissions@hopn-university.de
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/student-portal">
                <FileText className="h-4 w-4 mr-2" />
                Student Portal
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
