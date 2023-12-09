import { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Tarreq Maulana',
  description: 'Under construction..',
  icons: 'https://drive.google.com/file/d/1IaZLNH_CnhLvfEAD4-sFiXzEx4nULQWq/view?usp=sharing'
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
