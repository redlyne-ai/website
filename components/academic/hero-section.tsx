import { Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
          {/* Profile Image & Quick Info */}
          <div className="space-y-6">
            <div className="w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-lg bg-secondary overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                Profile Photo
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>University Department</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:scholar@university.edu" className="hover:text-primary transition-colors">
                  scholar@university.edu
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Google Scholar
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                ORCID
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                ResearchGate
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2 text-balance">
                Dr. Scholar Name
              </h1>
              <p className="text-lg text-primary font-medium">
                Associate Professor of [Field]
              </p>
              <p className="text-muted-foreground">
                Department of [Department], University Name
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                I am a researcher and educator specializing in [primary research area]. 
                My work focuses on understanding [specific focus] and developing [methodologies/applications] 
                that advance our knowledge in [field].
              </p>
              <p className="text-foreground/90 leading-relaxed">
                With over [X] years of experience in academia, I have published extensively in 
                peer-reviewed journals and supervised numerous graduate students. My research 
                has been funded by [funding bodies] and has contributed to [impact/outcomes].
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Beyond research, I am committed to excellence in teaching and mentoring the 
                next generation of scholars in our field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
