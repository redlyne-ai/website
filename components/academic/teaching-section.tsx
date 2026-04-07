import { BookOpen, Users, Award, Shield } from "lucide-react"

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
    &lt;section id="teaching" className="py-16 md:py-24"&gt;
      &lt;div className="max-w-5xl mx-auto px-6"&gt;
        &lt;div className="mb-12"&gt;
          &lt;h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3"&gt;
            Teaching Portfolio
          &lt;/h2&gt;
          &lt;p className="text-muted-foreground max-w-2xl"&gt;
            Teaching in software reliability, security, programming, and AI-based systems 
            at the University of Naples Federico II.
          &lt;/p&gt;
        &lt;/div&gt;

        {/* Teaching Highlights */}
        &lt;div className="grid md:grid-cols-3 gap-6 mb-14"&gt;
          {teachingHighlights.map((highlight, index) =&gt; (
            &lt;div key={index} className="flex items-start gap-4"&gt;
              &lt;div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"&gt;
                &lt;highlight.icon className="h-5 w-5 text-primary" /&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;h3 className="font-medium text-foreground mb-1"&gt;{highlight.title}&lt;/h3&gt;
                &lt;p className="text-sm text-muted-foreground leading-relaxed"&gt;
                  {highlight.description}
                &lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;

        {/* Current Courses */}
        &lt;div className="mb-12"&gt;
          &lt;h3 className="font-serif text-xl font-semibold text-foreground mb-6"&gt;
            Current Courses
          &lt;/h3&gt;
          &lt;div className="grid gap-4"&gt;
            {currentCourses.map((course, index) =&gt; (
              &lt;div
                key={index}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              &gt;
                &lt;div className="flex flex-wrap items-center gap-3 mb-2"&gt;
                  &lt;span className={`text-xs px-2 py-0.5 rounded-full ${
                    course.level === "Doctoral" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary text-muted-foreground"
                  }`}&gt;
                    {course.level}
                  &lt;/span&gt;
                  &lt;span className="text-xs text-muted-foreground"&gt;
                    {course.credits}
                  &lt;/span&gt;
                  &lt;span className="text-xs text-muted-foreground"&gt;
                    {course.semester}
                  &lt;/span&gt;
                &lt;/div&gt;
                &lt;h4 className="font-medium text-foreground mb-1"&gt;{course.name}&lt;/h4&gt;
                &lt;p className="text-sm text-muted-foreground"&gt;
                  {course.program}
                &lt;/p&gt;
                &lt;p className="text-xs text-muted-foreground/70"&gt;
                  {course.university}
                &lt;/p&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;

        {/* Past Courses */}
        &lt;div&gt;
          &lt;h3 className="font-serif text-xl font-semibold text-foreground mb-4"&gt;
            Previously Taught
          &lt;/h3&gt;
          &lt;div className="flex flex-wrap gap-2"&gt;
            {pastCourses.map((course, index) =&gt; (
              &lt;span
                key={index}
                className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
              &gt;
                {course}
              &lt;/span&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;

        {/* Teaching Statistics Table */}
        &lt;div className="mt-12 p-6 rounded-lg border border-border bg-card"&gt;
          &lt;h3 className="font-serif text-lg font-semibold text-foreground mb-4"&gt;
            Teaching Activity Summary
          &lt;/h3&gt;
          &lt;div className="overflow-x-auto"&gt;
            &lt;table className="w-full text-sm"&gt;
              &lt;thead&gt;
                &lt;tr className="border-b border-border"&gt;
                  &lt;th className="text-left py-2 pr-4 font-medium text-foreground"&gt;Academic Year&lt;/th&gt;
                  &lt;th className="text-center py-2 px-4 font-medium text-foreground"&gt;Courses&lt;/th&gt;
                  &lt;th className="text-center py-2 pl-4 font-medium text-foreground"&gt;CFU&lt;/th&gt;
                &lt;/tr&gt;
              &lt;/thead&gt;
              &lt;tbody&gt;
                {[
                  { year: "2025/2026", courses: 2, cfu: 18 },
                  { year: "2024/2025", courses: 2, cfu: 12 },
                  { year: "2023/2024", courses: 1, cfu: 9 },
                  { year: "2022/2023", courses: 1, cfu: 6 },
                  { year: "2021/2022", courses: 1, cfu: 6 },
                ].map((row, index) =&gt; (
                  &lt;tr key={index} className="border-b border-border/50"&gt;
                    &lt;td className="py-2 pr-4 text-muted-foreground"&gt;{row.year}&lt;/td&gt;
                    &lt;td className="py-2 px-4 text-center text-foreground"&gt;{row.courses}&lt;/td&gt;
                    &lt;td className="py-2 pl-4 text-center text-foreground"&gt;{row.cfu}&lt;/td&gt;
                  &lt;/tr&gt;
                ))}
                &lt;tr className="font-medium"&gt;
                  &lt;td className="py-2 pr-4 text-foreground"&gt;Total&lt;/td&gt;
                  &lt;td className="py-2 px-4 text-center text-primary"&gt;7&lt;/td&gt;
                  &lt;td className="py-2 pl-4 text-center text-primary"&gt;51&lt;/td&gt;
                &lt;/tr&gt;
              &lt;/tbody&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
