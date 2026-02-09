import { Zap, ShieldCheck, Code2, GitBranch, Terminal, RefreshCcw } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Sub-100ms Scans",
    description:
      "Lightweight pattern-matching engine scans AI-generated Python snippets in under 100ms. No AST required, no configuration needed.",
  },
  {
    icon: ShieldCheck,
    title: "94% F1 Score",
    description:
      "Validated on 500 code samples from ChatGPT, Copilot, Gemini, and Claude. Outperforms Semgrep, CodeQL, Bandit, and LLM-based detectors.",
  },
  {
    icon: Code2,
    title: "Works on Fragments",
    description:
      "Unlike traditional tools that need complete programs, Redlyne analyzes incomplete code snippets — the kind AI assistants actually produce.",
  },
  {
    icon: RefreshCcw,
    title: "AI Feedback Loop",
    description:
      "Structured remediation output feeds directly back into AI coding agents. The AI self-corrects before the developer sees insecure code.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description:
      "GitHub Actions integration works in your pipeline today. Scan every commit automatically with zero configuration overhead.",
  },
  {
    icon: Terminal,
    title: "Deterministic Engine",
    description:
      "85 regex-based detection rules covering 35 CWEs from the OWASP Top 10. Every flag is real. Every fix suggestion is correct. Zero hallucinations.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Built different from the ground up
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            Traditional security tools break on AI-generated code. Redlyne was purpose-built for the age of AI coding assistants.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-primary/[0.02]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
