import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/student-portal/", "/api/"],
    },
    sitemap: "https://hopn-university.com/sitemap.xml",
  }
}
