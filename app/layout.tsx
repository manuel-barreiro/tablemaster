import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TableMaster',
  description: 'Book your restaurant table online',
}

import { AppProvider } from '@/context/AppContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[url('/bg.jpeg')] bg-cover h-auto mb-10`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
