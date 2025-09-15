export type Language = "en" | "de" | "ar"

export interface Translations {
  [key: string]: string | Translations
}

export const defaultLanguage: Language = "en"

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "de" as Language, name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ar" as Language, name: "العربية", flag: "🇸🇦", dir: "rtl" },
]

export function getLanguageDirection(lang: Language): "ltr" | "rtl" {
  return lang === "ar" ? "rtl" : "ltr"
}

export function getNestedTranslation(translations: Translations, key: string): string {
  const keys = key.split(".")
  let result: any = translations

  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = result[k]
    } else {
      return key // Return key if translation not found
    }
  }

  return typeof result === "string" ? result : key
}
