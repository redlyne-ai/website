import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Peer-Reviewed Research</span>
            <span className="text-sm text-muted-foreground">{'|'}</span>
            <span className="text-sm text-muted-foreground">Published in Elsevier 2025</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Real-time security for{" "}
            <span className="text-primary">AI code generators</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Redlyne scans AI-generated code for vulnerabilities and tells the AI how to fix them — before the developer ever sees the insecure version.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground md:text-4xl">94%</span>
              <span className="mt-1 text-sm text-muted-foreground">F1 Score</span>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground md:text-4xl">0.14s</span>
              <span className="mt-1 text-sm text-muted-foreground">Scan Time</span>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground md:text-4xl">35+</span>
              <span className="mt-1 text-sm text-muted-foreground">CWEs Covered</span>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground md:text-4xl">0</span>
              <span className="mt-1 text-sm text-muted-foreground">Hallucinations</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
              <Link href="https://redlyne.io" target="_blank" rel="noopener noreferrer">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary gap-2 bg-transparent"
              asChild
            >
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Supported tools */}
          <div className="mt-16 flex flex-col items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Works with
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 font-mono">GitHub Copilot</span>
              <span className="flex items-center gap-1.5 font-mono">Claude Code</span>
              <span className="flex items-center gap-1.5 font-mono">ChatGPT</span>
              <span className="flex items-center gap-1.5 font-mono">Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
