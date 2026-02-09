import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Developer",
    price: "Free",
    period: "",
    description: "For individual developers using AI coding assistants.",
    features: [
      "VS Code extension",
      "Real-time inline feedback",
      "35+ CWE detection rules",
      "Unlimited local scans",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$500",
    period: "/mo",
    description: "For engineering teams with CI/CD and policy needs.",
    features: [
      "Everything in Developer",
      "GitHub Actions integration",
      "Team policy management",
      "Centralized reporting",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "On-prem deployment, advanced controls, and API access.",
    features: [
      "Everything in Team",
      "On-premise deployment",
      "Custom rule engine",
      "Structured API access",
      "Dedicated support & SLA",
      "SSO / SAML",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
            Free for individual developers. Scales with your team.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-primary/40 bg-primary/[0.03] relative"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <ul className="mt-8 flex flex-col gap-3 flex-1" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 gap-2 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                asChild
              >
                <Link href="https://redlyne.io" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
