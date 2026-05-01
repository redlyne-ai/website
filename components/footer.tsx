import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=redlyne.redlyne-ai"
const GITHUB_URL = "https://github.com/redlyne-ai/redlyne"

export function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] px-8 py-16 text-center md:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Get Redlyne
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty leading-relaxed">
              Free, open source, runs locally. Install in 30 seconds and start
              scanning your AI-generated code.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                <Link
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Questions, partnerships, or commercial licensing?{" "}
              <Link
                href="mailto:info@redlyne.io"
                className="text-primary underline-offset-2 hover:underline"
              >
                info@redlyne.io
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/redlyne-icon.png"
                alt="Redlyne"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="text-lg font-bold text-foreground">
                Red<span className="text-primary">lyne</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link href="#features" className="transition-colors hover:text-foreground">
                Features
              </Link>
              <Link href="#how-it-works" className="transition-colors hover:text-foreground">
                How it works
              </Link>
              <Link
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                VS Code Marketplace
              </Link>
              <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href="mailto:info@redlyne.io"
                className="transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-xs text-muted-foreground md:flex-row md:justify-between">
            <p>
              Code under{" "}
              <Link
                href="https://www.apache.org/licenses/LICENSE-2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-foreground hover:underline"
              >
                Apache 2.0
              </Link>
              . Detection rules under{" "}
              <Link
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-foreground hover:underline"
              >
                CC BY-NC-SA 4.0
              </Link>
              .
            </p>
            <p>© {new Date().getFullYear()} Redlyne</p>
          </div>
        </div>
      </footer>
    </>
  )
}
