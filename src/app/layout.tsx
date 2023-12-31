import { CProviders } from '@/cproviders'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from '@/context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App XXXYYY',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <CProviders>
            {children}
          </CProviders>
        </GlobalContextProvider>
      </body>
    </html>
  )
}
