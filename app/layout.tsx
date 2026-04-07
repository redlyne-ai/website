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
  title: 'Dr. Scholar Name - Academic Portfolio',
  description: 'Academic portfolio featuring research interests, publications, supervised theses, teaching portfolio, and contact information.',
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
