"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=redlyne.redlyne-ai"
const GITHUB_URL = "https://github.com/redlyne-ai/redlyne"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/redlyne-icon.png"
            alt="Redlyne"
            width={40}
            height={40}
            className="rounded-md"
            priority
          />
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Red<span className="text-primary">lyne</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground gap-2"
            asChild
          >
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Install for VS Code
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              How it works
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              GitHub
            </Link>
            <Button
              size="sm"
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install for VS Code
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
