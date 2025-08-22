'use client'

import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/data/social'
import { COLORS, TRANSITIONS } from '@/lib/constants/theme'

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg'
  gap?: 'sm' | 'md' | 'lg'
  hoverColor?: string
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5 md:w-6 md:h-6',
  lg: 'w-6 h-6 md:w-7 md:h-7',
}

const gapClasses = {
  sm: 'gap-3',
  md: 'gap-6 md:gap-8 lg:gap-12',
  lg: 'gap-8 md:gap-10 lg:gap-16',
}

export default function SocialLinks({
  size = 'md',
  gap = 'md',
  hoverColor = COLORS.pinkGold,
  orientation = 'horizontal',
  className = ''
}: SocialLinksProps) {
  const containerClasses = orientation === 'horizontal' ? 'flex' : 'flex flex-col'
  
  return (
    <div className={`${containerClasses} ${gapClasses[gap]} ${className}`}>
      {SOCIAL_LINKS.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} cursor-pointer stroke-1 transition-colors duration-300`}
          style={{ 
            color: 'currentColor',
            transition: TRANSITIONS.base
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = hoverColor
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'currentColor'
          }}
          aria-label={social.label}
        >
          <social.icon className="w-full h-full" />
        </Link>
      ))}
    </div>
  )
}