import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Eduardo Bauer — Desenvolvedor Back-end',
  description:
    'Portfolio de Eduardo Bauer, desenvolvedor back-end especializado em C, Python, Delphi, Java e SQL.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0d12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="antialiased min-h-screen flex flex-col">
        <SiteNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
