import React from "react"
import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'

import './globals.css'

const sourceSerif = Source_Serif_4({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pietro Liguori, PhD - Academic Portfolio',
  description: 'Assistant Professor (RTD-A) at University of Naples Federico II. Research in AI-based code generation, software security, cybersecurity, and cloud computing reliability.',
}

export const viewport: Viewport = {
  themeColor: '#f8fafc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
