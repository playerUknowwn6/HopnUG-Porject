import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "./globals.css" // Import globals.css at the top of the file

export const metadata: Metadata = {
  title: "HOPn UG University - Excellence in Higher Education",
  description:
    "HOPn UG University offers world-class education with programs in multiple languages. Apply now for Bachelor, Master, and Certificate programs.",
  generator: "HOPn UG University",
  keywords: "university, higher education, bachelor, master, certificate, multilingual, Germany",
  authors: [{ name: "HOPn UG University" }],
  metadataBase: new URL("https://hopn-university.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "de-DE": "/de",
      "ar-SA": "/ar",
    },
  },
  openGraph: {
    title: "HOPn UG University - Excellence in Higher Education",
    description: "World-class education with multilingual programs",
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE", "ar_SA"],
    siteName: "HOPn UG University",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HOPn UG University Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOPn UG University - Excellence in Higher Education",
    description: "World-class education with multilingual programs",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
