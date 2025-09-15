"use client"

import { Suspense } from "react"
import { CookieConsent } from "./cookie-consent"

export function ClientCookieConsent() {
  return (
    <Suspense fallback={null}>
      <CookieConsent />
    </Suspense>
  )
}
