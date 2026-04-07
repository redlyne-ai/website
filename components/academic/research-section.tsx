import { Lightbulb, Shield, Cloud, Bot } from "lucide-react"

const researchAreas = [
  {
    icon: Bot,
    title: "AI-based Code Generation",
    description: "Evaluation and testing of AI code generators, including security assessment, robustness analysis, and quality metrics for LLM-generated code. Development of tools for automatic vulnerability detection in AI-generated software.",
    keywords: ["Large Language Models", "Code Generation", "Security Testing", "Vulnerability Detection"],
  },
  {
    icon: Shield,
    title: "Software Security & Offensive Security",
    description: "Generation of offensive code from natural language using neural machine translation. Research on automated exploit generation, shellcode synthesis, and security testing methodologies leveraging AI.",
    keywords: ["Exploit Generation", "Neural Machine Translation", "Penetration Testing", "Cybersecurity"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing Reliability",
    description: "Fault injection techniques for cloud systems, failure mode analysis, and runtime monitoring. Development of methodologies for anomaly detection and failure prediction in distributed systems.",
    keywords: ["Fault Injection", "Failure Analysis", "Runtime Monitoring", "Distributed Systems"],
  },
]

export function ResearchSection() {
  return (
    &lt;section id="research" className="py-16 md:py-24 bg-secondary/30"&gt;
      &lt;div className="max-w-5xl mx-auto px-6"&gt;
        &lt;div className="mb-12"&gt;
          &lt;h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3"&gt;
            Research Interests
          &lt;/h2&gt;
          &lt;p className="text-muted-foreground max-w-2xl"&gt;
            My research focuses on the intersection of AI and software engineering, with emphasis on 
            security, reliability, and robustness of AI-based systems and cloud computing infrastructures.
          &lt;/p&gt;
        &lt;/div&gt;

        &lt;div className="grid md:grid-cols-3 gap-6"&gt;
          {researchAreas.map((area, index) =&gt; (
            &lt;div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            &gt;
              &lt;div className="flex items-center gap-3 mb-4"&gt;
                &lt;div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"&gt;
                  &lt;area.icon className="h-5 w-5 text-primary" /&gt;
                &lt;/div&gt;
                &lt;h3 className="font-serif text-lg font-semibold text-foreground"&gt;
                  {area.title}
                &lt;/h3&gt;
              &lt;/div&gt;
              
              &lt;p className="text-sm text-muted-foreground leading-relaxed mb-4"&gt;
                {area.description}
              &lt;/p&gt;
              
              &lt;div className="flex flex-wrap gap-2"&gt;
                {area.keywords.map((keyword, kIndex) =&gt; (
                  &lt;span
                    key={kIndex}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  &gt;
                    {keyword}
                  &lt;/span&gt;
                ))}
              &lt;/div&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;

        {/* Research Projects */}
        &lt;div className="mt-14"&gt;
          &lt;h3 className="font-serif text-xl font-semibold text-foreground mb-6"&gt;
            Active Research Projects
          &lt;/h3&gt;
          &lt;div className="grid md:grid-cols-2 gap-4"&gt;
            {[
              {
                name: "PRIN 2022 FLEGREA",
                period: "2023-2026",
                description: "Federated Learning for Generative Emulation of Advanced Persistent Threats",
                role: "Task Leader - WP1",
              },
              {
                name: "GENIO Edge Cloud Platform",
                period: "2023-2025",
                description: "Development of edge-cloud platform components for distributed systems",
                role: "Research Unit Member",
              },
              {
                name: "H2020 uDevOps",
                period: "2022-2025",
                description: "Software Quality Assurance in microservices environments",
                role: "Research Unit Member",
              },
              {
                name: "MBDA Artificial Firmware Designer",
                period: "2024-2025",
                description: "AI-based automatic generation of VHDL code from natural language",
                role: "Co-Principal Investigator",
              },
            ].map((project, index) =&gt; (
              &lt;div key={index} className="p-4 rounded-lg border border-border bg-card"&gt;
                &lt;div className="flex items-center justify-between mb-2"&gt;
                  &lt;h4 className="font-medium text-foreground"&gt;{project.name}&lt;/h4&gt;
                  &lt;span className="text-xs text-muted-foreground"&gt;{project.period}&lt;/span&gt;
                &lt;/div&gt;
                &lt;p className="text-sm text-muted-foreground mb-2"&gt;{project.description}&lt;/p&gt;
                &lt;span className="text-xs text-primary font-medium"&gt;{project.role}&lt;/span&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
