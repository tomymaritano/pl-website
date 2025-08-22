import { cn } from '@/lib/utils'

interface GradientLineProps {
  direction?: 'left' | 'right'
  width?: number
  className?: string
}

const GradientLine = ({ direction = 'right', width = 438, className }: GradientLineProps) => {
  const gradientDirection = direction === 'left' 
    ? 'bg-gradient-to-l from-transparent via-[#B1786E] via-[#704A44] via-[#B1786E] to-[#E0B7B0]'
    : 'bg-gradient-to-r from-transparent via-[#B1786E] via-[#704A44] via-[#B1786E] to-[#E0B7B0]'

  return (
    <div 
      className={cn(`h-[2px] ${gradientDirection} w-24 md:w-48 lg:w-[438px]`, className)}
    />
  )
}

export default GradientLine