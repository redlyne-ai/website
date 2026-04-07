import { Award, BookOpen, Users, FileEdit } from "lucide-react"

const serviceActivities = [
  {
    icon: Award,
    title: "Program Chair",
    items: ["DSML 2026", "ReSAISE 2023", "ReSAISE 2024", "ReSAISE 2025"],
  },
  {
    icon: FileEdit,
    title: "Guest Editor",
    items: ["Journal of Systems and Software (JSS)", "Automated Software Engineering (ASE)", "Future Internet"],
  },
  {
    icon: Users,
    title: "Program Committee Member",
    items: ["ISSRE", "DSN", "ICPC", "ICSME", "EDCC", "LADC"],
  },
  {
    icon: BookOpen,
    title: "Journal Reviewer",
    items: ["IEEE TSE", "IEEE TDSC", "ACM TOSEM", "EMSE", "JSS"],
  },
]

export function ServiceSection() {
  return (
    <section id="service" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Service Activities
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Contributing to the academic community through editorial roles, program committees, 
            and peer review for leading venues in software engineering and dependability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {serviceActivities.map((activity, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <activity.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {activity.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activity.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
