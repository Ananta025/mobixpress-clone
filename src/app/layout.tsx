import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBanner from '@/components/Header/TopBanner'
import Navbar from '@/components/Header/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MobiXpress Clone',
  description: 'Mobixpress.in UI clone built with Next.js 15',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner />
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
