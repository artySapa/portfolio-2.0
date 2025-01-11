'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16 lg:p-24">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-xl font-bold text-muted-foreground">
              Hi! My name is Artyom Sapa.
            </p>
            <p className="text-muted-foreground">
              I am a software developer focused on building products that combine elegant design with efficient functionality.
            </p>
            <div className="flex flex-col">
            <p className="text-muted-foreground">
              I am originally from Almaty, Kazakhstan.
            </p>
              <p className="text-muted-foreground ml-5">
              In our cold winters I love snowboarding.
              </p>
              <p className="text-muted-foreground ml-5">
              In our hot summers I love playing soccer.
              </p>
            </div>
            <div className='flex flex-col'>
            <p className="text-muted-foreground">
              I am currently based in Los Angeles, California. 
            </p>
            </div>
            <div>
            <p className="text-muted-foreground">
              The most recent thing that I've been interested in is web3 technologies and blockchain.
            </p>
            <p className="text-muted-foreground">
              I am also interested in film and esports (Counter-Strike 2). 
            </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4 text-green-500">
            <Link
              href="https://github.com/artysapa"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/artysapa"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:contact@artysapa.dev"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
