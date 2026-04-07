"use client"

import { useState } from "react"
import { GraduationCap, Calendar, CheckCircle2, Clock } from "lucide-react"

type ThesisStatus = "completed" | "ongoing"
type ThesisFilter = "all" | "ongoing" | "completed" | "msc" | "bsc"

interface Thesis {
  id: number
  status: ThesisStatus
  degree: "MSc" | "BSc"
  role: "Advisor" | "Co-Advisor"
  title: string
  year: string
}

const theses: Thesis[] = [
  // Ongoing MSc Theses
  { id: 1, status: "ongoing", degree: "MSc", role: "Advisor", title: "A Template-Based method to automatically repair software vulnerability", year: "2024/25" },
  { id: 2, status: "ongoing", degree: "MSc", role: "Advisor", title: "Vulnerability Injection in Smart Contracts through Large Language Models", year: "2024/25" },
  { id: 3, status: "ongoing", degree: "MSc", role: "Advisor", title: "Comparing Quality of Human-written and AI-generated Code", year: "2024/25" },
  { id: 4, status: "ongoing", degree: "MSc", role: "Advisor", title: "Analisi dell'impatto del training e delle caratteristiche del modello sui generatori di codice basati su IA", year: "2024/25" },
  { id: 5, status: "ongoing", degree: "MSc", role: "Advisor", title: "Confronto di Tecniche di Prompt Engineering per Offensive Security tramite Large Language Models", year: "2024/25" },
  { id: 6, status: "ongoing", degree: "MSc", role: "Advisor", title: "Uno studio sperimentale su Generative Adversarial Network per la simulazione di attacchi di Cybersecurity", year: "2024/25" },
  // Completed MSc Theses
  { id: 7, status: "completed", degree: "MSc", role: "Advisor", title: "Artificial Firmware Designer Assistant: Valutazione del Codice VHDL Generato da AI", year: "2023/24" },
  { id: 8, status: "completed", degree: "MSc", role: "Advisor", title: "Un Metodo per l'Analisi di Bug Residui in Sistemi Python Complessi", year: "2023/24" },
  { id: 9, status: "completed", degree: "MSc", role: "Advisor", title: "Generazione di Codice VHDL da Linguaggio Naturale: Fine-Tuning di Modelli AI Open-Source e Confronto con Modelli Closed-Source", year: "2023/24" },
  { id: 10, status: "completed", degree: "MSc", role: "Advisor", title: "An Experimental Testbed for Resource Misuse Detection in Microservices Environments", year: "2023/24" },
  { id: 11, status: "completed", degree: "MSc", role: "Advisor", title: "Prompt Engineering for Offensive Code Generation", year: "2023/24" },
  { id: 12, status: "completed", degree: "MSc", role: "Advisor", title: "Security Testing of AI Code Generators", year: "2022/23" },
  { id: 13, status: "completed", degree: "MSc", role: "Advisor", title: "Software Vulnerability Analysis for AI-generated code", year: "2022/23" },
  { id: 14, status: "completed", degree: "MSc", role: "Advisor", title: "Generating PowerShell attacks from Natural Language", year: "2022/23" },
  { id: 15, status: "completed", degree: "MSc", role: "Co-Advisor", title: "Context-Aware Generation of Software Exploits via AI-based Code Generators", year: "2021/22" },
  { id: 16, status: "completed", degree: "MSc", role: "Co-Advisor", title: "Towards the Automatic Evaluation of Code Syntax and Semantics", year: "2021/22" },
  { id: 17, status: "completed", degree: "MSc", role: "Advisor", title: "Analisi di modelli di Neural Machine Translation per Offensive Security", year: "2021/22" },
  { id: 18, status: "completed", degree: "MSc", role: "Co-Advisor", title: "Leveraging Adversarial Training to improve NMT Models Robustness in Code Generation tasks", year: "2020/21" },
  { id: 19, status: "completed", degree: "MSc", role: "Co-Advisor", title: "Rilevamento di Anomalie in Sistemi Cloud: un Approccio Automatizzato Basato su Distributed Tracing", year: "2020/21" },
  { id: 20, status: "completed", degree: "MSc", role: "Co-Advisor", title: "Leveraging Neural Machine Translation to Automatically Generate Software Exploits", year: "2020/21" },
  { id: 21, status: "completed", degree: "MSc", role: "Co-Advisor", title: "Enhancing Failure Analysis of Cloud Infrastructures by using Deep Learning", year: "2019/20" },
  { id: 22, status: "completed", degree: "MSc", role: "Co-Advisor", title: "Runtime Verification via Stream Processing in Cloud Computing Infrastructures", year: "2019/20" },
  // BSc Theses
  { id: 23, status: "ongoing", degree: "BSc", role: "Advisor", title: "Temporal Memory Safety: Exploitation and Mitigation of Use-After-Free Vulnerabilities", year: "2024/25" },
  { id: 24, status: "ongoing", degree: "BSc", role: "Advisor", title: "Utilizzo del log parsing per failure analysis", year: "2024/25" },
  { id: 25, status: "ongoing", degree: "BSc", role: "Advisor", title: "Valutazione di tecniche eterogenee per la rilevazione di vulnerabilità software C/C++", year: "2024/25" },
  { id: 26, status: "completed", degree: "BSc", role: "Advisor", title: "Generazione automatica di Codice nella Software Security", year: "2023/24" },
  { id: 27, status: "completed", degree: "BSc", role: "Advisor", title: "Valutazione della Sicurezza dei Dataset per l'addestramento dei modelli di Code Generation", year: "2022/23" },
  { id: 28, status: "completed", degree: "BSc", role: "Advisor", title: "Evaluating Software Vulnerabilities in Public AI Code Generators", year: "2022/23" },
  { id: 29, status: "completed", degree: "BSc", role: "Advisor", title: "Simulazione e Analisi di Attacchi Informatici verso Sistemi IoT mediante Anomaly Detection", year: "2022/23" },
  { id: 30, status: "completed", degree: "BSc", role: "Advisor", title: "Generazione Automatica di Codice Utilizzando Hugging Face", year: "2022/23" },
]

export function ThesesSection() {
  const [activeTab, setActiveTab] = useState<ThesisFilter>("all")

  const filteredTheses = theses.filter((thesis) => {
    if (activeTab === "all") return true
    if (activeTab === "ongoing") return thesis.status === "ongoing"
    if (activeTab === "completed") return thesis.status === "completed"
    if (activeTab === "msc") return thesis.degree === "MSc"
    if (activeTab === "bsc") return thesis.degree === "BSc"
    return true
  })

  const ongoingCount = theses.filter((t) => t.status === "ongoing").length
  const completedCount = theses.filter((t) => t.status === "completed").length
  const mscCount = theses.filter((t) => t.degree === "MSc").length
  const bscCount = theses.filter((t) => t.degree === "BSc").length

  return (
    &lt;section id="theses" className="py-16 md:py-24 bg-secondary/30"&gt;
      &lt;div className="max-w-5xl mx-auto px-6"&gt;
        &lt;div className="mb-10"&gt;
          &lt;h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3"&gt;
            Supervised Theses
          &lt;/h2&gt;
          &lt;p className="text-muted-foreground max-w-2xl"&gt;
            Graduate students supervised at the University of Naples Federico II (2019-2026).
          &lt;/p&gt;
        &lt;/div&gt;

        {/* Stats */}
        &lt;div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"&gt;
          &lt;div className="bg-card rounded-lg p-4 border border-border text-center"&gt;
            &lt;div className="text-2xl font-semibold text-foreground"&gt;{theses.length}&lt;/div&gt;
            &lt;div className="text-sm text-muted-foreground"&gt;Total Theses&lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="bg-card rounded-lg p-4 border border-border text-center"&gt;
            &lt;div className="text-2xl font-semibold text-primary"&gt;{ongoingCount}&lt;/div&gt;
            &lt;div className="text-sm text-muted-foreground"&gt;Ongoing&lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="bg-card rounded-lg p-4 border border-border text-center"&gt;
            &lt;div className="text-2xl font-semibold text-foreground"&gt;{mscCount}&lt;/div&gt;
            &lt;div className="text-sm text-muted-foreground"&gt;{"Master's"}&lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="bg-card rounded-lg p-4 border border-border text-center"&gt;
            &lt;div className="text-2xl font-semibold text-foreground"&gt;{bscCount}&lt;/div&gt;
            &lt;div className="text-sm text-muted-foreground"&gt;{"Bachelor's"}&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        {/* Tabs */}
        &lt;div className="flex flex-wrap gap-2 mb-8"&gt;
          {[
            { key: "all", label: "All" },
            { key: "ongoing", label: "Ongoing" },
            { key: "completed", label: "Completed" },
            { key: "msc", label: "Master's" },
            { key: "bsc", label: "Bachelor's" },
          ].map((tab) =&gt; (
            &lt;button
              key={tab.key}
              onClick={() =&gt; setActiveTab(tab.key as ThesisFilter)}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            &gt;
              {tab.label}
            &lt;/button&gt;
          ))}
        &lt;/div&gt;

        {/* Theses List */}
        &lt;div className="space-y-3"&gt;
          {filteredTheses.map((thesis) =&gt; (
            &lt;article
              key={thesis.id}
              className="group p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            &gt;
              &lt;div className="flex items-start gap-4"&gt;
                &lt;div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                  thesis.status === "ongoing" 
                    ? "bg-primary/10" 
                    : "bg-secondary"
                }`}&gt;
                  &lt;GraduationCap className={`h-5 w-5 ${
                    thesis.status === "ongoing" ? "text-primary" : "text-muted-foreground"
                  }`} /&gt;
                &lt;/div&gt;

                &lt;div className="flex-1 min-w-0"&gt;
                  &lt;div className="flex flex-wrap items-center gap-2 mb-2"&gt;
                    &lt;span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded ${
                      thesis.status === "ongoing"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}&gt;
                      {thesis.status === "ongoing" ? (
                        &lt;Clock className="h-3 w-3" /&gt;
                      ) : (
                        &lt;CheckCircle2 className="h-3 w-3" /&gt;
                      )}
                      {thesis.status === "ongoing" ? "In Progress" : "Completed"}
                    &lt;/span&gt;
                    &lt;span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"&gt;
                      {thesis.degree}
                    &lt;/span&gt;
                    &lt;span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"&gt;
                      {thesis.role}
                    &lt;/span&gt;
                    &lt;span className="inline-flex items-center gap-1 text-xs text-muted-foreground"&gt;
                      &lt;Calendar className="h-3 w-3" /&gt;
                      {thesis.year}
                    &lt;/span&gt;
                  &lt;/div&gt;

                  &lt;h3 className="text-sm font-medium text-foreground leading-snug"&gt;
                    {thesis.title}
                  &lt;/h3&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/article&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
