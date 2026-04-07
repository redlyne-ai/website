import { BookOpen, Users, Award } from "lucide-react"

interface Course {
  code: string
  name: string
  level: "Undergraduate" | "Graduate" | "Doctoral"
  description: string
  semester: string
}

const currentCourses: Course[] = [
  {
    code: "DEPT 301",
    name: "Advanced Topics in [Field]",
    level: "Undergraduate",
    description: "An in-depth exploration of contemporary issues and methodologies in [field], preparing students for research careers.",
    semester: "Fall 2024",
  },
  {
    code: "DEPT 501",
    name: "Research Methods in [Discipline]",
    level: "Graduate",
    description: "Comprehensive survey of quantitative and qualitative research methods applicable to [discipline] studies.",
    semester: "Fall 2024",
  },
  {
    code: "DEPT 701",
    name: "Doctoral Seminar: [Specialty]",
    level: "Doctoral",
    description: "Advanced seminar for doctoral candidates focusing on cutting-edge research in [specialty area].",
    semester: "Spring 2025",
  },
]

const pastCourses = [
  "Introduction to [Field] (DEPT 101)",
  "Intermediate [Subject] (DEPT 201)",
  "Special Topics: [Topic] (DEPT 450)",
  "Graduate Workshop in [Area] (DEPT 600)",
]

const teachingHighlights = [
  {
    icon: Users,
    title: "Mentorship",
    description: "Supervised 15+ graduate students and advised 50+ undergraduate research projects",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Teaching Excellence Award (2022), Outstanding Faculty Mentor Award (2020)",
  },
  {
    icon: BookOpen,
    title: "Curriculum",
    description: "Developed 3 new courses and redesigned department methodology sequence",
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
            Committed to excellence in education and mentoring the next generation of scholars.
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
                  <span className="text-sm font-mono font-medium text-primary">
                    {course.code}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {course.level}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {course.semester}
                  </span>
                </div>
                <h4 className="font-medium text-foreground mb-1">{course.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
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
