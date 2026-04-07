"use client"

import { useState } from "react"
import { FileText, ExternalLink, ChevronDown } from "lucide-react"

type PublicationType = "all" | "journal" | "conference" | "workshop"

interface Publication {
  id: number
  type: "journal" | "conference" | "workshop"
  year: number
  title: string
  authors: string
  venue: string
  ranking?: string
  doi?: string
}

const publications: Publication[] = [
  // Selected Journal Articles (Q1)
  {
    id: 1,
    type: "journal",
    year: 2026,
    title: "Reading between the Lines: Context-Aware AI-based Generation of Software Exploits",
    authors: "Improta, C., Liguori, P., Natella, R., Cukic, B., Cotroneo, D.",
    venue: "Empirical Software Engineering, Springer, 31(3), Article 60",
    ranking: "Q1",
    doi: "10.1007/s10664-025-10796-x",
  },
  {
    id: 2,
    type: "journal",
    year: 2025,
    title: "CGP-Tuning: Structure-Aware Soft Prompt Tuning for Code Vulnerability Detection",
    authors: "Feng, R., Pearce, H., Liguori, P., Sui, Y.",
    venue: "IEEE Transactions on Software Engineering, vol. 51, pp. 2533-2548",
    ranking: "Q1",
    doi: "10.1109/TSE.2025.3591934",
  },
  {
    id: 3,
    type: "journal",
    year: 2025,
    title: "Enhancing Robustness of AI Offensive Code Generators via Data Augmentation",
    authors: "Improta, C., Liguori, P., Natella, R., Cukic, B., Cotroneo, D.",
    venue: "Empirical Software Engineering, Springer, 30(1), Article 7",
    ranking: "Q1",
    doi: "10.1007/s10664-024-10569-y",
  },
  {
    id: 4,
    type: "journal",
    year: 2025,
    title: "DeVAIC: A Tool for Security Assessment of AI-Generated Code",
    authors: "Cotroneo, D., De Luca, R., Liguori, P.",
    venue: "Information and Software Technology, Elsevier",
    ranking: "Q1",
    doi: "10.1016/j.infsof.2024.107572",
  },
  {
    id: 5,
    type: "journal",
    year: 2024,
    title: "AI Code Generators for Security: Friend or Foe?",
    authors: "Natella, R., Liguori, P., Improta, C., Cukic, B., Cotroneo, D.",
    venue: "IEEE Security & Privacy, vol. 22, no. 5, pp. 73-81",
    ranking: "Q1",
    doi: "10.1109/MSEC.2024.3355713",
  },
  {
    id: 6,
    type: "journal",
    year: 2024,
    title: "Automating the Correctness Assessment of AI-Generated Code for Security Contexts",
    authors: "Cotroneo, D., Foggia, A., Improta, C., Liguori, P., Natella, R.",
    venue: "Journal of Systems and Software, Elsevier",
    ranking: "Q1",
    doi: "10.1016/j.jss.2024.112113",
  },
  {
    id: 7,
    type: "journal",
    year: 2023,
    title: "Who Evaluates the Evaluators? On Automatic Metrics for Assessing AI-Based Offensive Code Generators",
    authors: "Liguori, P., Improta, C., Natella, R., Cukic, B., Cotroneo, D.",
    venue: "Expert Systems with Applications, Elsevier, 225, 120073",
    ranking: "Q1",
    doi: "10.1016/j.eswa.2023.120073",
  },
  {
    id: 8,
    type: "journal",
    year: 2023,
    title: "Run-Time Failure Detection via Non-Intrusive Event Analysis in a Large-Scale Cloud Computing Platform",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R.",
    venue: "Journal of Systems and Software, Elsevier, 198, 111611",
    ranking: "Q1",
    doi: "10.1016/j.jss.2023.111611",
  },
  {
    id: 9,
    type: "journal",
    year: 2022,
    title: "Can We Generate Shellcodes via Natural Language? An Empirical Study",
    authors: "Liguori, P., Al-Hossami, E., Cotroneo, D., Natella, R., Cukic, B., Shaikh, S.",
    venue: "Automated Software Engineering, Springer",
    ranking: "Q2",
    doi: "10.1007/s10515-022-00331-3",
  },
  {
    id: 10,
    type: "journal",
    year: 2021,
    title: "Enhancing the Analysis of Software Failures in Cloud Computing Systems with Deep Learning",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R.",
    venue: "Journal of Systems and Software, Elsevier, 181, 111043",
    ranking: "Q1",
    doi: "10.1016/j.jss.2021.111043",
  },
  {
    id: 11,
    type: "journal",
    year: 2020,
    title: "Fault Injection Analytics: A Novel Approach to Discover Failure Modes in Cloud-Computing Systems",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R.",
    venue: "IEEE Transactions on Dependable and Secure Computing, vol. 19, no. 3, pp. 1476-1491",
    ranking: "Q1",
    doi: "10.1109/TDSC.2020.3025289",
  },
  // International Conferences - A* Rank
  {
    id: 12,
    type: "conference",
    year: 2019,
    title: "How Bad Can a Bug Get? An Empirical Analysis of Software Failures in the OpenStack Cloud Computing Platform",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R., Bidokhti, N.",
    venue: "ESEC/FSE 2019, ACM, pp. 200-211",
    ranking: "A*",
    doi: "10.1145/3338906.3338916",
  },
  // International Conferences - A Rank
  {
    id: 13,
    type: "conference",
    year: 2026,
    title: "Will It Break in Production? Metric-Driven Prediction of Residual Defects in Python Systems",
    authors: "De Rosa, G., Liguori, P.",
    venue: "DSN 2026, IEEE (Accepted)",
    ranking: "A",
  },
  {
    id: 14,
    type: "conference",
    year: 2025,
    title: "Human-written vs. AI-generated code: A Large-Scale Study of Defects, Vulnerabilities, and Complexity",
    authors: "Cotroneo, D., Improta, C., Liguori, P.",
    venue: "ISSRE 2025, IEEE",
    ranking: "A",
    doi: "10.1109/ISSRE66568.2025.00035",
  },
  {
    id: 15,
    type: "conference",
    year: 2025,
    title: "Quality In, Quality Out: Investigating Training Data's Role in AI Code Generation",
    authors: "Improta, C., Tufano, R., Liguori, P., Cotroneo, D., Bavota, G.",
    venue: "ICPC 2025, IEEE/ACM",
    ranking: "A",
    doi: "10.1109/ICPC66645.2025.00056",
  },
  {
    id: 16,
    type: "conference",
    year: 2024,
    title: "Enhancing AI-based Generation of Software Exploits with Contextual Information",
    authors: "Liguori, P., Improta, C., Natella, R., Cukic, B., Cotroneo, D.",
    venue: "ISSRE 2024, IEEE",
    ranking: "A",
    doi: "10.1109/ISSRE62328.2024.00027",
  },
  {
    id: 17,
    type: "conference",
    year: 2024,
    title: "Vulnerabilities in AI Code Generators: Exploring Targeted Data Poisoning Attacks",
    authors: "Cotroneo, D., Improta, C., Liguori, P., Natella, R.",
    venue: "ICPC 2024, ACM",
    ranking: "A",
    doi: "10.1145/3643916.3644416",
  },
  {
    id: 18,
    type: "conference",
    year: 2021,
    title: "EVIL: Exploiting Software via Natural Language",
    authors: "Liguori, P., Al-Hossami, E., Orbinato, V., Natella, R., Shaikh, S., Cotroneo, D., Cukic, B.",
    venue: "ISSRE 2021, IEEE",
    ranking: "A",
    doi: "10.1109/ISSRE52982.2021.00042",
  },
  {
    id: 19,
    type: "conference",
    year: 2020,
    title: "ProFiPy: Programmable Software Fault Injection as-a-Service",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R.",
    venue: "DSN 2020, IEEE, pp. 364-372",
    ranking: "A",
    doi: "10.1109/DSN48063.2020.00052",
  },
  {
    id: 20,
    type: "conference",
    year: 2019,
    title: "Enhancing Failure Propagation Analysis in Cloud Computing Systems",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R., Bidokhti, N.",
    venue: "ISSRE 2019, IEEE, pp. 139-150",
    ranking: "A",
    doi: "10.1109/ISSRE.2019.00023",
  },
  // Workshops
  {
    id: 21,
    type: "workshop",
    year: 2024,
    title: "The Power of Words: Generating PowerShell Attacks from Natural Language",
    authors: "Liguori, P., Marescalco, C., Natella, R., Orbinato, V., Pianese, L.",
    venue: "WOOT 2024, USENIX Association",
  },
  {
    id: 22,
    type: "workshop",
    year: 2022,
    title: "Can NMT Understand Me? Towards Perturbation-Based Evaluation of NMT Models for Code Generation",
    authors: "Liguori, P., Improta, C., De Vivo, S., Natella, R., Cukic, B., Cotroneo, D.",
    venue: "NLBSE 2022, ACM",
    doi: "10.1145/3528588.3528653",
  },
  {
    id: 23,
    type: "workshop",
    year: 2021,
    title: "Shellcode_IA32: A Dataset for Automatic Shellcode Generation",
    authors: "Liguori, P., Al-Hossami, E., Cotroneo, D., Natella, R., Cukic, B., Shaikh, S.",
    venue: "NLP4Prog 2021, ACL, pp. 58-64",
    doi: "10.18653/v1/2021.nlp4prog-1.7",
  },
]

const filterLabels: Record<PublicationType, string> = {
  all: "All Publications",
  journal: "Journal Articles",
  conference: "Conference Papers",
  workshop: "Workshops",
}

export function PublicationsSection() {
  const [filter, setFilter] = useState<PublicationType>("all")
  const [showAll, setShowAll] = useState(false)

  const filteredPublications = publications.filter(
    (pub) => filter === "all" || pub.type === filter
  )

  const displayedPublications = showAll 
    ? filteredPublications 
    : filteredPublications.slice(0, 6)

  const journalCount = publications.filter(p => p.type === "journal").length
  const conferenceCount = publications.filter(p => p.type === "conference").length

  return (
    &lt;section id="publications" className="py-16 md:py-24"&gt;
      &lt;div className="max-w-5xl mx-auto px-6"&gt;
        &lt;div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"&gt;
          &lt;div&gt;
            &lt;h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3"&gt;
              Selected Publications
            &lt;/h2&gt;
            &lt;p className="text-muted-foreground"&gt;
              35 publications total: {journalCount} journal articles (10 Q1), {conferenceCount} conference papers (1 A*, 8 A-rank)
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div className="flex flex-wrap gap-2 mb-10"&gt;
          {(Object.keys(filterLabels) as PublicationType[]).map((type) =&gt; (
            &lt;button
              key={type}
              onClick={() =&gt; {
                setFilter(type)
                setShowAll(false)
              }}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                filter === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            &gt;
              {filterLabels[type]}
            &lt;/button&gt;
          ))}
        &lt;/div&gt;

        &lt;div className="space-y-4"&gt;
          {displayedPublications.map((pub) =&gt; (
            &lt;article
              key={pub.id}
              className="group p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            &gt;
              &lt;div className="flex items-start gap-4"&gt;
                &lt;div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"&gt;
                  &lt;FileText className="h-5 w-5 text-primary" /&gt;
                &lt;/div&gt;
                
                &lt;div className="flex-1 min-w-0"&gt;
                  &lt;div className="flex flex-wrap items-center gap-2 mb-1.5"&gt;
                    &lt;span className="text-xs font-medium px-2 py-0.5 rounded bg-secondary text-muted-foreground"&gt;
                      {pub.year}
                    &lt;/span&gt;
                    {pub.ranking &amp;&amp; (
                      &lt;span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        pub.ranking === "A*" 
                          ? "bg-primary/20 text-primary" 
                          : pub.ranking === "Q1" || pub.ranking === "A"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}&gt;
                        {pub.type === "journal" ? `SJR ${pub.ranking}` : `CORE ${pub.ranking}`}
                      &lt;/span&gt;
                    )}
                    &lt;span className="text-xs text-muted-foreground capitalize"&gt;
                      {pub.type === "journal" ? "Journal" : pub.type === "conference" ? "Conference" : "Workshop"}
                    &lt;/span&gt;
                  &lt;/div&gt;
                  
                  &lt;h3 className="font-medium text-foreground mb-1 leading-snug"&gt;
                    {pub.title}
                  &lt;/h3&gt;
                  
                  &lt;p className="text-sm text-muted-foreground mb-1"&gt;
                    {pub.authors}
                  &lt;/p&gt;
                  
                  &lt;p className="text-sm text-muted-foreground/80 italic"&gt;
                    {pub.venue}
                  &lt;/p&gt;
                  
                  {pub.doi &amp;&amp; (
                    &lt;div className="mt-3"&gt;
                      &lt;a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                      &gt;
                        DOI: {pub.doi}
                        &lt;ExternalLink className="h-3 w-3" /&gt;
                      &lt;/a&gt;
                    &lt;/div&gt;
                  )}
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/article&gt;
          ))}
        &lt;/div&gt;

        {filteredPublications.length &gt; 6 &amp;&amp; (
          &lt;div className="mt-8 text-center"&gt;
            &lt;button
              onClick={() =&gt; setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            &gt;
              {showAll ? "Show Less" : `Show All ${filteredPublications.length} Publications`}
              &lt;ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} /&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        )}
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
