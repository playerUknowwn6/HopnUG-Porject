import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">HOPn UG University</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Excellence in higher education with world-class programs designed for the global student community.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/student-portal"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Student Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Academic Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programs?level=bachelor"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Bachelor Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?level=master"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Master Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?level=certificate"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Certificate Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?mode=online"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Online Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?mode=hybrid"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hybrid Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Universitätsstraße 1<br />
                  10117 Berlin, Germany
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">+49 30 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@hopn-university.de</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">© 2024 HOPn UG University. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/legal/privacy"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/legal/impressum"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
