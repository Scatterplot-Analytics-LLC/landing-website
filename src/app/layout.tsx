import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../styles/colors'
import '../styles/globals.css'
import LottiePreloader from '@/src/components/homepage/LottiePreloader'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Scatterplot',
  description:
    'Create, manage, and present personalized finance decks at scale. Build financial presentations that win trust.',
  generator: 'Scatterplot',
  icons: {
    icon: '/symbol.png',
    shortcut: '/symbol.png',
    apple: '/symbol.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LottiePreloader />
        {children}
      </body>
    </html>
  )
}
