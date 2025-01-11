import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Artyom Sapa | Software Developer',
  description: 'Software developer focused on building products that combine elegant design with efficient functionality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-mono antialiased",
        jetbrainsMono.className
      )}>
        <main className="flex min-h-screen flex-col items-center px-4">
          <div className="container max-w-4xl flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

