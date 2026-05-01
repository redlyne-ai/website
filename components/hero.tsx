import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=redlyne.redlyne-ai"
const GITHUB_URL = "https://github.com/redlyne-ai/redlyne"

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
          {/* Brand mark */}
          <div className="mb-10 flex items-center gap-4">
            <Image
              src="/redlyne-icon.png"
              alt="Redlyne"
              width={72}
              height={72}
              className="rounded-xl"
              priority
            />
            <span className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Red<span className="text-primary">lyne</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Security for{" "}
            <span className="text-primary">AI-generated code</span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-balance text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            Built <span className="text-primary">for</span> AI.{" "}
            Built <span className="text-primary">without</span> AI.
          </p>

          {/* Subheading */}
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Redlyne is a VS Code extension that detects vulnerabilities in
            AI-generated Python code and proposes one-click patches.
            Powered by a deterministic rule engine curated by security
            researchers — no LLM, no hallucinations, every flag is
            reproducible.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              asChild
            >
              <Link
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install for VS Code
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary gap-2 bg-transparent"
              asChild
            >
              <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full border border-border px-3 py-1">
              Deterministic engine
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              Expert-curated rules
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              Local execution
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              Apache 2.0
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
