import Script from "next/script"

interface StructuredDataProps {
  type: "university" | "program" | "application"
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "university":
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "HOPn UG University",
          description: "Excellence in Higher Education with multilingual programs",
          url: "https://hopn-university.com",
          logo: "https://hopn-university.com/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Universitätsstraße 1",
            addressLocality: "Berlin",
            postalCode: "10117",
            addressCountry: "DE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+49-30-12345678",
            contactType: "admissions",
            email: "admissions@hopn-university.com",
          },
          sameAs: [
            "https://facebook.com/hopnuniversity",
            "https://twitter.com/hopnuniversity",
            "https://linkedin.com/school/hopnuniversity",
          ],
        }

      case "program":
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          name: data?.name || "University Program",
          description: data?.description || "Academic program at HOPn UG University",
          provider: {
            "@type": "EducationalOrganization",
            name: "HOPn UG University",
          },
          educationalLevel: data?.level || "undergraduate",
          timeRequired: data?.duration || "P3Y",
          inLanguage: data?.languages || ["en", "de", "ar"],
        }

      case "application":
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "University Application System",
          description: "Apply to HOPn UG University programs online",
          url: "https://hopn-university.com/apply",
          applicationCategory: "EducationApplication",
          operatingSystem: "Web Browser",
        }

      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}
