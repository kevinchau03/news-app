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
      <head />
      <body className="bg-gray-50 dark:bg-zinc-900 transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
        </body>
    </html>
  )
}
