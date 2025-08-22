import { ReactNode, cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  const gradientId = `gradient-${title.replace(/\s+/g, '-').toLowerCase()}`
  
  return (
    <div className={cn("flex flex-col items-start text-left p-6 border-none", className)}>
      {/* Icon */}
      <div className="mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" className="overflow-visible">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="-0.75%" stopColor="#E0B7B0"/>
              <stop offset="16.2%" stopColor="#B1786E"/>
              <stop offset="41.76%" stopColor="#704A44"/>
              <stop offset="67.47%" stopColor="#B1786E"/>
              <stop offset="95.96%" stopColor="#E0B7B0"/>
            </linearGradient>
          </defs>
          {isValidElement(icon) && cloneElement(icon, {
            fill: "none",
            stroke: `url(#${gradientId})`,
            strokeWidth: "2",
            className: "w-6 h-6"
          } as any)}
        </svg>
      </div>
      
      {/* Title */}
      <h3 
        className="mb-3 text-white"
        style={{
          fontFamily: 'var(--font-baskerville)',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '105%',
          fontFeatureSettings: '"liga" off, "clig" off'
        }}
      >
        {title}
      </h3>
      
      {/* Description */}
      <p 
        className="text-white"
        style={{
          fontFamily: 'var(--font-open-sans)',
          fontSize: '12px',
          lineHeight: '1.5'
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default ServiceCard