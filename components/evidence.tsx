export function Evidence() {
  return (
    <section className="border-y border-border/40 bg-secondary/20 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The reality of AI-generated Python code
          </p>
          <h2 className="mx-auto max-w-3xl text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Most of it is insecure. A meaningful share doesn&apos;t even
            compile.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-6 md:gap-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary md:text-6xl">
              76%
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              of AI-generated Python code contains{" "}
              <strong>security vulnerabilities</strong>. Tested in 2025
              across 609 snippets from GitHub Copilot, Claude 3.7 Sonnet,
              and DeepSeek V3.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              For Copilot specifically, the rate climbs to{" "}
              <strong className="text-foreground">84%</strong>.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary md:text-6xl">
              31%
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              of GitHub Copilot&apos;s output is{" "}
              <strong>incomplete</strong> — missing imports or context.
              Almost one snippet in three ships without what it needs to
              actually run.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Across the major AI assistants, the average sits at{" "}
              <strong className="text-foreground">~13%</strong>.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Vulnerable code that <em>is</em> complete? Static analyzers can
            flag it, but with high noise and high false-positive rates on
            isolated snippets. Vulnerable code that&apos;s{" "}
            <em>incomplete</em>? AST-based analyzers can&apos;t even start
            — without imports, there&apos;s no parse tree to walk.{" "}
            <span className="font-semibold text-foreground">
              Redlyne handles both, with deterministic pattern matching
              curated by security researchers.
            </span>
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Sources:{" "}
            <a
              href="https://doi.org/10.1109/DSN-W65791.2025.00077"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-foreground hover:underline"
            >
              IEEE DSN-W 2025
            </a>
            {" · "}
            <a
              href="https://doi.org/10.1016/j.infsof.2024.107572"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-foreground hover:underline"
            >
              Information and Software Technology, 2025
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
