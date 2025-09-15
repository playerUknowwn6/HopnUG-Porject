"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Upload, X, CheckCircle } from "lucide-react"
import type { ApplicationData } from "@/app/apply/page"

interface DocumentsStepProps {
  data: ApplicationData
  updateData: (data: Partial<ApplicationData>) => void
  onNext: () => void
  onPrev: () => void
}

interface DocumentRequirement {
  key: keyof ApplicationData["documents"]
  title: string
  description: string
  required: boolean
  acceptedTypes: string[]
}

const documentRequirements: DocumentRequirement[] = [
  {
    key: "transcript",
    title: "Academic Transcript",
    description: "Official transcript from your most recent educational institution",
    required: true,
    acceptedTypes: [".pdf", ".jpg", ".jpeg", ".png"],
  },
  {
    key: "diploma",
    title: "Diploma/Certificate",
    description: "Copy of your highest degree or diploma",
    required: true,
    acceptedTypes: [".pdf", ".jpg", ".jpeg", ".png"],
  },
  {
    key: "cv",
    title: "Curriculum Vitae (CV)",
    description: "Your current resume or CV",
    required: true,
    acceptedTypes: [".pdf", ".doc", ".docx"],
  },
  {
    key: "passport",
    title: "Passport Copy",
    description: "Copy of your passport identification page",
    required: true,
    acceptedTypes: [".pdf", ".jpg", ".jpeg", ".png"],
  },
  {
    key: "languageCertificate",
    title: "Language Certificate",
    description: "English/German proficiency certificate (IELTS, TOEFL, etc.)",
    required: false,
    acceptedTypes: [".pdf", ".jpg", ".jpeg", ".png"],
  },
]

export function DocumentsStep({ data, updateData, onNext, onPrev }: DocumentsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [dragOver, setDragOver] = useState<string | null>(null)
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    documentRequirements.forEach((req) => {
      if (req.required && !data.documents[req.key]) {
        newErrors[req.key] = `${req.title} is required`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      onNext()
    }
  }

  const handleFileSelect = (key: keyof ApplicationData["documents"], file: File) => {
    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, [key]: "File size must be less than 10MB" }))
      return
    }

    // Validate file type
    const requirement = documentRequirements.find((req) => req.key === key)
    if (requirement) {
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()
      if (!requirement.acceptedTypes.includes(fileExtension)) {
        setErrors((prev) => ({
          ...prev,
          [key]: `File type not supported. Accepted types: ${requirement.acceptedTypes.join(", ")}`,
        }))
        return
      }
    }

    updateData({
      documents: {
        ...data.documents,
        [key]: file,
      },
    })

    // Clear error if file is valid
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }))
    }
  }

  const handleFileRemove = (key: keyof ApplicationData["documents"]) => {
    updateData({
      documents: {
        ...data.documents,
        [key]: null,
      },
    })
  }

  const handleDragOver = (e: React.DragEvent, key: string) => {
    e.preventDefault()
    setDragOver(key)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(null)
  }

  const handleDrop = (e: React.DragEvent, key: keyof ApplicationData["documents"]) => {
    e.preventDefault()
    setDragOver(null)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileSelect(key, files[0])
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Document Requirements</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• All documents must be in PDF, JPG, or PNG format</li>
          <li>• Maximum file size: 10MB per document</li>
          <li>• Documents should be clear and legible</li>
          <li>• Non-English documents may require certified translations</li>
        </ul>
      </div>

      <div className="space-y-6">
        {documentRequirements.map((requirement) => {
          const file = data.documents[requirement.key]
          const hasError = errors[requirement.key]

          return (
            <Card key={requirement.key} className={hasError ? "border-destructive" : ""}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <Label className="text-base font-semibold flex items-center space-x-2">
                        <span>{requirement.title}</span>
                        {requirement.required && <span className="text-destructive">*</span>}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">{requirement.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Accepted formats: {requirement.acceptedTypes.join(", ")}
                      </p>
                    </div>
                  </div>

                  {file ? (
                    <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-green-900">{file.name}</p>
                          <p className="text-sm text-green-700">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleFileRemove(requirement.key)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                        dragOver === requirement.key
                          ? "border-primary bg-primary/5"
                          : hasError
                            ? "border-destructive bg-destructive/5"
                            : "border-muted-foreground/25 hover:border-primary hover:bg-primary/5"
                      }`}
                      onDragOver={(e) => handleDragOver(e, requirement.key)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, requirement.key)}
                    >
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm font-medium mb-2">
                        Drag and drop your file here, or{" "}
                        <button
                          type="button"
                          className="text-primary hover:underline"
                          onClick={() => fileInputRefs.current[requirement.key]?.click()}
                        >
                          browse
                        </button>
                      </p>
                      <p className="text-xs text-muted-foreground">Maximum file size: 10MB</p>
                      <input
                        ref={(el) => (fileInputRefs.current[requirement.key] = el)}
                        type="file"
                        accept={requirement.acceptedTypes.join(",")}
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleFileSelect(requirement.key, file)
                        }}
                        className="hidden"
                      />
                    </div>
                  )}

                  {hasError && <p className="text-sm text-destructive">{errors[requirement.key]}</p>}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onPrev} className="flex items-center space-x-2 bg-transparent">
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        <Button onClick={handleNext} className="flex items-center space-x-2">
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
