import { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Req's Space",
  description: 'Under construction..',
  icons: '../../public/rocket.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <body className={jakarta.className}>{children}</body>
      </head>
    </html>
  )
}
