"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { X, Cookie, Settings } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent")
      if (!consent) {
        const timer = setTimeout(() => setShowBanner(true), 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    saveCookiePreferences(allAccepted)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleAcceptSelected = () => {
    saveCookiePreferences(preferences)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    saveCookiePreferences(onlyNecessary)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "cookie-consent",
        JSON.stringify({
          preferences: prefs,
          timestamp: new Date().toISOString(),
        }),
      )
    }

    // Here you would typically initialize analytics, marketing tools, etc.
    // based on the user's preferences
    if (prefs.analytics) {
      // Initialize analytics
      console.log("Analytics cookies enabled")
    }
    if (prefs.marketing) {
      // Initialize marketing tools
      console.log("Marketing cookies enabled")
    }
    if (prefs.functional) {
      // Initialize functional cookies
      console.log("Functional cookies enabled")
    }
  }

  const handlePreferenceChange = (key: keyof CookiePreferences, checked: boolean) => {
    if (key === "necessary") return // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: checked }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t border-border">
          <div className="max-w-7xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">We use cookies</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                      traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your
                      preferences or learn more in our{" "}
                      <a href="/legal/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={handleAcceptAll} size="sm">
                        Accept All
                      </Button>
                      <Button onClick={handleRejectAll} variant="outline" size="sm" className="bg-transparent">
                        Reject All
                      </Button>
                      <Button
                        onClick={() => setShowPreferences(true)}
                        variant="outline"
                        size="sm"
                        className="bg-transparent"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Manage Preferences
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowBanner(false)} className="flex-shrink-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Cookie className="h-5 w-5" />
                    <span>Cookie Preferences</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowPreferences(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  We use different types of cookies to optimize your experience on our website. You can choose which
                  categories you want to allow. Please note that blocking some types of cookies may impact your
                  experience.
                </p>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox id="necessary" checked={preferences.necessary} disabled={true} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="necessary" className="font-medium">
                        Necessary Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        These cookies are essential for the website to function properly. They enable basic features
                        like page navigation and access to secure areas. The website cannot function properly without
                        these cookies.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="analytics"
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => handlePreferenceChange("analytics", checked as boolean)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="analytics" className="font-medium">
                        Analytics Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        These cookies help us understand how visitors interact with our website by collecting and
                        reporting information anonymously. This helps us improve our website's performance and user
                        experience.
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="marketing"
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => handlePreferenceChange("marketing", checked as boolean)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="marketing" className="font-medium">
                        Marketing Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        These cookies are used to deliver personalized advertisements and track the effectiveness of our
                        marketing campaigns. They help us show you relevant content and measure ad performance.
                      </p>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="functional"
                      checked={preferences.functional}
                      onCheckedChange={(checked) => handlePreferenceChange("functional", checked as boolean)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="functional" className="font-medium">
                        Functional Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        These cookies enable enhanced functionality and personalization, such as remembering your
                        preferences, language settings, and providing live chat support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <Button onClick={handleRejectAll} variant="outline">
                    Reject All
                  </Button>
                  <Button onClick={handleAcceptSelected}>Save Preferences</Button>
                  <Button onClick={handleAcceptAll}>Accept All</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
