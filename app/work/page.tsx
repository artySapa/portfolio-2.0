'use client'

import { WorkExperience } from "@/components/WorkExperience"
import { Navigation } from "@/components/Navigation"
import { motion } from 'framer-motion'

const workExperiences = [
  {
    title: "Software Engineer",
    company: "Example Company",
    location: "Los Angeles, CA",
    duration: "Jan 2023 - Present",
    description: [
      "Led development of key features resulting in 40% increase in user engagement",
      "Collaborated with design team to implement responsive UI components",
      "Optimized database queries reducing load times by 60%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  },
  // Add more work experiences here...
]

export default function Work() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16 lg:p-24">
      <Navigation />
      
      <main className="max-w-3xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12">Work Experience</h1>
          
          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <WorkExperience
                key={index}
                {...experience}
              />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
} 