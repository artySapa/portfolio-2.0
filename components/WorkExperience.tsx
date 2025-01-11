interface WorkExperienceProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export function WorkExperience({ 
  title, 
  company, 
  location, 
  duration, 
  description, 
  technologies 
}: WorkExperienceProps) {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-muted-foreground">{company} • {location}</p>
        </div>
        <span className="text-sm text-muted-foreground">{duration}</span>
      </div>
      
      <div className="mt-4 space-y-2">
        {description.map((point, index) => (
          <p key={index} className="text-muted-foreground">
            • {point}
          </p>
        ))}
      </div>

      {technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
} 