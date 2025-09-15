"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, BookOpen, Calendar, Bell, User, GraduationCap, Clock, Award } from "lucide-react"
import { ProfileSettings } from "./profile-settings"

interface DashboardProps {
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
    studentId: string
    program: string
    enrollmentDate: string
  }
  onLogout: () => void
}

// Mock data for dashboard
const mockCourses = [
  {
    id: "1",
    name: "Introduction to Programming",
    code: "CS101",
    instructor: "Dr. Elena Müller",
    progress: 75,
    nextClass: "2024-12-20T10:00:00",
    status: "active",
  },
  {
    id: "2",
    name: "Data Structures & Algorithms",
    code: "CS201",
    instructor: "Prof. Michael Thompson",
    progress: 60,
    nextClass: "2024-12-21T14:00:00",
    status: "active",
  },
  {
    id: "3",
    name: "Database Systems",
    code: "CS301",
    instructor: "Dr. Sarah Johnson",
    progress: 45,
    nextClass: "2024-12-22T09:00:00",
    status: "active",
  },
  {
    id: "4",
    name: "Web Development",
    code: "CS250",
    instructor: "Prof. James Wilson",
    progress: 90,
    nextClass: "2024-12-23T11:00:00",
    status: "completed",
  },
]

const mockNotifications = [
  {
    id: "1",
    title: "Assignment Due Soon",
    message: "CS201 Assignment 3 is due in 2 days",
    type: "warning",
    date: "2024-12-18",
    read: false,
  },
  {
    id: "2",
    title: "Grade Posted",
    message: "Your grade for CS250 Final Project has been posted",
    type: "success",
    date: "2024-12-17",
    read: false,
  },
  {
    id: "3",
    title: "Schedule Change",
    message: "CS101 lecture moved to Room 205",
    type: "info",
    date: "2024-12-16",
    read: true,
  },
  {
    id: "4",
    title: "Registration Open",
    message: "Spring 2025 course registration is now open",
    type: "info",
    date: "2024-12-15",
    read: true,
  },
]

const mockUpcomingClasses = [
  {
    id: "1",
    course: "Introduction to Programming",
    time: "10:00 AM",
    date: "Today",
    room: "Room 101",
    type: "Lecture",
  },
  {
    id: "2",
    course: "Data Structures & Algorithms",
    time: "2:00 PM",
    date: "Tomorrow",
    room: "Room 203",
    type: "Lab",
  },
  {
    id: "3",
    course: "Database Systems",
    time: "9:00 AM",
    date: "Dec 22",
    room: "Room 105",
    type: "Lecture",
  },
]

export function Dashboard({ user, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "warning":
        return "⚠️"
      case "success":
        return "✅"
      case "info":
        return "ℹ️"
      default:
        return "📢"
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" alt={`${user.firstName} ${user.lastName}`} />
                <AvatarFallback>{getInitials(user.firstName, user.lastName)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold">Welcome back, {user.firstName}!</h1>
                <p className="text-sm text-muted-foreground">Student ID: {user.studentId}</p>
              </div>
            </div>
            <Button variant="outline" onClick={onLogout} className="flex items-center space-x-2 bg-transparent">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Courses</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Schedule</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">4</p>
                      <p className="text-sm text-muted-foreground">Active Courses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Award className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">3.8</p>
                      <p className="text-sm text-muted-foreground">Current GPA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">45</p>
                      <p className="text-sm text-muted-foreground">Credits Earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">25%</p>
                      <p className="text-sm text-muted-foreground">Program Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Recent Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNotifications.slice(0, 4).map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 rounded-lg border ${
                          !notification.read ? "bg-blue-50 border-blue-200" : "bg-muted/50"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{notification.title}</h4>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notification.date}</p>
                          </div>
                          {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Classes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Upcoming Classes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockUpcomingClasses.map((class_) => (
                      <div key={class_.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-sm">{class_.course}</h4>
                          <p className="text-sm text-muted-foreground">
                            {class_.date} at {class_.time}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {class_.room} • {class_.type}
                          </p>
                        </div>
                        <Badge variant="outline">{class_.type}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <Badge variant={course.status === "completed" ? "default" : "secondary"}>
                        {course.status === "completed" ? "Completed" : "Active"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {course.code} • {course.instructor}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    {course.status === "active" && (
                      <div className="text-sm text-muted-foreground">
                        Next class: {new Date(course.nextClass).toLocaleDateString()} at{" "}
                        {new Date(course.nextClass).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    )}
                    <Button variant="outline" className="w-full bg-transparent">
                      View Course Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUpcomingClasses.map((class_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="font-semibold text-sm">{class_.date}</div>
                          <div className="text-sm text-muted-foreground">{class_.time}</div>
                        </div>
                        <div>
                          <h3 className="font-medium">{class_.course}</h3>
                          <p className="text-sm text-muted-foreground">
                            {class_.room} • {class_.type}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{class_.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <ProfileSettings user={user} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
