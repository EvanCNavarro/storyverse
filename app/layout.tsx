import './globals.css'
import type { Metadata } from 'next'
import ThemeProvider from './providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'StoryVerse',
  description: 'Interactive storytelling platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
