"use client"

import { useState } from "react"
import { FileText, ExternalLink, ChevronDown } from "lucide-react"
import Link from "next/link"

type PublicationType = "all" | "journal" | "conference"

interface Publication {
  id: number
  type: "journal" | "conference"
  year: number
  title: string
  authors: string
  venue: string
  ranking?: string
  doi?: string
}

const publications: Publication[] = [
  // Selected Journal Articles
  {
    id: 1,
    type: "journal",
    year: 2026,
    title: "Reading between the Lines: Context-Aware AI-based Generation of Software Exploits",
    authors: "Improta, C., Liguori, P., Natella, R., Cukic, B., Cotroneo, D.",
    venue: "Empirical Software Engineering, Springer",
    ranking: "Q1",
    doi: "10.1007/s10664-025-10796-x",
  },
  {
    id: 2,
    type: "journal",
    year: 2025,
    title: "CGP-Tuning: Structure-Aware Soft Prompt Tuning for Code Vulnerability Detection",
    authors: "Feng, R., Pearce, H., Liguori, P., Sui, Y.",
    venue: "IEEE Transactions on Software Engineering",
    ranking: "Q1",
    doi: "10.1109/TSE.2025.3591934",
  },
  {
    id: 3,
    type: "journal",
    year: 2024,
    title: "AI Code Generators for Security: Friend or Foe?",
    authors: "Natella, R., Liguori, P., Improta, C., Cukic, B., Cotroneo, D.",
    venue: "IEEE Security & Privacy",
    ranking: "Q1",
    doi: "10.1109/MSEC.2024.3355713",
  },
  {
    id: 4,
    type: "journal",
    year: 2022,
    title: "Can We Generate Shellcodes via Natural Language? An Empirical Study",
    authors: "Liguori, P., Al-Hossami, E., Cotroneo, D., Natella, R., Cukic, B., Shaikh, S.",
    venue: "Automated Software Engineering, Springer",
    ranking: "Q2",
    doi: "10.1007/s10515-022-00331-3",
  },
  {
    id: 5,
    type: "journal",
    year: 2020,
    title: "Fault Injection Analytics: A Novel Approach to Discover Failure Modes in Cloud-Computing Systems",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R.",
    venue: "IEEE Transactions on Dependable and Secure Computing",
    ranking: "Q1",
    doi: "10.1109/TDSC.2020.3025289",
  },
  // Selected Conferences
  {
    id: 6,
    type: "conference",
    year: 2019,
    title: "How Bad Can a Bug Get? An Empirical Analysis of Software Failures in the OpenStack Cloud Computing Platform",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R., Bidokhti, N.",
    venue: "ESEC/FSE 2019, ACM",
    ranking: "A*",
    doi: "10.1145/3338906.3338916",
  },
  {
    id: 7,
    type: "conference",
    year: 2026,
    title: "Will It Break in Production? Metric-Driven Prediction of Residual Defects in Python Systems",
    authors: "De Rosa, G., Liguori, P.",
    venue: "DSN 2026, IEEE",
    ranking: "A",
  },
  {
    id: 8,
    type: "conference",
    year: 2025,
    title: "Human-written vs. AI-generated code: A Large-Scale Study of Defects, Vulnerabilities, and Complexity",
    authors: "Cotroneo, D., Improta, C., Liguori, P.",
    venue: "ISSRE 2025, IEEE",
    ranking: "A",
    doi: "10.1109/ISSRE66568.2025.00035",
  },
  {
    id: 9,
    type: "conference",
    year: 2021,
    title: "EVIL: Exploiting Software via Natural Language",
    authors: "Liguori, P., Al-Hossami, E., Orbinato, V., Natella, R., Shaikh, S., Cotroneo, D., Cukic, B.",
    venue: "ISSRE 2021, IEEE",
    ranking: "A",
    doi: "10.1109/ISSRE52982.2021.00042",
  },
  {
    id: 10,
    type: "conference",
    year: 2020,
    title: "ProFiPy: Programmable Software Fault Injection as-a-Service",
    authors: "Cotroneo, D., De Simone, L., Liguori, P., Natella, R.",
    venue: "DSN 2020, IEEE",
    ranking: "A",
    doi: "10.1109/DSN48063.2020.00052",
  },
]

const filterLabels: Record<PublicationType, string> = {
  all: "All",
  journal: "Journals",
  conference: "Conferences",
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

  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Selected Publications
            </h2>
            <p className="text-muted-foreground">
              A selection of recent and notable publications.{" "}
              <Link 
                href="https://scholar.google.com/citations?user=dDrGg2IAAAAJ&hl=it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                View complete list on Google Scholar
                <ExternalLink className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {(Object.keys(filterLabels) as PublicationType[]).map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilter(type)
                setShowAll(false)
              }}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                filter === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filterLabels[type]}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {displayedPublications.map((pub) => (
            <article
              key={pub.id}
              className="group p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {pub.year}
                    </span>
                    {pub.ranking && (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        pub.ranking === "A*" 
                          ? "bg-primary/20 text-primary" 
                          : pub.ranking === "Q1" || pub.ranking === "A"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}>
                        {pub.type === "journal" ? `SJR ${pub.ranking}` : `CORE ${pub.ranking}`}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground capitalize">
                      {pub.type === "journal" ? "Journal" : "Conference"}
                    </span>
                  </div>
                  
                  <h3 className="font-medium text-foreground mb-1 leading-snug">
                    {pub.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-1">
                    {pub.authors}
                  </p>
                  
                  <p className="text-sm text-muted-foreground/80 italic">
                    {pub.venue}
                  </p>
                  
                  {pub.doi && (
                    <div className="mt-3">
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                      >
                        DOI: {pub.doi}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPublications.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              {showAll ? "Show Less" : `Show All ${filteredPublications.length}`}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
