import { Calendar, ExternalLink, Users } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "PRIN 2022 - FLEGREA",
    fullTitle: "Federated Learning for Generative Emulation of Advanced Persistent Threats",
    period: "2023 - 2026",
    role: "Task Leader (WP1)",
    description: "Development of distributed architecture for automated emulation of Advanced Persistent Threats (APT) using Federated Learning techniques. Leading methodology and architecture for continuous APT attack modeling and generation.",
    funding: "PRIN",
  },
  {
    title: "GENIO - Edge Cloud Platform",
    fullTitle: "Edge Cloud Platform (MIMIT)",
    period: "2023 - 2025",
    role: "Research Unit Member",
    description: "Design of software components for distributed node management and performance monitoring in edge environments, with focus on low-latency distributed systems.",
    funding: "MIMIT",
  },
  {
    title: "H2020 - uDevOps",
    fullTitle: "Software Quality Assurance in Microservices",
    period: "2022 - 2025",
    role: "Research Unit Member (CINI)",
    description: "Development of methodologies and tools for Software Quality Assurance in microservices environments, including automated vulnerability analysis and fault injection techniques in cloud-native infrastructures.",
    funding: "H2020",
  },
  {
    title: "MBDA Convention",
    fullTitle: "Artificial Firmware Designer Assistant",
    period: "2024 - 2025",
    role: "Co-PI",
    description: "Development of AI-based systems for automatic VHDL code generation from natural language. Design of generation and verification pipeline architecture for firmware validation.",
    funding: "Industry",
    award: "MBDA Innovation Award 2026",
  },
  {
    title: "OSTAGE",
    fullTitle: "Offensive Security via Machine Translation",
    period: "2022 - 2023",
    role: "Research Unit Member",
    description: "Development of neural machine translation-based methodologies for automatic exploit generation from natural language descriptions. Design of offensive security code generation pipeline.",
    funding: "National",
  },
  {
    title: "Industrial PhD - AI_ROB",
    fullTitle: "Artificial Intelligence for Recommendation of Optimal Behavior",
    period: "2025 - ongoing",
    role: "Scientific Director",
    description: "Industrial PhD project in collaboration with NefroCenter S.C.a.R.L. Coordination of research activities and supervision of technology transfer.",
    funding: "PR Campania FSE+",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Research Projects
          </h2>
          <p className="text-muted-foreground">
            Active and past research projects in AI code generation, cybersecurity, and dependable systems.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                      {project.funding}
                    </span>
                    {project.award && (
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">
                        {project.award}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.fullTitle}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-sm text-primary mb-3">
                    <Users className="h-3.5 w-3.5" />
                    <span>{project.role}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://dessert.unina.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View all research activities at DESSERT Lab
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
