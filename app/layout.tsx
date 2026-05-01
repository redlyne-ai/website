import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Redlyne — Security for AI-generated code',
  description: 'Redlyne is a VS Code extension that detects vulnerabilities in AI-generated Python code and proposes one-click patches. Local execution. Open source.',
  metadataBase: new URL('https://redlyne.io'),
  icons: {
    icon: '/redlyne-icon.png',
  },
  openGraph: {
    title: 'Redlyne — Security for AI-generated code',
    description: 'Detect and patch vulnerabilities in AI-generated Python code, directly from VS Code.',
    url: 'https://redlyne.io',
    siteName: 'Redlyne',
    images: ['/redlyne-icon.png'],
    type: 'website',
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
