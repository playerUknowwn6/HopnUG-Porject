"use client"

import { Suspense } from "react"
import { Navigation } from "./navigation"

function NavigationFallback() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary/20 rounded animate-pulse" />
            <div className="h-6 w-48 bg-primary/20 rounded animate-pulse" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 w-16 bg-muted rounded animate-pulse" />
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="h-8 w-24 bg-muted rounded animate-pulse" />
            <div className="h-8 w-20 bg-secondary/20 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export function ClientNavigation() {
  return (
    <Suspense fallback={<NavigationFallback />}>
      <Navigation />
    </Suspense>
  )
}
