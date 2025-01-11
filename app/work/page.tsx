'use client'

import { WorkExperience } from "@/components/WorkExperience"
import { Navigation } from "@/components/Navigation"
import { motion } from 'framer-motion'

const workExperiences = [
  {
    title: "Software Engineer Intern",
    company: "Manerai",
    location: "Remote",
    duration: "Jan 2025 - Mar 2025",
    description: [
      "Designed and tested VR game prototypes in Unity and C\#, developing AI-driven NPC behaviors.",
      "Analyzed player behavior data with Python to enhance AI algorithms for personalization and NPC development.",
      "Developed an AI-powered automation tool for Git workflows, integrating it into the GitLab interface using TypeScript."
    ],
    technologies: ["C#", "TypeScript", "Python"]
  },
  {
    title: "IT Intern",
    company: "Lavner Education",
    location: "Los Angeles, CA",
    duration: "Jun 2023 - Aug 2023",
    description: [
      "Coordinated with fellow interns to engineer tech solutions for over 150 students and 20 staff.",
      "Deployed, managed, and repaired several hundred Windows laptops throughout the summer.",
      "Instructed and impassioned high-profile students about the potential of computer science and related fields."
    ],
    technologies: ["JavaScript", "Python", "SQL", "ASP.NET"]
  },
  {
    title: "Software Engineer Intern",
    company: "Desco Industries",
    location: "Chino, CA",
    duration: "Jun 2022 - Aug 2022",
    description: [
      "Developed and deployed an automated Windows update system using Python, SQL, LanSweeper, and group policies, reducing manual effort by 5 hours weekly.",
      "Improved user satisfaction by 35\% with 20+ new interface features in a web-based internal code editor.",
      "Reduced deployment time by 25\% by optimizing queries in SQL \& VBA code."
    ],
    technologies: ["JavaScript", "Python", "SQL", "ASP.NET"]
  }
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