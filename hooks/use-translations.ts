"use client"

import { useLanguage } from "./use-language"
import { getNestedTranslation } from "@/lib/i18n"
import type { Language, Translations } from "@/lib/i18n"

// Import translation files
import enTranslations from "@/locales/en.json"
import deTranslations from "@/locales/de.json"
import arTranslations from "@/locales/ar.json"

const translations: Record<Language, Translations> = {
  en: enTranslations,
  de: deTranslations,
  ar: arTranslations,
}

export function useTranslations() {
  const { currentLanguage } = useLanguage()

  const t = (key: string): string => {
    const currentTranslations = translations[currentLanguage]
    return getNestedTranslation(currentTranslations, key)
  }

  return { t, currentLanguage }
}
