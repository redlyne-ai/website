import { Lightbulb } from "lucide-react"

const researchAreas = [
  {
    title: "Research Area 1",
    description: "Description of your primary research interest and methodology. Explain the key questions you are investigating and the approaches you use.",
    keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
  },
  {
    title: "Research Area 2",
    description: "Description of another major research focus. Detail the theoretical frameworks and practical applications of this work.",
    keywords: ["Keyword 4", "Keyword 5", "Keyword 6"],
  },
  {
    title: "Research Area 3",
    description: "Description of emerging or interdisciplinary research interests. Highlight collaborations and cross-disciplinary connections.",
    keywords: ["Keyword 7", "Keyword 8", "Keyword 9"],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Research Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My research spans multiple interconnected areas, with a focus on advancing 
            both theoretical understanding and practical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.keywords.map((keyword, kIndex) => (
                  <span
                    key={kIndex}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {keyword}
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
