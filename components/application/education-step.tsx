"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { ApplicationData } from "@/app/apply/page"
import programs from "@/data/programs.json"

interface EducationStepProps {
  data: ApplicationData
  updateData: (data: Partial<ApplicationData>) => void
  onNext: () => void
  onPrev: () => void
}

const educationLevels = [
  "High School Diploma",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree",
  "Professional Degree",
  "Other",
]

const studyModes = [
  { value: "online", label: "Online" },
  { value: "hybrid", label: "Hybrid" },
  { value: "on-campus", label: "On Campus" },
]

export function EducationStep({ data, updateData, onNext, onPrev }: EducationStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.highestEducation) newErrors.highestEducation = "Highest education is required"
    if (!data.institutionName.trim()) newErrors.institutionName = "Institution name is required"
    if (!data.graduationYear) newErrors.graduationYear = "Graduation year is required"
    if (!data.fieldOfStudy.trim()) newErrors.fieldOfStudy = "Field of study is required"
    if (!data.selectedProgram) newErrors.selectedProgram = "Program selection is required"
    if (!data.preferredStartDate) newErrors.preferredStartDate = "Preferred start date is required"
    if (!data.studyMode) newErrors.studyMode = "Study mode is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      onNext()
    }
  }

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    updateData({ [field]: value })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="highestEducation">Highest Level of Education *</Label>
          <Select value={data.highestEducation} onValueChange={(value) => handleInputChange("highestEducation", value)}>
            <SelectTrigger className={errors.highestEducation ? "border-destructive" : ""}>
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              {educationLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.highestEducation && <p className="text-sm text-destructive">{errors.highestEducation}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="institutionName">Institution Name *</Label>
          <Input
            id="institutionName"
            value={data.institutionName}
            onChange={(e) => handleInputChange("institutionName", e.target.value)}
            className={errors.institutionName ? "border-destructive" : ""}
            placeholder="Name of your school/university"
          />
          {errors.institutionName && <p className="text-sm text-destructive">{errors.institutionName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="graduationYear">Graduation Year *</Label>
          <Select value={data.graduationYear} onValueChange={(value) => handleInputChange("graduationYear", value)}>
            <SelectTrigger className={errors.graduationYear ? "border-destructive" : ""}>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.graduationYear && <p className="text-sm text-destructive">{errors.graduationYear}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="gpa">GPA / Grade (Optional)</Label>
          <Input
            id="gpa"
            value={data.gpa}
            onChange={(e) => handleInputChange("gpa", e.target.value)}
            placeholder="e.g., 3.8, A-, 85%"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fieldOfStudy">Field of Study *</Label>
        <Input
          id="fieldOfStudy"
          value={data.fieldOfStudy}
          onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
          className={errors.fieldOfStudy ? "border-destructive" : ""}
          placeholder="e.g., Computer Science, Business Administration"
        />
        {errors.fieldOfStudy && <p className="text-sm text-destructive">{errors.fieldOfStudy}</p>}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Program Selection</h3>

        <div className="space-y-2">
          <Label htmlFor="selectedProgram">Choose Your Program *</Label>
          <Select value={data.selectedProgram} onValueChange={(value) => handleInputChange("selectedProgram", value)}>
            <SelectTrigger className={errors.selectedProgram ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              {programs.map((program) => (
                <SelectItem key={program.id} value={program.id}>
                  {program.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.selectedProgram && <p className="text-sm text-destructive">{errors.selectedProgram}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="preferredStartDate">Preferred Start Date *</Label>
            <Input
              id="preferredStartDate"
              type="date"
              value={data.preferredStartDate}
              onChange={(e) => handleInputChange("preferredStartDate", e.target.value)}
              className={errors.preferredStartDate ? "border-destructive" : ""}
            />
            {errors.preferredStartDate && <p className="text-sm text-destructive">{errors.preferredStartDate}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="studyMode">Preferred Study Mode *</Label>
            <Select value={data.studyMode} onValueChange={(value) => handleInputChange("studyMode", value)}>
              <SelectTrigger className={errors.studyMode ? "border-destructive" : ""}>
                <SelectValue placeholder="Select study mode" />
              </SelectTrigger>
              <SelectContent>
                {studyModes.map((mode) => (
                  <SelectItem key={mode.value} value={mode.value}>
                    {mode.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.studyMode && <p className="text-sm text-destructive">{errors.studyMode}</p>}
          </div>
        </div>
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
