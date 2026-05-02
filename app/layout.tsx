import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Redlyne — Security for AI-generated code',
  description:
    'Redlyne is a VS Code extension that detects vulnerabilities in AI-generated Python code and proposes one-click patches. Built for AI. Built without AI.',
  metadataBase: new URL('https://redlyne.io'),
  icons: {
    icon: '/redlyne-icon.png',
  },
  openGraph: {
    title: 'Redlyne — Security for AI-generated code',
    description:
      'Detect and patch vulnerabilities in AI-generated Python code. Deterministic engine, expert-curated rules, runs locally.',
    url: 'https://redlyne.io',
    siteName: 'Redlyne',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Redlyne — Security for AI-generated code',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redlyne — Security for AI-generated code',
    description:
      'Detect and patch vulnerabilities in AI-generated Python code. Built for AI. Built without AI.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
