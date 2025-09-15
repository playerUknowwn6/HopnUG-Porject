import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Globe, GraduationCap, Euro } from "lucide-react"

interface ProgramCardProps {
  id: string
  title: string
  description: string
  level: "bachelor" | "master" | "certificate"
  duration: string
  language: string[]
  mode: "online" | "hybrid" | "on-campus"
  tuition: string
  startDate: string
  ects?: number
}

export function ProgramCard({
  id,
  title,
  description,
  level,
  duration,
  language,
  mode,
  tuition,
  startDate,
  ects,
}: ProgramCardProps) {
  const levelColors = {
    bachelor: "bg-blue-100 text-blue-800",
    master: "bg-purple-100 text-purple-800",
    certificate: "bg-green-100 text-green-800",
  }

  const modeColors = {
    online: "bg-orange-100 text-orange-800",
    hybrid: "bg-yellow-100 text-yellow-800",
    "on-campus": "bg-gray-100 text-gray-800",
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge className={levelColors[level]}>{level.charAt(0).toUpperCase() + level.slice(1)}</Badge>
          <Badge className={modeColors[mode]}>
            {mode === "on-campus" ? "On Campus" : mode.charAt(0).toUpperCase() + mode.slice(1)}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-tight">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span>{language.join(", ")}</span>
          </div>

          {ects && (
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <span>{ects} ECTS Credits</span>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Euro className="h-4 w-4 text-muted-foreground" />
            <span>{tuition}</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-sm font-medium">Next Start Date</p>
          <p className="text-sm text-muted-foreground">{startDate}</p>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button asChild className="w-full">
          <Link href={`/programs/${id}`}>Learn More & Apply</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
