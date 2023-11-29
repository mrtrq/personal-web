import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Tarreq Maulana',
  description: 'Under construction..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}
