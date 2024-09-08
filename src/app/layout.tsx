import { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Footer from "./components/Footer"
import './globals.css'
import './favicon.ico'

const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Req's Space",
  description: 'Under construction..',
  icons: 'favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <body className={jakarta.className}>
        {children}
        <Footer/>
        </body>
      </head>
    </html>
  )
}
