import { Mail, MapPin, Building, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Contact
            </h2>
            <p className="text-muted-foreground mb-8">
              I welcome inquiries from prospective students, research collaborators, 
              and industry partners interested in AI code generation, software security, 
              and dependable computing.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:pietro.liguori@unina.it" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pietro.liguori@unina.it
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Department</h3>
                  <p className="text-muted-foreground">
                    Dipartimento di Ingegneria Elettrica e delle<br />
                    Tecnologie dell&apos;Informazione (DIETI)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Università degli Studi di Napoli Federico II<br />
                    Via Claudio, 21<br />
                    80125 Napoli, Italy
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Profiles */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-medium text-foreground mb-4">Academic Profiles</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Google Scholar", url: "https://scholar.google.com/" },
                  { name: "ORCID", url: "https://orcid.org/" },
                  { name: "DESSERT Lab", url: "https://dessert.unina.it/" },
                  { name: "Scopus", url: "https://www.scopus.com/" },
                  { name: "DBLP", url: "https://dblp.org/" },
                ].map((profile) => (
                  <Link
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {profile.name}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Activities */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-medium text-foreground mb-4">Service Activities</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Program Chair:</span> DSML 2026, ReSAISE 2023-2025
                </div>
                <div>
                  <span className="font-medium text-foreground">Guest Editor:</span> JSS, ASE, Future Internet
                </div>
                <div>
                  <span className="font-medium text-foreground">PC Member:</span> ISSRE, DSN, ICPC, ICSME, EDCC, LADC
                </div>
                <div>
                  <span className="font-medium text-foreground">Reviewer:</span> IEEE TSE, IEEE TDSC, ACM TOSEM, EMSE, JSS
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                >
                  <option value="">Select a topic</option>
                  <option value="thesis">Thesis Supervision Inquiry</option>
                  <option value="phd">PhD/Research Position</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="industry">Industry Partnership</option>
                  <option value="speaking">Speaking/Tutorial Invitation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
