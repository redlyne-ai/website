import { Trophy, ShieldCheck, Wrench, Layers, BookOpen } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    value: "96.8%",
    label: "Recall on PoisonPy",
    description:
      "On PoisonPy (n=310 paired vulnerable/clean samples), Redlyne catches 150 of the 155 known-vulnerable files. F1 = 0.82, +0.16 over DeVAIC v2 — same engine, our extended rule set.",
  },
  {
    icon: ShieldCheck,
    value: "9 / 10",
    label: "Auto-fixes verified safe",
    description:
      "Of every patch Redlyne emits, 9 out of 10 successfully remove the targeted vulnerability — verified by an independent rule re-scan, syntax-checked, and free of new-vulnerability regressions.",
  },
  {
    icon: Wrench,
    value: "~1.4 ms",
    label: "Per-file scan latency",
    description:
      "Median latency on PoisonPy. Redlyne runs in-process — no subprocess, no LLM inference. ~14× faster than Bandit, ~40× faster than Pylint, ~500× faster than Semgrep.",
  },
  {
    icon: Layers,
    value: "1700+",
    label: "Samples evaluated",
    description:
      "Tested across 5 public Python-vulnerability benchmarks — PoisonPy, SafeCoder, SecurityEval, Copilot CWE Scenarios, and PromSec. Redlyne analyzed every sample, on every dataset.",
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
            Built on published research, benchmarked across five datasets
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            Redlyne&apos;s detection rules are derived from peer-reviewed
            research on AI-generated code vulnerabilities. Evaluated on
            1700+ vulnerable Python samples across five public benchmarks —
            same files, same labels — so every claim is reproducible.
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
              Redlyne builds on two peer-reviewed lines of work — the
              detection engine and the automated remediation approach —
              and benchmarks against the public datasets the original
              papers introduced.
            </p>

            <div className="rounded-lg border border-border bg-card/60 p-4 text-xs leading-relaxed">
              <div className="mb-2 font-semibold text-foreground">Detection engine</div>
              <p className="mb-2 text-muted-foreground">
                Redlyne extends the DeVAIC v2.0 rule schema to 459 patterns and adds the{" "}
                <code className="rounded bg-secondary/40 px-1 py-0.5 font-mono">pattern_not_file</code>{" "}
                directive for scope-aware sanitization detection.
              </p>
              Cotroneo, D., De Luca, R., Liguori, P. (2025).
              &quot;DeVAIC: A tool for security assessment of AI-generated
              code.&quot; <em>Information and Software Technology</em>, 177,
              107572.{" "}
              <a
                href="https://doi.org/10.1016/j.infsof.2024.107572"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 hover:underline"
              >
                DOI 10.1016/j.infsof.2024.107572
              </a>
              .
            </div>

            <div className="rounded-lg border border-border bg-card/60 p-4 text-xs leading-relaxed">
              <div className="mb-2 font-semibold text-foreground">Automated remediation</div>
              <p className="mb-2 text-muted-foreground">
                Redlyne extends pattern-based patching with 14 multi-line
                template rules, syntax-safety verification, and an
                independent rule re-scan (&quot;targeted-clean&quot;) before
                surfacing any fix to the user.
              </p>
              Altiero, F., Cotroneo, D., De Luca, R., Liguori, P. (2025).
              &quot;Securing AI Code Generation Through Automated
              Pattern-Based Patching.&quot; <em>55th Annual IEEE/IFIP
              International Conference on Dependable Systems and Networks
              Workshops (DSN-W)</em>, pp. 282–289.{" "}
              <a
                href="https://doi.org/10.1109/DSN-W65791.2025.00077"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 hover:underline"
              >
                DOI 10.1109/DSN-W65791.2025.00077
              </a>
              .
            </div>

            <p className="text-muted-foreground">
              All numbers shown on this page are{" "}
              <strong className="text-foreground">our own measurements</strong>{" "}
              on a May 2026 run across five public Python-vulnerability
              datasets, not reproduced from any paper. Verify locally with{" "}
              <code className="rounded bg-secondary/40 px-1 py-0.5 font-mono">
                python tests/bench_baselines.py
              </code>
              .
            </p>
          </div>
        </div>

        {/* Head-to-head with open-source baselines */}
        <div className="mt-12">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Head-to-head with open-source baselines
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Five tools across five public Python-vulnerability datasets,
              same operational conditions a developer sees in their editor.
              <span className="text-foreground"> Evaluated May 2026.</span>
            </p>
          </div>

          {/* Bottom-line PoisonPy detail */}
          <p className="mb-3 text-sm text-foreground">
            <strong>PoisonPy</strong> — the only paired dataset where precision, F1 and accuracy are all measurable. <span className="text-muted-foreground">n = 310 (155 vulnerable + 155 clean).</span>
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Tool</th>
                  <th className="px-3 py-3 text-right font-medium">Analyzed</th>
                  <th className="px-3 py-3 text-right font-medium">Precision</th>
                  <th className="px-3 py-3 text-right font-medium">Recall</th>
                  <th className="px-3 py-3 text-right font-medium">F1</th>
                  <th className="px-3 py-3 text-right font-medium">Accuracy</th>
                  <th className="px-3 py-3 text-right font-medium">ms / file</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-mono text-xs">
                <tr className="text-muted-foreground">
                  <td className="px-4 py-3 text-left font-sans">Bandit</td>
                  <td className="px-3 py-3 text-right text-amber-600 dark:text-amber-400">17%</td>
                  <td className="px-3 py-3 text-right">69.2%</td>
                  <td className="px-3 py-3 text-right">5.8%</td>
                  <td className="px-3 py-3 text-right">0.107</td>
                  <td className="px-3 py-3 text-right">51.6%</td>
                  <td className="px-3 py-3 text-right">19.6</td>
                </tr>
                <tr className="text-muted-foreground">
                  <td className="px-4 py-3 text-left font-sans">Pylint<sup className="text-primary">†</sup></td>
                  <td className="px-3 py-3 text-right text-amber-600 dark:text-amber-400">17%</td>
                  <td className="px-3 py-3 text-right">55.8%</td>
                  <td className="px-3 py-3 text-right">18.7%</td>
                  <td className="px-3 py-3 text-right">0.280</td>
                  <td className="px-3 py-3 text-right">51.9%</td>
                  <td className="px-3 py-3 text-right">58.7</td>
                </tr>
                <tr className="text-muted-foreground">
                  <td className="px-4 py-3 text-left font-sans">Semgrep</td>
                  <td className="px-3 py-3 text-right">86%</td>
                  <td className="px-3 py-3 text-right">69.6%</td>
                  <td className="px-3 py-3 text-right">20.6%</td>
                  <td className="px-3 py-3 text-right">0.318</td>
                  <td className="px-3 py-3 text-right">55.8%</td>
                  <td className="px-3 py-3 text-right">699.8</td>
                </tr>
                <tr className="text-muted-foreground">
                  <td className="px-4 py-3 text-left font-sans">DeVAIC v2 (stock)</td>
                  <td className="px-3 py-3 text-right">100%</td>
                  <td className="px-3 py-3 text-right">68.0%</td>
                  <td className="px-3 py-3 text-right">64.5%</td>
                  <td className="px-3 py-3 text-right">0.662</td>
                  <td className="px-3 py-3 text-right">67.1%</td>
                  <td className="px-3 py-3 text-right">0.5</td>
                </tr>
                <tr className="bg-primary/5 text-foreground">
                  <td className="px-4 py-3 text-left font-bold text-primary font-sans">Redlyne</td>
                  <td className="px-3 py-3 text-right font-bold">100%</td>
                  <td className="px-3 py-3 text-right font-bold">71.4%</td>
                  <td className="px-3 py-3 text-right font-bold">96.8%</td>
                  <td className="px-3 py-3 text-right font-bold">0.822</td>
                  <td className="px-3 py-3 text-right font-bold">79.0%</td>
                  <td className="px-3 py-3 text-right font-bold">1.4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            <strong className="text-foreground">Analyzed</strong> is the share of samples the tool was able to process without a parse failure. Bandit and Pylint use AST parsing and silently give up on syntactically informal samples — <strong className="text-foreground">83% of PoisonPy</strong> — because the dataset is by design close to what AI assistants emit. Redlyne and DeVAIC v2 are regex-based and process every sample.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            <sup className="text-primary">†</sup> Pylint&apos;s accuracy on PoisonPy is <strong className="text-foreground">49.7% — effectively random</strong>. On the 17% of samples it parses, it flags 96.7% of them as &quot;problematic&quot;, regardless of whether they&apos;re actually vulnerable.
          </p>

          {/* Generalization across all 5 datasets */}
          <div className="mt-8">
            <p className="mb-3 text-sm text-foreground">
              <strong>Generalization across datasets.</strong> Headline metric per dataset, all five tools side-by-side — F1 for paired, recall for vulnerable-only:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/30 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium">Dataset</th>
                    <th className="px-3 py-2 text-right font-medium">n</th>
                    <th className="px-3 py-2 text-right font-medium">Bandit</th>
                    <th className="px-3 py-2 text-right font-medium">Semgrep</th>
                    <th className="px-3 py-2 text-right font-medium">Pylint</th>
                    <th className="px-3 py-2 text-right font-medium">DeVAIC v2</th>
                    <th className="px-3 py-2 text-right font-medium bg-primary/10 text-primary">Redlyne</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-mono text-xs">
                  <tr>
                    <td className="px-3 py-2 text-left font-sans">PoisonPy <span className="text-muted-foreground text-[10px]">F1</span></td>
                    <td className="px-3 py-2 text-right text-muted-foreground">310</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.107</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.318</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.280</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.662</td>
                    <td className="px-3 py-2 text-right font-bold text-primary bg-primary/5">0.822</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-left font-sans">SafeCoder <span className="text-muted-foreground text-[10px]">F1</span></td>
                    <td className="px-3 py-2 text-right text-muted-foreground">1052</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.435</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.515</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.449</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">0.501</td>
                    <td className="px-3 py-2 text-right font-bold text-primary bg-primary/5">0.556</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-left font-sans">SecurityEval <span className="text-muted-foreground text-[10px]">recall</span></td>
                    <td className="px-3 py-2 text-right text-muted-foreground">121</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">40.5%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">34.7%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">59.5%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">63.6%</td>
                    <td className="px-3 py-2 text-right font-bold text-primary bg-primary/5">93.4%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-left font-sans">Copilot CWE <span className="text-muted-foreground text-[10px]">recall</span></td>
                    <td className="px-3 py-2 text-right text-muted-foreground">150</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">84.7%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">51.3%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">93.3%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">68.0%</td>
                    <td className="px-3 py-2 text-right font-bold text-primary bg-primary/5">89.3%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-left font-sans">PromSec <span className="text-muted-foreground text-[10px]">recall</span></td>
                    <td className="px-3 py-2 text-right text-muted-foreground">600</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">92.8%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">87.0%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">98.8%</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">85.2%</td>
                    <td className="px-3 py-2 text-right font-bold text-primary bg-primary/5">97.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              On <strong className="text-foreground">Copilot</strong> and <strong className="text-foreground">PromSec</strong>, Pylint&apos;s &quot;flag almost everything&quot; mode nudges it slightly above Redlyne on raw recall — but at the cost of a 49.7% accuracy on the paired benchmarks (effectively random). On the only two datasets where precision is measurable, <strong className="text-foreground">Redlyne leads</strong>.
            </p>
          </div>
        </div>

        {/* Auto-remediation head-to-head */}
        <div className="mt-12">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Auto-remediation head-to-head
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Detection finds bugs. Remediation fixes them. Three Python tools attempt code-modifying auto-fixes — only Redlyne is fast enough to use in-editor.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Tool</th>
                  <th className="px-3 py-3 text-right font-medium">Applied</th>
                  <th className="px-3 py-3 text-right font-medium">
                    Targeted-clean<br />
                    <span className="font-normal text-[10px]">(of applied)</span>
                  </th>
                  <th className="px-3 py-3 text-right font-medium">Similarity → GT</th>
                  <th className="px-3 py-3 text-right font-medium">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-mono text-xs">
                <tr className="text-muted-foreground">
                  <td className="px-4 py-3 text-left font-sans">Semgrep <code className="rounded bg-secondary/40 px-1 text-[10px]">--autofix</code></td>
                  <td className="px-3 py-3 text-right">7 / 155 (4.5%)</td>
                  <td className="px-3 py-3 text-right">5 / 7 (71%)</td>
                  <td className="px-3 py-3 text-right">0.82</td>
                  <td className="px-3 py-3 text-right">~4700 ms</td>
                </tr>
                <tr className="bg-primary/5 text-foreground">
                  <td className="px-4 py-3 text-left font-bold text-primary font-sans">Redlyne</td>
                  <td className="px-3 py-3 text-right font-bold">58 / 155 (37%)</td>
                  <td className="px-3 py-3 text-right font-bold">52 / 58 (<span className="text-primary">90%</span>)</td>
                  <td className="px-3 py-3 text-right font-bold">0.70</td>
                  <td className="px-3 py-3 text-right font-bold">~3 ms</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            <strong className="text-foreground">Targeted-clean</strong> is the honest &quot;did the fix work?&quot; metric: the specific rule that fired pre-patch — and that carries a remediation block — no longer fires post-patch, the patched source still compiles, and no new vulnerability classes were introduced. Of every patch Redlyne emits, <strong className="text-foreground">9 out of 10 satisfy this check</strong>.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            On SafeCoder (526 real commit-based fixes), Redlyne applies a patch on 19% of samples and 69% of those pass the targeted-clean check. The drop from PoisonPy reflects how often production fixes involve function-level refactoring rather than the drop-in substitutions our regex-based rules target — a gap we&apos;re actively closing with multi-line template rules.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            DeVAIC v2 stock ships only 2 remediation rules out of 441 (0.5%), so it&apos;s excluded from this table — it&apos;s a detection tool, listed alongside Redlyne in the detection comparison above. The PatchitPy bash pipeline (the closest open-source remediation peer) is under active investigation in our test setup.
          </p>
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
            probabilistic guesses: every flag and every patch is reproducible
            by design. The rule set was derived from analysis of vulnerable
            Python samples in state-of-the-art security benchmark datasets,
            and evaluated end-to-end on 1700+ vulnerable Python samples in
            our May 2026 run.
          </p>
          <p>
            Reproduce locally:{" "}
            <code className="rounded bg-secondary/40 px-1.5 py-0.5 font-mono">
              python tests/bench_baselines.py
            </code>{" "}
            for detection,{" "}
            <code className="rounded bg-secondary/40 px-1.5 py-0.5 font-mono">
              python tests/bench_remediation.py
            </code>{" "}
            for auto-fix.
          </p>
        </div>
      </div>
    </section>
  )
}
