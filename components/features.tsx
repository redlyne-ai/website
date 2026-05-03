import {
  ShieldCheck,
  BookOpen,
  MousePointerClick,
  Lock,
} from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Built for AI. Built without AI.",
    description:
      "Redlyne uses a deterministic rule engine — no LLM, no probabilistic guesses, no hallucinated fixes. Every vulnerability flag and remediation suggestion is reproducible and auditable.",
  },
  {
    icon: BookOpen,
    title: "Expert-curated rule set",
    description:
      "Detection patterns are hand-crafted by security researchers, not auto-generated. Each rule targets a real vulnerability class observed in AI-generated Python code, including OWASP Top 10 categories.",
  },
  {
    icon: MousePointerClick,
    title: "One-click remediation",
    description:
      "Right-click any Python selection in your editor. Redlyne flags the vulnerabilities and proposes a patched version you can apply with a single confirmation.",
  },
  {
    icon: Lock,
    title: "Privacy by design",
    description:
      "Runs entirely on your machine. No code, no telemetry, no metadata is ever sent to a remote server. What you write stays with you.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            A security scanner for the way you actually work
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            We copy AI-generated snippets into our codebase throughout the
            day. Traditional security scanners need the full codebase to be
            effective — impractical for that kind of fast, snippet-level
            iteration. Redlyne is purpose-built for it, with a deterministic
            engine and a rule set curated by security researchers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-primary/[0.02]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
