"use client"

import { useState } from "react"
import { GraduationCap, Calendar, CheckCircle2, Clock } from "lucide-react"

type ThesisStatus = "completed" | "ongoing"

interface Thesis {
  id: number
  status: ThesisStatus
  degree: "PhD" | "Masters" | "Bachelors"
  student: string
  title: string
  year: number | string
  coSupervisor?: string
}

const theses: Thesis[] = [
  {
    id: 1,
    status: "ongoing",
    degree: "PhD",
    student: "Student Name A",
    title: "Doctoral Research on Advanced [Topic]: A Comprehensive Investigation",
    year: "Expected 2026",
    coSupervisor: "Prof. Co-Supervisor",
  },
  {
    id: 2,
    status: "ongoing",
    degree: "PhD",
    student: "Student Name B",
    title: "Theoretical Frameworks for Understanding [Phenomenon]",
    year: "Expected 2025",
  },
  {
    id: 3,
    status: "completed",
    degree: "PhD",
    student: "Dr. Graduate Name C",
    title: "Empirical Studies in [Research Area]: Methods and Applications",
    year: 2023,
  },
  {
    id: 4,
    status: "completed",
    degree: "Masters",
    student: "Graduate Name D",
    title: "Exploring [Topic] Through Mixed Methods Research",
    year: 2023,
  },
  {
    id: 5,
    status: "completed",
    degree: "PhD",
    student: "Dr. Graduate Name E",
    title: "Innovations in [Field]: A Multi-Disciplinary Approach",
    year: 2022,
    coSupervisor: "Prof. External Examiner",
  },
  {
    id: 6,
    status: "completed",
    degree: "Masters",
    student: "Graduate Name F",
    title: "Analysis of [Subject] in Contemporary Context",
    year: 2022,
  },
  {
    id: 7,
    status: "completed",
    degree: "Masters",
    student: "Graduate Name G",
    title: "Comparative Study of [Methods/Approaches]",
    year: 2021,
  },
]

export function ThesesSection() {
  const [activeTab, setActiveTab] = useState<ThesisStatus | "all">("all")

  const filteredTheses = theses.filter(
    (thesis) => activeTab === "all" || thesis.status === activeTab
  )

  const ongoingCount = theses.filter((t) => t.status === "ongoing").length
  const completedCount = theses.filter((t) => t.status === "completed").length

  return (
    <section id="theses" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Supervised Theses
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Graduate students I have supervised or am currently supervising as primary advisor.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-card rounded-lg p-4 border border-border text-center">
            <div className="text-2xl font-semibold text-foreground">{theses.length}</div>
            <div className="text-sm text-muted-foreground">Total Students</div>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border text-center">
            <div className="text-2xl font-semibold text-primary">{ongoingCount}</div>
            <div className="text-sm text-muted-foreground">Ongoing</div>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border text-center">
            <div className="text-2xl font-semibold text-foreground">{completedCount}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {[
            { key: "all", label: "All" },
            { key: "ongoing", label: "Ongoing" },
            { key: "completed", label: "Completed" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Theses List */}
        <div className="space-y-4">
          {filteredTheses.map((thesis) => (
            <article
              key={thesis.id}
              className="group p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                  thesis.status === "ongoing" 
                    ? "bg-primary/10" 
                    : "bg-secondary"
                }`}>
                  <GraduationCap className={`h-5 w-5 ${
                    thesis.status === "ongoing" ? "text-primary" : "text-muted-foreground"
                  }`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded ${
                      thesis.status === "ongoing"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {thesis.status === "ongoing" ? (
                        <Clock className="h-3 w-3" />
                      ) : (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                      {thesis.status === "ongoing" ? "In Progress" : "Completed"}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {thesis.degree}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {thesis.year}
                    </span>
                  </div>

                  <h3 className="font-medium text-foreground mb-1 leading-snug">
                    {thesis.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">{thesis.student}</span>
                    {thesis.coSupervisor && (
                      <span className="text-muted-foreground/70">
                        {" "}· Co-supervised with {thesis.coSupervisor}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
