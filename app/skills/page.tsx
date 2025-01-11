'use client'

import { Navigation } from "@/components/Navigation"
import { SkillBar } from "@/components/SkillBar"
import { motion } from 'framer-motion'
import { FC } from 'react'

const skills = [
  {
    category: "Frontend",
    items: [
      { skill: "React", years: 4 },
      { skill: "TypeScript", years: 2.5 },
      { skill: "JavaScript", years: 4 },
      { skill: "Tailwind CSS", years: 2.5 },
      { skill: "Next.js", years: 2 },
      { skill: "HTML/CSS", years: 4 },
      { skill: "Redux", years: 3 },
      { skill: "Material UI", years: 3 },
      { skill: "Three.js", years: 1.5 },
      { skill: "Svelte", years: 1 },
    ]
  },
  {
    category: "Backend",
    items: [
      { skill: "Node.js", years: 3 },
      { skill: "Python", years: 4 },
      { skill: "PostgreSQL", years: 3 },
      { skill: "MongoDB", years: 2 },
      { skill: "Express.js", years: 3 },
      { skill: "Django", years: 2 },
      { skill: "RESTful APIs", years: 3 },
      { skill: "Flask", years: 2 },
      { skill: "Go", years: 1 },
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { skill: "JavaScript/TypeScript", years: 4 },
      { skill: "Python", years: 4 },
      { skill: "C++", years: 2 },
      { skill: "C#", years: 1.5 },
      { skill: "Go", years: 1 },
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { skill: "Git", years: 4 },
      { skill: "Docker", years: 2 },
      { skill: "AWS", years: 1.5 },
      { skill: "CI/CD", years: 2 },
      { skill: "Linux", years: 3 },
      { skill: "Agile/Scrum", years: 3 },
    ]
  },
  {
    category: "Testing",
    items: [
      { skill: "Jest", years: 2 },
      { skill: "React Testing Library", years: 2 },
      { skill: "Cypress", years: 1.5 },
      { skill: "Unit Testing", years: 3 },
    ]
  }
]

const SkillsPage: FC = () => {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16 lg:p-24">
      <Navigation />
      
      <main className="max-w-3xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12">Skills</h1>
          
          <div className="space-y-12">
            {skills.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <SkillBar
                      key={itemIndex}
                      skill={item.skill}
                      years={item.years}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default SkillsPage 