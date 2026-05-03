export function Evidence() {
  return (
    <section className="border-y border-border/40 bg-secondary/20 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The reality of AI-generated code
          </p>
          <h2 className="mx-auto max-w-2xl text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            AI doesn&apos;t just write insecure code. Often, it doesn&apos;t
            even write <em>complete</em> code.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-6 md:gap-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary md:text-6xl">
              13%
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              of AI-generated Python snippets are <strong>incomplete</strong>
              {" "}— missing imports or context — across the major models
              tested in a 2025 study (500 snippets, 4 AI assistants).
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary md:text-6xl">
              31%
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              of <strong>GitHub Copilot&apos;s output</strong> specifically.
              Almost one snippet in three ships without the imports needed
              to actually run.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
            AST-based analyzers like Bandit, CodeQL, and PyT need to build a
            parse tree of the entire code to work. On incomplete snippets,
            they can&apos;t even start.{" "}
            <span className="font-semibold text-foreground">
              Redlyne uses pattern-based detection — it works on any fragment,
              with or without imports.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
