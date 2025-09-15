"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Language } from "@/lib/i18n"
import { defaultLanguage } from "@/lib/i18n"

interface LanguageStore {
  currentLanguage: Language
  setLanguage: (language: Language) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      currentLanguage: defaultLanguage,
      setLanguage: (language: Language) => set({ currentLanguage: language }),
    }),
    {
      name: "hopn-language-storage",
    },
  ),
)
