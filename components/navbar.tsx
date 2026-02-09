"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-primary-foreground" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Red<span className="text-primary">lyne</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="#comparison" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Comparison
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="https://redlyne.io" target="_blank" rel="noopener noreferrer">
              Get Started
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
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              How It Works
            </Link>
            <Link href="#comparison" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Comparison
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Button size="sm" className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="https://redlyne.io" target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
