import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://vstupenkyalert.com'),
  title: {
    default: 'Vstupenkyalert – Porovnání cen vstupenek na jednom místě',
    template: '%s | Vstupenkyalert',
  },
  description: 'Vstupenkyalert je nezávislá platforma pro porovnání cen vstupenek. Porovnáme ceny od více důvěryhodných partnerů – koncerty, sport, festivaly. Zdarma, bez registrace.',
  keywords: 'vstupenky, ceny vstupenek, porovnání, koncert, sport, festival, Vstupenkyalert, Ticketmaster, Eventim, StubHub',
  alternates: { canonical: 'https://vstupenkyalert.com' },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://vstupenkyalert.com',
    siteName: 'Vstupenkyalert',
    title: 'Vstupenkyalert – Porovnání cen vstupenek',
    description: 'Porovnáme ceny vstupenek od více partnerů na jednom místě – koncerty, sport, festivaly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vstupenkyalert – Porovnání cen vstupenek',
    description: 'Porovnáme ceny od partnerů na jednom místě.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
