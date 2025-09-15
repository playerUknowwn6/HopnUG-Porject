"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, User, GraduationCap, FileText, MessageSquare } from "lucide-react"
import type { ApplicationData } from "@/app/apply/page"
import programs from "@/data/programs.json"

interface ConfirmationStepProps {
  data: ApplicationData
  updateData: (data: Partial<ApplicationData>) => void
  onSubmit: () => void
  onPrev: () => void
}

export function ConfirmationStep({ data, updateData, onSubmit, onPrev }: ConfirmationStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const selectedProgram = programs.find((p) => p.id === data.selectedProgram)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }
    if (!data.agreeToPrivacy) {
      newErrors.agreeToPrivacy = "You must agree to the privacy policy"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await onSubmit()
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCheckboxChange = (field: keyof ApplicationData, checked: boolean) => {
    updateData({ [field]: checked })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const uploadedDocuments = Object.entries(data.documents).filter(([_, file]) => file !== null)

  return (
    <div className="space-y-8">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-semibold text-green-900 mb-2">Review Your Application</h3>
        <p className="text-sm text-green-800">
          Please review all information carefully before submitting. You will receive a confirmation email once your
          application is submitted.
        </p>
      </div>

      {/* Personal Information Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Personal Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Name:</span> {data.firstName} {data.lastName}
            </div>
            <div>
              <span className="font-medium">Email:</span> {data.email}
            </div>
            <div>
              <span className="font-medium">Phone:</span> {data.phone}
            </div>
            <div>
              <span className="font-medium">Date of Birth:</span> {data.dateOfBirth}
            </div>
            <div>
              <span className="font-medium">Nationality:</span> {data.nationality}
            </div>
            <div>
              <span className="font-medium">Country:</span> {data.country}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education & Program Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="h-5 w-5" />
            <span>Education & Program</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Highest Education:</span> {data.highestEducation}
            </div>
            <div>
              <span className="font-medium">Institution:</span> {data.institutionName}
            </div>
            <div>
              <span className="font-medium">Graduation Year:</span> {data.graduationYear}
            </div>
            <div>
              <span className="font-medium">Field of Study:</span> {data.fieldOfStudy}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="font-medium">Selected Program:</div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{selectedProgram?.level}</Badge>
              <span className="text-sm">{selectedProgram?.title}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Start Date: {data.preferredStartDate} | Mode: {data.studyMode}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Uploaded Documents</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {uploadedDocuments.map(([key, file]) => (
              <div key={key} className="flex items-center justify-between p-2 bg-green-50 rounded">
                <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                <span className="text-sm text-muted-foreground">{file?.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Motivation Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span>Personal Statement</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="font-medium text-sm mb-2">Motivation Letter:</div>
            <p className="text-sm text-muted-foreground line-clamp-3">{data.motivationLetter}</p>
          </div>
          <div>
            <div className="font-medium text-sm mb-2">Career Goals:</div>
            <p className="text-sm text-muted-foreground line-clamp-2">{data.careerGoals}</p>
          </div>
          <div>
            <div className="font-medium text-sm mb-2">Why This Program:</div>
            <p className="text-sm text-muted-foreground line-clamp-2">{data.whyThisProgram}</p>
          </div>
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToTerms"
                checked={data.agreeToTerms}
                onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
                className={errors.agreeToTerms ? "border-destructive" : ""}
              />
              <div className="space-y-1">
                <Label htmlFor="agreeToTerms" className="text-sm font-medium cursor-pointer">
                  I agree to the Terms and Conditions *
                </Label>
                <p className="text-xs text-muted-foreground">
                  By checking this box, you agree to our{" "}
                  <a href="/legal/terms" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                    Terms and Conditions
                  </a>
                </p>
              </div>
            </div>
            {errors.agreeToTerms && <p className="text-sm text-destructive ml-6">{errors.agreeToTerms}</p>}

            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToPrivacy"
                checked={data.agreeToPrivacy}
                onCheckedChange={(checked) => handleCheckboxChange("agreeToPrivacy", checked as boolean)}
                className={errors.agreeToPrivacy ? "border-destructive" : ""}
              />
              <div className="space-y-1">
                <Label htmlFor="agreeToPrivacy" className="text-sm font-medium cursor-pointer">
                  I agree to the Privacy Policy *
                </Label>
                <p className="text-xs text-muted-foreground">
                  By checking this box, you consent to our{" "}
                  <a href="/legal/privacy" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            {errors.agreeToPrivacy && <p className="text-sm text-destructive ml-6">{errors.agreeToPrivacy}</p>}

            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToMarketing"
                checked={data.agreeToMarketing}
                onCheckedChange={(checked) => handleCheckboxChange("agreeToMarketing", checked as boolean)}
              />
              <div className="space-y-1">
                <Label htmlFor="agreeToMarketing" className="text-sm font-medium cursor-pointer">
                  I agree to receive marketing communications (Optional)
                </Label>
                <p className="text-xs text-muted-foreground">
                  Receive updates about programs, events, and university news
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onPrev} className="flex items-center space-x-2 bg-transparent">
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Submit Application</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
