'use client'

import { Navigation } from "@/components/Navigation"
import { ProjectCard } from "@/components/ProjectCard"
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Share3D",
    description: "A platform for requesting and sharing models for 3D printing.",
    // image: "/projects/share3d.png",
    liveUrl: "https://3d-project-sable.vercel.app",
    githubUrl: "https://github.com/artySapa/3d-project",
    technologies: ["React.js", "Redux", "MongoDB", "Three.js"],
    highlights: [
      "Implemented interactivity with 3D models using WebGL and made it responsive using tailwindCSS.",
      "Leveraged MongoDB data indexing to ensure the response time of fetching GLTF/STL data within 1 second.",
      "Stored GLTF/STL data in MongoDB with file encryption and optimized data indexing."
    ]
  },
  {
    title: "ProFlow",
    description: "A project management tool for dragging and dropping tasks (Trello clone).",
    // image: "/projects/proflow.png",
    githubUrl: "https://github.com/CS35L-ProFlow/",
    technologies: ["React.ts", "Git", "SQL"],
    highlights: [
      "Implemented user authentication, card view, and profile features of the app using TypeScript.",
      "Improved drag-and-drop UX with predictive transitions, eliminating database lag for smoother card movements.",
      "Worked with a team of 4 to build a full-stack project management application."
    ]
  },
  {
    title: "Customer Churn Prediction",
    description: "A machine learning project to predict why customers might leave a company.",
    // image: "/projects/churn.png",
    githubUrl: "https://github.com/artySapa/determine-customer-churn",
    technologies: ["Python", "Flask", "Postgres", "React.js"],
    highlights: [
      "Developed a machine learning model to predict customer churn reasons using RandomForest and KNN classifiers.",
      "Achieved 92.9% accuracy on the training data and 87.1% accuracy on the test data.",
      "Enabled Excel/CSV uploads with Pandas for automated parsing, cleaning, and rapid analysis.",
      "Integrated the model into a Flask web app, delivering real-time results via a React front-end."
    ]
  },
  {
    title: "FilmIt",
    description: "A movie recommendation system.",
    // image: "/projects/churn.png",
    githubUrl: "https://github.com/artySapa/movie-filter",
    technologies: ["React.js", "Axios"],
    highlights: [
      "Developed a movie recommending service, filtering through IMDB API and displaying trailers through Youtube API.",
      "Created a high-performance, reusable hash table to optimize data storage and additional API implementations."
    ]
  },
  {
    title: "UDP Client-Server",
    description: "A course project to implement a UDP client-server application that allows users to send and receive messages.",
    // image: "/projects/churn.png",
    // githubUrl: "https://github.com/artySapa/movie-filter",
    technologies: ["C++"],
    highlights: [
      "Designed a UDP-based client-server application with client-side and server-side components using C++.",
      "Integrated cryptography functionalities, including nonce generation, key exchange, and signature verification.",
      "Developed a handshake protocol to establish a secure connection between the client and server using public-key cryptography, digital signatures, and certificate verification."
    ]
  },
  {
    title: "Compiler Optimization",
    description: "A course project to optimize a given compiling algorithm.",
    // image: "/projects/churn.png",
    // githubUrl: "https://github.com/artySapa/movie-filter",
    technologies: ["C++"],
    highlights: [
      "Reduced compilation time by 70% by refactoring C/C++ compiler algorithm for optimized performance.",
      "Optimized sorting algorithm, increasing performance by 50% when processing large data sets of over 1 million entries.",
    ]
  },
  {
    title: "TimeCapsule Bot",
    description: "A telegram bot that allows users to send messages to their future.",
    // image: "/projects/churn.png",
    // githubUrl: "https://github.com/artySapa/movie-filter",
    technologies: ["Python", "Telegram API"],
    highlights: [
      "Created a Telegram bot that preserves memories and sends them in the future using asyncio and apscheduler.",
      "Implemented a robust scheduling algorithm, handling over 500 future messages daily without failures.",
      "Developed a secure and efficient message encryption system, ensuring that messages are only accessible to the intended recipient at the specified future date."
    ]
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16 lg:p-24">
      <Navigation />
      
      <main className="max-w-3xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12">Projects</h1>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
} 