import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] px-8 py-16 text-center md:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Stop shipping insecure AI-generated code
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty leading-relaxed">
              Redlyne is production-ready today. Start scanning AI-generated code for free with our CLI and VS Code extension.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-primary-foreground" />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">
                Red<span className="text-primary">lyne</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link href="#features" className="transition-colors hover:text-foreground">Features</Link>
              <Link href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</Link>
              <Link href="#comparison" className="transition-colors hover:text-foreground">Comparison</Link>
              <Link href="#pricing" className="transition-colors hover:text-foreground">Pricing</Link>
              <Link href="https://redlyne.io" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                redlyne.io
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              Naples, Italy / San Francisco, USA
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
