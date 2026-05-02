import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Benchmark } from "@/components/benchmark"
import { CodeDemo } from "@/components/code-demo"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Benchmark />
      <CodeDemo />
      <Footer />
    </main>
  )
}
