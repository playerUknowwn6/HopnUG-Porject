"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle } from "lucide-react"
import { PersonalInfoStep } from "@/components/application/personal-info-step"
import { EducationStep } from "@/components/application/education-step"
import { DocumentsStep } from "@/components/application/documents-step"
import { MotivationStep } from "@/components/application/motivation-step"
import { ConfirmationStep } from "@/components/application/confirmation-step"
import { SuccessStep } from "@/components/application/success-step"

export interface ApplicationData {
  // Personal Info
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  nationality: string
  address: string
  city: string
  postalCode: string
  country: string

  // Education
  highestEducation: string
  institutionName: string
  graduationYear: string
  gpa: string
  fieldOfStudy: string

  // Program Selection
  selectedProgram: string
  preferredStartDate: string
  studyMode: string

  // Documents
  documents: {
    transcript: File | null
    diploma: File | null
    cv: File | null
    passport: File | null
    languageCertificate: File | null
  }

  // Motivation
  motivationLetter: string
  careerGoals: string
  whyThisProgram: string

  // Confirmation
  agreeToTerms: boolean
  agreeToPrivacy: boolean
  agreeToMarketing: boolean
}

const steps = [
  { id: 1, title: "Personal Information", description: "Basic personal details" },
  { id: 2, title: "Education Background", description: "Academic history" },
  { id: 3, title: "Document Upload", description: "Required documents" },
  { id: 4, title: "Motivation & Goals", description: "Personal statement" },
  { id: 5, title: "Review & Submit", description: "Final confirmation" },
]

export default function ApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    highestEducation: "",
    institutionName: "",
    graduationYear: "",
    gpa: "",
    fieldOfStudy: "",
    selectedProgram: "",
    preferredStartDate: "",
    studyMode: "",
    documents: {
      transcript: null,
      diploma: null,
      cv: null,
      passport: null,
      languageCertificate: null,
    },
    motivationLetter: "",
    careerGoals: "",
    whyThisProgram: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToMarketing: false,
  })

  const updateApplicationData = (data: Partial<ApplicationData>) => {
    setApplicationData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitApplication = async () => {
    // Mock submission - in real app, this would send to backend
    console.log("Submitting application:", applicationData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
  }

  const progress = (currentStep / steps.length) * 100

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <SuccessStep applicationData={applicationData} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Application Form</h1>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Complete your application to join HOPn UG University
          </p>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm font-medium text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>

            <Progress value={progress} className="h-2" />

            <div className="hidden md:flex justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-2 ${
                    step.id < currentStep
                      ? "text-green-600"
                      : step.id === currentStep
                        ? "text-primary"
                        : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.id < currentStep
                        ? "bg-green-600 text-white"
                        : step.id === currentStep
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/50 text-foreground"
                    }`}
                  >
                    {step.id < currentStep ? <CheckCircle className="h-4 w-4" /> : step.id}
                  </div>
                  <div className="hidden lg:block">
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs text-muted-foreground">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
              <p className="text-muted-foreground">{steps[currentStep - 1].description}</p>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && (
                <PersonalInfoStep data={applicationData} updateData={updateApplicationData} onNext={nextStep} />
              )}
              {currentStep === 2 && (
                <EducationStep
                  data={applicationData}
                  updateData={updateApplicationData}
                  onNext={nextStep}
                  onPrev={prevStep}
                />
              )}
              {currentStep === 3 && (
                <DocumentsStep
                  data={applicationData}
                  updateData={updateApplicationData}
                  onNext={nextStep}
                  onPrev={prevStep}
                />
              )}
              {currentStep === 4 && (
                <MotivationStep
                  data={applicationData}
                  updateData={updateApplicationData}
                  onNext={nextStep}
                  onPrev={prevStep}
                />
              )}
              {currentStep === 5 && (
                <ConfirmationStep
                  data={applicationData}
                  updateData={updateApplicationData}
                  onSubmit={submitApplication}
                  onPrev={prevStep}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
