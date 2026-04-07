import { Navigation } from "@/components/academic/navigation"
import { HeroSection } from "@/components/academic/hero-section"
import { ResearchSection } from "@/components/academic/research-section"
import { PublicationsSection } from "@/components/academic/publications-section"
import { ThesesSection } from "@/components/academic/theses-section"
import { TeachingSection } from "@/components/academic/teaching-section"
import { ContactSection } from "@/components/academic/contact-section"
import { Footer } from "@/components/academic/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ResearchSection />
      <PublicationsSection />
      <ThesesSection />
      <TeachingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
