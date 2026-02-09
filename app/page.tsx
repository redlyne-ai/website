import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CodeDemo } from "@/components/code-demo"
import { Comparison } from "@/components/comparison"
import { Founders } from "@/components/founders"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <CodeDemo />
      <Comparison />
      <Founders />
      <Pricing />
      <Footer />
    </main>
  )
}
