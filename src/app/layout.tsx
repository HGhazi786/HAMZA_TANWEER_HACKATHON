import Footers from './components/footers'
import Navbar from './components/modile_nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Oven Secret',
  description: 'Created by hamza tanweer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-white"}>
        <Navbar />
        {children}
        <Footers />
      </body>
    </html>
  );
}
