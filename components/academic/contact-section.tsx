import { Mail, MapPin, Clock, ExternalLink } from "lucide-react"
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
              I welcome inquiries from prospective students, collaborators, and media representatives.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:scholar@university.edu" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    scholar@university.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    Room 123, Building Name<br />
                    Department of [Department]<br />
                    University Name<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday & Wednesday: 2:00 PM - 4:00 PM<br />
                    Or by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Profiles */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-medium text-foreground mb-4">Academic Profiles</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Google Scholar", url: "#" },
                  { name: "ORCID", url: "#" },
                  { name: "ResearchGate", url: "#" },
                  { name: "Academia.edu", url: "#" },
                  { name: "LinkedIn", url: "#" },
                ].map((profile) => (
                  <Link
                    key={profile.name}
                    href={profile.url}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {profile.name}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ))}
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
                  <option value="prospective-student">Prospective Student Inquiry</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="media">Media/Press Inquiry</option>
                  <option value="speaking">Speaking Invitation</option>
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
