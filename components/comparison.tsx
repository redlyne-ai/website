import { CheckCircle2, X, Minus } from "lucide-react"

const tools = [
  {
    name: "Redlyne",
    highlight: true,
    f1: "94%",
    fragments: true,
    speed: "<100ms",
    hallucinations: "None",
    aiLoop: true,
    cwesCovered: "35+",
  },
  {
    name: "Semgrep",
    highlight: false,
    f1: "71%",
    fragments: "partial",
    speed: "Seconds",
    hallucinations: "N/A",
    aiLoop: false,
    cwesCovered: "Varies",
  },
  {
    name: "CodeQL",
    highlight: false,
    f1: "54%",
    fragments: false,
    speed: "Minutes",
    hallucinations: "N/A",
    aiLoop: false,
    cwesCovered: "Varies",
  },
  {
    name: "Bandit",
    highlight: false,
    f1: "72%",
    fragments: false,
    speed: "Seconds",
    hallucinations: "N/A",
    aiLoop: false,
    cwesCovered: "Limited",
  },
  {
    name: "ChatGPT-4",
    highlight: false,
    f1: "71%",
    fragments: true,
    speed: "Seconds",
    hallucinations: "High",
    aiLoop: false,
    cwesCovered: "Unknown",
  },
  {
    name: "Claude 3.5",
    highlight: false,
    f1: "74%",
    fragments: true,
    speed: "Seconds",
    hallucinations: "High",
    aiLoop: false,
    cwesCovered: "Unknown",
  },
]

function SupportIcon({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="h-4 w-4 text-emerald-400" />
  if (value === false) return <X className="h-4 w-4 text-muted-foreground/50" />
  return <Minus className="h-4 w-4 text-muted-foreground/50" />
}

export function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            How Redlyne compares
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            Independently validated on 500 AI-generated code samples. Published in Information and Software Technology (Elsevier, 2025).
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-left font-medium text-muted-foreground">Tool</th>
                <th className="px-4 py-4 text-center font-medium text-muted-foreground">F1 Score</th>
                <th className="px-4 py-4 text-center font-medium text-muted-foreground">Code Fragments</th>
                <th className="px-4 py-4 text-center font-medium text-muted-foreground">Speed</th>
                <th className="px-4 py-4 text-center font-medium text-muted-foreground">Hallucinations</th>
                <th className="px-4 py-4 text-center font-medium text-muted-foreground">AI Feedback Loop</th>
                <th className="pl-4 py-4 text-center font-medium text-muted-foreground">CWEs</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr
                  key={tool.name}
                  className={`border-b border-border/50 ${
                    tool.highlight
                      ? "bg-primary/[0.03]"
                      : ""
                  }`}
                >
                  <td className="py-4 pr-4">
                    <span className={`font-medium ${tool.highlight ? "text-primary" : "text-foreground"}`}>
                      {tool.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`font-mono ${tool.highlight ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                      {tool.f1}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <SupportIcon value={tool.fragments} />
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`font-mono text-xs ${tool.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                      {tool.speed}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-xs ${
                      tool.hallucinations === "None"
                        ? "rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-400"
                        : tool.hallucinations === "High"
                          ? "rounded-full bg-destructive/10 px-2 py-0.5 font-medium text-destructive"
                          : "text-muted-foreground"
                    }`}>
                      {tool.hallucinations}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <SupportIcon value={tool.aiLoop} />
                    </div>
                  </td>
                  <td className="pl-4 py-4 text-center">
                    <span className={`font-mono text-xs ${tool.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                      {tool.cwesCovered}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
