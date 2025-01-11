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
          className="space-y-12"
        >
          {/* Introduction */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-red-500">
              Hi! I'm Artyom Sapa.
            </h1>
            <p className="text-xl text-foreground/80">
              A software developer with a focus on user experience and clean code.
            </p>
          </div>

          {/* Background */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-red-500/90">Past</h2>
              <p className="text-foreground/70">
                Originally from Almaty, Kazakhstan.
              </p>
              <div className="pl-4 border-l-2 border-red-500/20 space-y-2">
                <p className="text-foreground/70">
                  During our cold winters, I enjoyed snowboarding.
                </p>
                <p className="text-foreground/70">
                  I loved playing soccer during the hot summers.
                </p>
              </div>
              <p className="text-foreground/70">
                Got enthusiastic about programming during high school.
              </p>
              <div className="pl-4 border-l-2 border-red-500/20 space-y-2">
                <p className="text-foreground/70">
                  Built robots to participate in state wide competitions.
                </p>
                <p className="text-foreground/70">
                  Learned to code in Python for fun.
                </p>
              </div>
              <p className="text-foreground/70">
              Initially, I liked the idea of coding because I wanted to program command blocks in Minecraft.
              </p>
            </div>

            {/* Current */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-red-500/90">Present</h2>
              <p className="text-foreground/70">
                Now based in Los Angeles, California.
              </p>
              <div className="pl-4 border-l-2 border-red-500/20 space-y-2">
                <p className="text-foreground/70">
                  Diving deep into web3 technologies and blockchain development.
                </p>
                <p className="text-foreground/70">
                  When not coding, you'll find me analyzing CS2 strategies or watching romcoms.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <Link
              href="https://github.com/artysapa"
              className="text-sm px-4 py-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/sapartyom"
              className="text-sm px-4 py-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:sapartyom@g.ucla.edu"
              className="text-sm px-4 py-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
            >
              Email
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
