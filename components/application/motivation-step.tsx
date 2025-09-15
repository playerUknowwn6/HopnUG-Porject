"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { ApplicationData } from "@/app/apply/page"

interface MotivationStepProps {
  data: ApplicationData
  updateData: (data: Partial<ApplicationData>) => void
  onNext: () => void
  onPrev: () => void
}

export function MotivationStep({ data, updateData, onNext, onPrev }: MotivationStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.motivationLetter.trim()) {
      newErrors.motivationLetter = "Motivation letter is required"
    } else if (data.motivationLetter.trim().length < 200) {
      newErrors.motivationLetter = "Motivation letter must be at least 200 characters"
    }

    if (!data.careerGoals.trim()) {
      newErrors.careerGoals = "Career goals are required"
    } else if (data.careerGoals.trim().length < 100) {
      newErrors.careerGoals = "Career goals must be at least 100 characters"
    }

    if (!data.whyThisProgram.trim()) {
      newErrors.whyThisProgram = "This field is required"
    } else if (data.whyThisProgram.trim().length < 100) {
      newErrors.whyThisProgram = "Response must be at least 100 characters"
    }

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

  const getCharacterCount = (text: string) => text.length
  const getWordCount = (text: string) =>
    text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Writing Tips</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Be specific and provide concrete examples</li>
          <li>• Show your passion and commitment to your chosen field</li>
          <li>• Explain how this program aligns with your goals</li>
          <li>• Proofread your responses for grammar and clarity</li>
        </ul>
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivationLetter" className="text-base font-semibold">
          Motivation Letter *
        </Label>
        <p className="text-sm text-muted-foreground mb-3">
          Tell us about yourself, your background, and why you want to pursue higher education. What drives your passion
          for learning?
        </p>
        <Textarea
          id="motivationLetter"
          value={data.motivationLetter}
          onChange={(e) => handleInputChange("motivationLetter", e.target.value)}
          className={`min-h-[200px] ${errors.motivationLetter ? "border-destructive" : ""}`}
          placeholder="Share your story, experiences, and what motivates you to pursue this education..."
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Minimum 200 characters required</span>
          <span>
            {getCharacterCount(data.motivationLetter)} characters | {getWordCount(data.motivationLetter)} words
          </span>
        </div>
        {errors.motivationLetter && <p className="text-sm text-destructive">{errors.motivationLetter}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="careerGoals" className="text-base font-semibold">
          Career Goals *
        </Label>
        <p className="text-sm text-muted-foreground mb-3">
          Describe your short-term and long-term career objectives. How do you see yourself using this education in your
          professional life?
        </p>
        <Textarea
          id="careerGoals"
          value={data.careerGoals}
          onChange={(e) => handleInputChange("careerGoals", e.target.value)}
          className={`min-h-[150px] ${errors.careerGoals ? "border-destructive" : ""}`}
          placeholder="Outline your career aspirations and how this program will help you achieve them..."
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Minimum 100 characters required</span>
          <span>
            {getCharacterCount(data.careerGoals)} characters | {getWordCount(data.careerGoals)} words
          </span>
        </div>
        {errors.careerGoals && <p className="text-sm text-destructive">{errors.careerGoals}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="whyThisProgram" className="text-base font-semibold">
          Why This Program? *
        </Label>
        <p className="text-sm text-muted-foreground mb-3">
          What specifically attracts you to this program at HOPn UG University? How does it align with your goals and
          interests?
        </p>
        <Textarea
          id="whyThisProgram"
          value={data.whyThisProgram}
          onChange={(e) => handleInputChange("whyThisProgram", e.target.value)}
          className={`min-h-[150px] ${errors.whyThisProgram ? "border-destructive" : ""}`}
          placeholder="Explain why you chose this specific program and how it fits your academic and career plans..."
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Minimum 100 characters required</span>
          <span>
            {getCharacterCount(data.whyThisProgram)} characters | {getWordCount(data.whyThisProgram)} words
          </span>
        </div>
        {errors.whyThisProgram && <p className="text-sm text-destructive">{errors.whyThisProgram}</p>}
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
