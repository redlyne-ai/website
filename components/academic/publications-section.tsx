"use client"

import { useState } from "react"
import { FileText, ExternalLink, ChevronDown } from "lucide-react"

type PublicationType = "all" | "journal" | "conference" | "book"

interface Publication {
  id: number
  type: "journal" | "conference" | "book"
  year: number
  title: string
  authors: string
  venue: string
  doi?: string
  link?: string
}

const publications: Publication[] = [
  {
    id: 1,
    type: "journal",
    year: 2024,
    title: "Title of Journal Article on Research Topic",
    authors: "Scholar Name, Co-Author A, Co-Author B",
    venue: "Journal of Academic Research, Vol. 42, Issue 3, pp. 123-145",
    doi: "10.1234/example.2024.001",
  },
  {
    id: 2,
    type: "conference",
    year: 2024,
    title: "Conference Paper on Emerging Methodology",
    authors: "Co-Author C, Scholar Name",
    venue: "Proceedings of International Conference on [Field], 2024",
    link: "#",
  },
  {
    id: 3,
    type: "journal",
    year: 2023,
    title: "Comprehensive Study on [Research Area]",
    authors: "Scholar Name, Co-Author D, Co-Author E, Co-Author F",
    venue: "Nature Reviews [Discipline], Vol. 15, pp. 78-92",
    doi: "10.1038/example.2023.015",
  },
  {
    id: 4,
    type: "book",
    year: 2023,
    title: "Book Chapter: Advances in [Topic]",
    authors: "Scholar Name",
    venue: "In: Handbook of [Field], Publisher Name, pp. 201-230",
  },
  {
    id: 5,
    type: "journal",
    year: 2022,
    title: "Empirical Analysis of [Phenomenon]",
    authors: "Co-Author G, Scholar Name, Co-Author H",
    venue: "Annual Review of [Field], Vol. 28, pp. 445-478",
    doi: "10.1146/example.2022.028",
  },
  {
    id: 6,
    type: "conference",
    year: 2022,
    title: "Novel Framework for [Application]",
    authors: "Scholar Name, Co-Author I",
    venue: "IEEE International Conference on [Topic], 2022",
    link: "#",
  },
]

const filterLabels: Record<PublicationType, string> = {
  all: "All Publications",
  journal: "Journal Articles",
  conference: "Conference Papers",
  book: "Books & Chapters",
}

export function PublicationsSection() {
  const [filter, setFilter] = useState<PublicationType>("all")
  const [showAll, setShowAll] = useState(false)

  const filteredPublications = publications.filter(
    (pub) => filter === "all" || pub.type === filter
  )

  const displayedPublications = showAll 
    ? filteredPublications 
    : filteredPublications.slice(0, 4)

  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Publications
            </h2>
            <p className="text-muted-foreground">
              Selected peer-reviewed publications and scholarly works.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
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
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {pub.year}
                    </span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {pub.type === "book" ? "Book Chapter" : pub.type === "journal" ? "Journal" : "Conference"}
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
                  
                  {(pub.doi || pub.link) && (
                    <div className="mt-3 flex items-center gap-4">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                        >
                          DOI: {pub.doi}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                        >
                          View Paper
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPublications.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              {showAll ? "Show Less" : `Show All ${filteredPublications.length} Publications`}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
