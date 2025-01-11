import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  liveUrl?: string
  githubUrl?: string
  technologies: string[]
  highlights: string[]
}

export function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  technologies,
  highlights
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group relative flex flex-col h-full p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
      {/* Project Image */}
      {image && !imageError && (
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        </div>
      )}

      {/* Project Info */}
      <div className="flex-1 space-y-4">
        <h3 className="text-xl font-bold text-blue-500">{title}</h3>
        <p className="text-foreground/70">{description}</p>

        {/* Highlights */}
        <div className="space-y-2">
          {highlights.map((highlight, index) => (
            <p key={index} className="text-sm text-foreground/70 pl-4 border-l-2 border-blue-500/20">
              {highlight}
            </p>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-500/10 text-blue-500 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-blue-200/50  rounded-full text-sm  transition-colors"
            >
              GitHub
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-blue-200/50  rounded-full text-sm  transition-colors"
            >
              Live Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 