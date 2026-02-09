"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react"

const unsafeCode = `import yaml

def parse_config(user_input):
    # AI-generated code using yaml.load()
    data = yaml.load(user_input)
    return data`

const redlyneOutput = `  CWE-502: Deserialization of Untrusted Data
  Location: line 5 - yaml.load(user_input)
  Severity: HIGH
  Fix: Replace yaml.load() with yaml.safe_load()`

const fixedCode = `import yaml

def parse_config(user_input):
    # Secured by Redlyne
    data = yaml.safe_load(user_input)
    return data`

export function CodeDemo() {
  const [step, setStep] = useState<0 | 1 | 2>(0)

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            See it in action
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            An AI assistant generates insecure code. Redlyne catches it in 0.14 seconds, feeds the fix back to the AI, and the developer gets secure code on the first try.
          </p>
        </div>

        {/* Step indicator */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setStep(0)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              step === 0
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground border border-transparent"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">1</span>
            AI Generates Code
          </button>
          <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              step === 1
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground border border-transparent"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">2</span>
            Redlyne Scans
          </button>
          <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
          <button
            type="button"
            onClick={() => setStep(2)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              step === 2
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground border border-transparent"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">3</span>
            Developer Gets Secure Code
          </button>
        </div>

        {/* Code display */}
        <div className="mt-8 mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary/40" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                {step === 0 && "config_parser.py — AI Output"}
                {step === 1 && "Redlyne Analysis"}
                {step === 2 && "config_parser.py — Secured"}
              </span>
              <div className="flex items-center gap-1.5">
                {step === 0 && (
                  <span className="flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-medium text-destructive">
                    <AlertTriangle className="h-3 w-3" />
                    Vulnerable
                  </span>
                )}
                {step === 1 && (
                  <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Scanning...
                  </span>
                )}
                {step === 2 && (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Secure
                  </span>
                )}
              </div>
            </div>

            {/* Code content */}
            <div className="p-6">
              {step === 0 && (
                <pre className="font-mono text-sm leading-relaxed text-foreground/80 overflow-x-auto">
                  <code>{unsafeCode}</code>
                </pre>
              )}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <pre className="font-mono text-sm leading-relaxed text-primary overflow-x-auto">
                      <code>{redlyneOutput}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Detected in <span className="font-mono font-bold text-foreground">0.14s</span> using deterministic pattern matching. No AI, no hallucinations.
                  </p>
                </div>
              )}
              {step === 2 && (
                <pre className="font-mono text-sm leading-relaxed text-foreground/80 overflow-x-auto">
                  <code>{fixedCode}</code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
