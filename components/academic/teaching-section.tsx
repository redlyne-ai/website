import { BookOpen, Users, Shield } from "lucide-react"

interface Course {
  code?: string
  name: string
  level: "Undergraduate" | "Graduate" | "Doctoral"
  program: string
  university: string
  credits: string
  semester: string
}

const currentCourses: Course[] = [
  {
    name: "Laboratorio di Programmazione",
    level: "Graduate",
    program: "Ingegneria Biomedica (LM)",
    university: "Università Federico II",
    credits: "9 CFU, 72 hours",
    semester: "A.A. 2025/26",
  },
  {
    name: "Practical Cybersecurity",
    level: "Graduate",
    program: "Scienze dei Sistemi Aerospaziali per la Difesa",
    university: "Università Federico II",
    credits: "9 CFU, 72 hours",
    semester: "A.A. 2025/26",
  },
  {
    name: "AI Code Generation: Foundations, Evaluation, and Security",
    level: "Doctoral",
    program: "PhD in Information Technology and Electrical Engineering",
    university: "Università Federico II",
    credits: "3 CFU, 11 hours",
    semester: "A.A. 2024/25",
  },
]

const pastCourses = [
  "Laboratorio di Programmazione - Ingegneria Elettronica (2024/25)",
  "Laboratorio di Programmazione - Ingegneria Biomedica (2023/24)",
  "Affidabilità e Sicurezza dei Sistemi Software Complessi (2022/23)",
  "Affidabilità e Sicurezza dei Sistemi Software Complessi (2021/22)",
]

const teachingHighlights = [
  {
    icon: Users,
    title: "Student Supervision",
    description: "Supervised 34 thesis students (26 MSc, 8 BSc) on AI code generation, software security, and cloud reliability",
  },
  {
    icon: Shield,
    title: "CyberChallenge.IT",
    description: "Program coordinator at DIETI for the national cybersecurity training initiative (2023-2026, 216+ teaching hours)",
  },
  {
    icon: BookOpen,
    title: "Teaching Experience",
    description: "51 CFU (395 hours) of teaching across undergraduate, graduate, and doctoral levels since 2021",
  },
]

export function TeachingSection() {
  return (
    <section id="teaching" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Teaching Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Teaching in software reliability, security, programming, and AI-based systems 
            at the University of Naples Federico II.
          </p>
        </div>

        {/* Teaching Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {teachingHighlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <highlight.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Courses */}
        <div className="mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
            Current Courses
          </h3>
          <div className="grid gap-4">
            {currentCourses.map((course, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    course.level === "Doctoral" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {course.credits}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {course.semester}
                  </span>
                </div>
                <h4 className="font-medium text-foreground mb-1">{course.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {course.program}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {course.university}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Courses */}
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            Previously Taught
          </h3>
          <div className="flex flex-wrap gap-2">
            {pastCourses.map((course, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
