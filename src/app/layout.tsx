import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'NCM Business Portfolio',
  description: 'Developed by Yuval Avidani, AI Builder & Speaker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={outfit.variable}>
        <body className="font-outfit antialiased min-h-screen bg-gradient-to-br from-background to-background">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="absolute bottom-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full bg-yellow-400/10 blur-[120px]" />
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[120px]" />
          </div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="pt-16">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}