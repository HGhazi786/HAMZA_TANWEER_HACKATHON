import Footers from './components/footers'
import Navbar from './components/modile_nav'
import Providers from './components/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'react-hot-toast'

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
      <body className={"bg-orange-100"}>
        <ClerkProvider>
          <Providers>
              <Navbar />
              {children}
              <Toaster position="top-right" reverseOrder={false} />
              <Footers />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
