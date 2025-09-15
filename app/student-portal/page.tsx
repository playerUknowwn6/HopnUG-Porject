"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/student-portal/login-form"
import { Dashboard } from "@/components/student-portal/dashboard"

export default function StudentPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{
    id: string
    firstName: string
    lastName: string
    email: string
    studentId: string
    program: string
    enrollmentDate: string
  } | null>(null)

  const handleLogin = (credentials: { username: string; password: string }) => {
    // Mock authentication - in real app, this would call an API
    if (credentials.username === "student@hopn.edu" && credentials.password === "password123") {
      const mockUser = {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "student@hopn.edu",
        studentId: "STU2024001",
        program: "Bachelor of Science in Computer Science",
        enrollmentDate: "2024-09-01",
      }
      setUser(mockUser)
      setIsLoggedIn(true)
      return { success: true }
    }
    return { success: false, error: "Invalid credentials" }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Dashboard user={user!} onLogout={handleLogout} />}

      <Footer />
    </div>
  )
}
