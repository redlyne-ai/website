import { Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    &lt;section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24"&gt;
      &lt;div className="max-w-5xl mx-auto px-6"&gt;
        &lt;div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start"&gt;
          {/* Profile Image & Quick Info */}
          &lt;div className="space-y-6"&gt;
            &lt;div className="w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-lg bg-secondary overflow-hidden"&gt;
              &lt;div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm"&gt;
                Profile Photo
              &lt;/div&gt;
            &lt;/div&gt;
            
            &lt;div className="space-y-3 text-sm"&gt;
              &lt;div className="flex items-center gap-2 text-muted-foreground"&gt;
                &lt;MapPin className="h-4 w-4 shrink-0" /&gt;
                &lt;span&gt;DIETI, Federico II, Naples&lt;/span&gt;
              &lt;/div&gt;
              &lt;div className="flex items-center gap-2 text-muted-foreground"&gt;
                &lt;Mail className="h-4 w-4 shrink-0" /&gt;
                &lt;a href="mailto:pietro.liguori@unina.it" className="hover:text-primary transition-colors"&gt;
                  pietro.liguori@unina.it
                &lt;/a&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="flex flex-wrap gap-3 pt-2"&gt;
              &lt;Link
                href="https://scholar.google.com/citations?user=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              &gt;
                Google Scholar
                &lt;ExternalLink className="h-3 w-3" /&gt;
              &lt;/Link&gt;
              &lt;Link
                href="https://orcid.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              &gt;
                ORCID
                &lt;ExternalLink className="h-3 w-3" /&gt;
              &lt;/Link&gt;
              &lt;Link
                href="https://dessert.unina.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              &gt;
                DESSERT Lab
                &lt;ExternalLink className="h-3 w-3" /&gt;
              &lt;/Link&gt;
            &lt;/div&gt;

            {/* Metrics */}
            &lt;div className="grid grid-cols-2 gap-3 pt-4 border-t border-border"&gt;
              &lt;div className="text-center p-3 bg-secondary/50 rounded-lg"&gt;
                &lt;div className="text-xl font-semibold text-foreground"&gt;370+&lt;/div&gt;
                &lt;div className="text-xs text-muted-foreground"&gt;Scopus Citations&lt;/div&gt;
              &lt;/div&gt;
              &lt;div className="text-center p-3 bg-secondary/50 rounded-lg"&gt;
                &lt;div className="text-xl font-semibold text-foreground"&gt;14&lt;/div&gt;
                &lt;div className="text-xs text-muted-foreground"&gt;h-index&lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Bio Content */}
          &lt;div className="space-y-6"&gt;
            &lt;div&gt;
              &lt;h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2 text-balance"&gt;
                Pietro Liguori, PhD
              &lt;/h1&gt;
              &lt;p className="text-lg text-primary font-medium"&gt;
                Assistant Professor (RTD-A)
              &lt;/p&gt;
              &lt;p className="text-muted-foreground"&gt;
                Department of Electrical Engineering and Information Technology (DIETI)
                &lt;br /&gt;
                University of Naples Federico II
              &lt;/p&gt;
            &lt;/div&gt;

            &lt;div className="prose prose-slate max-w-none"&gt;
              &lt;p className="text-foreground/90 leading-relaxed"&gt;
                I am a researcher specializing in &lt;strong&gt;AI-based code generation&lt;/strong&gt;, &lt;strong&gt;software security&lt;/strong&gt;, 
                and &lt;strong&gt;dependable computing&lt;/strong&gt;. My work focuses on evaluating and improving the security, 
                reliability, and robustness of AI code generators, with applications in cybersecurity and offensive security testing.
              &lt;/p&gt;
              &lt;p className="text-foreground/90 leading-relaxed"&gt;
                I received my PhD in Information Technology and Electrical Engineering from Federico II in 2022, 
                with a thesis on fault injection in cloud computing systems. I am a member of the 
                &lt;a href="https://dessert.unina.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"&gt;DESSERT Research Group&lt;/a&gt;, 
                where I contribute to research on software reliability, cybersecurity, and dependable systems.
              &lt;/p&gt;
              &lt;p className="text-foreground/90 leading-relaxed"&gt;
                My research has been published in top-tier venues including IEEE TSE, IEEE TDSC, ESEC/FSE, DSN, 
                and ISSRE. I serve as Program Chair for workshops on AI security and as reviewer for leading 
                journals in software engineering.
              &lt;/p&gt;
            &lt;/div&gt;

            {/* Awards Highlight */}
            &lt;div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"&gt;
              &lt;div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"&gt;
                &lt;span className="text-primary text-sm"&gt;*&lt;/span&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;p className="text-sm font-medium text-foreground"&gt;MBDA Innovation Award 2026&lt;/p&gt;
                &lt;p className="text-xs text-muted-foreground"&gt;
                  For the Artificial Firmware Designer Assistant project on AI-based VHDL code generation
                &lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
