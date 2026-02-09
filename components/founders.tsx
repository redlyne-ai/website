import { BookOpen, GraduationCap } from "lucide-react"

const founders = [
  {
    name: "Pietro Liguori",
    role: "CEO & Technical Founder",
    title: "Assistant Professor of Software Security",
    institution: "University of Naples Federico II, Italy",
    description:
      "Built the core detection and repair engines, backend architecture, CLI tooling, VS Code extension, and CI/CD integrations.",
  },
  {
    name: "Domenico Cotroneo",
    role: "CTO",
    title: "Full Professor of Dependable and Secure Systems",
    institution: "University of North Carolina at Charlotte, USA",
    description:
      "Leads system architecture and security design. Defined the threat model for AI-generated code vulnerabilities.",
  },
]

export function Founders() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Founded by security researchers
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            8+ years of collaboration. 25+ co-authored research papers. Deep expertise in software security and vulnerability detection.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <span className="text-lg font-bold">{founder.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{founder.role}</p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{founder.title}</span>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{founder.institution}</span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{founder.description}</p>
            </div>
          ))}
        </div>

        {/* Research callout */}
        <div className="mt-12 mx-auto max-w-4xl rounded-xl border border-primary/20 bg-primary/[0.03] p-8 text-center">
          <p className="text-sm font-medium text-primary">Peer-Reviewed Research</p>
          <p className="mt-2 text-lg font-semibold text-foreground text-balance">
            {"\"DeVAIC: A tool for security assessment of AI-generated code\""}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Published in Information and Software Technology (Elsevier, 2025)
          </p>
        </div>
      </div>
    </section>
  )
}
