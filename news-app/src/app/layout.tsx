import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'

export const metadata: Metadata = {
  title: 'Kevin News App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://test.hitmeup.ai/widget.js/?rec=161&token=07792eb5-acaa-4ba8-b022-b8b51f9bb576" async></script>
      </head>
      <body className="bg-white dark:bg-zinc-900 dark:text-white transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">
            {children}
        </div>
      </body>
    </html>
  )
}
