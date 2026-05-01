import { Code2, MousePointerClick, Lock, Github } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Built for AI-generated code",
    description:
      "Redlyne analyzes the kind of Python code AI assistants actually produce — including incomplete fragments and snippets out of context — not full programs.",
  },
  {
    icon: MousePointerClick,
    title: "One-click remediation",
    description:
      "Right-click any selection in the editor. Redlyne flags the vulnerabilities and proposes a patched version you can apply with a single confirmation.",
  },
  {
    icon: Lock,
    title: "Privacy by design",
    description:
      "Runs entirely on your machine. No code, no telemetry, no metadata is ever sent to a remote server. What you write stays with you.",
  },
  {
    icon: Github,
    title: "Open source",
    description:
      "The extension code is Apache 2.0 — fork it, audit it, contribute. The detection rules are bundled as a separate, curated layer.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Designed for the way you actually code now
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            Generic linters miss the failure modes of AI-generated code.
            Redlyne is focused on exactly those.
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
