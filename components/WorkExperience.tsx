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
    <div className="mb-12 p-6 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-green-500">{title}</h3>
          <p className="text-lg text-muted-foreground">
            <span className="font-medium text-foreground">{company}</span> • {location}
          </p>
        </div>
        <span className="text-sm bg-green-500/10 text-green-500 px-3 py-1 rounded-full">
          {duration}
        </span>
      </div>
      
      <div className="mt-4 space-y-2">
        {description.map((point, index) => (
          <p key={index} className="text-muted-foreground pl-4 border-l-2 border-green-500/20">
            {point}
          </p>
        ))}
      </div>

      {technologies && (
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-green-500/10 text-green-500 rounded-full hover:bg-green-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
} 