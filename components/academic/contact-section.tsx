import { Mail, MapPin, Building, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    &lt;section id="contact" className="py-16 md:py-24 bg-secondary/30"&gt;
      &lt;div className="max-w-5xl mx-auto px-6"&gt;
        &lt;div className="grid md:grid-cols-2 gap-12 md:gap-16"&gt;
          {/* Contact Info */}
          &lt;div&gt;
            &lt;h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3"&gt;
              Contact
            &lt;/h2&gt;
            &lt;p className="text-muted-foreground mb-8"&gt;
              I welcome inquiries from prospective students, research collaborators, 
              and industry partners interested in AI code generation, software security, 
              and dependable computing.
            &lt;/p&gt;

            &lt;div className="space-y-6"&gt;
              &lt;div className="flex items-start gap-4"&gt;
                &lt;div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"&gt;
                  &lt;Mail className="h-5 w-5 text-primary" /&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;h3 className="font-medium text-foreground mb-1"&gt;Email&lt;/h3&gt;
                  &lt;a 
                    href="mailto:pietro.liguori@unina.it" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  &gt;
                    pietro.liguori@unina.it
                  &lt;/a&gt;
                &lt;/div&gt;
              &lt;/div&gt;

              &lt;div className="flex items-start gap-4"&gt;
                &lt;div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"&gt;
                  &lt;Building className="h-5 w-5 text-primary" /&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;h3 className="font-medium text-foreground mb-1"&gt;Department&lt;/h3&gt;
                  &lt;p className="text-muted-foreground"&gt;
                    Dipartimento di Ingegneria Elettrica e delle&lt;br /&gt;
                    Tecnologie dell&apos;Informazione (DIETI)
                  &lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;

              &lt;div className="flex items-start gap-4"&gt;
                &lt;div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"&gt;
                  &lt;MapPin className="h-5 w-5 text-primary" /&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;h3 className="font-medium text-foreground mb-1"&gt;Address&lt;/h3&gt;
                  &lt;p className="text-muted-foreground"&gt;
                    Università degli Studi di Napoli Federico II&lt;br /&gt;
                    Via Claudio, 21&lt;br /&gt;
                    80125 Napoli, Italy
                  &lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            {/* Academic Profiles */}
            &lt;div className="mt-10 pt-8 border-t border-border"&gt;
              &lt;h3 className="font-medium text-foreground mb-4"&gt;Academic Profiles&lt;/h3&gt;
              &lt;div className="flex flex-wrap gap-3"&gt;
                {[
                  { name: "Google Scholar", url: "https://scholar.google.com/" },
                  { name: "ORCID", url: "https://orcid.org/" },
                  { name: "DESSERT Lab", url: "https://dessert.unina.it/" },
                  { name: "Scopus", url: "https://www.scopus.com/" },
                  { name: "DBLP", url: "https://dblp.org/" },
                ].map((profile) =&gt; (
                  &lt;Link
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  &gt;
                    {profile.name}
                    &lt;ExternalLink className="h-3 w-3" /&gt;
                  &lt;/Link&gt;
                ))}
              &lt;/div&gt;
            &lt;/div&gt;

            {/* Service Activities */}
            &lt;div className="mt-8 pt-8 border-t border-border"&gt;
              &lt;h3 className="font-medium text-foreground mb-4"&gt;Service Activities&lt;/h3&gt;
              &lt;div className="space-y-3 text-sm text-muted-foreground"&gt;
                &lt;div&gt;
                  &lt;span className="font-medium text-foreground"&gt;Program Chair:&lt;/span&gt; DSML 2026, ReSAISE 2023-2025
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;span className="font-medium text-foreground"&gt;Guest Editor:&lt;/span&gt; JSS, ASE, Future Internet
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;span className="font-medium text-foreground"&gt;PC Member:&lt;/span&gt; ISSRE, DSN, ICPC, ICSME, EDCC, LADC
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;span className="font-medium text-foreground"&gt;Reviewer:&lt;/span&gt; IEEE TSE, IEEE TDSC, ACM TOSEM, EMSE, JSS
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Contact Form */}
          &lt;div className="bg-card rounded-lg border border-border p-6 md:p-8"&gt;
            &lt;h3 className="font-serif text-xl font-semibold text-foreground mb-6"&gt;
              Send a Message
            &lt;/h3&gt;
            &lt;form className="space-y-5"&gt;
              &lt;div&gt;
                &lt;label htmlFor="name" className="block text-sm font-medium text-foreground mb-2"&gt;
                  Name
                &lt;/label&gt;
                &lt;input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  placeholder="Your name"
                /&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;label htmlFor="email" className="block text-sm font-medium text-foreground mb-2"&gt;
                  Email
                &lt;/label&gt;
                &lt;input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                /&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2"&gt;
                  Subject
                &lt;/label&gt;
                &lt;select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                &gt;
                  &lt;option value=""&gt;Select a topic&lt;/option&gt;
                  &lt;option value="thesis"&gt;Thesis Supervision Inquiry&lt;/option&gt;
                  &lt;option value="phd"&gt;PhD/Research Position&lt;/option&gt;
                  &lt;option value="collaboration"&gt;Research Collaboration&lt;/option&gt;
                  &lt;option value="industry"&gt;Industry Partnership&lt;/option&gt;
                  &lt;option value="speaking"&gt;Speaking/Tutorial Invitation&lt;/option&gt;
                  &lt;option value="other"&gt;Other&lt;/option&gt;
                &lt;/select&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;label htmlFor="message" className="block text-sm font-medium text-foreground mb-2"&gt;
                  Message
                &lt;/label&gt;
                &lt;textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
                  placeholder="Your message..."
                /&gt;
              &lt;/div&gt;

              &lt;button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              &gt;
                Send Message
              &lt;/button&gt;
            &lt;/form&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
