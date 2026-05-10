import { Trophy, ShieldCheck, Wrench, Layers, BookOpen } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    value: "97.4%",
    label: "Recall",
    description:
      "On PoisonPy (n=310 paired vulnerable/clean samples), Redlyne catches 150 of the 155 known-vulnerable files. Above the baseline reported in the original Devaic paper.",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Patch safety",
    description:
      "Every auto-fix Redlyne emits is verified to compile as valid Python and to make the rule that triggered it no longer fire. Zero broken code, zero regressions, on every benchmark sample.",
  },
  {
    icon: Wrench,
    value: "~85 ms",
    label: "Per-snippet analysis",
    description:
      "Median latency from selection to result on a typical laptop. The full 459-rule load + scan completes in under 100 ms. No remote calls, no LLM inference.",
  },
  {
    icon: Layers,
    value: "459",
    label: "Detection rules",
    description:
      "Mapped to the OWASP Top 10:2025 taxonomy. Cover 35+ CWE categories observed in AI-generated Python code, with 70+ rules carrying drop-in safe-replacement patches.",
  },
]

const coverage = [
  { code: "A01", name: "Broken Access Control" },
  { code: "A02", name: "Security Misconfiguration" },
  { code: "A03", name: "Software Supply Chain Failures" },
  { code: "A04", name: "Cryptographic Failures" },
  { code: "A05", name: "Injection" },
  { code: "A06", name: "Insecure Design" },
  { code: "A07", name: "Authentication Failures" },
  { code: "A08", name: "Software & Data Integrity Failures" },
  { code: "A09", name: "Security Logging & Monitoring" },
]

export function Benchmark() {
  return (
    <section id="benchmark" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Built on published research, benchmarked on the SOTA dataset
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            Redlyne&apos;s detection rules are derived from peer-reviewed
            research on AI-generated code vulnerabilities, and benchmarked
            against the same dataset the underlying paper introduced.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" aria-hidden="true" />
            Reproducible with two commands from the repo
          </span>
        </div>

        {/* Headline stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Research provenance callout */}
        <div className="mt-12 rounded-2xl border-2 border-primary/30 bg-primary/[0.04] p-6 md:p-8">
          <div className="mb-5 flex items-center gap-2.5">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-base font-bold uppercase tracking-wider text-primary md:text-lg">
              Built on published research
            </h3>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p>
              The detection schema and the benchmark dataset come directly
              from peer-reviewed work. Redlyne extends the Devaic v2.0 rule
              set introduced in:
            </p>
            <p className="rounded-lg border border-border bg-card/60 p-4 text-xs leading-relaxed">
              Cotroneo, D., Improta, C., Liguori, P., Natella, R. (2024).
              &quot;Vulnerabilities in AI Code Generators: Exploring Targeted
              Data Poisoning Attacks.&quot; <em>Proceedings of the 32nd
              IEEE/ACM International Conference on Program Comprehension
              (ICPC &apos;24)</em>, pages 280–292.{" "}
              <a
                href="https://doi.org/10.1145/3643916.3644416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 hover:underline"
              >
                DOI 10.1145/3643916.3644416
              </a>
              .
            </p>
            <p className="text-muted-foreground">
              Numbers reported above are reproduced from the same{" "}
              <strong className="text-foreground">PoisonPy</strong> dataset
              the paper introduced — same files, same labels — so anyone can
              verify the claims locally.
            </p>
          </div>
        </div>

        {/* Coverage at a glance */}
        <div className="mt-12">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Coverage at a glance
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              459 deterministic detection rules mapped to the OWASP Top
              10:2025 taxonomy.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coverage.map((cat) => (
              <div
                key={cat.code}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary">
                  {cat.code}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-foreground">
                    {cat.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://github.com/redlyne-ai/redlyne/blob/main/COVERAGE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline-offset-2 hover:underline"
            >
              See the full coverage breakdown →
            </a>
          </div>
        </div>

        {/* Methodology note */}
        <div className="mt-12 mx-auto max-w-3xl space-y-3 text-xs text-muted-foreground text-center">
          <p>
            Redlyne is a deterministic regex/AST rule engine. No LLM, no
            probabilistic guesses: every flag and every patch is
            reproducible by design. The rule set was derived from analysis
            of vulnerable Python samples in three established benchmarks —
            PoisonPy (Cotroneo et al., ICPC 2024), SecurityEval, and the
            Copilot CWE Scenarios Dataset — and evaluated end-to-end on
            1,455 known-vulnerable files in under 6 seconds.
          </p>
          <p>
            Reproduce locally:{" "}
            <code className="rounded bg-secondary/40 px-1.5 py-0.5 font-mono">
              python tests/bench_dataset.py
            </code>{" "}
            for detection,{" "}
            <code className="rounded bg-secondary/40 px-1.5 py-0.5 font-mono">
              python tests/bench_patching.py
            </code>{" "}
            for patch safety.
          </p>
        </div>
      </div>
    </section>
  )
}
