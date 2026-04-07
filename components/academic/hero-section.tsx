import Image from "next/image"
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
              <Image
                src="/images/profile.jpg"
                alt="Pietro Liguori"
                width={280}
                height={280}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>DIETI, Federico II, Naples</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:pietro.liguori@unina.it" className="hover:text-primary transition-colors">
                  pietro.liguori@unina.it
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="https://scholar.google.com/citations?user=dDrGg2IAAAAJ&hl=it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Google Scholar
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="https://orcid.org/0000-0002-1669-7000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                ORCID
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="https://dessert.unina.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                DESSERT Lab
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2 text-balance">
                Pietro Liguori, PhD
              </h1>
              <p className="text-lg text-primary font-medium">
                Assistant Professor (RTD-A)
              </p>
              <p className="text-muted-foreground">
                Department of Electrical Engineering and Information Technology (DIETI)
                <br />
                University of Naples Federico II
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                I am a researcher specializing in <strong>AI-based code generation</strong>, <strong>software security</strong>, 
                and <strong>dependable computing</strong>. My work focuses on evaluating and improving the security, 
                reliability, and robustness of AI code generators, with applications in cybersecurity and offensive security testing.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I received my PhD in Information Technology and Electrical Engineering from Federico II in 2022, 
                with a thesis on fault injection in cloud computing systems. I am a member of the{" "}
                <a href="https://dessert.unina.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DESSERT Research Group</a>, 
                where I contribute to research on software reliability, cybersecurity, and dependable systems.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                My research has been published in top-tier venues including IEEE TSE, IEEE TDSC, ESEC/FSE, DSN, 
                and ISSRE. I serve as Program Chair for workshops on AI security and as reviewer for leading 
                journals in software engineering.
              </p>
            </div>

            {/* Awards Highlight */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">*</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">MBDA Innovation Award 2026</p>
                <p className="text-xs text-muted-foreground">
                  For the Artificial Firmware Designer Assistant project on AI-based VHDL code generation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
