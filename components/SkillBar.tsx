interface SkillBarProps {
  skill: string;
  years: number;
  maxYears?: number; // For scaling the progress bar
}

export function SkillBar({ skill, years, maxYears = 5 }: SkillBarProps) {
  const progress = (years / maxYears) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{years} years</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
} 